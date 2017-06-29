# trail-tracker-react
A React/Redux refactor of my Trail Tracker app for the mountain bike community. Users can check trail conditions, organize future rides, or open a ticket about an issue and upload a geotagged photo that displays on a map to let volunteers who maintain the trail know the exact location.

##### _Technologies:_
* React/Redux
* ES6
* Backend API for MongoDB, WeatherUnderground, AWS S3
* Webpack
* Material-UI and Bootstrap
* Deployed on Heroku


Deployed demo: https://trailtracker-react.herokuapp.com

###### _Known issues:_
1. Reloading a trail page in the browser will cause the app to fail. (issue with a React action creator)
2. App does not check to see if user has supplied all required entries (post type, message) before submitting a post or closing a ticket.

###### _Features to be implemented soon:_
1. Google Maps API for trail map, including markers for open tickets with geotagged photos of issue location. An example of this can be seen in v1 demo app (see link below).

###### _Backend NodeJS App_
A separate NodeJS/Express/MongoDB server app was created for handling the API calls to MongoDB, WeatherUnderground, and AWS S3. The app is deployed on Heroku and the repo is located here:
https://github.com/JohnDHamm/trail-tracker-backend

###### _Initial version of this app:_
This app was originally conceived and built as a capstone project while at Nashville Software School using Firebase and AngularJS.

* deployed demo: https://trailtracker-capstone.firebaseapp.com
* GitHub repo: https://github.com/JohnDHamm/trailTracker-capstone
