import {program} from 'commander';
import inquirer from 'inquirer';

import {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomers
} from './index.js';

// customer questions
const questions = [
    {
        type: 'input',
        name: 'firstName',
        message: 'Customer First Name'
    }, {
        type: 'input',
        name: 'lastName',
        message: 'Customer Last Name'
    }, {
        type: 'input',
        name: 'phone',
        message: 'Customer Phone Number'
    }, {
        type: 'input',
        name: 'email',
        message: 'Customer Email Id'
    }
]

program
    .version('1.0.0')
    .description('Client management system')

// Add customers
program
    .command('add')
    .description('Add a customer')
    .action(() => {
        inquirer.prompt(questions).then(answers => {
            addCustomer(answers);
        })
    });

//Find customers
program
    .command('find <name>')
    .description('Find a customer')
    .action(name => {
        findCustomer(name);
    });

// Update customers
program
    .command('update <_id>')
    .description('Update a customer')
    .action((_id) => {
        inquirer.prompt(questions).then(answers => {
            updateCustomer(_id, answers);
        })
    });

// Remove customers with alias
program
    .command('remove <_id>')
    .alias('r')
    .description('Remove a customer')
    .action(_id => {
        removeCustomer(_id);
    });

// List customers
program
    .command('list')
    .description('List all customer')
    .action(() => {
        listCustomers();
    });

program.parse(process.argv);