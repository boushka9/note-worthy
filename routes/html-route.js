// Dependencies for routing middleware
const express = require('express');
const router = express.Router();
const path = require('path');

//write before '*' bc router will stop reading the routes that follow if the first one matches
// when the route reads /notes in the URL, render file notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html' ))
})

// define the home page route - anything that's not '/notes' redirects to homepage 
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router