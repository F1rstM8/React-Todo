import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../../store/todoSlice";
import classNames from "classnames";
import { isOverdue } from "../../utils/helpers.js";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li
      className={classNames("todo-item", {
        "todo-item--done": todo.isDone,
        "todo-item--overdue": isOverdue(todo.deadline, todo.isDone),
      })}
    >
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        <span className="todo-text">{todo.value}</span>
        {todo.deadline && (
          <span className="todo-date">
            📅 {new Date(todo.deadline).toLocaleDateString()}
          </span>
        )}
      </div>
      <button
        className="delete-btn"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        ❌
      </button>
    </li>
  );
};

export default TodoItem;
