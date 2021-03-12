import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import { createBrowserHistory } from "history";
import { createSagaMiddleware } from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import rootReducer, { rootSaga } from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";
import rootReducer, { rootSaga } from "./modules/index";

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(ReduxThunk.withExtraArgument({ history: customHistory })),
    sagaMiddleware,
    logger
  )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Router history={customHistory}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
