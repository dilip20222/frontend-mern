import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./saga";
import rootReducer from "./combineReducer";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware, logger);
  },
});

sagaMiddleware.run(rootSaga);

export default store;
