import React, { useContext, useState } from 'react'
import noteContext from '../Context/Notes/NoteContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({id: "", title:"", tags:"", description:""});

    const handleClickAdd = (e)=>{
        e.preventDefault();
        addNote(note._id, note.title, note.description, note.tags);
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name] : e.target.value})
    }

    return (
        <div className='container'>
            <form>
                <div className="mb-3">
                    <label htmlFor="TextInput1" className="form-label">Enter Title</label>
                    <input type="text" className="form-control" id="TextInput1" name='title' placeholder='Title should be atleast 3 characters long'  onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="TextInput2" className="form-label">Enter Tag</label>
                    <input type="text" className="form-control" id="TextInput2" name='tags' placeholder='example@Dinner...'  onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="TextInput3" className="form-label">Enter Description</label>
                    <textarea className="form-control" name='description' id="TextInput3" placeholder='Description should be atleast 5 characters long' onChange={onChange}></textarea>
                </div>
                <button type="submit" className="btn btn-success px-3" onClick={handleClickAdd}><FontAwesomeIcon icon={faPlus} /> Add </button>
            </form>
        </div>
    )
}

export default AddNote