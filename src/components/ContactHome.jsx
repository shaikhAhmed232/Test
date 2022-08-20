import React, { useEffect, useState } from "react";
import Contact from "./Contact";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchContactsApi,
  deleteAllContacts,
} from "../contactFrontendRedux/actions";

const ContactHome = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => {
    return state.contacts.contacts;
  });

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone_Num: "",
  });

  useEffect(() => dispatch(fetchContactsApi()), [contacts]);

  const valueChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const createContact = (e) => {
    e.preventDefault();
    const dataBody = {
      name: values.name,
      email: values.email,
      phone_Num: values.phone_Num,
    };
    fetch("http://127.0.0.1:8000/api/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataBody),
    }).then((response) => console.log("contact created"));
    setValues({
      name: "",
      email: "",
      phone_Num: "",
    });
  };

  const deleteContacts = () => {
    fetch("http://127.0.0.1:8000/api/delete-contacts", {
      method: "DELETE",
    });
    dispatch(deleteAllContacts());
  };

  return (
    <div className="contact-home">
      <div className="add-contact-form">
        <form onSubmit={createContact}>
          <div className="contact-name-field contact-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={values.name}
              placeholder="Enter Name"
              onChange={valueChange}
            />
          </div>
          <div className="contact-email-field contact-field">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={values.email}
              placeholder="Enter Email"
              onChange={valueChange}
            />
          </div>
          <div className="contact-phone-field contact-field">
            <label htmlFor="phone_Num">Phone No</label>
            <input
              type="tel"
              name="phone_Num"
              value={values.phone_Num}
              placeholder="Enter Phone Number"
              onChange={valueChange}
            />
          </div>
          <button type="submit">ADD</button>
        </form>
      </div>
      <div className="contact-list">
        {contacts.length ? (
          contacts.map((contact) => {
            return <Contact key={contact.id} {...contact} />;
          })
        ) : (
          <h4>No Contacts</h4>
        )}
      </div>
      <button id="delete-all" onClick={deleteContacts}>
        Delete All
      </button>
    </div>
  );
};

export default ContactHome;
