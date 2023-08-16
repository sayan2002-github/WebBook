import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/closebrackets'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

export default function Editor(props) {
    const { language, displayName, onChange, value } = props;

    const [open, setOpen] = useState(true)
    const [eMode, setEMode] = useState('material')

    function handleChange(editor, data, value) {
        onChange(value);
    }

    return (
        <div className={`editor-container ${open ? '' : 'collapsed'} d-flex flex-column`}>
            <div className='editor-title d-flex justify-content-between align-item-center'>
                <h3>{displayName}</h3>
                <div className='rswitches d-flex justify-content-center align-item-center'>
                    <OverlayTrigger delay={{ hide: 450, show: 300 }} overlay={(props) => (
                    <Tooltip {...props}> {eMode === 'material' ? 'Change to light mode!!' : 'Change to dark mode!!'} </Tooltip>
                    )} placement="bottom">
                        <button type='button' onClick={() => setEMode(eMode === 'material' ? 'light' : 'material')} className='expand-compress-btn p-2' data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">
                            <FontAwesomeIcon icon={eMode === 'material' ? faSun : faMoon} />
                        </button>
                    </OverlayTrigger>

                    <OverlayTrigger delay={{ hide: 450, show: 300 }} overlay={(props) => (
                    <Tooltip {...props}> {open ? 'Compress' : 'Expand'} </Tooltip>
                    )} placement="bottom">
                        <button onClick={() => setOpen(prevOpen => !prevOpen)} type='button' className='expand-compress-btn p-2'>
                            <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
                        </button>
                    </OverlayTrigger>
                </div>
            </div>

            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className='code-mirror-wrapper'
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    indentUnit: 4,
                    theme: eMode,
                    autoCloseTags: true,
                    autoCloseBrackets: true,
                }}
            />
        </div>
    )
}
