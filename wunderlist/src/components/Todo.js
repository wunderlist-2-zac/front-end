import React from "react";
import Timer from "react-compound-timer";
const TodoRow = props => {
  return (
    <div className="singleTask">
      <div className="spacing">
        {/* <p>{props.task.title}</p> */}
        <p>Task name</p>
      </div>
      <div className="spacing">
        <Timer initialTime={55000} direction="backward">
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
        <p> is it recurring?</p>
      </div>
    </div>
  );
};

export default TodoRow;
