import { useState, useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notes';
import Note from './Note';



function NotesApp() {
  // useReducer and useState run before useEffect
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function addNote(e) {
    e.preventDefault();
    dispatch({
      type: 'ADD_NOTE',
      title,
      body,
    });
    setTitle('');
    setBody('');
  };

  function removeNote(title) {
    dispatch({
      type: 'REMOVE_NOTE',
      title,
    });
  }

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
    <div>
      <h1>Notes</h1>
      {notes.map((note) => (
        <Note note={note} removeNote={removeNote} key={note.title} />
      ))}
      <p>Add Note</p>
      <form onSubmit={addNote}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value || '')} />
        <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <button>Add Note</button>
      </form>
    </div>
  );
}



export default NotesApp;
