const express = require('express')
const router = express.Router()
const Notes = require('../models/Notes')
const { body, validationResult } = require('express-validator');
const getuser = require('../middlleware/getuser')

// localhost:5000/api/notes/fetchnotes --> get request to fetch all the notes   ..... Login required
router.get('/fetchnotes', getuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        res.status(500).send({ error });
    }
})

// localhost:5000/api/notes/addnote --> post request to add note  ..... Login required
router.post('/addnote', getuser, [
    body('title', 'Title must be atleast 3 characters long').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters long').isLength({ min: 5 }),
], async (req, res) => {
    try {
        // If there are any error, return bad request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { title, description, tags } = req.body;

        // Creating entry of a new note in Db
        const note = new Notes({
            user: req.user.id, title, description, tags
        });
        const savedNote = await note.save();

        res.send(savedNote);
    } catch (error) {
        res.status(500).send({ error });
    }
})

// localhost:5000/api/notes/updatenote --> put request to update note  ..... Login required
router.put('/updatenote/:id', getuser, async (req, res) => {
    try {
        const { title, description, tags } = req.body;

        // Creating a new note object
        const newnote = {};
        if(title){newnote.title = title}
        if(description){newnote.description = description}
        if(tags){newnote.tags = tags}
        
        // Find the note to be updated
        let note = await Notes.findById(req.params.id);
        if(!note){
            return res.status(404).send("Note not found");
        }

        // Checking whether the user of the note and logged in user are samr or not
        if(note.user.toString() != req.user.id){
            return res.status(401).send("Invalid user");
        }

        // Updating the new note
        note = await Notes.findByIdAndUpdate(req.params.id, {$set: newnote}, {new: true});

        res.send(note);
    } catch (error) {
        res.status(500).send({ error });
    }
})

// localhost:5000/api/notes/deletenote --> delete request to delete note  ..... Login required
router.delete('/deletenote/:id', getuser, async (req, res) => {
    try {
        // Find the note to be deleted
        let note = await Notes.findById(req.params.id);
        if(!note){
            return res.status(404).send("Note not found");
        }

        // Checking whether the user of the note and logged in user are same or not
        if(note.user.toString() != req.user.id){
            return res.status(401).send("Invalid user");
        }

        // Deleting the existing note
        note = await Notes.findByIdAndDelete(req.params.id);

        res.json({note});
    } catch (error) {
        res.status(500).send({ error });
    }
})

module.exports = router;