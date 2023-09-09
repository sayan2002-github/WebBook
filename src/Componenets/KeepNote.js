import React, { useEffect } from 'react'
import './css/KeepNote.css'
import Notes from './Notes'
import AddNote from './AddNote';

export default function KeepNote({ setProgress }) {
    useEffect(() => {
        setProgress(10);
        setProgress(100);
    }, [setProgress])

    return (
        <div className='note-body'>
            <AddNote />
            <div className='container-sm mt-5 keep-note-footer'>
                <Notes />
            </div>
        </div>
    )
}
