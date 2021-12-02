import { combineReducers } from "redux";

import { authReducer } from "domains/auth";

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;
