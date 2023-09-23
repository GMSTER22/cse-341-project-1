const { ObjectId } = require('mongodb');

const mongodb = require('../database/database');

const getAll = async (req, res, next) => {
  // #swagger.tags=['Contacts']
  // #swagger.description = 'Endpoint to get all contacts'
  try {
    const contacts = await mongodb.getDb().collection('contacts').find({}).toArray();

    res.setHeader('Content-Type', 'application/json');

    res.status(200).json(contacts);
  } catch (error) {
    console.error(`Error while getting the list of contacts`, error.message);

    next(error);
  }
};

const getSingle = async (req, res, next) => {
  // #swagger.tags=['Contacts']
  // #swagger.description = 'Endpoint to get a specific contact'
  const { id } = req.params;

  try {
    const contact = await mongodb
      .getDb()
      .collection('contacts')
      .findOne({ _id: new ObjectId(id) });

    res.setHeader('Content-Type', 'application/json');

    res.status(200).json(contact);
  } catch (error) {
    console.error(`Error while getting the user with the following id ${id}`, error.message);

    next(error);
  }
};

const createContact = async (req, res, next) => {
  // #swagger.tags=['Contacts']
  // #swagger.description = 'Endpoint to create a new contact'
  /*  
  #swagger.parameters['obj'] = {
    in: 'body',
    description: 'Add a contact',
    required: true,
    schema: {
      $firstname: 'John',
      $lastname: 'Doe',
      $email: 'john.doe@example.com',
      $favoriteColor: 'Blue',
      $birthday: '2000-01-31'
    } 
  } 
  */
  const newContact = req.body;

  try {
    const response = await mongodb.getDb().collection('contacts').insertOne(newContact);

    if (response.acknowledged) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error ocurred while creating contact');
    }
  } catch (error) {
    console.error(`Error while creating the list of contacts`, error.message);

    res.status(500).json('Some error ocurred while creating contact');

    next(error);
  }
};

const updateContact = async (req, res, next) => {
  // #swagger.tags=['Contacts']
  // #swagger.description = 'Endpoint to update a contact'
  /*  
  #swagger.parameters['obj'] = {
    in: 'body',
    description: 'Add a contact',
    required: true,
    schema: {
      firstname: '',
      lastname: '',
      email: '',
      favoriteColor: '',
      birthday: '2000-01-31'
    } 
  } 
  */
  const { id } = req.params;

  const contactInfo = req.body;

  try {
    const response = await mongodb
      .getDb()
      .collection('contacts')
      .updateOne({ _id: new ObjectId(id) }, { $set: contactInfo });

    if (response.acknowledged && response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error ocurred while creating contact');
    }
  } catch (error) {
    console.error(`Error while updating the list of contacts`, error.message);

    res.status(500).json('Some error ocurred while updating contact');

    next(error);
  }
};

const deleteContact = async (req, res, next) => {
  // #swagger.tags=['Contacts']
  // #swagger.description = 'Endpoint to delete a contact'
  const { id } = req.params;

  try {
    const response = await mongodb
      .getDb()
      .collection('contacts')
      .deleteOne({ _id: new ObjectId(id) });

    if (response.acknowledged && response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error ocurred while creating contact');
    }
  } catch (error) {
    console.error(`Error while getting the list of contacts`, error.message);

    res.status(500).json('Some error ocurred while deleting contact');

    next(error);
  }
};

module.exports = {
  getAll,

  getSingle,

  createContact,

  updateContact,

  deleteContact
};
