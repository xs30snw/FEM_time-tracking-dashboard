# Frontend Mentor - Time Tracking Dashboard

This is a solution to [Time Tracking Dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw).

The site was built with Webpack bundler and Tailwind styles. 
- Live Site URL: [Heroku](https://fem-time-tracking-dashboard.herokuapp.com/)

## Screenshot

![](./screenshot.png)

## How it works

File *server.js* contains configuration for the json-server, which is started via running '*npm run start*' script. Heroku looks for *index.html* in the */public*, and this page fetches data from json-server.

## Ideas for improvement

- [ ] Display 'hr' and 'hrs' depending on number of hours taken from the database.