// Dependencies
const express = require('express');
const path = require('path');

// Connect server.js to route files
const routeDirectory = require('./routes/index');
const apiRoute = require('./routes/data-route');

// Initiate express server
const app = express();

// Set PORT to user environment for launching on heroor to default 3001
const PORT = process.env.PORT || 4000;

// Parse incoming urlencoded/JSON form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Use routes for homepage and notespage
app.use(express.static(path.join(__dirname,'public')));
app.use('/api', apiRoute);
app.use('/', routeDirectory);


// GET Route for homepage 
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Listener to verify PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});