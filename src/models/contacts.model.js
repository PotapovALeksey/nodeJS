const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname, '../', 'db', 'contacts.json');

const getContacts = () => fs.readFile(contactsPath).then(contacts => JSON.parse(contacts.toString()));

const getContact = async (contactId) => {
    const contacts = await getContacts();

    return contacts.find(contact => contact.id === contactId) ?? null;
}

const removeContact = async (contactId) => {
    const contacts = await getContacts();

    const newContacts = contacts.filter(contact => contact.id !== contactId);

    if (contacts.length === newContacts.length) {
        return null;
    }

    return fs.writeFile(contactsPath, JSON.stringify(newContacts)).then(() => contactId)
}

const addContact = async ({ name, email, phone }) => {
    const contacts = await getContacts();
    const newContact = { name, email, phone, id: Date.now().toString() };

    const newContacts = [...contacts, newContact];

    return fs.writeFile(contactsPath, JSON.stringify(newContacts)).then(() => newContact);
}

const updateContact = async (contactId, updatingContact) => {
    const contact = await getContact(contactId);

    if (contact === null) {
        return null;
    }

    const updatedContact = { ...contact, ...updatingContact };

    const contacts = await getContacts();
    const updatedContacts = [...contacts, updatedContact];

    return fs.writeFile(contactsPath, JSON.stringify(updatedContacts)).then(() => updatedContact);
}

module.exports = {
    getContacts,
    getContact,
    removeContact,
    addContact,
    updateContact
}
