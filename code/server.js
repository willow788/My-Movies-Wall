const express = require('express');
//loading the express module

const path = require('path')
// loading the path module

const app = express();
//creating the express application

const port = 3000;
// setting the port number of the server

// THE MOVIES DATA AND THEIR POSTERS
const movies = require('./movies.json');

// Serve local poster images
app.use('/imgs', express.static(path.join(__dirname, 'imgs')));

// Serve the main page
app.get('/', (_req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

//defining the get api endpoint to fetch the movies data
app.get('/api/movies', (_req, res) => {

	res.json(movies);
	//sending the movies data as a response in json format whenever a get request is made to /api/movies endpoint

});


//defining the server to listen to the port 3000
if (require.main === module) {
  app.listen(port, () => {
    console.log("server running on http://localhost:" + port);
  });
}

module.exports = { app, movies };
//bye!
