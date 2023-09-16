
const express = require( 'express' );

const { getAll, getSingle } = require( '../controllers/contacts.controller' );

const router = express.Router();

router.get( '/', getAll );

router.get( '/:id', getSingle );

module.exports = router;
