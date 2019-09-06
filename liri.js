// use dotenv package require .env file which contains all keys
require("dotenv").config();

// get API keys from .env
var spotifyID = process.env.SPOTIFY_ID;
var spotifySecret = process.env.SPOTIFY_SECRET;
var omdbKey = process.env.OMDB_APIKEY;
var bitKey = process.env.BIT_APP_ID;
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

var axiosQueryURL = `http://www.omdbapi.com/?t=${userQuery}&y=&plot=short&apikey=${omdbKey}`;
const movieThis = () => {
  axios
    .get(axiosQueryURL)
    .then(response = () => {
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
      console.log(`\n YOU SEARCHED FOR MOVIE =>  ${userQuery}`);
      console.log(`Movie Title: ${movieTitle}`);
      console.log(`Year: ${movieYear}`);
      console.log(`IMDB Rating: ${movieIMDBRating}`);
      console.log(`Rotten Tomatoes Rating: ${movieRottenTomatoesRating}`);
      console.log(`Country Produced: ${movieCountryProduced}`);
      console.log(`Language: ${movieLanguage}`);
      console.log(`Plot: ${moviePlot}`);
      console.log(`Actors: ${movieActors}`);
    
      // message the user the following information when searh for movie topic inititiated
    })
    .catch(error = () => {
      // handle error
      console.log(error);
    });
};

movieThis();
