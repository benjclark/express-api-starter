# Express API Starter

A simple Express server hosting APIs to make local development of new features easy

### Getting started

Ensure you have Node v16+

1. `npm ci`
2. `npm run start`

### Accessing the server and returning data

The server should be running by now, and you can visit `http://localhost:3001` to see it in action. 

By default, it doesn't return a great deal, but if you visit `http://localhost:3001/users` -- which will automatically issue a GET request to our running API server -- you'll see a simple JSON object populated with some dummy user data.

## Expanding the server

This starter kit is really designed as a quick starting point. To expand it do the following:

1. Add a new JSON file with your relevant data to the main data entry point for the project, `./data`
2. Add a route file that will access this data into `./routes/[your route file].js` -- hint: use the `./routes/users.js` as a starting point
3. Add your new route file into the main routes file located at `./routes/routes.js`






