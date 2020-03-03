import React, { useEffect, useState } from "react";
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
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    props.actions.getTasksData();
  }, []);

  const onSubmit = e => {
    var date = new Date();
    var dateStr =
      date.getFullYear() +
      "-" +
      ("00" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      ("00" + date.getDate()).slice(-2) +
      " " +
      ("00" + date.getHours()).slice(-2) +
      ":" +
      ("00" + date.getMinutes()).slice(-2) +
      ":" +
      ("00" + date.getSeconds()).slice(-2);
    var endDate = e.enddate + ":00";
    var newEndDate = endDate.replace("T", " ");
    console.log("title", e.title);
    console.log("start Date", dateStr);
    console.log("end Date", newEndDate);
    console.log("recurring", e.recurring);
    const addATask = {
      title: e.title,
      start: dateStr,
      end: newEndDate,
      is_recurring: e.recurring
    };

    props.actions.postNewTask(addATask);
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
            name="title"
            ref={register({ min: 1, maxLength: 20 })}
          />
          <input
            type="datetime-local"
            placeholder="end date"
            name="enddate"
            ref={register}
          />
          <select name="recurring" ref={register}>
            <option value="">Only Once</option>
            <option value="h">Hourly</option>
            <option value="d"> Daily</option>
            <option value="m"> Monthly</option>
            <option value="y"> Yearly</option>
          </select>

          <input type="submit" />
        </form>
      </header>
      <section className="main">
        {props.tasks &&
          props.tasks.map(task => {
            return <Todo task={task} key={task.id} />;
          })}
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
