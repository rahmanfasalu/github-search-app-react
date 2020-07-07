import { combineReducers } from "redux";
import userReducer from "./userReducer";
import repoReducer from "./repoReducer";
export const rootReducer = combineReducers({
  users: userReducer,
  repos: repoReducer,
});
