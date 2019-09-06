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
let userQuery = process.argv.slice(2).join(" ");

// Test
// console.log(userInput);
// console.log(userQuery);

var axiosQueryURL = `http://www.omdbapi.com/?t=${userQuery}&y=&plot=short&apikey=${omdbKey}`;

const movieThis = () => {
  axios
    .get(axiosQueryURL)
    .then(response => {
      // handle success
      console.log(response);
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
};

// movieThis();
