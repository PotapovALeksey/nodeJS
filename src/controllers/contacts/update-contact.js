const {NotFound, BadRequest} = require("http-errors");

const {isString} = require("../../utils/is-data.util");
const {createSuccessResponse} = require("../../utils/create-success-response.util");
const {ContactModel} = require("../../models/contact.model");
const {Types} = require("mongoose");

const updateContact = async (req, res) => {
    if (!isString(req.params.contactId)) {
        throw new BadRequest("ContactId is missing");
    }

    if (!Types.ObjectId.isValid(req.params.contactId)) {
        throw new NotFound();
    }

    if (Object.values(req.body).length === 0) {
        throw new BadRequest("Missing fields");
    }

    const updatedContact = await ContactModel.findByIdAndUpdate(req.params.contactId, req.body, { new: true });

    if (updatedContact === null) {
        throw new NotFound();
    }

    res.json(createSuccessResponse(updatedContact));
};

module.exports = updateContact;
