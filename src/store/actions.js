import { GET_TODO, CHANGE_TODO_LIST, CREATE_TODO } from "../utils/constant";

export const getTodoList = () => {
  return {
    type: GET_TODO,
  };
};

export const changeTodoList = (data) => {
  return {
    type: CHANGE_TODO_LIST,
    payload: data,
  };
};

export const createNewTodo = (data) => {
  return {
    type: CREATE_TODO,
    payload: data,
  };
};
