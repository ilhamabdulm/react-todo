import { GET_TODO, CHANGE_TODO_LIST, CREATE_TODO } from "../utils/constant";

const initialState = {
  todoList: [],
  selectedTodo: {},
  baseTodo: {
    title: "",
    description: "",
    created_at: "",
  },
};

const reducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TODO:
      return state.todoList;
    case CHANGE_TODO_LIST:
      return {
        ...state,
        todoList: payload,
      };
    case CREATE_TODO:
      return {
        ...state,
        todoList: [...state.todoList, payload],
      };
    default:
      return state;
  }
};

export default reducers;
