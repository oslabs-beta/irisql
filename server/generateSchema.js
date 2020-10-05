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
  // set up for MongoDB 
  return arrOfObj.reduce((acc, curr) => {

  // name object
  const objectNameWithType = curr.objectName + 'Type';

  acc += `const ${objectNameWithType} = new GraphQLObjectType({\n`
  acc += `  name: '${curr.objectName}',\n`
  acc += `  fields: () => ({\n`

  for (let key in curr.fields) {
    // name related object 
    const relatedObjectNamewithType = curr.fields[key].relatedObjectName + 'Type';

    if (key !== Object.keys(curr.fields)[0]) {
      acc += `,\n`
    }

    acc += `    ${curr.fields[key].fieldName}: { type: ${curr.fields[key].fieldType} }`

    if (curr.fields[key].hasRelation === true) {
    acc += `,\n` 
    acc +=`    ${curr.fields[key].relatedObjectName}: {\n`
    acc +=`      type: ${relatedObjectNamewithType},\n`
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
const createRootQuery = (arrOfObj) => {

  let string = '';
  string += `const RootQuery = new GraphQLObjectType({\n`
  string += `  name: 'RootQueryType',\n`
  string += `  fields: {\n`

  string += arrOfObj.reduce((acc, curr, index) => {
    // name query
    const queryName = curr.objectName.toLowerCase();
    const queryNameCap = queryName.slice(0,1).toUpperCase() + queryName.slice(1)

    // name object
    const objectNameWithType = curr.objectName + 'Type';

    if (index !== 0) {
      acc += `,\n`
    }

    acc += `    every${queryNameCap}: {\n`
    acc += `      type: new GraphQLList(${objectNameWithType}),\n`
    acc += `      resolve() {\n`
    acc += `        return ${curr.objectName}.find({});`
    acc +=`\n      }`
    acc +=`\n    }`
    acc += `,\n`
    
    acc += `    ${queryName}: {\n`
    acc += `      type: ${objectNameWithType},\n`
    acc += `      args: { ${curr.fields[0].fieldName}: { type: ${curr.fields[0].fieldType} }},\n`
    acc += `      resolve(parent, args) {\n`
    acc += `        return ${curr.objectName}.findById(args.${curr.fields[0].fieldName});`
    acc +=`\n      }`
    acc +=`\n    }`

    return acc;
  
    }, '') 

    string += `\n  }`
    string += `\n});\n\n`
    
    return string;

};


// function to generate code for mutation
const createMutation = (arrOfObj) => {

  let string = '';
  string += `const Mutation = new GraphQLObjectType({\n`
  string += `  name: 'Mutation',\n`
  string += `  fields: {\n`

  string += arrOfObj.reduce((acc, curr, index) => {
    // name query
    const queryName = curr.objectName.toLowerCase();
    const queryNameCap = queryName.slice(0,1).toUpperCase() + queryName.slice(1)

    // name object
    const objectNameWithType = curr.objectName + 'Type';

    if (index !== 0) {
      acc += `,\n`
    }
    
    // add
    acc += `    add${queryNameCap}: {\n`
    acc += `      type: ${objectNameWithType },\n`
    acc += `      args: {\n`
    
    for (let key in curr.fields) {
    
      if (key !== Object.keys(curr.fields)[0]) {
        acc += `,\n`
      }  

      acc += `        ${curr.fields[key].fieldName}: { type: ${curr.fields[key].fieldType} }`

    }

    acc += `\n      },\n`
    acc += `      resolve(parent, args) {\n`
    acc += `        const ${queryName} = new ${queryNameCap}(args);\n`
    acc += `        return ${queryName}.save();`
    acc +=`\n      }`
    acc +=`\n    },\n`
    
    // update
    acc += `    update${queryNameCap}: {\n`
    acc += `      type: ${objectNameWithType },\n`
    acc += `      args: {\n`
    
    for (let key in curr.fields) {
    
      if (key !== Object.keys(curr.fields)[0]) {
        acc += `,\n`
      }  

      acc += `        ${curr.fields[key].fieldName}: { type: ${curr.fields[key].fieldType} }`

    }

    acc += `\n      },\n`
    acc += `      resolve(parent, args) {\n`
    acc += `        return ${queryNameCap}.findByIdAndUpdate(args.id, args);`
    acc +=`\n      }`
    acc +=`\n    },\n`

    // delete
    acc += `    delete${queryNameCap}: {\n`
    acc += `      type: ${objectNameWithType },\n`
    acc += `      args: { ${curr.fields[0].fieldName}: { type: ${curr.fields[0].fieldType} }},\n`
    acc += `      resolve(parent, args) {\n`
    acc += `        return ${queryNameCap}.findByIdAndRemove(args.id);`
    acc +=`\n      }`
    acc +=`\n    }`

    return acc;
  
  }, '') 

  string += `\n  }`
  string += `\n});\n\n`
  
  return string;

}
