import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { editNote, setCurrentNote } from "../../redux/actions/actionsNode";
import { connect } from "react-redux";

function Modal({
  setModalOpen,
  currentNodeId,
  setCurrentNote,
  currentNoteData,
  editNewNote,
}) {
  const [editNote, setEditNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setEditNote({
      ...editNote,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    editNewNote(currentNodeId, editNote);
    setModalOpen(false);
  }

  useEffect(() => {
    setCurrentNote(currentNodeId);
  }, []);

  useEffect(() => {
    currentNoteData &&
      setEditNote({
        title: currentNoteData.title,
        content: currentNoteData.content,
      });
  }, [currentNoteData]);

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={editNote.title}
            onChange={handleChange}
          />
          <textarea
            type="text"
            name="content"
            placeholder="Content ..."
            value={editNote.content}
            onChange={handleChange}
          />
          <button type="submit">Edit Node</button>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentNoteData: state.currentNode,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentNote: (id) => dispatch(setCurrentNote(id)),
    editNewNote: (id, newNotData) => dispatch(editNote(id, newNotData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
