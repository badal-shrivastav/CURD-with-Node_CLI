const mongoose = require('mongoose');

// Defining Schema
const customerSchema = mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    phone: { type: String },
    email: { type: String }
});

module.exports = mongoose.model('Customer', customerSchema);