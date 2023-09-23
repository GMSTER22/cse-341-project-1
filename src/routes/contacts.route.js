const express = require('express');

const {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact
} = require('../controllers/contacts.controller');

const router = express.Router();

router.get('/', getAll);

router.get('/:id', getSingle);

router.post('/', createContact);

router.put('/:id', updateContact);

router.delete('/:id', deleteContact);

module.exports = router;
