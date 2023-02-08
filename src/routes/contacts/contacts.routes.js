const express = require('express');

const { productsController } = require('../../controllers');
const { contactSchema } = require('../../schemas/contact.schema');
const { apiWrapper } = require('../../middlewares/api-wrapper.middleware');
const { validationMiddleware } = require('../../middlewares/validation.middleware');

const router = express.Router();

router.get('/', apiWrapper(productsController.getContact));

router.get('/:contactId', apiWrapper(productsController.getContact));

router.post('/', validationMiddleware(contactSchema), apiWrapper(productsController.createContact));

router.put('/:contactId', apiWrapper(productsController.updateContact));

router.delete('/:contactId', apiWrapper(productsController.deleteContact));

module.exports = router;
