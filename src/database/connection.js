
const { MongoClient, ServerApiVersion } = require( 'mongodb' );

const config = require( '../config/index' );

let connection;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient( config.databaseURL, {

  serverApi: {

    version: ServerApiVersion.v1,

    strict: true,

    deprecationErrors: true,

  }

} );

const initDb = async ( callback ) => {

  if ( connection ) return callback( null, connection );

  try {

    connection = await client.connect();

    console.log( "Connection with MongoDB established" );

    return callback( null, connection );

  } catch ( error ) {

    callback( error );

    console.log( error );
    
  }

}

const getDb = ( databaseName = 'test' ) => {

  if ( ! connection ) throw Error( 'db not established with mongodb' );

  return connection.db( databaseName );

}

module.exports = {

  initDb,

  getDb

};
