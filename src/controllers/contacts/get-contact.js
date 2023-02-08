const {NotFound} = require("http-errors");

const contactService = require("../../models/contacts.model");
const {createSuccessResponse} = require("../../utils/create-success-response.util");

const getContact = async (req, res) => {
    const contact = await contactService.getContact(req.params.contactId);

    if (contact === null) {
        throw new NotFound();
    }

    res.json(createSuccessResponse(contact));
};

module.exports = getContact;
