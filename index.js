
const express = require( 'express' );

const bodyParser = require( 'body-parser' );

const config = require( './src/config/index' );

const mongodb = require( './src/database/database' );

const { router: usersRouter } = require( './src/routes/users.route' );


const app = express();

const PORT = config.port || 8080;

app.use( (req, res, next) => {

  res.header( {

    'Access-Control-Allow-Origin': '*'
  
  } );

  next();

} );

app.use( bodyParser.urlencoded( { extended: false } ) );

app.use( bodyParser.json() );

// app.get( '/', ( req, res, next ) => res.json( { message: 'ok' } ) );

app.use( '/users', usersRouter );

mongodb.initDb( ( err, mongodb ) => {

  if ( err ) {

    console.log( err );

  } else {

    app.listen( PORT, () => console.log( 'server listening on port ' + PORT ) );

  }

} );
