import Note from './Note';



function NotesList({ notes, removeNote }) {
  return notes.map((note) => (
    <Note note={note} removeNote={removeNote} key={note.title} />
  ));
}



export default NotesList;
