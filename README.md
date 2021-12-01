## Producify-backend

This is the backend for the producify-frontend project. That project can be found at [here](https://github.com/smalldutta/producify-frontend) a live demo of the front end can be found [here](https://producify-frontend.vercel.app/)

## About

This project connects to the mongodb databse and connects to the front end.
![image of mongo db](backend/Screenshot 2021-12-01 at 01.50.49.png)

## Build Insructions
Clone this repository, then run `npm install` followed by `npm start`

## `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## In case of Error:
The default security setting for Mongo Cloud is to maintain a whitelist of IP addresses that can access the service, hence if DB error is present, I can add the IP to the whitelist and should be resolved.
