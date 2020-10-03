// DEPENDENCIES
const express = require('express');
const app = express();



// PORT
const port = 3000;

const missionsCtrl = require('./controllers/missionsController');


// Set View engine
app.set('view engine', 'ejs');


// Middleware
app.use(express.static(__dirname + '/public'));


// Home
app.get('/', (req, res) => {
  res.render('index');
});


// Routes
app.use('/missions', missionsCtrl);


// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;
