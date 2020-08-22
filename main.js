import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Language {
    name: String!
    label: String!
  }

  type Query {
    supportedLanguages: [Language]
  }
`;

const languages = [
  {
    name: 'java',
    label: 'Java'
  },
  {
    name: 'javascript',
    label: 'Javascript'
  },
  {
    name: 'golang',
    label: 'Go'
  },
  {
    name: 'python',
    label: 'Python'
  }
];

const resolvers = {
    Query: {
      supportedLanguages: () => languages,
    },
};

  
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});