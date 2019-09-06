// use dotenv package require .env file which contains all keys
require("dotenv").config();

// get API keys from .env
const spotifyID = process.env.SPOTIFY_ID;
const spotifySecret = process.env.SPOTIFY_SECRET;
const omdbKey = process.env.OMDB_APIKEY;
const bitKey = process.env.BIT_APP_ID;
// test API keys if exported succesffully
// console.log(spotifyID);
// console.log(spotifySecret);
// console.log(omdbKey);
// console.log(bitKey);

//OR we can test and see the content of .env
// const packageDotenv = require("dotenv").config();
// console.log(packageDotenv);

const axios = require("axios");
const moment = require("moment");
const Spotify = require("node-spotify-api");
const fs = require("fs");

// take use command and input
let userInput = process.argv[2];
let userQuery = process.argv.slice(3).join(" ");

// Test
// console.log(userInput);
// console.log(userQuery);

// This functions takes user commands line input e.g movie-this Thor
const commandLineInputs = () => {
  switch (userInput) {
    case "movie-this":
      movieThis();
      break;
    default:
      console.log(
        "Pleae follow instruction on how to properly querry Liri App"
      );
  }
};

const movieThis = () => {
  var axiosQueryURL = `http://www.omdbapi.com/?t=${userQuery}&y=&plot=short&apikey=${omdbKey}`;
  axios
    .get(axiosQueryURL)
    .then(response => {
      // handle success
      // console.log(response); // get all reponse and dig in
      // console.log(response.data); // get specific object called data and dig in for relevant info
      // console.log(response.data.Title); // dig in for specifics
      let movieTitle = response.data.Title;
      let movieYear = response.data.Year;
      let movieIMDBRating = response.data.Rated;
      let movieRottenTomatoesRating = response.data.Ratings[1].Value; // !!! Pay attention to this object structure, good learning tip
      let movieCountryProduced = response.data.Country;
      let movieLanguage = response.data.Language;
      let moviePlot = response.data.Plot;
      let movieActors = response.data.Actors;

      // dipslay message to the user when query intitiated
      console.log(`\n\t\t=> YOU SEARCHED FOR MOVIE "${userQuery}"`);
      console.log(`\t\t=> LIRI HAS FOUND FOR YOU THE FOLLOWING RESULTS:\n`)
      console.log(`Movie Title:_____________  ${movieTitle}`);
      console.log(`Year:____________________  ${movieYear}`);
      console.log(`IMDB Rating:_____________  ${movieIMDBRating}`);
      console.log(`Rotten Tomatoes Rating:__  ${movieRottenTomatoesRating}`);
      console.log(`Country Produced:________  ${movieCountryProduced}`);
      console.log(`Language:________________  ${movieLanguage}`);
      console.log(`Plot:____________________  ${moviePlot}`);
      console.log(`Actors:__________________  ${movieActors}`);

      // message the user the following information when searh for movie topic inititiated
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
};

// RUN APP HERE 
commandLineInputs();
