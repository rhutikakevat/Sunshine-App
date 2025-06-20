# Sunshine App

- This is movie management application
- In this app, we provides features are:

  - View all movie's title
  - Add a new movie in database
  - Fetch movies by title
  - Delete movies with delete button
  

## Features

1. Movie List

    Displays all movies in a list format
    Each movie entry has a delete button
    Shows success message after deletion
    Automatically refreshes after deletion

2. Add Movie Form

    Comprehensive form with all movie details:
        Title, Release Year, Genre
        Director, Actors, Language
        Country, Rating, Plot
        Awards, Poster URL, Trailer URL
    Success message display after addition

    Form validation for numeric fields (release year, rating)

3. Movie Search

    Displays detailed information for a specific movie
    Shows poster image along with all movie details


## API Endponits Used

API URL: https://backend-movies-api.vercel.app

| Path               | Method  | Description                          |
|--------------------|---------|--------------------------------------|
| `/movies`          | GET     | Fetch all movies                     |
| `/movies`          | POST    | Add new movie                        |
| `/movies/:id`      | DELETE  | Delete specific movie                |
| `/movies/:title`   | GET     | Search movie by title                |


## Components

   1. Movies.js

        Displays list of all movies
        Implements delete functionality
        Shows loading state and error messages

   2. Form for adding new movies

        Handles form submission and validation
        Shows success/error messages

   3. MoviesByTitle.js

        Displays detailed view of a single movie
        Shows movie poster and all details
   
   4. useFetch.js (custom hook)

        Reusable data fetching logic
        Handles loading and error states