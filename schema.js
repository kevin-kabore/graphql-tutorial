import {makeExecutableSchema, addMockFunctionsToSchema} from 'graphql-tools';

// define schema and queries associted
const typeDefs = `type Author {
	age: Int 
	name: String
	Books: [String]
}
	type Query {
		author: [Author]
	}

`;

const schema = makeExecutableSchema({typeDefs});
addMockFunctionsToSchema({schema});

export default schema;