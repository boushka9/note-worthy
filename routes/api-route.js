// Dependencies for routing middleware
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, readAndAppend, writeToFile } = require('../lib/notesFunctions')


// Get request to render saved notes on page loadread the db.json file and return all saved notes as JSON.
router.get('/notes', function (req, res) {
    readFromFile('./db/db.json')
      .then((data) => res.json(JSON.parse(data)))
})
  
// get route for specific note by id
router.get('/notes:id', (req, res) => {
     const noteId = req.params.id;
     readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((note) => note.id === noteId) 
            return res.json(result);
        })
})

router.post('/notes', (req, res) => {
    const { title, text } = req.body

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4()
        };

        readAndAppend(newNote, './db/db.json');

        console.log(newNote);
    }
})
  
// remove individual notes by id w 'uuid' 
router.delete('/notes:id', (req, res) => {
    const noteId = req.params.id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((note) => note.id !== noteId)

            writeToFile('./db/db.json', result);

            
        })
})
  

module.exports = router;