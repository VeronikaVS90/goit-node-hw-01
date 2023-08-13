const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await contacts.listContacts();
            return console.table(allContacts);
        case "getById":
            const oneContact = await contacts.getById(id);
            return console.log(oneContact);
        case "add":
            const newContact = await contacts.add(name, email, phone);
            return console.log(newContact);
        case "removeById":
            const removeContact = await contacts.removeById(id);
            return console.log(removeContact);
        default: 
            return console.log("Unknown action")
    }
}

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);