const { ContactModel } = require("../../models/contact.model");
const { createSuccessResponse } = require("../../utils/create-success-response.util");

const createContact = async (req, res) => {
    const newContact = await ContactModel.create(req.body);

    res.json(createSuccessResponse(newContact));
};

module.exports = createContact;

