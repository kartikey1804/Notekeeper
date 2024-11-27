// src/hooks/useNotes.js
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchNotes = async () => {
      const notesRef = collection(db, 'notes');
      const notesSnapshot = await getDocs(notesRef);
      const notesData = notesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNotes(notesData);
      setTotalPages(Math.ceil(notesData.length / 6));
    };
    fetchNotes();
  }, []);

  const addNote = async (note) => {
    const notesRef = collection(db, 'notes');
    await addDoc(notesRef, { ...note, pinned: false });
    setNotes([...notes, { ...note, pinned: false }]);
  };

  const editNote = async (note) => {
    const noteRef = doc(db, 'notes', note.id);
    await updateDoc(noteRef, { title: note.title, tagline: note.tagline, body: note.body });
    setNotes(notes.map(n => (n.id === note.id ? note : n)));
  };

  const deleteNote = async (noteId) => {
    const noteRef = doc(db, 'notes', noteId);
    await deleteDoc(noteRef);
    setNotes(notes.filter(n => n.id !== noteId));
  };

  const pinNote = async (noteId) => {
    const noteRef = doc(db, 'notes', noteId);
    await updateDoc(noteRef, { pinned: true });
    setNotes(notes.map(n => (n.id === noteId ? { ...n, pinned: true } : n)));
  };

  const unpinNote = async (noteId) => {
    const noteRef = doc(db, 'notes', noteId);
    await updateDoc(noteRef, { pinned: false });
    setNotes(notes.map(n => (n.id === noteId ? { ...n, pinned: false } : n)));
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return {
    notes,
    currentPage,
    totalPages,
    addNote,
    editNote,
    deleteNote,
    pinNote,
    unpinNote,
    changePage,
  };
};

export default useNotes;