import { StrictMode, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';



function NotesApp() {
  const notesData = JSON.parse(window.localStorage.getItem('notes'));
  const [notes, setNotes] = useState(notesData || []);
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

  useEffect(() => {
    window.localStorage.setItem('notes', JSON.stringify(notes));
  });

  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => (
        <div key={note.title}>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
          <button onClick={() => removeNote(note.title)}>Remove Note</button>
        </div>
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
