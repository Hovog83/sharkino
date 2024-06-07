import { combineReducers } from 'redux';

import move from "./move";
import recommended from "./recommended";
import getMove from "./getMove";
import gander from "./getGander";

const rootReducer = combineReducers({
  move,
  recommended,
  getMove,
  gander
});
export default rootReducer;