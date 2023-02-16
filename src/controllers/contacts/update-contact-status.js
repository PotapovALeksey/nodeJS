const {Types} = require("mongoose");
const { NotFound, BadRequest } = require("http-errors")
const {isString, isExist} = require("../../utils/is-data.util");
const {ContactModel} = require("../../models/contact.model");
const {createSuccessResponse} = require("../../utils/create-success-response.util");

const updateContactStatus = async (req, res) => {
    const { contactId } = req.params;
    const { isFavorite } = req.body;

    if (!isString(contactId)) {
        throw new BadRequest("ContactId is missing");
    }

    if (!Types.ObjectId.isValid(contactId)) {
        throw new NotFound();
    }

    if (!isExist(isFavorite)) {
        throw new BadRequest('isFavorite field is missing');
    }

    const updatedContact = await ContactModel.findByIdAndUpdate(contactId, { isFavorite }, { new: true });

    res.json(createSuccessResponse(updatedContact));
};

module.exports = updateContactStatus;
