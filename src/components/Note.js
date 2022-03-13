import { useContext } from 'react';
import NotesContext from '../context/notes-context';



function Note({ note }) {
  const { dispatch } = useContext(NotesContext);
  
  function removeNote(title) {
    dispatch({
      type: 'REMOVE_NOTE',
      title,
    });
  }
  
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => removeNote(note.title)}>Remove Note</button>
    </div>
  );
}



export default Note;
