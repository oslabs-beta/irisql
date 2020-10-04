// define functions for generating a GraphQL schema
const generateSchema = (input) => {

}

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

  
const createObjectType = (arrOfObj) => {

  return arrOfObj.reduce((acc, curr) => {

  acc += `const ${curr.objectName}Type = new GraphQLObjectType({\n`
  acc += `  name: '${curr.objectName}',\n`
  acc += '  fields: () => ({\n'

  for (let key in curr.fields) {

    if (key !== Object.keys(curr.fields)[0]) {
      acc += `,\n`
    }

    acc += `    ${curr.fields[key].fieldName}: { type: ${curr.fields[key].fieldType} }`

    if (curr.fields[key].hasRelation === true) {
    acc += `,\n` 
    acc +=`    ${curr.fields[key].relatedObjectName}: {\n`
    acc +=`      type: ${curr.fields[key].relatedObjectName}Type,\n`
    acc +='      resolve(parent, args) {\n'
    acc +=`        return ${curr.fields[key].relatedObjectName}.findById(parent.${curr.fields[key].relatedObjectField});\n`
    acc +=`      }`
    acc +=`\n    }`
    }
  }
  acc +=`\n  })`
  acc += `  \n});\n\n`
  
  return acc;

  }, '')

}


// function to generate code for root query
const createRootQuery = () => {
  let string = `\n
  const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
  
    }
  }) `;
  return string;
};

