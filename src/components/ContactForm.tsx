import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded mb-4" required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded mb-4" required />
      <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-2 border rounded mb-4" required></textarea>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
    </form>
  );
};

export default ContactForm;