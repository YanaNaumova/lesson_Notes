import styles from "./styles.module.css";
import NoteForm from "../noteForm";
import NoteList from "../noteList";
import NoteCount from "../noteCount";

function Main() {
  return (
    <div>
      <NoteCount />
      <NoteForm />
      <NoteList />
    </div>
  );
}

export default Main;
