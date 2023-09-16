
const { ObjectId } = require( 'mongodb' );

const mongodb = require( '../database/database' );

const getUsers = async () => {

  const users = await mongodb.getDb().collection( 'users' ).find( {} ).toArray();

  return users;

}

const getUserById = async ( id ) => {

  const user = await mongodb.getDb().collection( 'users' ).findOne( { _id : new ObjectId( id ) } );

  return user;

}

module.exports = {

  getUsers,

  getUserById

}
