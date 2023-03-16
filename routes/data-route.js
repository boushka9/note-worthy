// Dependencies for routing middleware
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, readAndAppend, writeToFile } = require('../lib/notesFunctions')



  

module.exports = router;