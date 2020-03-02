import React from "react";
import { TransitionMotion, spring, presets } from "react-motion";
import { useForm } from "react-hook-form";

const TodoList = props => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  //Do we use actions? guess so cause state
  var itemsNotFinished;

  // handleChange = ({ target: { value } }) => {};

  // //Adds new item
  // handleSubmit = e => {
  //   e.preventDefault();
  //   const newItem = {};
  //   // add to top of the list
  // };

  // //onClick to mark as complete
  // handleComplete = doneID => {};

  // //marks all as complete
  // handleToggleAll = () => {
  //   // const allNotDone = props.markAllDone();
  // };

  // //Deletes all completed items
  // handleClearCompleted = () => {

  // };

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
            <option value="Hourly">Hourly</option>
            <option value=" Daily"> Daily</option>
            <option value=" Monthly"> Monthly</option>
            <option value=" Yearly"> Yearly</option>
          </select>

          <input type="submit" />
        </form>
      </header>
      <section className="main"></section>
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

export default TodoList;
