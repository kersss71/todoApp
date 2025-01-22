import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import TodoList from "./TodoList";
import '@testing-library/jest-dom';

jest.mock("lucide-react", () => ({
  Trash2: "mock",
}));

describe("TodoList", () => {
  it("renders todos", () => {
    store.dispatch({
      type: "todos/addTodo",
      payload: "Test Todo 1",
    });
    store.dispatch({
      type: "todos/addTodo",
      payload: "Test Todo 2",
    });

    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const todos = screen.getAllByRole("checkbox");
    expect(todos.length).toBe(2);
    expect(screen.getByText("Test Todo 1")).toBeInTheDocument();
    expect(screen.getByText("Test Todo 2")).toBeInTheDocument();
  });

  it("toggles todo completion state", () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const checkbox = screen.getByLabelText("Test Todo 1");
    fireEvent.click(checkbox);
  });
});
