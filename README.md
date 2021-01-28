# [SilverNest, v2:](https://silver-nest-app.herokuapp.com/about) _a full-stack project_

### By: [Lola Dolinsky](https://github.com/lo-la-do-li)

This app was initially developed as a group project by a team of students in Mod 3 at Turing School of Software & Design, including myself, [Chadrick Dickerson](https://github.com/chadrick-d-dev) and [Cameron Romo](https://github.com/cameronRomo).

- Link to the original SilverNest [here](https://silver-nest.herokuapp.com/about).

## Table of Contents

- [Project Overview](#project-overview)
- [Added Features](#added-features)
- [Technologies And Tools](#technologies-and-tools)
- [Roadmap](#roadmap)
- [Contributor](#contributor)

## Project Overview

This app was created with two specific audiences in mind and solves a problem for each stakeholder, respectively.

- College students seeking to enter the medical field, who currently enrolled in a health and human sciences program
- Older adults who wish to age-in-place, or maintain some independence by continuing to live in their own home.

The idea is to give students in the college of Health and Human sciences the chance to live with an older adult _rent free_ in exchange for assistance with trips to doctor's appointments, help with mobility, taking medications, and general activities of daily living. <br>

The [Silver Nest Backend Server](https://github.com/chadrick-d-dev/silver-nest-api), created for the original Silver Nest, is a database that enables this application to fetch specific information provided by the older adults who participating in this program.

From here, data is displayed in the app for students to find an older adult whose needs they feel most suited to assist with.

## Technologies And Tools

> - React (w/ hooks)
> - React Testing (w/ Jest)
> - Router
> - JavaScript
> - JSX
> - Styled Components (w/ Material-UI)
> - Engineered Server with:
>   - Express
>   - PostgreSQL
>   - Postico
>   - Knex
> - Front/Backend Deployment:
>   - Heroku
> - Project Management
>   - Git
>   - GitHub Projects
>   - Terminal

## Added Features

- Save and view residents applied to on "Applications" page
- Send message to residents (if application pending)
- Media queries for larger and smaller screens
- Global state for saving residents applied and message to resident

## SilverNest (v2) in Action:

#### About Page:

![About page](https://user-images.githubusercontent.com/68264128/106073842-07789200-60c8-11eb-8875-dc717e7de75f.png)

#### Scroll through Available Residents

![scroll residents](https://media.giphy.com/media/atGybGh36gtIL5PBpR/giphy.gif)

#### View Resident Profile and Apply for Housing:

![View Resident Profile and Apply for Housing](https://media.giphy.com/media/ZoGw6RdXqAKQmFo3NU/giphy.gif)

#### Residents Applied: mobile view:

![Residents Applied: mobile view](https://user-images.githubusercontent.com/68264128/106074195-a3a29900-60c8-11eb-8e4b-8bd9cab75fa0.png)

#### New Message Feature:

![New Message Feature](https://media.giphy.com/media/yow7UmeQJ93WGxihdy/giphy.gif)

<details>
  <summary>Setup</summary>

- _Click_ the **Fork** button on the top right-hand corner of this page
- Clone the repository down and cd into the repo on your local machine by running:
  - `git clone git@github.com:lo-la-do-li/silver-nest.git`
  - cd into `silver-nest` locally
- Install the library dependencies by running:
  - `npm install`
- To verify that it is setup correctly, run `npm start` in your terminal.
- Go to `http://localhost:3000/` and you should see the site.
- Enter `control + c` in your terminal to stop the server at any time.
- Add your changes, push up to GitHub and submit a pull request
</details>

## Roadmap

With more time, I would like to enhance the UI/UX with:

- User authentication
- Put/patch/delete requests set up in database for removing a resident from the app on approval of an application
- Edit/Update Application feature that allows student to make changes to their application before they submit

## Contributor

<img src="https://media-exp1.licdn.com/dms/image/C4E03AQG9jZTOd0oUCQ/profile-displayphoto-shrink_800_800/0/1606070086923?e=1616025600&v=beta&t=WldtPrGc57mSEiAJkFaYGVq9Ksc0uqBmFLFR11fQUs4" alt="Lola Dolinsky"
 width="150" height="auto" />

- [Lola Dolinsky](https://github.com/lo-la-do-li)
