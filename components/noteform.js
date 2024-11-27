// src/components/NoteForm.js
import React, { useState, useEffect } from 'react';

const NoteForm = ({ onSubmit, initialNote }) => {
  const [title, setTitle] = useState('');
  const [tagline, setTagline] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (initialNote) {
      setTitle(initialNote.title);
      setTagline(initialNote.tagline);
      setBody(initialNote.body);
    }
  }, [initialNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, tagline, body });
    setTitle('');
    setTagline('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <input type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} placeholder="Tagline" />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body" required />
      <button type="submit">Save Note</button>
    </form>
  );
};

export default NoteForm;