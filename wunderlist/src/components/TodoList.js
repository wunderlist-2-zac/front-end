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

const display = (tasks, filter, query) => {
  var tasksToReturn = [];
  var tasksToFilter = tasks.filter(task => {
    return task.title.toLowerCase().includes(query.toLowerCase());
  });
  tasksToFilter.forEach(task => {
    if (filter === "all") {
      tasksToReturn.push(task);
    } else if (filter === "completed" && task.completed) {
      tasksToReturn.push(task);
    } else if (filter === "notCompleted" && !task.completed) {
      tasksToReturn.push(task);
    }
  });

  return tasksToReturn;
};
const TodoList = props => {
  const { register, handleSubmit } = useForm();
  const [query, setQuery] = useState("");
  const [filterToDos, setFilterToDos] = useState([]);
  const [whichFilter, setWhichFilter] = useState("all");
  useEffect(() => {
    props.actions.getTasksData();
  }, []);
  useEffect(() => {
    setFilterToDos(display(props.tasks, whichFilter, query));
  }, [props.tasks, whichFilter, query]);

  // const onSubmit = e => {
  //   var date = new Date();
  //   var dateStr =
  //     date.getFullYear() +
  //     "-" +
  //     ("00" + (date.getMonth() + 1)).slice(-2) +
  //     "-" +
  //     ("00" + date.getDate()).slice(-2) +
  //     " " +
  //     ("00" + date.getHours()).slice(-2) +
  //     ":" +
  //     ("00" + date.getMinutes()).slice(-2) +
  //     ":" +
  //     ("00" + date.getSeconds()).slice(-2);
  //   var endDate = e.enddate + ":00";
  //   var newEndDate = endDate.replace("T", " ");
  //   console.log("title", e.title);
  //   console.log("start Date", dateStr);
  //   console.log("end Date", newEndDate);
  //   console.log("recurring", e.recurring);
  //   const addATask = {
  //     title: e.title,
  //     start: dateStr,
  //     end: newEndDate,
  //     is_recurring: e.recurring
  //   };

  //   props.actions.postNewTask(addATask);
  // };

  const onSubmit = data => {
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
    var endDate = data.enddate + ":00";
    var newEndDate = endDate.replace("T", " ");
    const addATask = {
      title: data.title,
      start: dateStr,
      end: newEndDate,
      is_recurring: data.recurring
    };
    console.log(addATask);
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

  const searching = event => {
    setQuery(event.target.value);
  };

  const completed = () => {
    setWhichFilter("completed");
  };
  const notCompleted = () => {
    setWhichFilter("notCompleted");
  };
  const all = () => {
    setWhichFilter("all");
  };
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="wholetodo">
      <h1>Welcome to Wunderlist!</h1>
      <div className="topFormatting">
        <p>making all your tasks easily accessible</p>
        <button onClick={logout} className="signOut">
          Sign out
        </button>
      </div>

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
        <input type="submit" className="topButton" text="Submit" />
      </form>

      {filterToDos &&
        filterToDos.map(task => {
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
      <div className="buttonFlexing">
        <button
          className={
            whichFilter === "completed" ? "topButtonComplete" : "topButton"
          }
          onClick={completed}
        >
          Completed
        </button>
        <button
          className={
            whichFilter === "notCompleted" ? "topButtonComplete" : "topButton"
          }
          onClick={notCompleted}
        >
          Not Completed
        </button>
        <button
          className={whichFilter === "all" ? "topButtonComplete" : "topButton"}
          onClick={all}
        >
          All
        </button>
      </div>
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
