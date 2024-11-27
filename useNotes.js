// src/App.js
import React from 'react';
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
    deleteNote,
    pinNote,
    unpinNote,
  } = useNotes();

  const handleSubmit = async (note) => {
    try {
      await addNote(note);
      toast.success('Note added successfully!');
    } catch (error) {
      toast.error('Error adding note: ' + error.message);
    }
  };

  const handleEdit = async (note) => {
    try {
      await editNote(note);
      toast.success('Note updated successfully!');
    } catch (error) {
      toast.error('Error updating note: ' + error.message);
    }
  };

  const handleDelete = async (noteId) => {
    try {
      await deleteNote(noteId);
      toast.success('Note deleted successfully!');
    } catch (error) {
      toast.error('Error deleting note: ' + error.message);
    }
  };

  const handlePin = async (noteId) => {
    try {
      await pinNote(noteId);
      toast.success('Note pinned successfully!');
    } catch (error) {
      toast.error('Error pinning note: ' + error.message);
    }
  };

  const handleUnpin = async (noteId) => {
    try {
      await unpinNote(noteId);
      toast.success('Note unpinned successfully!');
    } catch (error) {
      toast.error('