import { addTodo, toggleTodo, setFilter } from '../slices/todoSlice';
import { store } from './store';

describe('Redux Store', () => {
  it('should add a todo', () => {
    store.dispatch(addTodo('Test Task'));

    const state = store.getState().todos;
    expect(state.todos).toHaveLength(1);
    expect(state.todos[0].text).toBe('Test Task');
  });

  it('should toggle todo completion', () => {
    const todoId = store.getState().todos.todos[0].id;

    store.dispatch(toggleTodo(todoId));

    const state = store.getState().todos;
    expect(state.todos[0].completed).toBe(true);
  });

  it('should set the filter', () => {
    store.dispatch(setFilter('completed'));

    const state = store.getState().todos;
    expect(state.filter).toBe('completed');
  });
});