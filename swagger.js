// eslint-disable-next-line node/no-unpublished-require
const swaggerAutogen = require('swagger-autogen')({
  autoBody: true
});

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Contacts API allowing CRUD operations to interact with the contacts.'
  },
  host: 'localhost:8080',
  schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./src/routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
