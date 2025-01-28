import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./slices/todoSlice";
import TodoList from "./components/TodoList/TodoList";
import Filter from "./components/Filter/Filter";
import { Plus, CheckCircle } from "lucide-react";
import styles from "./App.module.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }

  };

  return (
    <div className={styles.container}>
      <div className={styles.todoApp}>
        <header className={styles.header}>
          <CheckCircle className={styles.logo} size={32} />
          <h1>Todo List</h1>
        </header>
        <form onSubmit={handleAddTodo} className={styles.inputGroup}>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Введите задачу"
            className={styles.input}
          />
          <button className={styles.addButton}>
            <Plus size={20} />
          </button>
        </form>
        <Filter />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
