import React, { useState } from "react";
import "./CreateContact.css";

const CreateContact = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleAddContact = () => {
    if (!name.trim() || !number.trim() || !imageURL.trim()) {
      alert("add input please!");
      return;
    }

    const newContact = {
      name: name,
      number: number,
      imageURL: imageURL,
      stasus: false,
      id: Date.now(),
    };
    props.handleContact(newContact);
    setName("");
    setImageURL("");
    setNumber("");
    // console.log(newContact);
  };
  return (
    <div>
      <div className="create-contact">
        <div className="text">
          <h1 className="create-text">Create Contact</h1>
        </div>
        <div className="name">
          <p className="create-contact-p">name</p>
          <input
            type="text"
            className="create-contact-input"
            placeholder="name your contact"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="number">
          <p className="create-contact-p">number</p>
          <input
            type="text"
            className="create-contact-input"
            placeholder="number your contact"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="photo">
          <p className="create-contact-p">imageURL</p>
          <input
            type="text"
            className="create-contact-input"
            placeholder="URL your contact"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>
        <div className="save">
          <button className="save-btn" onClick={handleAddContact}>
            save contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateContact;
