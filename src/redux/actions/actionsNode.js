export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const SET_CURRENT_NOTE = "SET_CURRENT_NOTE";

export const addNote = (noteData) => ({
  type: ADD_NOTE,
  payload: noteData,
});

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  payload: id,
});

export const editNote = (id, editNoteData) => ({
  type: EDIT_NOTE,
  payload: {
    id,
    editNoteData,
  },
});

export const setCurrentNote = (id) => ({
  type: SET_CURRENT_NOTE,
  payload: id,
});
