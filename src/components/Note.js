import { useContext } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks.js/useMousePosition';



function Note({ note }) {
  const { dispatch } = useContext(NotesContext);
  const position = useMousePosition();

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
      <p>({position.x}, {position.y})</p>
      <button onClick={() => removeNote(note.title)}>Remove Note</button>
    </div>
  );
}



export default Note;
