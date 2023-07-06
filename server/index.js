const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema/schema');
const port = process.env.PORT || 5000;

const app = express();

app.use('/graphql', graphqlHTTP({
     schema,
     graphiql: true
})
);
app.listen(port, console.log(`Server running on port http://localhost:5000/graphql`));

// var express = require("express")
// var { graphqlHTTP } = require("express-graphql")
// var { buildSchema } = require("graphql")

// // Construct a schema, using GraphQL schema language
// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `)

// // The root provides a resolver function for each API endpoint
// var root = {
//   hello: () => {
//     return "Hello world!"
//   },
// }

// var app = express()
// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true,
//   })
// )
// app.listen(4000)
// console.log("Running a GraphQL API server at http://localhost:4000/graphql")

