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

//Update is Complete
export const COMPLETE_TASK = "COMPLETE_TASK";
export const COMPLETE_TASK_SUCCESS = "COMPLETE_TASK_SUCCESS";
export const COMPLETE_TASK_FAILURE = "COMPLETE_TASK_FAILURE";

// New Task
export const postNewTask = todo => dispatch => {
  dispatch({ type: ADD_TASK });
  axiosWithAuth()
    .post("/api/tasks")
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
    .get("/api/tasks")
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
  dispatch({ type: DELETE_TASK, todo });
  axiosWithAuth()
    .delete("/api/tasks/", todo)
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

export const completeTask = todo => dispatch => {
  dispatch({ type: COMPLETE_TASK, todo });
  axiosWithAuth()
    .put(`/api/tasks/${todo.id}`, todo)
    .then(res => {
      console.log(res);
      dispatch(completeTaskSuccess(res));
    });
};

export const completeTaskSuccess = todo => {
  return {
    type: COMPLETE_TASK_SUCCESS,
    payload: todo,
    id: todo.id
  };
};
