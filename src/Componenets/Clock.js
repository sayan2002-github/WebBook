import React, { useState, useEffect } from 'react';
import './Clock.css';

export default function Clock() {
    const [secondRotation, setSecondRotation] = useState(0);
    const [minuteRotation, setMinuteRotation] = useState(0);
    const [hourRotation, setHourRotation] = useState(0);

    useEffect(() => {
        const timerID = setInterval(clockTick, 1000);

        return function cleanUp() {
            clearInterval(timerID);
        };
    }, []);

    function clockTick() {
        const date = new Date();
        const seconds = (date.getSeconds() / 60) * 360;
        const minutes = ((date.getMinutes() + seconds / 360) / 60) * 360;
        const hours = ((date.getHours() + minutes / 360) / 12) * 360;

        setSecondRotation(seconds);
        setMinuteRotation(minutes);
        setHourRotation(hours);
    }

    const handStyle = {
        '--rotate': `${secondRotation}deg`
    };

    return (
        <div className='con-clock'>
            <div className='clock'>
                {/* Other clock elements here */}
                <div className='number' style={{ "--n": "1" }}><b>1</b></div>
                <div className='number' style={{ "--n": "2" }}><b>2</b></div>
                <div className='number' style={{ "--n": "3" }}><b>3</b></div>
                <div className='number' style={{ "--n": "4" }}><b>4</b></div>
                <div className='number' style={{ "--n": "5" }}><b>5</b></div>
                <div className='number' style={{ "--n": "6" }}><b>6</b></div>
                <div className='number' style={{ "--n": "7" }}><b>7</b></div>
                <div className='number' style={{ "--n": "8" }}><b>8</b></div>
                <div className='number' style={{ "--n": "9" }}><b>9</b></div>
                <div className='number' style={{ "--n": "10" }}><b>10</b></div>
                <div className='number' style={{ "--n": "11" }}><b>11</b></div>
                <div className='number' style={{ "--n": "12" }}><b>12</b></div>

                <div className='hour-hand' style={{ '--rotate': `${hourRotation}deg` }}></div>
                <div className='minute-hand' style={{ '--rotate': `${minuteRotation}deg` }}></div>
                <div className='second-hand' style={handStyle}></div>
                <div className='center-dot'></div>
            </div>
        </div>
    );
}
