import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import { getMovies } from "./graphql/ytsDb";

const server = new GraphQLServer({
  typeDefs: "./graphql/schema.graphql",
  resolvers,
});

server.start(() => {
  getMovies();
  console.log("Graphql Server work well!");
});
