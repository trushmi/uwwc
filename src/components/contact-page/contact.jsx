import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";
import { useNavigate } from "react-router-dom";
import Loading from "./loading";

export default function Contact() {
  const form = useRef();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm("gmail", "template_xyoklsk", form.current, "4fBSUAa50GgVEHiaK")
      .then(
        (result) => {
          console.log(result.text);
          navigate("/confirmation");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form-page">
      {isLoading && <Loading />}
      <div className="contact-form-container">
        <div className="contact-title">
          Please fill the form below and we will get in touch with you shortly
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Name:</label>
          <input name="name" className="input" type="text" id="name" />
          <label> Email Address:</label>
          <input type="email" name="email" className="input" />
          <label>Tell us more about you:</label>
          <textarea
            name="message"
            label="Message"
            className="text-area"
            cols="10"
            rows="10"
          />
          <div className="submit-button-container">
            <input type="submit" value="Send" className="btn" />
          </div>
        </form>
      </div>
    </div>
  );
}
