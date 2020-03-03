import {
  ADD_TASK,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  FETCH_TASKS,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
  COMPLETE_TASK,
  COMPLETE_TASK_SUCCESS
} from "../actions";

//for modifying a single task data, only one task object
const task = (state, action) => {
  //state matches with todo id
  // if (state.id !== (action.id || action.todo.id)) {
  //   return state;
  // }
  switch (action.type) {
    case COMPLETE_TASK: {
      return {
        ...state
      };
    }
    case COMPLETE_TASK_SUCCESS: {
      let ourID = state.find(todo => todo.id === Number(action.data));
      let place = state.indexOf(ourID);
      let newState = [...state];
      newState[place].completed = !newState[place].completed;
      return newState;
    }

    default:
      return state;
  }
};

//main reducer actions
export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK_SUCCESS: {
      console.log("here", action.payload[0]);
      console.log(state);
      return [...state, action.payload[0]];
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
    //Editing individual task
    case COMPLETE_TASK: {
      return state.map(e => task(e, action));
    }
    case COMPLETE_TASK_SUCCESS: {
      return state.map(e => task(e, action));
    }

    default:
      return state;
  }
};
