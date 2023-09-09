import React, { useState, useEffect } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faDownload, faCircleInfo, faHouse, faGreaterThan, faCalculator, faList, faQuestion, faCircleUser, faUser, faPenClip, faComment, faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import logo from './images/logo.png'
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover'
import "./css/SmartWatch.css"

export default function Navbar({ setProgress }) {
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

    const openSettings = (
        <Popover id="popover-basic" className='settings-body'>
            <Popover.Header as="h3">Menus</Popover.Header>
            <Popover.Body>
                <div className="offcanvas-body off-button">
                    <Link className="nav-link" to="/home" style={{ paddingLeft: '5px' }}><FontAwesomeIcon icon={faPenClip} />&nbsp; HTML Editor &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; <FontAwesomeIcon icon={faGreaterThan} /> </Link>
                </div>
                <div className="offcanvas-body off-button">
                    <Link className="nav-link" to="/calc" style={{ paddingLeft: '5px' }}><FontAwesomeIcon icon={faCalculator} />&nbsp; Calculator &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; <FontAwesomeIcon icon={faGreaterThan} /></Link>
                </div>
                <div className="offcanvas-body off-button">
                    <Link className="nav-link" to="/keepnote" style={{ paddingLeft: '5px' }}><FontAwesomeIcon icon={faComment} /> &nbsp; Keep Note's &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;<FontAwesomeIcon icon={faGreaterThan} /></Link>
                </div>
                <div className="offcanvas-body off-button">
                    <Link className="nav-link" to="#" style={{ paddingLeft: '5px' }}><FontAwesomeIcon icon={faNoteSticky} />&nbsp; Chat Application&emsp; &emsp; &emsp; &emsp; &emsp;<FontAwesomeIcon icon={faGreaterThan} /></Link>
                </div>
                <div className="offcanvas-body off-button">
                    <button className='expand-compress-btn' onClick={saveAs}><FontAwesomeIcon icon={faDownload} />&nbsp; Export As HTML &emsp; &emsp; &emsp; &emsp; &ensp; <FontAwesomeIcon icon={faGreaterThan} className='text-end' /></button>
                </div>
            </Popover.Body>
        </Popover>
    );

    const openProfile = (
        <Popover id="popover-basic" className='settings-body'>
            <Popover.Header as="h3"><FontAwesomeIcon icon={faCircleUser} /> &ensp; Profile Name</Popover.Header>
            <Popover.Body>
                <div className="offcanvas-body off-button">
                    <Link className="nav-link" to="/" style={{ paddingLeft: '5px' }}><FontAwesomeIcon icon={faHouse} />&nbsp; Goto HomePage&emsp; &emsp; &emsp; &emsp; &ensp; <FontAwesomeIcon icon={faGreaterThan} /></Link>
                </div>
                <div className="offcanvas-body off-button">
                    <Link className="nav-link" to="/about" style={{ paddingLeft: '5px' }}><FontAwesomeIcon icon={faCircleInfo} />&nbsp; About WebBook &emsp; &emsp; &emsp; &emsp; &ensp; <FontAwesomeIcon icon={faGreaterThan} /></Link>
                </div>
                <div className="offcanvas-body off-button">
                    <Link className="nav-link" to="#" style={{ paddingLeft: '5px' }}><FontAwesomeIcon icon={faGear} />&nbsp; Setting & Appearance &emsp; &emsp; &ensp; <FontAwesomeIcon icon={faGreaterThan} /></Link>
                </div>
                <div className="offcanvas-body off-button">
                    <Link className="nav-link" to="/contact" style={{ paddingLeft: '5px' }}><FontAwesomeIcon icon={faQuestion} />&nbsp; Help & support&emsp; &emsp; &emsp; &emsp; &emsp; &nbsp; <FontAwesomeIcon icon={faGreaterThan} /></Link>
                </div>
                {/* <div className="offcanvas-body off-button">
                    <Link className="nav-link" to="#" style={{ paddingLeft: '5px' }}><FontAwesomeIcon icon={faRightFromBracket} />&nbsp; Logout&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; <FontAwesomeIcon icon={faGreaterThan} /></Link>
                </div> */}
            </Popover.Body>
        </Popover>
    );

    return (
        <nav className="navbar navbar-dark" style={{backgroundColor: "#0e0d0dd4"}}>
            <div className="container-fluid">
                <Link className="navbar-brand d-flex justify-content-center align-item-center" to="/">
                    <img src={logo} alt="Logo" width="30" height="28" className="d-inline-block align-text-top mx-1" />
                    WebBook
                </Link>

                <div>
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
