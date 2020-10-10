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

const AlexType = new GraphQLObjectType({
  name: 'Alex',
  fields: () => ({
    missionID: { type: String }
  })  
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    everyAlex: {
      type: new GraphQLList(AlexType),
      resolve() {
        return Alex.find({});
      }
    },
    alex: {
      type: AlexType,
      args: { missionID: { type: String }},
      resolve(parent, args) {
        return Alex.findById(args.missionID);
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAlex: {
      type: AlexType,
      args: {
        missionID: { type: String }
      },
      resolve(parent, args) {
        const alex = new Alex(args);
        return alex.save();
      }
    },
    updateAlex: {
      type: AlexType,
      args: {
        missionID: { type: String }
      },
      resolve(parent, args) {
        return Alex.findByIdAndUpdate(args.id, args);
      }
    },
    deleteAlex: {
      type: AlexType,
      args: { missionID: { type: String }},
      resolve(parent, args) {
        return Alex.findByIdAndRemove(args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});