
const { ObjectId } = require('mongodb');

const mongodb = require( '../database/connection' );

const getContacts = async () => {

  const contacts = await mongodb.getDb( 'cse-341-project-1' ).collection( 'contacts' ).find( {} ).toArray();

  return contacts;

}

const getContactById = async ( id ) => {

  const contact = await mongodb.getDb( 'cse-341-project-1' ).collection( 'contacts' ).findOne( { _id : new ObjectId( id ) } );

  return contact;

}



module.exports = {

  getContacts,

  getContactById

}