import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Filter from "./Filter";

describe("Filter Component", () => {

  it("dispatches the correct filter action on button click", () => {
    render(
      <Provider store={store}>
        <Filter />
      </Provider>
    );

    fireEvent.click(screen.getByText("Завершенные"));
    expect(store.getState().todos.filter).toBe("completed");

    fireEvent.click(screen.getByText("Активные"));
    expect(store.getState().todos.filter).toBe("active");
  });
});
