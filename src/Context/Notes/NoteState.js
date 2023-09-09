import NoteContext from './NoteContext';
import React, { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const allNotes = [];

    const [notes, setNotes] = useState(allNotes);

    // Fetch all notes api
    const fetchAllNotes = async () => {
        // API call
        const response = await fetch(`${host}/api/notes/fetchnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkMjY5MGI2NzFhZGJjMjE1OWMxNmU2In0sImlhdCI6MTY5MTUxMTA4MX0.rOotfhgPHhujOjh1yZcJWIwTAxdcyzx93j31b8FpU68"
            }
        });

        const json = await response.json();
        setNotes(json);
    }

    // Add note api
    const addNote = async (id, title, description, tags) => {
        // API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkMjY5MGI2NzFhZGJjMjE1OWMxNmU2In0sImlhdCI6MTY5MTUxMTA4MX0.rOotfhgPHhujOjh1yZcJWIwTAxdcyzx93j31b8FpU68"
            },
            body: JSON.stringify({title, description, tags})
        });
        const json = await response.json();
        console.log(json);

        const note = {
            "_id": id,
            "user": "64d2690b671adbc2159c16e6",
            "title": title,
            "description": description,
            "tags": tags,
            "dateStamp": "2023-08-08T18:06:41.420Z",
            "__v": 0
        };

        setNotes(notes.concat(note));
    }

    // Delete note api
    const deleteNote = async (id) => {
        // API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkMjY5MGI2NzFhZGJjMjE1OWMxNmU2In0sImlhdCI6MTY5MTUxMTA4MX0.rOotfhgPHhujOjh1yZcJWIwTAxdcyzx93j31b8FpU68"
            }
        });
        const json = await response.json();
        console.log(json);

        const newNote = notes.filter((note) => { return note._id !== id });
        setNotes(newNote);
    }

    // Update note api
    const editNote = async (id, title, description, tags) => {
        // API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkMjY5MGI2NzFhZGJjMjE1OWMxNmU2In0sImlhdCI6MTY5MTUxMTA4MX0.rOotfhgPHhujOjh1yZcJWIwTAxdcyzx93j31b8FpU68"
            },
            body: JSON.stringify({title, description, tags})
        });
        const json = await response.json();
        console.log(json);

        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tags = tags;
                break;
            }
        }
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, fetchAllNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;