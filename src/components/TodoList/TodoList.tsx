import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "../../slices/todoSlice";
import { RootState } from "../../store/store";
import { Trash2, Edit3, Save } from "lucide-react";
import { useState } from "react";

import styles from "./TodoList.module.css";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const filter = useSelector((state: RootState) => state.todos.filter);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState<string>("");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true;
  });

  const handleEdit = (id: string, text: string) => {
    setEditingId(id);
    setEditingText(text);
  };

  const handleSave = (id: string) => {
    dispatch(editTodo({ id, text: editingText }));
    setEditingId(null);
    setEditingText("");
  };

  return (
    <ul className={styles.todoList}>
      {filteredTodos.map((todo) => (
        <li
          key={todo.id}
          className={`${styles.todoItem} ${
            todo.completed ? styles.completed : ""
          }`}
        >
          {editingId === todo.id ? (
            <input
              type="text"
              value={editingText}
              onChange={(e) => setEditingText(e.target.value)}
              className={styles.editInput}
            />
          ) : (
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
          )}
          <div className={styles.actions}>
            {editingId === todo.id ? (
              <button
                onClick={() => handleSave(todo.id)}
                className={styles.saveButton}
              >
                <Save size={18} />
              </button>
            ) : (
              <button
                onClick={() => handleEdit(todo.id, todo.text)}
                className={styles.editButton}
              >
                <Edit3 size={18} />
              </button>
            )}
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className={styles.deleteButton}
            >
              <Trash2 size={18} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
