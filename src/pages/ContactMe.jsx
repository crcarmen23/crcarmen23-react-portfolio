/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';

function ContactMe() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleInputChange = (e) => {

    const { target } = e;
    const type = target.name;
    const value = target.value;

    if (type === 'firstName') {
      setFirstName(value)
    } else if (type === 'lastName') {
      setLastName(value)
    } else if (type === 'email') {
      setEmail(value)
    } else {
      setMessage(value)
    }

    return
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email address is invalid');

      return;

    }

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${firstName} ${lastName}`);
    setFirstName('');
    setLastName('');
  };

  return (
    <div className="m-5 min-vh-100">
      <h1 >Let's Get in Touch!</h1>
      <p className="contactDescription m-4">Thank you for visiting my portfolio and taking the time to learn a bit about me. I'm excited about the possibilities that lie ahead, and I invite you to explore my projects and get in touch. Let's connect and create something amazing together!</p>
      <div className="container text-center flex-column mb-3 justify-content-center align-items-center vh-50">
        <form className="card form w-75 d-flex flex-column py-3 mb-3 justify-content-center align-items-center" onSubmit={handleFormSubmit}>
          <input
            value={firstName}
            name="firstName"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name"
            required
            className="w-75"
          />
          <input
            value={lastName}
            name="lastName"
            onChange={handleInputChange}
            type="text"
            placeholder="Last Name"
            required
            className="w-75"
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="Email Address"
            required
            className="w-75"
          />
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
            rows="3"
            required
            className="w-75 m-1"
          ></textarea>
          <br />
          <button type="submit" className="btn btn-primary m-2 shadow bg-body-tertiary rounded w-25">
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactMe;
