import React, { useState, useEffect } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faDownload, faCircleInfo, faHouse } from '@fortawesome/free-solid-svg-icons'
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import logo from './logo.png'

export default function Navbar() {

    const [html] = useLocalStorage('html', '')
    const [css] = useLocalStorage('css', '')
    const [js] = useLocalStorage('js', '')
    const [expDoc, setExpDoc] = useState('')

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

    async function save(){
        let stream = await fileHandle.createWritable();
        await stream.write(expDoc);
        await stream.close();
    }

    async function saveAs(){
        fileHandle = await window.showSaveFilePicker();
        save();
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex justify-content-center align-item-center" to="/">
                    <img src={logo} alt="Logo" width="30" height="28" class="d-inline-block align-text-top mx-1"/>
                    WebBook
                </Link>

                <OverlayTrigger delay={{ hide: 450, show: 300 }} overlay={(props) => (
                    <Tooltip {...props}> Settings </Tooltip>
                )} placement="left">
                    <button className="btn btn-dark" data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample">
                        <FontAwesomeIcon icon={faGear} />
                    </button>
                </OverlayTrigger>

                <div className="offcanvas offcanvas-start show text-bg-dark" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkLabel">WebBook Settings</h5>
                        <button type="button" className="btn btn-close btn-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className='mt-3'>
                        <div className="offcanvas-body">
                            <Link className="nav-link" to="/" style={{paddingLeft: '5px'}}><FontAwesomeIcon icon={faHouse}/>  Home Page</Link>
                        </div>
                        <div className="offcanvas-body">
                            <Link className="nav-link" to="/about" style={{paddingLeft: '5px'}}><FontAwesomeIcon icon={faCircleInfo}/>  About WebBook</Link>
                        </div>
                        <div className="offcanvas-body">
                            <button className='expand-compress-btn' onClick={saveAs}><FontAwesomeIcon icon={faDownload} /> Export Files</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
