// define functions for generating a GraphQL schema

// function to generate code for requiring the GraphQL module
const requireGraphQL = () => {
  return `const graphql = require('graphql')`;
};

// function to generate code for destructing GraphQLSchema and GraphQL types
const requireGraphQLProps = () => {
  return `\n
  const { 
    GraphQLSchema, 
    GraphQLObjectType,
    GraphQLID,
    GraphQLString, 
    GraphQLInt, 
    GraphQLFloat, 
    GraphQLBoolean,
    GraphQLList,
    GraphQLNonNull, 
  } = graphql;`;
};

const objectType = () => {
  let string = `\n 
const objectType = new GraphQLObjectType({
  name: '',
  fields: {
  
  }
})`;
  return string;
};

// function to generate code for root query
const rootQuery = () => {
  let string = `\n
  const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
  
    }
  }) `;
  return string;
};


