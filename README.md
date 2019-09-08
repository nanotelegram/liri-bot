# liri-bot

## Intitialized Package 
1. Initialize package.json
    * npm init -y

## Installed Packages     
1. Install impotant packages 
    * npm i node-spotify-api  [Spotify](https://www.npmjs.com/package/node-spotify-api)
    * npm i axios             [Axios](https://www.npmjs.com/package/axios)
    * npm i moment            [Moment.js](https://www.npmjs.com/package/moment)
    * npm i dotenv            [dotenv](https://www.npmjs.com/package/dotenv)
2. isntall other packages 
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

2. Examples
    * cocert-this Lady Gaga: 
    ![spotify-this](/results-example/concert-this-lday-gaga.png)
    
    * spotify-this Badfish: 
    ![spotify-this](/results-example/spotify-this-badfish.png)

    * movie-this Avengers: 
    ![movie-this](/results-example/movie-this-avengers.png)
