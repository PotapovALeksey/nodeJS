const {NotFound} = require("http-errors");

const {isString} = require("../../utils/is-data.util");
const contactService = require("../../models/contacts.model");
const {createSuccessResponse} = require("../../utils/create-success-response.util");

const updateContact = async (req, res) => {
    if (!isString(req.params.contactId)) {
        throw new NotFound("ContactId is missing");
    }

    if (Object.values(req.body).length === 0) {
        throw new NotFound("Missing fields");
    }

    const updatedContact = await contactService.updateContact(req.params.contactId, req.body);

    if (updatedContact === null) {
        throw new NotFound();
    }

    res.json(createSuccessResponse(updatedContact));
};

module.exports = updateContact;
