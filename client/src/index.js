import React from "react";
import  ReactDOM  from "react-dom/client";
import { Provider } from "react-redux"; 
import {createStore, applyMiddleware, compose } from "redux";
import reducers from './Reducers'
import { thunk } from "redux-thunk"




import App from "./App.js";

const store = createStore(reducers,compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById("root")); // ¡Asegúrate de que el elemento root no sea nulo!
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);