import { useContext } from 'react';
import Note from './Note';
import NotesContext from '../context/notes-context';



function NotesList() {
  const { notes } = useContext(NotesContext);

  return notes.map((note) => (
    <Note note={note} key={note.title} />
  ));
}



export default NotesList;
