const getContacts = require('./get-contacts');
const getContact = require('./get-contact');
const createContact = require('./create-contact');
const updateContact = require('./update-contact');
const deleteContact = require('./delete-contact');
const updateContactStatus = require('./update-contact-status');

module.exports = {
    getContact,
    getContacts,
    createContact,
    updateContact,
    updateContactStatus,
    deleteContact,
}
