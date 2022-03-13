import { useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notes';
import NotesList from './NotesList';
import AddNoteForm from './AddNoteForm';
import NotesContext from '../context/notes-context';



function NotesApp() {
  // useReducer and useState run before useEffect
  const [notes, dispatch] = useReducer(notesReducer, []);

  // Works like componentDidMount (fires only after first render—no deps)
  useEffect(() => {
    const notes = JSON.parse(window.localStorage.getItem('notes'));

    if (notes) {
      dispatch({
        type: 'POPULATE_NOTES',
        notes,
      });
    }
  }, []);
  
  // Make useEffect run only when its dependencies' values change
  useEffect(() => {
    window.localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <h1>Notes</h1>
      <NotesList />
      <AddNoteForm />
    </NotesContext.Provider>
  );
}



export default NotesApp;
