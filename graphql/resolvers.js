import { people, movies, deleteMovieById, addMovie } from "./db";
import { getMovies } from "./ytsDb";

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => {
      let person = people.filter((p) => p.id === id);
      return person[0];
    },
    movies: () => movies,
    movie: (_, { id }) => {
      let movie = movies.filter((m) => m.id === id);
      return movie[0];
    },
    ytsMovie: () => getMovies(),
  },
  Mutation: {
    addMovie: (_, { title }) => addMovie(title),
    deleteMovieById: (_, { id }) => deleteMovieById(id),
  },
};

export default resolvers;
