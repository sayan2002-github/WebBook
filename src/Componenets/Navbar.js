import React, { useState, useEffect } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faDownload, faCircleInfo, faHouse, faClock, faGreaterThan, faCalculator, faList, faQuestion, faRightFromBracket, faCircleUser, faUser } from '@fortawesome/free-solid-svg-icons';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import logo from './logo.png'
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover'
import "./SmartWatch.css"

export default function Navbar({ setProgress }) {
    const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [html] = useLocalStorage('html', '')
    const [css] = useLocalStorage('css', '')
    const [js] = useLocalStorage('js', '')
    const [expDoc, setExpDoc] = useState('');

    useEffect(() => {
        setExpDoc(`
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>${css}</style>
            <title>Document</title>
        </head>
        <body>
            ${html}
            <script>${js}</script>
        </body>
        </html>`
        )

    }, [html, css, js, expDoc]);

    let fileHandle;
    let d = new Date();
    let dayss = d.getDate() + " " + Months[d.getMonth()] + ", " + d.getFullYear();

    async function save() {
        let stream = await fileHandle.createWritable();
        await stream.write(expDoc);
        await stream.close();
    }

    async function saveAs() {
        try {
            setProgress(10);
            fileHandle = await window.showSaveFilePicker();
            save();
        } catch (err) {
            if (err.name !== 'AbortError') {
                console.error(err.name, err.message);
                return;
            }
        }
        setProgress(100);
    }

    const [time, setTime] = useState('');

    function formatTime(val) {
        if (val < 10) {
            return '0';
        } else {
            return '';
        }
    }

    useEffect(() => {
        const timerID = setInterval(
            () => tick(), 1000)

        return function cleanUp() {
            clearInterval(timerID)
        }
    })

    function tick() {
        const d = new Date();
        const h = d.getHours();
        const m = d.getMinutes();
        const s = d.getSeconds();

        setTime(formatTime(h) + h + ':' + formatTime(m) + m + ':' + formatTime(s) + s)
    }

    const popover = (
        <Popover id="popover-basic" className='clock-body'>
            <Popover.Header as="h3" className='text-end popover-header-clock'>{dayss}</Popover.Header>
            <Popover.Body>
                <div className='clock'>
                    <div className='screen'></div>
                    <h1 className='time text-center'>{time}</h1>
                </div>
            </Popover.Body>
        </Popover>
    );

    const openSettings = (
        <Popover id="popover-basic" className='settings-body'>
            <Popover.Header as="h3">Menus</Popover.Header>
            <Popover.Body>
                <div className="offcanvas-body off-button">
                    <Link className="nav-link" to="/" style={{ paddingLeft: '5px' }}><FontAwesomeIcon icon={faHouse} />&nbsp; Home Page&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &ensp;<FontAwesomeIcon icon={faGreaterThan} /> </Link>
                </div>
                <div className="offcanvas-body off-button">
                    <Link className="nav-link" to="/about" style={{ paddingLeft: '5px' }}><FontAwesomeIcon icon={faCircleInfo} />&nbsp; About WebBook &emsp; &emsp; &emsp; &emsp; &ensp; <FontAwesomeIcon icon={faGreaterThan} /></Link>
                </div>
                <div className="offcanvas-body off-button">
                    <Link className="nav-link" to="/calc" style={{ paddingLeft: '5px' }}><FontAwesomeIcon icon={faCalculator} />&nbsp; Calculator &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; <FontAwesomeIcon icon={faGreaterThan} /></Link>
                </div>
                <div className="offcanvas-body off-button">
                    <button className='expand-compress-btn' onClick={saveAs}><FontAwesomeIcon icon={faDownload} />&nbsp; Export Files &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &ensp;<FontAwesomeIcon icon={faGreaterThan} className='text-end' /></button>
                </div>
            </Popover.Body>
        </Popover>
    );

    const openProfile = (
        <Popover id="popover-basic" className='settings-body'>
            <Popover.Header as="h3"><FontAwesomeIcon icon={faCircleUser} /> &ensp; Profile Name</Popover.Header>
            <Popover.Body>
                <div className="offcanvas-body off-button">
                    <Link className="nav-link" to="#" style={{ paddingLeft: '5px' }}><FontAwesomeIcon icon={faGear} />&nbsp; Setting & Appearance &emsp; &emsp; &ensp; <FontAwesomeIcon icon={faGreaterThan} /></Link>
                </div>
                <div className="offcanvas-body off-button">
                    <Link className="nav-link" to="#" style={{ paddingLeft: '5px' }}><FontAwesomeIcon icon={faQuestion} />&nbsp; Help & support&emsp; &emsp; &emsp; &emsp; &emsp; &nbsp; <FontAwesomeIcon icon={faGreaterThan} /></Link>
                </div>
                <div className="offcanvas-body off-button">
                    <Link className="nav-link" to="#" style={{ paddingLeft: '5px' }}><FontAwesomeIcon icon={faRightFromBracket} />&nbsp; Logout&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; <FontAwesomeIcon icon={faGreaterThan} /></Link>
                </div>
            </Popover.Body>
        </Popover>
    );

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex justify-content-center align-item-center" to="/">
                    <img src={logo} alt="Logo" width="30" height="28" className="d-inline-block align-text-top mx-1" />
                    WebBook
                </Link>

                {/* <div className="navbar-brand d-flex justify-content-between align-item-center nav-mid">
                    <Link className="px-5 active-link" to="/">
                        <FontAwesomeIcon icon={faHouse} />
                    </Link>
                    <Link className="px-5" to="/about">
                        <FontAwesomeIcon icon={faCircleInfo} />
                    </Link>
                    <Link className="px-5" to="#">
                        <FontAwesomeIcon icon={faPhone} />
                    </Link>
                </div> */}

                <div>
                    <OverlayTrigger trigger="click" rootClose placement="left" overlay={popover}>
                        <Button variant="btn btn-dark" className='mx-1 px-2 nav-btn-r'>
                            <FontAwesomeIcon icon={faClock} />
                        </Button>
                    </OverlayTrigger>

                    <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={openSettings}>
                        <Button variant="btn btn-dark" className='mx-1 px-2 nav-btn-r'>
                            <FontAwesomeIcon icon={faList} />
                        </Button>
                    </OverlayTrigger>

                    <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={openProfile
                    }>
                        <Button variant="btn btn-dark" className='mx-1 px-2 nav-btn-r'>
                            <FontAwesomeIcon icon={faUser} />
                        </Button>
                    </OverlayTrigger>
                </div>
            </div>
        </nav>
    )
}
