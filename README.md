
# Spotify application OAuth Authorization flow server


## Introduction
The  applicartion uses an Express JS server that lets you get the authorization token from your user once user logs in with Spotify and grants permissions.
This token can then be used to make requests on the Spotify API on behalf of user.


## How does it work?
Link the `/app/login` route to your frontend (complete the URL) dependoing on your server deployment. Example: `http://localhost:3001/app/login`

The login link will take user to authorization URL and prompt the user to login with Spotify. Once logged in, the user will be prompted with the required permissions. If the user grants the permission. The redirect uri will be called and the token will be returned as a query parameter to the frontend. Further, frontend can store it in the session storage and use for API calls.

The authorization flow also employs state management so, redirect uri will return no response until called by login after proper flow.


## How to use?
Create a `.env` file in the project's root folder. This file should have `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REDIRECT_URI` essentially. These can be found in the Spotify's developer dashboard for your own app. 

Node pakcages to be installed for local environment: `dotenv`, `express`, `cors`, `jsonwebtoken`, `crypto`