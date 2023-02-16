const express = require('express');

const { contactsController } = require('../../controllers');
const { contactSchema } = require('../../schemas/contact.schema');
const { apiWrapper } = require('../../middlewares/api-wrapper.middleware');
const { validationMiddleware } = require('../../middlewares/validation.middleware');

const router = express.Router();

router.get('/', apiWrapper(contactsController.getContacts));

router.get('/:contactId', apiWrapper(contactsController.getContact));

router.post('/', validationMiddleware(contactSchema), apiWrapper(contactsController.createContact));

router.put('/:contactId', apiWrapper(contactsController.updateContact));

router.patch('/:contactId', apiWrapper(contactsController.updateContactStatus));

router.delete('/:contactId', apiWrapper(contactsController.deleteContact));

module.exports = router;
