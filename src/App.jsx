import React, { useState } from "react";
import CreateContact from "./CreateContact/CreateContact";
import "./App.css";
import ContactBook from "./ContactBook/ContactBook";
import EditContact from "./EditContact/EditContact";
const App = () => {
  const [contacts, setContacts] = useState([]);
  const [modal, setModal] = useState(false);
  const [contactToEdit, setContactToEdit] = useState(null);

  const handleContact = (newObj) => {
    let newContacts = [...contacts];
    newContacts.push(newObj);
    setContacts(newContacts);
    // console.log(contacts);
  };

  const changeStatus = (id) => {
    const newContacts = contacts.map((item) => {
      if (item.id == id) {
        item.status = !item.status;
      }
      return item;
    });
    setContacts(newContacts);
  };

  const handleDelete = (id) => {
    const newContact = contacts.filter((item) => item.id !== id);
    setContacts(newContact);
  };

  const handleEdit = (contact) => {
    setModal(true);
    setContactToEdit(contact);
  };

  const handleClose = () => {
    setModal(false);
  };

  const saveChanges = (updatedContact) => {
    const newContact = contacts.map((item) => {
      if (item.id === updatedContact.id) {
        return updatedContact;
      }
      return item;
    });
    setContacts(newContact);
    handleClose();
  };
  return (
    <div className="main">
      <CreateContact handleContact={handleContact} />
      <ContactBook
        contacts={contacts}
        changeStatus={changeStatus}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      {modal ? (
        <EditContact
          contactToEdit={contactToEdit}
          handleClose={handleClose}
          saveChanges={saveChanges}
        />
      ) : null}
    </div>
  );
};

export default App;
