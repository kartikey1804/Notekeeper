// src/components/Note.js
import React from 'react';

const Note = ({ note, onEdit, onPin }) => {
  return (
    <div className={`note ${note.pinned ? 'pinned' : ''}`} onClick={() => onEdit(note)}>
      <h3>{note.title}</h3>
      <h4>{note.tagline}</h4>
      <p>{note.body}</p>
      <button onClick={(e) => { e.stopPropagation(); onPin(note.id); }}>
        {note.pinned ? 'Unpin' : 'Pin'}
      </button>
    </div>
  );
};

export default Note;