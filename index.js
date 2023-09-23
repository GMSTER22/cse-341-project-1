const express = require('express');

const bodyParser = require('body-parser');

const config = require('./src/config/index');

const mongodb = require('./src/database/database');

const router = require('./src/routes');

const PORT = config.port || 8080;

const app = express();

app.use((req, res, next) => {
  res.header({
    'Access-Control-Allow-Origin': '*'
  });
  res.header({
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
  });
  res.header({
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
  });

  next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/', router);

// eslint-disable-next-line no-unused-vars
mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT, () => console.log('server listening on port ' + PORT));
  }
});
