import styles from "./styles.module.css";
import { connect } from "react-redux";
import { deleteNote } from "../../redux/actions/actionsNode";

function NoteItem({
  id,
  title,
  content,
  deleteNoteFromList,
  setModalOpen,
  setCurrentNodeId,
}) {
  function handelClick() {
    setCurrentNodeId(id);
    setModalOpen(true);
  }

  return (
    <div className={styles.note_item_container}>
      <h3>{title}</h3>
      <p>{content}</p>
      <button className={styles.note_btn} onClick={handelClick}>
        Edit
      </button>
      <button
        className={styles.note_btn}
        onClick={() => deleteNoteFromList(id)}
      >
        Delete
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNoteFromList: (id) => dispatch(deleteNote(id)),
  };
};

export default connect(null, mapDispatchToProps)(NoteItem);
