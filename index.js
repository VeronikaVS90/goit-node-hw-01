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
    }
}

// invokeAction({ action: "list" });
// invokeAction({ action: "getById", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({ action: "add", name: "Veronika", email: "vsokolovanika@gmail.com", phone: "(063) 454 5823" });
invokeAction({ action: "removeById", id: "qdggE76Jtbfd9eWJHrssH"});