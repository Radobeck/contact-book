import React, { useState } from "react";
import "./EditContact.css";
const EditContact = (props) => {
  const [editContact, setEditContact] = useState(props.contactToEdit);
  return (
    <div className="main-modal">
      <div className="inner-modal">
        <div className="close">
          <button onClick={props.handleClose} className="close-btn">
            X
          </button>
        </div>
        <input
          type="text"
          value={editContact.name}
          onChange={(e) =>
            setEditContact({ ...editContact, name: e.target.value })
          }
          className="edit-inp"
        />

        <input
          type="text"
          value={editContact.number}
          onChange={(e) =>
            setEditContact({ ...editContact, number: e.target.value })
          }
          className="edit-inp"
        />

        <input
          type="text"
          value={editContact.imageURL}
          onChange={(e) =>
            setEditContact({ ...editContact, imageURL: e.target.value })
          }
          className="edit-inp"
        />

        <button
          onClick={() => props.saveChanges(editContact)}
          className="save-btn"
        >
          save changes
        </button>
      </div>
    </div>
  );
};

export default EditContact;
