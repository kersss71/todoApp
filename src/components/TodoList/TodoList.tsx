import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, deleteTodo } from "../../slices/todoSlice";
import { RootState } from "../../store/store";
import { Trash2 } from "lucide-react";

import styles from "./TodoList.module.css";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const filter = useSelector((state: RootState) => state.todos.filter);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true;
  });

  return (
    <ul className={styles.todoList}>
      {filteredTodos.map((todo) => (
        <li
          key={todo.id}
          className={`${styles.todoItem} ${
            todo.completed ? styles.completed : ""
          }`}
        >
          <label className={styles.todoLabel}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
              className={styles.checkbox}
            />
            <span className={styles.checkmark}></span>
            <span className={styles.todoText}>{todo.text}</span>
          </label>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className={styles.deleteButton}
          >
            <Trash2 size={18} />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
