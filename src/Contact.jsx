import React from 'react';
import './Contact.css'; // Import the CSS file

export default function Contact() {
  return (
    
    <form className="form-container">
        <div className="contact-us">Contact Us</div>
      <div className="text-wrapper">Write to us</div>
  <div className="mb-3">
    <input
      type="text"
      className="form-control transparent-input"
      id="name1"
      placeholder="First Name"
    />
  
    <input
      type="text"
      className="form-control transparent-input"
      id="name2"
      placeholder="Last Name"
    />
  </div>

      <div className="mb-1">
        <label htmlFor="exampleInputEmail1" className="form-label visually-hidden">
          Email
        </label>
        <input
          type="email"
          className="form-control transparent-input"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email"
        />
        <div id="emailHelp" className="form-text"></div>
      </div>
      {/* Add more similar input boxes */}
      <div className="mb-2">
        <label htmlFor="message" className="form-label visually-hidden">
          Message
        </label>
        <textarea
          className="form-control transparent-input"
          id="message"
          rows="4"
          placeholder="Enter message"
        />
      </div>

      {/* You can add more input boxes as needed */}

      <button type="submit" className="btn-primary">
        Submit
      </button>
    </form>
  );
}