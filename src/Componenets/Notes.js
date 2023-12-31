import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../Context/Notes/NoteContext';
import NoteItems from './NoteItems';

export default function Notes(props) {

    useEffect(() => {
        fetchAllNotes();
        // eslint-disable-next-line
    }, []);

    const context = useContext(noteContext);
    const { notes, fetchAllNotes, editNote } = context;
    const [note, setNote] = useState({ id: "", etitle: "", etags: "", edescription: "" });
    const ref = useRef(null);
    const refClose = useRef(null);

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, etags: currentNote.tags, edescription: currentNote.description })
    }

    const handleClickUpdate = () => {
        editNote(note.id, note.etitle, note.edescription, note.etags);
        props.showAlert('Note Updated Successfully', 'success')
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div className='row keep-note-footer'>
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Edit Note
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title fs-5" id="staticBackdropLabel">Edit Note</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className='modal-body' onSubmit={handleClickUpdate}>
                            <div className="mb-3">
                                <label htmlFor="TextInput1" className="form-label">Title</label>
                                <input type="text" className="form-control" id="TextInput1" name='etitle' value={note.etitle} placeholder='Title should be atleast 3 characters long' onChange={onChange} minLength={3} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="TextInput2" className="form-label">Tag</label>
                                <input type="text" className="form-control" id="TextInput2" name='etags' value={note.etags} placeholder='example@Dinner...' onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="TextInput3" className="form-label">Description</label>
                                <textarea className="form-control" name='edescription' value={note.edescription} id="TextInput3" placeholder='Description should be atleast 5 characters long' onChange={onChange} minLength={5} required></textarea>
                            </div>
                            <div className="modal-footer">
                                <button type="button" ref={refClose} className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-success">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <h2 className='text-center border-bottom border-5 p-2'>Your Notes</h2>
            <div className='container'>{notes.length === 0 && 'No notes to display'}</div>
            {notes.map((note) => {
                return <NoteItems key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert} />
            })}
        </div>
    )
}
