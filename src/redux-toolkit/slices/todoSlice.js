import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  myTodos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodos: (state) => {
      const todo = JSON.parse(localStorage.getItem("todo"));
      if(!todo) {
        state.myTodos = [];
      } else {
        state.myTodos = todo;
      }
    },
    clearAllTodo: (state) => {
      localStorage.clear()
      state.myTodos = [];
    },
    deleteSpecificTodo: (state,{ payload })=> {
      const existingTodos = JSON.parse(localStorage.getItem("todo"));
      const filtered = existingTodos.filter(item => item.id !== payload )
      localStorage.setItem("todo", JSON.stringify(filtered))
      state.myTodos = filtered;
    },
    addTodo: {
      reducer: (state, { payload }) => {
        const existingTodos = JSON.parse(localStorage.getItem("todo"));
        if (existingTodos) {
          const newData = [...existingTodos, payload];
          localStorage.setItem("todo", JSON.stringify(newData));
          return [...state, payload];
        } else {
          localStorage.setItem("todo", JSON.stringify(new Array(payload)));
        }
      },
      prepare: (data) => {
        const id = nanoid();
        const createdAt = Date.now();
        return {
          payload: {
            ...data,
            id,
            createdAt,
          },
        };
      },
    },
  },
});

export const { getTodos, addTodo, clearAllTodo, deleteSpecificTodo } = todoSlice.actions;
export default todoSlice.reducer;
