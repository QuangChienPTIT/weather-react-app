import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga";
import rootReducer from "./reducers/index";

const sagaMiddleware = createSagaMiddleware();

var composeEnhancer =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false })
    : compose;

const initStore = () => {
  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];
  var store = createStore(rootReducer, composeEnhancer(...enhancers));
  sagaMiddleware.run(rootSaga);
  return store;
};
export default initStore;
