const mongoose = require('mongoose');
require("dotenv").config();

mongoose.Promise = global.Promise;

// connecting with DB
const db = mongoose.connect(`mongodb+srv://${process.env.userName}:${process.env.password}@${process.env.clusterName}.abvlb8t.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Import model
const Customer = require('./models/customer');

const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.info("New customer added");
        mongoose.connection.close()
    })
}

// Find customer
const findCustomer = (name) => {
    Customer.find({$or: [{firstName: name}, {lastName: name}]})
        .then(customer => {
            console.info(customer);
            console.info(`${customer.length} matches`);
            mongoose.connection.close()
        })
}

// update customer
const updateCustomer = (_id, customer) => {
    Customer.updateOne({_id}, customer)
        .then(customer => {
            console.info('Customer Updated');
            mongoose.connection.close();
        })
}

// Remove Customer
const removeCustomer = (_id) => {
    Customer.deleteOne({_id})
        .then(customer => {
            console.info('Customer Removed');
            mongoose.connection.close();
        })
}

// List Customer
const listCustomers = () => {
    Customer.find()
        .then(customer => {
            console.info(customer);
            console.info(`${customer.length} customers`);
            mongoose.connection.close();
        })
}

module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomers
}