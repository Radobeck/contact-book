import React, { useState } from "react";
import "./ContactBook.css";
import deleteIcon from "../Images/delete-icon.svg";
import editIcon from "../Images/edit-icon.svg";
const ContactBook = (props) => {
  // console.log(props);

  return (
    <div className="contact-book">
      <h1 className="contact-book-h1">Contact Book</h1>
      <div className="contact-book">
        {props.contacts.map((item) => (
          <div className="contact-item" key={item.id}>
            <div className="contact-image">
              <img src={item.imageURL} alt="" className="contact-imageURL" />
            </div>
            <div className="contact-text">
              <p className="contact-name">{item.name}</p>
              <p className="contact-number">{item.number}</p>
            </div>
            <div className="contact-icons">
              <button
                onClick={() => props.handleDelete(item.id)}
                className="item-icon"
              >
                <img src={deleteIcon} alt="" className="icons" />
              </button>
              <button
                onClick={() => props.handleEdit(item.id)}
                className="item-icon"
              >
                <img src={editIcon} alt="" className="icons" />
              </button>
            </div>
          </div>
        ))}
        {/* <div className="contact-item">
          <div className="contact-image">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="contact-imageURL"
            />
          </div>
          <div className="contact-text">
            <p className="contact-name">test</p>
            <p className="contact-number">1000000</p>
          </div>
          <div className="contact-icons">
            <button className="item-icon">
              <img src={deleteIcon} alt="" className="icons" />
            </button>
            <button className="item-icon">
              <img src={editIcon} alt="" className="icons" />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContactBook;
