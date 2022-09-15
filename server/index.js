const app = require('express')();
const graphql = require('./graphql');
const assets = require('./assets');

const { PORT = 8080 } = process.env;

graphql.applyMiddleware({ app, path: '/graphql' });
app.use(assets).listen(PORT);
