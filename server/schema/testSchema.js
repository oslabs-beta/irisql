const graphql = require('graphql')
const Movie= require('../models/movieSchema');
const Director = require('../models/directorSchema')

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
    DirectorId: { type: GraphQLID },
    Director: {
      type: DirectorType,
      resolve(parent, args) {
        return Director.findById(parent.DirectorId);
      }
    }
  })  
});

const DirectorType = new GraphQLObjectType({
  name: 'Director',
  fields: () => ({
    id: { type: GraphQLString },
    DirectorName: { type: GraphQLString }
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
    everyDirector: {
      type: new GraphQLList(DirectorType),
      resolve() {
        return Director.find({});
      }
    },
    Director: {
      type: DirectorType,
      args: { id: { type: GraphQLString }},
      resolve(parent, args) {
        return Director.findById(args.id);
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
        DirectorId: { type: GraphQLID }
      },
      resolve(parent, args) {
        const movie = new Movie({
          id: args.id,
          movieName: args.movieName,
          DirectorId: args.DirectorId
        });
        return movie.save();
      }
    },
    updateMovie: {
      type: MovieType,
      args: {
        id: { type: GraphQLString },
        movieName: { type: GraphQLString },
        DirectorId: { type: GraphQLID }
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
    addDirector: {
      type: DirectorType,
      args: {
        id: { type: GraphQLString },
        DirectorName: { type: GraphQLString }
      },
      resolve(parent, args) {
        const Director = new Director(args);
        return Director.save();
      }
    },
    updateDirector: {
      type: DirectorType,
      args: {
        id: { type: GraphQLString },
        DirectorName: { type: GraphQLString }
      },
      resolve(parent, args) {
        return Director.findByIdAndUpdate(args.id, args);
      }
    },
    deleteDirector: {
      type: DirectorType,
      args: { id: { type: GraphQLString }},
      resolve(parent, args) {
        return Director.findByIdAndRemove(args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});