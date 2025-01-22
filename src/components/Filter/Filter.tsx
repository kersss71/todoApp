import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../slices/todoSlice";
import { RootState } from "../../store/store";
import styles from "./Filter.module.css";

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.todos.filter);

  return (
    <div className={styles.filters}>
      <button
        className={`${styles.filterButton} ${
          filter === "all" ? styles.active : ""
        }`}
        onClick={() => dispatch(setFilter("all"))}
      >
        Все
      </button>
      <button
        className={`${styles.filterButton} ${
          filter === "completed" ? styles.active : ""
        }`}
        onClick={() => dispatch(setFilter("completed"))}
      >
        Завершенные
      </button>
      <button
        className={`${styles.filterButton} ${
          filter === "active" ? styles.active : ""
        }`}
        onClick={() => dispatch(setFilter("active"))}
      >
        Активные
      </button>
    </div>
  );
}

export default Filter;
