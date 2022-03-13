import { useState } from 'react';



function AddNoteForm({ dispatch }) {
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
  
  return (
    <div>
      <p>Add Note</p>
      <form onSubmit={addNote}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value || '')} />
        <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <button>Add Note</button>
      </form>
    </div>
  );
}



export default AddNoteForm;
