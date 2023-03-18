// Dependencies for routing middleware
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAllNotes, writeAllNotes, readAndAdd } = require('../lib/notesFunctions')


// Render already saved notes on page load. Read the db.json file and return as valid JSON obj.
router.get('/notes', function (req, res) {
    readAllNotes('./db/db.json')
      .then((notes) => res.json(JSON.parse(notes)))
})
  
// Display specific note by id
router.get('/notes:id', (req, res) => {
     const noteId = req.params.id;
     readAllNotes('./db/db.json')
        .then((notes) => JSON.parse(notes))
        .then((json) => {
            const result = json.filter((note) => note.id === noteId) 
            return res.json(result);
        })
})

router.post('/notes', (req, res) => {
    const { title, text } = req.body

    const newNote = {
        title,
        text,
        id: uuidv4()
    };

    readAndAdd(newNote, './db/db.json')

    res.json(newNote);

    console.log(newNote);

})
  
// remove individual notes by id w 'uuid' 
router.delete('/notes/:id', (req, res) => {
    console.log('delete')
    const noteId = req.params.id;
    readAllNotes('./db/db.json')
        .then((notes) => JSON.parse(notes))
        .then((json) => {
            const result = json.filter((note) => note.id !== noteId)

            writeAllNotes('./db/db.json', result);
            
            res.json({message: 'Success'})
        })
})
  

module.exports = router;