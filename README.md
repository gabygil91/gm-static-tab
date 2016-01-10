# my-barebone-app

A barebones Node.js with AngularJS and MongoDB app.

This Application is meant to be uploaded and run on [Heroku](https://www.heroku.com/).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

1. Git bash at the directory.
2. Type "npm install"
3. Type "heroku local"

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

To link your DataBase:

1. Go to server.js and uncomment all the lines that are commented.
2. Find "mongoose.connect", inside link your mongodb Database to connect it to your app.
