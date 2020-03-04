import React from "react";
import Timer from "react-compound-timer";
import { connect } from "react-redux";
import * as Index from "../actions/index";
import { bindActionCreators } from "redux";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//1 second in timer is 4000 seconds

const TodoRow = props => {
  //converting start to milliseconds
  var startTime = props.task.start;
  var startTimeNoT = startTime.replace("T", " ");
  var startTimeNoChar = startTimeNoT.replace("Z", "");
  startTimeNoChar = startTimeNoChar.substring(0, startTimeNoChar.length - 4);
  var startSeconds = Date.parse(startTimeNoChar);

  //converting end to milliseconds
  var endTime = props.task.end;
  var endTimeNoT = endTime.replace("T", " ");
  var endTimeNoChar = endTimeNoT.replace("Z", "");
  endTimeNoChar = endTimeNoChar.substring(0, endTimeNoChar.length - 4);
  var endSeconds = Date.parse(endTimeNoChar);

  //Subtracting times
  var timerMilliseconds = endSeconds - startSeconds;

  //Changing isRecurring to full string
  var recurringString = "";
  if (props.task.is_recurring === "h") {
    recurringString = "hourly";
  } else if (props.task.is_recurring === "d") {
    recurringString = "daily";
  } else if (props.task.is_recurring === "w") {
    recurringString = "weekly";
  } else if (props.task.is_recurring === "m") {
    recurringString = "monthly";
  } else {
    recurringString = "Only Once";
  }

  const deleteTask = () => {
    props.actions.deleteTask(props.task);
  };

  const markTaskComplete = () => {
    props.actions.completeTask(props.task);
  };
  // const repeatWithRecurring = passIn => {
  //   if (props.task.is_recurring === "h") {
  //     passIn = 3600;
  //   } else if (props.task.is_recurring === "d") {
  //     passIn = 86400;
  //   } else if (props.task.is_recurring === "w") {
  //     passIn = 604800;
  //   } else if (props.task.is_recurring === "m") {
  //     passIn = 2630000;
  //   } else {
  //     passIn = 0;
  //   }
  //   return passIn;
  // };
  // var intervalNumber = 0;
  // const createRecurringTask = () => {
  //   const newObject = {
  //     title: props.task.title,
  //     start: props.task.start,
  //     end: props.task.end,
  //     is_recurring: props.task.is_recurring
  //   };
  //   props.actions.postNewTask(newObject);
  // };

  // setTimeout(createRecurringTask, timerMilliseconds);

  return (
    <div
      onClick={markTaskComplete}
      className={props.task.completed ? "singleTaskCompleted" : "singleTask"}
    >
      <div className="spacing">
        <p>Task: {props.task.title}</p>
      </div>
      <div className="spacingtimer">
        <Timer
          className="timer"
          initialTime={timerMilliseconds}
          direction="backward"
        >
          {({ reset }) => (
            <React.Fragment>
              <Timer.Days />
              <span> </span> days <span> </span>
              <Timer.Hours />
              <span> </span> hours<span> </span>
              <Timer.Minutes />
              <span> </span>
              minutes<span> </span>
              <Timer.Seconds />
              <span> </span> seconds<span> </span>
            </React.Fragment>
          )}
        </Timer>
      </div>
      <div className="spacing">
        {props.task.is_recurring != null ? (
          <p> Recurring: {recurringString}</p>
        ) : (
          <p>Task Isn't Recurring</p>
        )}
      </div>
      <div onClick={deleteTask}>
        <FontAwesomeIcon className="trash" icon={faTrash} />
      </div>
    </div>
  );
};
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoRow);
