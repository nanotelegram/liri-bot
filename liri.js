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

// take user command and input from the command line
let userInput = process.argv[2]; //  take predefined commands e.g. movie-this
let userQuery = process.argv.slice(3).join(" "); // take seached topic e.g movie-this Thor

// Test
// console.log(userInput);
// console.log(userQuery);

// This functions takes user commands line input e.g movie-this Thor
const commandLineInputs = () => {
  switch (userInput) {
    case "concert-this":
      concertThis();
      break;
    case "spotify-this":
      spotifyThis();
      break;
    case "movie-this":
      movieThis();
      break;
    default:
      console.log("Pleae see instructions on how to querry Liri App");
  }
};

// const concertThis = () => {
//   var banddsInTownURL = `https://rest.bandsintown.com/artists/${userQuery}/events?app_id=${bitKey}`;
//   // use axios node package to make http request from Bands In Town
//   axios
//     .get(banddsInTownURL)
//     .then(function(res) {
//       // handle success
//       console.log("Connected To Bands In Town!");
//       console.log(res.length);
//     })
//     .catch(function(error) {
//       // handle error
//       console.log(error);
//     });
// };

const spotifyThis = () => {
  var spotify = new Spotify({
    id: spotifyID,
    secret: spotifySecret
  });

  spotify.search({ type: "track", query: userQuery, limit: 1 }, function(
    err,
    data
  ) {
    if (err) {
      return console.log("Error occurred: " + err);
    }
    // console.log(data); // original reponse
    // console.log(data.tracks); // get specific object called tracks - 20 reponses. limit to 1 in spotify.search parameters:
    // console.log(data.tracks.items); // dig in here for relevant info
    let arrayArtist = data.tracks.items;
    for (let i = 0; i < arrayArtist.length; i++) {
      // see what is inside the arrayArtist and store them in new variables
      // console.log(arrayArtist[i]);

      // retriev and store the data we need
      let artistName = arrayArtist[i].album.artists[0].name;
      let songName = arrayArtist[i].name;
      let songPreivewLink = arrayArtist[i].external_urls.spotify;
      let songAlbum = arrayArtist[i].album.name;

      // dipslay message to the user when query intitiated
      console.log(`\n\t\t=> YOU SEARCHED FOR SONG "${userQuery}" IN SPOTIFY`);
      console.log(`\t\t=> LIRI HAS FOUND FOR YOU THE FOLLOWING RESULTS:\n`);
      console.log(`Artist Name: ${artistName}`);
      console.log(`Songe Name: ${songName}`);
      console.log(`Spotify Link ${songPreivewLink}`);
      console.log(`Song Album ${songAlbum}\n`);
    }
  });
};

const movieThis = () => {
  var axiosQueryURL = `http://www.omdbapi.com/?t=${userQuery}&y=&plot=short&apikey=${omdbKey}`;
  // use axios node package to make http request from AMDB
  // note: axios atomtically transforms for JSON data
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
      console.log(`\t\t=> LIRI HAS FOUND FOR YOU THE FOLLOWING RESULTS:\n`);
      console.log(`Movie Title:_____________  ${movieTitle}`);
      console.log(`Year:____________________  ${movieYear}`);
      console.log(`IMDB Rating:_____________  ${movieIMDBRating}`);
      console.log(`Rotten Tomatoes Rating:__  ${movieRottenTomatoesRating}`);
      console.log(`Country Produced:________  ${movieCountryProduced}`);
      console.log(`Language:________________  ${movieLanguage}`);
      console.log(`Plot:____________________  ${moviePlot}`);
      console.log(`Actors:__________________  ${movieActors}`);
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
};

// RUN APP HERE
commandLineInputs();
