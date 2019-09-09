# liri-bot Applicaton 

## Summary 
liri-bot is an application is built based on Node.js®, a JavaScript runtime built on Chrome's V8 JavaScript engine.
liri-bot queries user's searches based on 4 predefined commands, e.g. concert-this, movie-this, spotify-this and do-what-it-says

## Developers Environment and Pakcages Info On liri-bot

## Intitialized Package 
1. Initialize package.json
    * npm init -y

## Installed Packages     
1. Install impotant packages 
    * npm i node-spotify-api  [Spotify](https://www.npmjs.com/package/node-spotify-api)
    * npm i axios             [Axios](https://www.npmjs.com/package/axios)
    * npm i moment            [Moment.js](https://www.npmjs.com/package/moment)
    * npm i dotenv            [dotenv](https://www.npmjs.com/package/dotenv)
2. Isntall other packages 
    * npm i request           [request](https://www.npmjs.com/package/request)


## Insruction on how to run Liri App
1. Before to run this app, you should inlclude your following key credentials in your .env file
    * const spotifyID = process.env.YOUR_SPOTIFY_ID;
    * const spotifySecret = process.env.YOUR_SPOTIFY_SECRET;
    * const omdbKey = process.env.YOUR_OMDB_APIKEY;
    * const bitKey = process.env.YOUR_BIT_APP_ID;

2. type in the command line:
    * concert-this your band name
    * movie-this  your movie name
    * spotify-this your song name
    * do-what-it-says (see note-1)
     - note-1: do-what-it-says command will query the content from random.txt and spotify the name of the song in the file

2. Examples
    * cocert-this Lady Gaga 
    * cocert-this Lady Maroon 5 
    ![spotify-this](/results-example/concert-this-lady-gaga.png)

    * spotify-this Badfish
    * spotify-this Give It Away
    ![spotify-this](/results-example/spotify-this-badfish.png)

    * movie-this Avengers
    ![movie-this](/results-example/movie-this-avengers.png)

    * do-what-it-says 
    ![spotify-this](/results-example/do-this.png)
