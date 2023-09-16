
const { getUsers, getUserById } = require( '../models/users.model' );

const getAll = async ( req, res, next ) => {

  try {

    const users = await getUsers();

    res.setHeader( 'Content-Type', 'application/json' );
    
    res.status( 200 ).json( users );

  } catch ( error ) {
    
    console.error( `Error while getting the list of users`, err.message );

    next( err );

  }

}

const getSingle = async ( req, res, next ) => {

  const { id } = req.params;

  try {

    const user = await getUserById( id );

    res.setHeader( 'Content-Type', 'application/json' );
    
    res.status( 200 ).json( user );

  } catch (error) {
    
    console.error( `Error while getting the user with the following id ${ id }`, err.message );

    next( err );

  }

}

module.exports ={

  getAll,

  getSingle

}