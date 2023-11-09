import React from "react";
import ContactImage from "./../../../shared/assets/Minion Grey2.png";
import ContactForm from "../../../shared/components/contact-form/ContactForm";

const Contact = () => {
  return (
    <section className="contact section" id="section-3">
      <div className="contact-content">
        <div className="contact-left">
          <img src={ContactImage} alt="" />
        </div>
        <div className="contact-right">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
