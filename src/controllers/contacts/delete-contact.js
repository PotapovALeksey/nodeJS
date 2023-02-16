const { NotFound, BadRequest } = require("http-errors");
const {Types} = require("mongoose");
const { formatISO } = require('date-fns');

const {isString} = require("../../utils/is-data.util");
const {createSuccessResponse} = require("../../utils/create-success-response.util");
const {ContactModel} = require("../../models/contact.model");

const deleteContact = async (req, res) => {
    if (!isString(req.params.contactId)) {
        throw new BadRequest('ContactId is missing');
    }
    if (!Types.ObjectId.isValid(req.params.contactId)) {
        throw new NotFound();
    }

    const removedContact = await ContactModel.findByIdAndUpdate(req.params.contactId, { deletedAt: formatISO(Date.now()) });

    if (removedContact === null) {
        throw new NotFound();
    }

    res.json(createSuccessResponse(removedContact));
};

module.exports = deleteContact;
