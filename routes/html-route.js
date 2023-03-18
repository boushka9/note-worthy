// Dependencies for routing middleware
const express = require('express')
const router = express.Router()



// define the home page route - EXAMPLE COPPIED FROM EXPRESS DOCS
router.get('/', (req, res) => {
  res.send('Example home page')
})





module.exports = router