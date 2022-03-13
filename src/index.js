import { StrictMode, useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';



function notesReducer(state = [], action) {
  switch(action.type) {
    case 'POPULATE_NOTES':
      return action.notes;

    case 'ADD_NOTE':
      return [
        ...state,
        {
          title: action.title,
          body: action.body,
        },
      ];

    case 'REMOVE_NOTE':
      return state.filter((note) => note.title !== action.title);
    
    default:
      return state;
  }
}

function NotesApp() {
  // useState runs before useEffect
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
