import {
  ADD_TASK,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  FETCH_TASKS,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE
} from "../actions";

const task = (state, action) => {
  switch (action.type) {
  }
};

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK_SUCCESS: {
      return [...state, action.payload];
    }
    case FETCH_TASKS_SUCCESS: {
      return action.payload;
    }

    case DELETE_TASK: {
      return state.map(e => task(e, action));
    }
    case DELETE_TASK_SUCCESS: {
      return state.filter(e => task(e, action));
    }

    default:
      return state;
  }
};
