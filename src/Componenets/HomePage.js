import React, { useState, useEffect } from 'react'
import searchLogo from './images/search.png'
import rainLogo from './images/rain.png'
import humidLogo from './images/humidity.png'
import windLogo from './images/wind.png'
import cloudLogo from './images/clouds.png'
import clearLogo from './images/clear.png'
import drizzleLogo from './images/drizzle.png'
import mistLogo from './images/mist.png'
import calLogo from './images/cal-logo.png'
import editorLogo from './images/editor-logo.png'
import noteLogo from './images/note-logo.png'
import { Link, useNavigate } from 'react-router-dom';
import './css/HomePage.css'
import Clock from './Clock'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenClip, faCalculator, faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function HomePage({ setProgress }) {
    let navigate = useNavigate()
    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/')
        }
        setProgress(10);
        setProgress(100);
    }, [setProgress, navigate])

    const apiKey = "71fb475d6a7b3ac081efc39193200a8a";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const [weatherIcon, setWeatherIcon] = useState(rainLogo);

    async function checkWeather(cityName) {
        try {
            const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
            var data = await response.json();
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            if (data.weather[0].main === "Clouds") {
                setWeatherIcon(cloudLogo);
            } else if (data.weather[0].main === "Clear") {
                setWeatherIcon(clearLogo);
            } else if (data.weather[0].main === "Rain") {
                setWeatherIcon(rainLogo);
            } else if (data.weather[0].main === "Drizzle") {
                setWeatherIcon(drizzleLogo);
            } else if (data.weather[0].main === "Mist") {
                setWeatherIcon(mistLogo);
            }
            document.querySelector(".city").innerHTML = data.name;

        } catch (err) {
            document.querySelector(".temp").innerHTML = "Undefined";
            document.querySelector(".humidity").innerHTML = "0%";
            document.querySelector(".wind").innerHTML = "0.0 km/h";
        }

    }

    useEffect(() => {
        const searchBox = document.querySelector(".searchN input");
        const searchBtn = document.querySelector(".searchN button");

        searchBtn.addEventListener('click', () => {
            const searchBoxVal = searchBox.value;
            checkWeather(searchBoxVal);
        });

        // Clean up the event listener when the component unmounts
        return () => {
            searchBtn.removeEventListener('click', () => {
                const searchBoxVal = searchBox.value;
                checkWeather(searchBoxVal);
            });
        };
    }, []);

    window.onload = function () {
        const searchBox = document.querySelector(".searchN input");
        const searchBtn = document.querySelector(".searchN button");

        // checkWeather(searchBox.value);

        searchBtn.addEventListener('click', () => {
            const searchBoxVal = searchBox.value;
            checkWeather(searchBoxVal);
        })
    }

    const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let d = new Date();
    let day = d.getDay();
    let date = d.getDate() + " " + Months[d.getMonth()] + ", " + d.getFullYear();

    return (
        <div className='d-flex justify-content-center align-item-center flex-column'>
            <div className='home-container d-flex justify-content-between align-item-center my-10'>
                <div className="card cardN card1">
                    <div className='forecast'>
                        <img src={weatherIcon} alt="search" className='weather-icon' />
                        <h1 className='temp'>22°c</h1>
                        <h2 className='city'>Kolkata</h2>
                    </div>

                    <div className="card-body card-bodyN">
                        <div className="searchN">
                            <input type="text" placeholder="Enter city name" spellCheck="false" defaultValue="kolkata" />
                            <button><img src={searchLogo} alt="search"></img></button>
                        </div>
                        <div className='details'>
                            <div className='colW'>
                                <img src={humidLogo} alt="search" />
                                <div className='colW-text'>
                                    <p className='humidity'>50%</p>
                                    <p>Humidity</p>
                                </div>
                            </div>
                            <div className='colW'>
                                <img src={windLogo} alt="search" />
                                <div className='colW-text'>
                                    <p className='wind'>15 km/h</p>
                                    <p>Wind Speed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card cardN card2">
                    <div className="card-body card-bodyN">
                        <div className='timed'>
                            <Clock></Clock>
                        </div>
                        <h2 className='timed time-head'>{Days[day]}, {date}</h2>
                    </div>
                </div>
            </div>

            <div className='card-containers mt-20'>
                <div className="row">
                    <div className="col-sm-4 whole-cards">
                        <p className='card-headers'><FontAwesomeIcon icon={faPenClip} />&nbsp; Online Code Editor</p>
                        <div className="card cardE card3">
                            <img src={editorLogo} className="card-img-top" alt="..."></img>
                            <div className="card-body card-bodyE">
                                <h3 className="card-title card-titleE">Online Code Editor</h3>
                                <p className="card-text card-textE">
                                    This is an online platform that provide an embedded HTML, CSS and JavaScript Editor for frontend designers and web developers. Built your website and showcase it.</p>
                                <Link to="/home" className="btn btn-light">Open App</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 whole-cards">
                        <p className='card-headers'><FontAwesomeIcon icon={faCalculator} />&nbsp; Calculator App</p>
                        <div className="card cardE card4">
                            <img src={calLogo} className="card-img-top" alt="..."></img>
                            <div className="card-body card-bodyE">
                                <h3 className="card-title card-titleE">Calculator App</h3>
                                <p className="card-text card-textE">A calculator application where you can calculate your daily calculation and we also provide a scientific calculator for easy settlement, that you can seamlessly visit with one click. </p>
                                <Link to="/calc" className="btn btn-light">Open App</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 whole-cards">
                        <p className='card-headers'><FontAwesomeIcon icon={faLightbulb} />&nbsp; Keep Note's</p>
                        <div className="card cardE card5">
                            <img src={noteLogo} className="card-img-top" alt="..."></img>
                            <div className="card-body card-bodyE">
                                <h3 className="card-title card-titleE">Keep Notes'</h3>
                                <p className="card-text card-textE">An user-friendly application where you can keep your priceless notes in safe hand  in an online platform and can update or delete whenever you want as your wish!! </p>
                                <Link to="/keepnote" className="btn btn-light">Open App</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
