import { ADD_USER, GET_USERS, SELECT_USER } from "../constants";

export const addUser = (name: string) => ({
  type: ADD_USER,
  payload: { name },
});

export const selectUser = (name: string) => ({
  type: SELECT_USER,
  payload: { name },
});

// export const addTodo = (content) => ({
//   type: ADD_TODO,
//   payload: {
//     id: ++nextTodoId,
//     content,
//   },
// });

export const getUsers = { type: GET_USERS };
