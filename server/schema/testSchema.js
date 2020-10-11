const graphql = require('graphql')

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
} = graphql;

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLString },
    movieName: { type: GraphQLString },
    AutherID: { type: GraphQLID },
    Author: {
      type: AuthorType,
      resolve(parent, args) {
        return Author.findById(parent.AuthorID);
      }
    }
  })  
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLString },
    AuthorName: { type: GraphQLString }
  })  
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    everyMovie: {
      type: new GraphQLList(MovieType),
      resolve() {
        return Movie.find({});
      }
    },
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLString }},
      resolve(parent, args) {
        return Movie.findById(args.id);
      }
    },
    everyAuthor: {
      type: new GraphQLList(AuthorType),
      resolve() {
        return Author.find({});
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLString }},
      resolve(parent, args) {
        return Author.findById(args.id);
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addMovie: {
      type: MovieType,
      args: {
        id: { type: GraphQLString },
        movieName: { type: GraphQLString },
        AutherID: { type: GraphQLID }
      },
      resolve(parent, args) {
        const movie = new Movie(args);
        return movie.save();
      }
    },
    updateMovie: {
      type: MovieType,
      args: {
        id: { type: GraphQLString },
        movieName: { type: GraphQLString },
        AutherID: { type: GraphQLID }
      },
      resolve(parent, args) {
        return Movie.findByIdAndUpdate(args.id, args);
      }
    },
    deleteMovie: {
      type: MovieType,
      args: { id: { type: GraphQLString }},
      resolve(parent, args) {
        return Movie.findByIdAndRemove(args.id);
      }
    },
    addAuthor: {
      type: AuthorType,
      args: {
        id: { type: GraphQLString },
        AuthorName: { type: GraphQLString }
      },
      resolve(parent, args) {
        const author = new Author(args);
        return author.save();
      }
    },
    updateAuthor: {
      type: AuthorType,
      args: {
        id: { type: GraphQLString },
        AuthorName: { type: GraphQLString }
      },
      resolve(parent, args) {
        return Author.findByIdAndUpdate(args.id, args);
      }
    },
    deleteAuthor: {
      type: AuthorType,
      args: { id: { type: GraphQLString }},
      resolve(parent, args) {
        return Author.findByIdAndRemove(args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});