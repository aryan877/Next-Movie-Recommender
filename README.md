# Movie Recommendation App

This app is designed to help movie lovers discover new films that match their tastes. It uses a machine learning algorithm that combines content-based and collaborative filtering to generate a list of movie recommendations. With this feature, users can easily find new films that are similar to the ones they already love.

## How it Works

When a user searches for a movie, the app sends a request to the backend, which uses the MovieLens 25 million movie ratings dataset to generate recommendations. The backend sends back TMDB IDs, which are then used to fetch additional data such as ratings, descriptions, and movie posters. This data is then sent back to the Next.js frontend, where users can also access pagination features, allowing them to view the most similar recommendations on the first page and the least similar on the third page.

## Technical Details

The backend of the app is built using Python and uses the MovieLens 25 million movie ratings dataset to generate recommendations. The frontend is built using Next.js and React, and makes use of APIs to fetch data from TMDB.

## Contributions

This project was developed during an internship under the guidance of Shrit Kanike Pratap, a scientist at DRDO. The author would like to express gratitude for the knowledge and experience gained during this time and for the mentorship provided by Shrit Kanike Pratap.

## Getting Started

To get started with this project, clone the repository and install the dependencies.

```bash
$ git clone https://github.com/<username>/movie-recommendation-app.git
$ cd movie-recommendation-app
$ npm install
$ npm run dev
```

The app should now be running on http://localhost:3000.

## Contributing

We welcome contributions to this project. If you have an idea for a feature or a bug fix, please open a pull request.
