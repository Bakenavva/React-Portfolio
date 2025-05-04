import React, { useState } from 'react';
import './contactPage.css';

function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = form;
    if (!name || !email || !message) {
      setError('Please fill in all fields!');
      return;
    }

    // Simulate form submission
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Enter your message"
          rows="5"
        />

        {error && <div className="error-message">{error}</div>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;