import express from 'express';
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './schema.js';

const server = express();
const PORT = 4000

// add graphiql as middleware. Pass any requests to graphql below
server.use('/graphiql', graphiqlExpress({
	endpointURL: "/graphql"
}));

// pass req to bodyparser to parse json
// pass to graphql
server.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
})