function Note({ note, removeNote }) {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => removeNote(note.title)}>Remove Note</button>
    </div>
  );
}



export default Note;
