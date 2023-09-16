
const { ObjectId } = require( 'mongodb' );

const mongodb = require( '../database/database' );

const getAll = async ( req, res, next ) => {

  try {

    const contacts = await mongodb.getDb().collection( 'contacts' ).find( {} ).toArray();

    res.setHeader( 'Content-Type', 'application/json' );
    
    res.status( 200 ).json( contacts );

  } catch ( error ) {
    
    console.error( `Error while getting the list of contacts`, err.message );

    next( err );

  }

}

const getSingle = async ( req, res, next ) => {

  const { id } = req.params;

  try {

    const contact = await mongodb.getDb().collection( 'contacts' ).findOne( { _id : new ObjectId( id ) } );

    res.setHeader( 'Content-Type', 'application/json' );
    
    res.status( 200 ).json( contact );

  } catch (error) {
    
    console.error( `Error while getting the user with the following id ${ id }`, err.message );

    next( err );

  }

}

module.exports ={

  getAll,

  getSingle

}