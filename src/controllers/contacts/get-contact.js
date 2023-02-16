const { NotFound } = require("http-errors");
const { Types } = require('mongoose');

const { ContactModel } = require("../../models/contact.model");
const { createSuccessResponse } = require("../../utils/create-success-response.util");

const getContact = async (req, res) => {
    if (!Types.ObjectId.isValid(req.params.contactId)) {
        throw new NotFound();
    }

    const contact = await ContactModel.findById(req.params.contactId);

    if (contact === null) {
        throw new NotFound();
    }

    res.json(createSuccessResponse(contact));
};

module.exports = getContact;
