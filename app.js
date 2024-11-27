// src/App.js
import React, { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteGrid from './components/NoteGrid';
import Pagination from './components/Pagination';
import useNotes from './hooks/useNotes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const {
    notes,
    currentPage,
    totalPages,
    addNote,
    editNote,
    pinNote,
    unpinNote,
  } = useNotes();

  const [selectedNote, setSelectedNote] = useState(null);

  const handleSubmit = async (note) => {
    if (selectedNote) {
      // Editing an existing note
      await editNote({ ...note, id: selectedNote.id });
      setSelectedNote(null);
    } else {
      // Adding a new note
      await addNote(note);
    }
  };

  const handleEdit = (note) => {
    setSelectedNote(note);
  };

  const handlePin = async (noteId) => {
    await pinNote(noteId);
  };

  const handleUnpin = async (noteId) => {
    await unpinNote(noteId);
  };

  const handlePageChange = (page) => {
    // Set the current page in your hook (you might need to implement this)
  };

  const paginatedNotes = notes.slice((currentPage - 1) * 6, currentPage * 6);

  return (
    <div className="App">
      <h1>NoteKeeper</h1>
      <NoteForm onSubmit={handleSubmit} initialNote={selectedNote} />
      <NoteGrid notes={paginatedNotes} onEdit={handleEdit} onPin={handlePin} onUnpin={handleUnpin} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      <ToastContainer />
    </div>
  );
};

export default App;