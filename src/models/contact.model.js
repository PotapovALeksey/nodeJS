const { Schema, model } = require('mongoose');

const contactSchema = Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact']
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    isFavorite: {
        type: Boolean,
        default: false,
    },
    deletedAt: {
        type: Date,
        default: null,
        select: false,
    },
}, { versionKey: false, timestamps: true });

const ContactModel = model('contact', contactSchema);

module.exports = { ContactModel };
