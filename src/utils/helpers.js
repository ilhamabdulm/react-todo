export const editTodo = (list, todo) => {
  const todoIndex = list.findIndex((el) => el.id === todo.id);
  list[todoIndex] = todo;
  return list;
};

export const deleteTodo = (list, id) => {
  return list.filter((el) => el.id !== id);
};
