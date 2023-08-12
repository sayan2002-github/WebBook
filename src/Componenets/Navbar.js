import React, { useState, useEffect } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faDownload, faCircleInfo, faHouse, faClock } from '@fortawesome/free-solid-svg-icons'
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import logo from './logo.png'
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover'
import Clock from './Clock';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Navbar() {
    const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [html] = useLocalStorage('html', '')
    const [css] = useLocalStorage('css', '')
    const [js] = useLocalStorage('js', '')
    const [expDoc, setExpDoc] = useState('')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
    let dayss = d.getDate() + " " +  Months[d.getMonth()] + "' " + d.getFullYear();

    async function save() {
        let stream = await fileHandle.createWritable();
        await stream.write(expDoc);
        await stream.close();
    }

    async function saveAs() {
        try {
            fileHandle = await window.showSaveFilePicker();
            save();
        } catch (err) {
            if (err.name !== 'AbortError') {
                console.error(err.name, err.message);
                return;
            }
        }
    }

    const popover = (
        <Popover id="popover-basic" className='clock-body'>
            <Popover.Header as="h3" className='text-end'>{dayss}</Popover.Header>
            <Popover.Body>
                <Clock />
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

                <div>
                    <OverlayTrigger trigger="click" placement="left" overlay={popover}>
                        <Button variant="btn btn-dark">
                            <FontAwesomeIcon icon={faClock} />
                        </Button>
                    </OverlayTrigger>

                    <OverlayTrigger delay={{ hide: 450, show: 300 }} overlay={(props) => (
                        <Tooltip {...props}> Settings </Tooltip>
                    )} placement="bottom">
                        <Button variant="btn btn-dark" onClick={handleShow}>
                        <FontAwesomeIcon icon={faGear} />
                        </Button>
                    </OverlayTrigger>
                </div>

                <Offcanvas show={show} onHide={handleClose} className="text-bg-dark">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasDarkLabel">WebBook Settings</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="offcanvas-body off-button">
                            <Link className="nav-link" to="/" style={{ paddingLeft: '5px' }}><FontAwesomeIcon icon={faHouse} />  Home Page</Link>
                        </div>
                        <div className="offcanvas-body off-button">
                            <Link className="nav-link" to="/about" style={{ paddingLeft: '5px' }}><FontAwesomeIcon icon={faCircleInfo} />  About WebBook</Link>
                        </div>
                        <div className="offcanvas-body off-button">
                            <Link className="nav-link" to="/calc" style={{ paddingLeft: '5px' }}><FontAwesomeIcon icon={faCircleInfo} />  Calculator</Link>
                        </div>
                        <div className="offcanvas-body off-button">
                            <button className='expand-compress-btn' onClick={saveAs}><FontAwesomeIcon icon={faDownload} /> Export Files</button>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </nav>
    )
}
