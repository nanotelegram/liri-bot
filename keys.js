// console.log('This is loaded');

// exports.spotify  = {
//   id: process.env.SPOTIFY_ID,
//   secret: process.env.SPOTIFY_SECRET
// };


// we will be using api keys and other credentials direclty in liri.js from .env by using package called 'dotenv'
// eg. in liri.js we are using require("dotenv").config(); this will get all api keys from .env file
// installation: 1. npm installe dotenv and paste require("dotenv").config() in your app.js


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