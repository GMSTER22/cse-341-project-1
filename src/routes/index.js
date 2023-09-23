const express = require('express');

const contactsRouter = require('./contacts.route');

const swaggerDocRouter = require('./swagger');

const router = express.Router();

router.use('/', swaggerDocRouter);

router.get('/', (req, res) => {
  // #swagger.tags=['Hello World']
  res.send('Hello World');
});

router.use('/contacts', contactsRouter);

module.exports = router;
