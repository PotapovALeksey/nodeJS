const contactService = require("../../models/contacts.model");
const {createSuccessResponse} = require("../../utils/create-success-response.util");

const getContacts = async (req, res) => {
    const contacts = await contactService.getContacts();

    res.json(createSuccessResponse(contacts));
}

module.exports = getContacts;
