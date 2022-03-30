import React, { useState, useEffect } from "react";
import "./Contact.css";

import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mrgjeorr");

  const [isNoteVisible, setIsNoteVisible] = useState(true);

  useEffect(() => {
    if (state.succeeded) {
      setIsNoteVisible(true);

      setTimeout(() => {
        window.location.reload(false);
      }, 2000);
    } else {
      setIsNoteVisible(false);
    }
  }, [state]);

  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <div className="underline"></div>
      <h3>Whether It Is Frontend Or Vector / Design Projects...</h3>
      <p>
        ...if you have any questions, please, do not hesitate to contact me.
      </p>

      {/* forma*/}
      <form className="contact-form" onSubmit={handleSubmit}>
        <h4>Your info and message : </h4>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          placeholder="NAME"
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <input
          type="text"
          id="lastname"
          name="lastname"
          className="form-input"
          placeholder="LAST NAME"
          required
        />
        <ValidationError
          prefix="Lastname"
          field="lastname"
          errors={state.errors}
        />
        <input
          type="email"
          id="email"
          className="form-input"
          placeholder="YOUR EMAIL"
          name="_replyto"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          name="message"
          placeholder="YOUR MESSAGE : "
          className="form-input"
          rows="5"
          id="text"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button className="btn" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>

      {isNoteVisible && (
        <div className="form-message">
          <h3>
            Thank you very much for your message. <br /> I'll get right back to
            you as soon as possible.
          </h3>
        </div>
      )}
    </section>
  );
};

export default Contact;
