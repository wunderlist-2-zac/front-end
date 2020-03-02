import React, { useEffect } from "react";
import { TransitionMotion, spring, presets } from "react-motion";
import { useForm } from "react-hook-form";
import { bindActionCreators } from "redux";
import Todo from "./Todo";
// import {
//   postNewTask,
//   postNewTaskSuccess,
//   getTasksData,
//   getTasksDataSuccess,
//   deleteTask,
//   deleteTaskSuccess,
//   completeTask,
//   completeTaskSuccess
// } from "../actions";
import { connect } from "react-redux";
import * as Index from "../actions/index";

const TodoList = props => {
  useEffect(() => {
    console.log("useeffect");
    props.actions.getTasksData();
  }, []);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = e => {
    e.preventDefault();
  };

  //Do we use actions? guess so cause state
  var itemsNotFinished;

  // handleChange = ({ target: { value } }) => {};
  // console.log("the date", Date.now());
  // // //Adds new item
  // handleSubmit = e => {
  //   e.preventDefault();
  //   const newTask = {
  //     title: "",
  //     start: ""
  //   };
  //   console.log("test");
  //   // props.task.postNewTask(newTask);
  //   // add to top of the list
  // };

  // //onClick to mark as complete
  // handleComplete = doneID => {};

  // //marks all as complete
  // handleToggleAll = () => {
  //   // const allNotDone = props.markAllDone();
  // };

  // //Deletes all completed items
  // handleClearCompleted = () => {};

  return (
    <div className="wholetodo">
      <header className="header">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Title"
            name="Title"
            ref={register({ min: 1, maxLength: 20 })}
          />
          <input
            type="datetime-local"
            placeholder="End-date"
            name="End-date"
            ref={register}
          />
          <select name="Is it recurring" ref={register}>
            <option value="once">Only Once</option>
            <option value="Hourly">Hourly</option>
            <option value=" Daily"> Daily</option>
            <option value=" Monthly"> Monthly</option>
            <option value=" Yearly"> Yearly</option>
          </select>

          <input type="submit" />
        </form>
      </header>
      <section className="main">
        <Todo />
      </section>
      <footer className="footer">
        <span className="todo-count">
          <strong>{itemsNotFinished}</strong>{" "}
          {itemsNotFinished === 1 ? "item" : "items"} left
        </span>
        <br></br>
        <button className="clear-completed">Clear completed</button>
        <form>
          <input type="text" placeholder="Search through todos" name="search" />
        </form>
      </footer>
    </div>
  );
};

// export default TodoList;
const mapStateToProps = state => {
  return {
    tasks: state
  };
};
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Index, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
