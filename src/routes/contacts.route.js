
const express = require( 'express' );

const contactsController = require( '../controllers/contacts.controller' );


const router = express.Router();

router.get( '/', contactsController.get );

router.get( '/:id', contactsController.getById );

module.exports = {

  router

}