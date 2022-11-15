import React, { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Contact.scss";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmmited] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmmited(true);
    });
  };

  const handleSubmit = () => {
    setLoading(true);
  };
  return (
    <>
      <h2 className="head-text">Chat With me</h2>

      <div className="app__contact-cards">
        <div className="app__contact-card">
          <img src={images.email} alt="email-img" />
          <a href="mailto:jpratheeppornsak@gmail.com" className="p-text">
            jpratheeppornsak@gmail.com
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__contact-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your name"
              value={name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your email"
              value={email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your message"
              value={message}
              name="message"
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="p-text" onChange={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch.</h3>
        </div>
      )}
    </>
  );
}

export default AppWrap(
  MotionWrap(Contact, "app__contact"),
  "contact",
  "app__primarybg"
);
