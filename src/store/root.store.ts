import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root.reducer";

const sagaMiddleware = createSagaMiddleware();
const rootStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export default rootStore;
