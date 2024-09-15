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

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        noteCount: state.noteCount + 1,
        notesList: [...state.notesList, action.payload],
      };
    case DELETE_NOTE:
      return {
        ...state,
        noteCount: state.noteCount - 1,
        notesList: state.notesList.filter((note) => note.id !== action.payload),
      };
    case SET_CURRENT_NOTE:
      return {
        ...state,
        currentNode: state.notesList.find((note) => note.id === action.payload),
      };
    case EDIT_NOTE:
      return {
        ...state,
        notesList: state.notesList.map((note) => {
          if (note.id === action.payload.id) {
            return {
              ...note,
              title: action.payload.editNoteData.title,
              content: action.payload.editNoteData.content,
            };
          }
          return note;
        }),
      };
    default:
      return state;
  }
}; // создаем reducer и знакомим его со store
// передаем в него state и action
//возвращаем state
//reducer может менять состояние store
export default noteReducer;
