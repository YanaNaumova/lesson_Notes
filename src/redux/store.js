import { createStore } from "redux";
import noteReducer from "./reducers/reducersNode";

const store = createStore(noteReducer); //принимает минимум 1 reducer
//stor может быть только один
export default store;
