// Dependencies for routing middleware
const express = require('express');
const router = express.Router();
// Dependacy to parse saved notes data
const saveNotes = require('../db/saveNotes');


// read the db.json file and return all saved notes as JSON.
router.get('/notes', function (req, res) {
    
})
  

 
// receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
router.post('/notes', (req, res) => {
    
})

  
// remove individual notes by id w 'uuid' 
router.delete('/notes', (req, res) => {
    
})
  

module.exports = router;