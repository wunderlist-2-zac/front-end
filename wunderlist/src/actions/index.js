import { axiosWithAuth } from "../utils/axiosWithAuth";

//Create a task
export const ADD_TASK = "ADD_TODO";
export const ADD_TASK_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TASK_FAILURE = "ADD_TODO_FAILURE";

//Get the Tasks
export const FETCH_TASKS = "FETCH_TODOS";
export const FETCH_TASKS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TASKS_FAILURE = "FETCH_TASKS_FAILURE";

//Delete a task
export const DELETE_TASK = "DELETE_TASK";
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS";
export const DELETE_TASK_FAILURE = "DELETE_TASK_FAILURE";

// New Task
export const postNewTask = todo => dispatch => {
  dispatch({ type: ADD_TASK });
  axiosWithAuth()
    .post("/")
    .then(res => {
      console.log(res);
      dispatch(postNewTaskSuccess(res));
    });
};

export const postNewTaskSuccess = todo => {
  return {
    type: ADD_TASK_SUCCESS,
    payload: todo
  };
};

//Get all tasks
export const getTasksData = () => dispatch => {
  dispatch({ type: FETCH_TASKS });
  axiosWithAuth()
    .get("/")
    .then(res => {
      console.log(res);
      dispatch(getTasksDataSuccess(res));
    });
};

export const getTasksDataSuccess = todos => {
  return {
    type: FETCH_TASKS_SUCCESS,
    payload: todos
  };
};

//Delete task
export const deleteTask = todo => dispatch => {
  dispatch({ type: DELETE_TASK });
  axiosWithAuth()
    .delete("/")
    .then(res => {
      //find way to see if deleted
      console.log(res);
      dispatch(deleteTaskSuccess(todo));
    });
};
export const deleteTaskSuccess = todo => {
  return {
    type: DELETE_TASK_SUCCESS,
    payload: todo
  };
};
