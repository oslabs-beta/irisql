// define functions for generating a GraphQL schema
const generateSchema = (input) => {
  return requireGraphQL().concat(
    requireGraphQLProps(),
    createObjectType(input),
    createRootQuery(input),
    createMutation(input),
    createModuleExports()
  );
};

// function to generate code for requiring the GraphQL module
const requireGraphQL = () => {
  return `const graphql = require('graphql')\n\n`;
};

// function to generate code for destructing GraphQLSchema and GraphQL types
const requireGraphQLProps = () => {
  return `const { 
  GraphQLSchema, 
  GraphQLObjectType,
  GraphQLID,
  GraphQLString, 
  GraphQLInt, 
  GraphQLFloat, 
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull, 
} = graphql;\n\n`;
};

const createObjectType = (arrOfObj) => {
  const arrOfObjCopy = arrOfObj.slice(1);
  return arrOfObjCopy.reduce((acc, curr) => {
    // name object (rules: capitalized object name, capitalized object type)
    const lowerCaseObjectName = curr.objectName.toLowerCase();
    const objectName = lowerCaseObjectName.slice(0, 1).toUpperCase() + lowerCaseObjectName.slice(1);
    const objectNameWithType = objectName + 'Type';

    let lowerCaseRelatedObjectName = '';
    let relatedObjectName = '';
    let relatedObjectNamewithType = '';

    // read user's choice of database
    const dbChoice = arrOfObj[0].databaseChoice;

    acc += `const ${objectNameWithType} = new GraphQLObjectType({\n`;
    acc += `  name: '${objectName}',\n`;
    acc += `  fields: () => ({\n`;

    // print object's name and fields key
    for (let i = 0; i < curr.fields.length; i++) {
      // name related object (rules: capitalized object name, capitalized object type)
      if (curr.fields[i].relatedObjectName !== null) {
        lowerCaseRelatedObjectName = curr.fields[i].relatedObjectName.toLowerCase();
        relatedObjectName =
          lowerCaseRelatedObjectName.slice(0, 1).toUpperCase() +
          lowerCaseRelatedObjectName.slice(1);
        relatedObjectNamewithType = relatedObjectName + 'Type';
      }
      // print a line break before printing each field except the first field
      if (i !== 0) {
        acc += `,\n`;
      }
      // print the field name and its type
      acc += `    ${curr.fields[i].fieldName}: { type: ${curr.fields[i].fieldType} }`;
      // if the field has a relation, print its related object, type, and the resolver function
      if (curr.fields[i].hasRelation === true) {
        let findMethod = '';
        let findMethodArgs = '';
        if (curr.fields[i].relatedObjectField === 'id') {
          findMethod = 'findById';
          findMethodArgs = `(parent.${curr.fields[i].fieldName})`;
        } else if (curr.fields[i].relatedReferenceType === 'one to one') {
          findMethod = 'findOne';
          findMethodArgs = `({ ${curr.fields[i].relatedObjectField}: parent.${curr.fields[i].fieldName} })`;
        } else {
          findMethod = 'find';
          findMethodArgs = `({ ${curr.fields[i].relatedObjectField}: parent.${curr.fields[i].fieldName} })`;
        }

        acc += `,\n`;
        acc += `    ${curr.fields[i].relatedObjectName}: {\n`;
        acc += `      type: ${relatedObjectNamewithType},\n`;
        acc += `      resolve(parent, args) {\n`;
        acc += `        return ${relatedObjectName}.${findMethod}${findMethodArgs};\n`;
        acc += `      }`;
        acc += `\n    }`;
      }
    }
    acc += `\n  })`;
    acc += `  \n});\n\n`;

    return acc;
  }, '');
};

// function to generate code for root query
const createRootQuery = (arrOfObj) => {
  const arrOfObjCopy = arrOfObj.slice(1);
  let string = '';
  string += `const RootQuery = new GraphQLObjectType({\n`;
  string += `  name: 'RootQueryType',\n`;
  string += `  fields: {\n`;

  string += arrOfObjCopy.reduce((acc, curr, index) => {
    // name query
    const queryName = curr.objectName.toLowerCase();
    const queryNameCap = queryName.slice(0, 1).toUpperCase() + queryName.slice(1);

    // name object
    const lowerCaseObjectName = curr.objectName.toLowerCase();
    const objectName = lowerCaseObjectName.slice(0, 1).toUpperCase() + lowerCaseObjectName.slice(1);
    const objectNameWithType = objectName + 'Type';

    // read user's choice of database
    const dbChoice = arrOfObj[0].databaseChoice;

    if (index !== 0) {
      acc += `,\n`;
    }

    acc += `    every${queryNameCap}: {\n`;
    acc += `      type: new GraphQLList(${objectNameWithType}),\n`;
    acc += `      resolve() {\n`;
    acc += `        return ${objectName}.find({});`;
    acc += `\n      }`;
    acc += `\n    }`;
    acc += `,\n`;

    acc += `    ${queryName}: {\n`;
    acc += `      type: ${objectNameWithType},\n`;
    acc += `      args: { ${curr.fields[0].fieldName}: { type: ${curr.fields[0].fieldType} }},\n`;
    acc += `      resolve(parent, args) {\n`;

    acc += `        return ${objectName}.findById(args.${curr.fields[0].fieldName});`;
    acc += `\n      }`;
    acc += `\n    }`;

    return acc;
  }, '');

  string += `\n  }`;
  string += `\n});\n\n`;

  return string;
};

// function to generate code for mutation
const createMutation = (arrOfObj) => {
  const arrOfObjCopy = arrOfObj.slice(1);
  let string = '';
  string += `const Mutation = new GraphQLObjectType({\n`;
  string += `  name: 'Mutation',\n`;
  string += `  fields: {\n`;

  string += arrOfObjCopy.reduce((acc, curr, index) => {
    // name query
    const queryName = curr.objectName.toLowerCase();
    const queryNameCap = queryName.slice(0, 1).toUpperCase() + queryName.slice(1);

    // name object
    const lowerCaseObjectName = curr.objectName.toLowerCase();
    const objectName = lowerCaseObjectName.slice(0, 1).toUpperCase() + lowerCaseObjectName.slice(1);
    const objectNameWithType = objectName + 'Type';

    if (index !== 0) {
      acc += `,\n`;
    }

    // add
    acc += `    add${queryNameCap}: {\n`;
    acc += `      type: ${objectNameWithType},\n`;
    acc += `      args: {\n`;

    for (let i = 0; i < curr.fields.length; i++) {
      if (i !== 0) {
        acc += `,\n`;
      }

      acc += `        ${curr.fields[i].fieldName}: { type: ${curr.fields[i].fieldType} }`;
    }

    acc += `\n      },\n`;
    acc += `      resolve(parent, args) {\n`;
    acc += `        const ${queryName} = new ${queryNameCap}(args);\n`;
    acc += `        return ${queryName}.save();`;
    acc += `\n      }`;
    acc += `\n    },\n`;

    // update
    acc += `    update${queryNameCap}: {\n`;
    acc += `      type: ${objectNameWithType},\n`;
    acc += `      args: {\n`;

    for (let i = 0; i < curr.fields.length; i++) {
      if (i !== 0) {
        acc += `,\n`;
      }

      acc += `        ${curr.fields[i].fieldName}: { type: ${curr.fields[i].fieldType} }`;
    }

    acc += `\n      },\n`;
    acc += `      resolve(parent, args) {\n`;
    acc += `        return ${queryNameCap}.findByIdAndUpdate(args.id, args);`;
    acc += `\n      }`;
    acc += `\n    },\n`;

    // delete
    acc += `    delete${queryNameCap}: {\n`;
    acc += `      type: ${objectNameWithType},\n`;
    acc += `      args: { ${curr.fields[0].fieldName}: { type: ${curr.fields[0].fieldType} }},\n`;
    acc += `      resolve(parent, args) {\n`;
    acc += `        return ${queryNameCap}.findByIdAndRemove(args.id);`;
    acc += `\n      }`;
    acc += `\n    }`;

    return acc;
  }, '');

  string += `\n  }`;
  string += `\n});\n\n`;

  return string;
};

// function to generate code for module exports
const createModuleExports = () => {
  let string = '';

  string += `module.exports = new GraphQLSchema({\n`;
  string += `  query: RootQuery,\n`;
  string += `  mutation: Mutation\n`;
  string += `});`;

  return string;
};

module.exports = { generateSchema };
