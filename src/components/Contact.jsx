import React from "react";

const Contact = ({ name, email, phone_Num }) => {
  return (
    <div className="contact-container">
      <div className="contact__image"></div>
      <div className="contact__name">
        <p>{name}</p>
        <p>{phone_Num}</p>
      </div>
      <div className="contact__btns">
        <button>edit</button>
        <button>del</button>
      </div>
    </div>
  );
};

export default Contact;
