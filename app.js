const { ApolloServer, gql } = require('apollo-server');
const { wweChampions } = require('./champions');

const typeDefs = gql`
  type Champion {
    champion: String!
    dateWon: String
    dateLost: String
    Show: String!
    previousChampion: String
  }

  type Query {
    champions: [Champion]
  }
`;

const resolvers = {
  Query: {
    champions: () => wweChampions,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
