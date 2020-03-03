import React from "react";
import Timer from "react-compound-timer";

//1 second in timer is 4000 seconds
const TodoRow = props => {
  return (
    <div className="singleTask">
      <div className="spacing">
        <p>Task: {props.task.title}</p>
      </div>
      <div className="spacing">
        <Timer initialTime={4000} direction="backward">
          {() => (
            <React.Fragment>
              <Timer.Days /> days
              <Timer.Hours /> hours
              <Timer.Minutes /> minutes
              <Timer.Seconds /> seconds
            </React.Fragment>
          )}
        </Timer>
      </div>
      <div className="spacing">
        {props.task.is_recurring != null ? (
          <p> Recurring: {props.task.is_recurring}</p>
        ) : (
          <p>Task Isn't Recurring</p>
        )}
      </div>
    </div>
  );
};

export default TodoRow;
