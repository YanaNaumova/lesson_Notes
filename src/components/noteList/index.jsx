import { connect } from "react-redux";
import NoteItem from "../noteItem";
import Modal from "../modal";
import { useState } from "react";

function NoteList({ notesList }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentNodeId, setCurrentNodeId] = useState(null);

  if (notesList.length === 0) {
    return <p>You don't have notes</p>;
  }
  return (
    <>
      <div>
        {notesList.map((note) => {
          return (
            <NoteItem
              key={note.id}
              {...note}
              setModalOpen={setModalOpen}
              setCurrentNodeId={setCurrentNodeId}
            />
          );
        })}
        {modalOpen && (
          <Modal setModalOpen={setModalOpen} currentNodeId={currentNodeId} />
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  notesList: state.notesList,
});
export default connect(mapStateToProps, null)(NoteList);
