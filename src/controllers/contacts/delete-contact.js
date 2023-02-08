const { NotFound } = require("http-errors");
console.log('NotFound', NotFound);
const {isString} = require("../../utils/is-data.util");
const contactService = require("../../models/contacts.model");
const {createSuccessResponse} = require("../../utils/create-success-response.util");

const deleteContact = async (req, res) => {
    if (!isString(req.params.contactId)) {
        throw new NotFound('ContactId is missing')
    }

    const removedContact = await contactService.removeContact(req.params.contactId);

    if (removedContact === null) {
        throw new NotFound();
    }

    res.json(createSuccessResponse(removedContact));
};

module.exports = deleteContact;
