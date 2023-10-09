import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faCircleInfo, faHouse, faGreaterThan, faCalculator, faList, faQuestion, faCircleUser, faUser, faPenClip, faLightbulb, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from './images/logo.png'
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover'
import "./css/SmartWatch.css"

export default function Navbar() {
    let navigate = useNavigate();
    const userName = localStorage.getItem('userName');
    
    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('userName')
        navigate('/')
    }

    const openSettings = (
        <Popover id="popover-basic" className='settings-body'>
            <Popover.Header as="h3">Menus</Popover.Header>
            <Popover.Body>
                <div className="offcanvas-body off-button">
                    <Link className="nav-link d-flex justify-content-between" to="/home" style={{ paddingLeft: '5px' }}>
                        <span><FontAwesomeIcon icon={faPenClip} />&nbsp; Online Code Editor</span>
                        <span><FontAwesomeIcon icon={faGreaterThan} /></span>
                    </Link>
                </div>
                <div className="offcanvas-body off-button">
                    <Link className="nav-link d-flex justify-content-between" to="/calc" style={{ paddingLeft: '5px' }}>
                        <span><FontAwesomeIcon icon={faCalculator} />&nbsp; Calculator</span> 
                        <span><FontAwesomeIcon icon={faGreaterThan} /></span>
                    </Link>
                </div>
                <div className="offcanvas-body off-button">
                    <Link className="nav-link d-flex justify-content-between" to="/keepnote" style={{ paddingLeft: '5px' }}>
                        <span><FontAwesomeIcon icon={faLightbulb} />&nbsp; Keep Note's</span> 
                        <span><FontAwesomeIcon icon={faGreaterThan} /></span>
                    </Link>
                </div>
            </Popover.Body>
        </Popover>
    );

    const openProfile = (
        <Popover id="popover-basic" className='settings-body'>
            <Popover.Header as="h3"><FontAwesomeIcon icon={faCircleUser} /> &ensp; {userName}</Popover.Header>
            <Popover.Body>
                <div className="offcanvas-body off-button">
                    <Link className="nav-link d-flex justify-content-between" to="/homepage" style={{ paddingLeft: '5px' }}>
                        <span><FontAwesomeIcon icon={faHouse} />&nbsp; Goto homepage</span>
                        <span><FontAwesomeIcon icon={faGreaterThan} /></span>
                    </Link>
                </div>
                <div className="offcanvas-body off-button">
                    <Link className="nav-link d-flex justify-content-between" to="/about" style={{ paddingLeft: '5px' }}>
                        <span><FontAwesomeIcon icon={faCircleInfo} />&nbsp; About WebBook </span>
                        <span><FontAwesomeIcon icon={faGreaterThan} /></span>
                    </Link>
                </div>
                <div className="offcanvas-body off-button">
                    <Link className="nav-link d-flex justify-content-between" to="#" style={{ paddingLeft: '5px' }}>
                        <span><FontAwesomeIcon icon={faGear} />&nbsp; Setting & Appearance</span>
                        <span><FontAwesomeIcon icon={faGreaterThan} /></span>
                    </Link>
                </div>
                <div className="offcanvas-body off-button">
                    <Link className="nav-link d-flex justify-content-between" to="/contact" style={{ paddingLeft: '5px' }}>
                        <span><FontAwesomeIcon icon={faQuestion} />&nbsp; Help & support</span>
                        <span><FontAwesomeIcon icon={faGreaterThan} /></span>
                    </Link>
                </div>
                <div className="offcanvas-body off-button">
                    <button className="expand-compress-btn d-flex justify-content-between" onClick={handleLogout} style={{ paddingLeft: '5px', width: '100%' }}>
                        <span><FontAwesomeIcon icon={faRightFromBracket} />&nbsp; Logout</span>
                        <span><FontAwesomeIcon icon={faGreaterThan} /></span>
                    </button>
                </div>
            </Popover.Body>
        </Popover>
    );

    return (
        <nav className="navbar navbar-dark" style={{ backgroundColor: "#0e0d0dd4" }}>
            <div className="container-fluid">
                <Link className="navbar-brand d-flex justify-content-center align-item-center" to="/homepage">
                    <img src={logo} alt="Logo" width="30" height="28" className="d-inline-block align-text-top mx-1" />
                    WebBook
                </Link>

                
                {localStorage.getItem('token') && <div>
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
                </div>}
            </div>
        </nav>
    )
}
