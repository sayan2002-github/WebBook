import React, { useContext, useState } from 'react'
import noteContext from '../Context/Notes/NoteContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({title:"", tags:"", description:""});

    const handleClickAdd = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tags);
        setNote({description: "", title: "", tags: ""});
        props.showAlert('Note added successfully!!', 'success')
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name] : e.target.value})
    }

    return (
        <div className='container'>
            <form>
                <div className="mb-3">
                    <label htmlFor="TextInput1" className="form-label">Enter Title</label>
                    <input type="text" className="form-control" id="TextInput1" name='title' value={note.title} placeholder='Title should be atleast 3 characters long'  onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="TextInput2" className="form-label">Enter Tag</label>
                    <input type="text" className="form-control" id="TextInput2" name='tags'  value={note.tags}placeholder='example@Dinner...'  onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="TextInput3" className="form-label">Enter Description</label>
                    <textarea className="form-control" name='description' value={note.description} id="TextInput3" placeholder='Description should be atleast 5 characters long' onChange={onChange} minLength={5} required></textarea>
                </div>
                <button type="submit" className="btn btn-success px-3" onClick={handleClickAdd}><FontAwesomeIcon icon={faPlus} /> Add </button>
            </form>
        </div>
    )
}

export default AddNote