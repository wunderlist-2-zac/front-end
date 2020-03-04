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
  const [query, setQuery] = useState("");
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

  var counter = 0;
  props.tasks.map(task => {
    if (!task.completed) {
      return (counter += 1);
    } else {
      return counter;
    }
  });

  const deleteTasks = () => {
    const arrayOfCompleted = props.tasks.filter(task => task.completed);
    arrayOfCompleted.map(task => {
      return props.actions.deleteTask(task);
    });
  };
  var filteredTasks = props.tasks.filter(task => {
    return task.title.toLowerCase().includes(query.toLowerCase());
  });

  const searching = event => {
    setQuery(event.target.value);
  };
  return (
    <div className="wholetodo">
      <h1>Welcome to Wunderlist!</h1>
      <p>making all your tasks easily accessible</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formatForm">
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
        </div>
        <button type="submit" className="topButton">
          Submit
        </button>
      </form>

      {filteredTasks &&
        filteredTasks.map(task => {
          return <Todo task={task} key={task.id} />;
        })}

      <p className="todo-count">
        <strong>{counter}</strong> {counter === 1 ? "item" : "items"} left
      </p>
      <br></br>
      <button onClick={deleteTasks} className="bottomButton">
        Clear completed
      </button>
      <form>
        <input
          type="text"
          className="bottomInput"
          placeholder="Search through todos"
          name="search"
          onChange={searching}
        />
        <br></br>
        {/* <button onClick={}>completed</button>
          <button onClick={}>not completed</button> */}
      </form>
    </div>
  );
};

// export default TodoList;
const mapStateToProps = state => {
  return {
    tasks: state.todos,
    isLoading: state.isLoading
  };
};
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Index, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
