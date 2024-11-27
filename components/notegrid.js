// src/components/NoteGrid.js
import React from 'react';
import Note from './Note';

const NoteGrid = ({ notes, onEdit, onPin }) => {
  return (
    <div className="note-grid">
      {notes.map(note => (
        <Note key={note.id} note={note} onEdit={onEdit} onPin={onPin} />
      ))}
    </div>
  );
};

export default NoteGrid;