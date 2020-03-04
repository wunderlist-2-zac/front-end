//questions for backend- It says get by month, will I be able to get by everything?
//Will put requests work? for updating is Completed
//Need a is Recurring, must figure out how to setup timer, will reset on recurring

import React from "react";
import "./App.css";
import { createStore, applyMiddleware } from "redux";
import { todoReducer as reducer } from "./reducers/todoReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoList from "./components/TodoList";

const store = createStore(reducer, applyMiddleware(thunk));
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>WunderList</h1>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
