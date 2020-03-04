import Login from "./components/Login";
import SignUp from "./components/SignUp";
import LandingPage from "./components/LandingPage";
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
import PrivateRoute from "./routes/PrivateRoute";
const store = createStore(reducer, applyMiddleware(thunk));
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/todoapp" component={TodoList} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
