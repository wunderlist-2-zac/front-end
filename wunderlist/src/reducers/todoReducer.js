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
  COMPLETE_TASK_SUCCESS,
  SORT_TASKS,
  SHOW_COMPLETED,
  SHOW_NOT_COMPLETED
} from "../actions";

var initialState = {
  todos: [],
  isLoading: false
};

//main reducer actions
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK_SUCCESS: {
      console.log("here", action.payload[0]);
      console.log(state);
      return { todos: [...state.todos, action.payload[0]], isLoading: false };
    }

    case FETCH_TASKS_SUCCESS: {
      return { todos: action.payload, isLoading: false };
    }

    case DELETE_TASK_SUCCESS: {
      return {
        todos: state.todos.filter(task => {
          return task.id !== action.payload.id;
        }),
        isLoading: false
      };
    }
    //Editing individual task

    case COMPLETE_TASK_SUCCESS: {
      return {
        todos: state.todos.map(task => {
          if (task.id === action.payload.id) {
            return action.payload;
          } else {
            return task;
          }
        }),
        isLoading: false
      };
    }
    case SORT_TASKS: {
      const newTodos = state.todos.slice().sort(function(a, b) {
        return a.id - b.id;
      });
      return {
        todos: newTodos,
        isLoading: false
      };
    }
    case SHOW_COMPLETED: {
      const newTodos = state.todos.filter(t => t.completed);
      return {
        todos: newTodos,
        isLoading: false
      };
    }
    case SHOW_NOT_COMPLETED: {
      const newTodos = state.todos.filter(t => !t.completed);
      return {
        todos: newTodos,
        isLoading: false
      };
    }
    default:
      return state;
  }
};
