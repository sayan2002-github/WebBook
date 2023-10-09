import React, { useContext } from 'react'
import noteContext from '../Context/Notes/NoteContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function NoteItems(props) {
    const { note, updateNote } = props;
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const dateStamp = note.dateStamp
    const date = dateStamp.slice(0, 10)
    const time = dateStamp.slice(11, 16)

    return (
        <div className='col-md-4'>
            <div className="card text-bg-secondary mb-3 position-relative note-display">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <div className='d-flex justify-content-start'>
                        <span><FontAwesomeIcon icon={faPenToSquare} className='keep-note-btn upbtn me-2' onClick={(e) => { e.preventDefault(); updateNote(note) }} /></span>
                        <span><FontAwesomeIcon icon={faTrash} className='keep-note-btn delbtn ms-2' onClick={(e) => { e.preventDefault(); deleteNote(note._id); props.showAlert('Note Deleted Successfully!!', 'warning') }} /></span>
                        <span><small className='time-to-add'>Added in {date}, at {time}</small></span>
                    </div>
                </div>

                <span className="position-absolute top-0 end-0 translate-end px-2 pt-1 border border-light text-bg-danger keep-note-tag">
                    {/* <FontAwesomeIcon icon={faTag}/> */}
                    {note.tags}
                </span>
            </div>
        </div>
    )
}
