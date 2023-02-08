const contactService = require("../../models/contacts.model");
const {createSuccessResponse} = require("../../utils/create-success-response.util");

const createContact = async (req, res) => {
    const newContact = await contactService.addContact(req.body);

    res.json(createSuccessResponse(newContact));
};

module.exports = createContact;

