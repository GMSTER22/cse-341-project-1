
const express = require( 'express' );

const contactsRouter = require( './contacts.route' );

const router = express.Router();

router.get( '/', ( req, res ) => res.send( 'Hello World' ) );

router.use( '/contacts', contactsRouter );

module.exports = router;
