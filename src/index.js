import { StrictMode, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';



function NotesApp() {
  // useState runs before useEffect
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function addNote(e) {
    e.preventDefault();
    setNotes([
      ...notes,
      {
        title,
        body,
      },
    ]);
    setTitle('');
    setBody('');
  };

  function removeNote(title) {
    setNotes(notes.filter((note) => note.title !== title));
  }

  // Works like componentDidMount (fires only after first render—no deps)
  useEffect(() => {
    const notesData = JSON.parse(window.localStorage.getItem('notes'));

    if (notesData) {
      setNotes(notesData);
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

function Note({ note, removeNote }) {
  useEffect(() => {
    console.log('Setting up effect');

    return () => {
      console.log('clean up effect');
    };
  }, []);
  
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => removeNote(note.title)}>Remove Note</button>
    </div>
  );
}



ReactDOM.render(
  <StrictMode>
    <div>
      <NotesApp />
    </div>
  </StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
