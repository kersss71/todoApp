import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../slices/todoSlice";

export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export interface IState {
  todos: ITodo[];
  filter: string,
}

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
