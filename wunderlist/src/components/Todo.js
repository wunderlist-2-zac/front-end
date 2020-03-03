import React from "react";
import Timer from "react-compound-timer";

//1 second in timer is 4000 seconds

const TodoRow = props => {
  console.log("todo props", props);
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
  var timerMilliseconds = endSeconds - startSeconds;

  return (
    <div className="singleTask">
      <div className="spacing">
        <p>Task: {props.task.title}</p>
      </div>
      <div className="spacing">
        <Timer initialTime={timerMilliseconds} direction="backward">
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
