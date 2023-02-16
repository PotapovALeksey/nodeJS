const { ContactModel } = require("../../models/contact.model");
const {createSuccessResponse} = require("../../utils/create-success-response.util");

const getContacts = async (req, res) => {
    const contacts = await ContactModel.find({ $or: [{ deletedAt: { $exists: false }}, { deletedAt: { $eq: null }}]});

    res.json(createSuccessResponse(contacts, contacts.length));
}

module.exports = getContacts;
