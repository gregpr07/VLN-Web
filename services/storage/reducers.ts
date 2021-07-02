import { combineReducers } from "redux";

import rootReducer from "./reducers/root-reducer";

export default combineReducers({
  token: rootReducer,
});
