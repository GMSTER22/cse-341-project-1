
const { getContacts, getContactById } = require( '../models/contacts.model' );

const get = async ( req, res, next ) => {

  try {

    const contacts = await getContacts();
    
    res.json( contacts );

  } catch ( error ) {
    
    console.error( `Error while getting the list of contacts`, err.message );

    next( err );

  }

}

const getById = async ( req, res, next ) => {

  const { id } = req.params;

  try {

    const contact = await getContactById( id );
    
    res.json( contact );

  } catch (error) {
    
    console.error( `Error while getting the contact with the following id ${ id }`, err.message );

    next( err );

  }

}

module.exports ={

  get,

  getById

}