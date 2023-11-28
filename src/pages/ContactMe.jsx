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
    <div className="m-5">
      <h1>Let's Get in Touch!</h1>
      <div className="card container text-center">
        <h1>

        </h1>
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            value={firstName}
            name="firstName"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name"
            required
          />
          <input
            value={lastName}
            name="lastName"
            onChange={handleInputChange}
            type="text"
            placeholder="Last Name"
            required
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="Email Address"
            required
          />
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
            required
          />
          <button type="submit">
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