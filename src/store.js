import { legacy_createStore as createStore } from "redux";

import comboReducers from "./reducers/comboReducers";

const store = createStore(
  comboReducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ /
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
);

export default store;
