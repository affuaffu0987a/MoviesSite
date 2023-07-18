This is a Movie App built with React.js.

To run the app, clone the repo and run `npm install`. Then, run `npm start`. The app will be available at `http://localhost:3000`.

The app uses the [OMDB API](http://www.omdbapi.com/) to get information about movies.

The app is divided into two components: `Home` and `Movies`.

The `Home` component renders the search bar and the list of movies.

The `Movies` component renders the list of movies.

The `Search` component is a child of the `Home` component. It renders a search bar. When the user enters a search term, the `Search` component calls the `getMovies` function to get a list of movies from the OMDB API. The `getMovies` function returns a promise. The `Search` component then uses the `useState` hook to set the state of the `movies` array to the list of movies returned by the `getMovies` function.

The `Movies` component is a child of the `App` component. It renders the list of movies. The `Movies` component uses the `useGlobalContext` hook to get the `movies` array from the `App` component.

The `SingleMovie` component is a child of the `App` component. It renders the details of a single movie. The `SingleMovie` component uses the `useParams` hook to get the id of the movie from the URL. The `SingleMovie` component then calls the `getMovie` function to get the details of the movie from the OMDB API. The `getMovie` function returns a promise. The `SingleMovie` component then uses the `useState` hook to set the state of the `movie` object to the movie returned by the `getMovie` function.