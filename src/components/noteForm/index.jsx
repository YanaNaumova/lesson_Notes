import { useState } from "react";
import styles from "./styles.module.css";
import { addNote } from "../../redux/actions/actionsNode";
import { connect } from "react-redux";

//добавить реакт форм, валидацию
//стилизация
//счетчик
// редактирование

function NoteForm({ addNoteToList }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote({
      ...note,
      [name]: value,
    });
  }

  function handelSubmit(event) {
    event.preventDefault();
    addNoteToList({
      ...note,
      // id: new Date().getTime.toString(),
      id: Math.random() * 1000000,
    });
    setNote({ title: "", content: "" });
  }

  return (
    <form onSubmit={handelSubmit} className={styles.form_container}>
      <input
        value={note.title}
        type="text"
        name="title"
        required
        placeholder="Title"
        onChange={handleChange}
      />
      <textarea
        value={note.content}
        name="content"
        placeholder="Content..."
        required
        onChange={handleChange}
      />
      <button>Add Note</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNoteToList: (noteData) => dispatch(addNote(noteData)),
  };
  //отправить диспечер в качестве пропсов в компонент
};

export default connect(null, mapDispatchToProps)(NoteForm);
