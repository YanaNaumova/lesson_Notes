import {
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  SET_CURRENT_NOTE,
} from "../actions/actionsNode";

const initialState = {
  notesList: [],
  noteCount: 0,
  currentNode: null,
};

const noteReducer = (state = initialState, { type, payload }) => {
  if (type === ADD_NOTE) {
    return {
      ...state,
      noteCount: state.noteCount + 1,
      notesList: [...state.notesList, payload],
    };
  }

  if (type === DELETE_NOTE) {
    return {
      ...state,
      noteCount: state.noteCount - 1,
      notesList: state.notesList.filter((note) => note.id !== payload),
    };
  }

  if (type === SET_CURRENT_NOTE) {
    return {
      ...state,
      currentNode: state.notesList.find((note) => note.id === payload),
    };
  }

  if (type === EDIT_NOTE) {
    return {
      ...state,
      notesList: state.notesList.map((note) => {
        if (note.id === payload.id) {
          return {
            ...note,
            title: payload.editNoteData.title,
            content: payload.editNoteData.content,
          };
        }
        return note;
      }),
    };
  }
  return state;
}; // создаем reducer и знакомим его со store
// передаем в него state и action
//возвращаем state
//reducer может менять состояние store
export default noteReducer;
