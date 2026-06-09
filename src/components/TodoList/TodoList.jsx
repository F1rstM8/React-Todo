import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../store/todoSlice';
import classNames from 'classnames';
import './TodoList.scss';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  // Функция для проверки, просрочена ли задача
  const isOverdue = (deadline, isDone) => {
    if (!deadline || isDone) return false;
    return new Date(deadline) < new Date().setHours(0, 0, 0, 0);
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li 
          key={todo.id} 
          className={classNames('todo-item', {
            'todo-item--done': todo.isDone,
            'todo-item--overdue': isOverdue(todo.deadline, todo.isDone)
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
      ))}
    </ul>
  );
};

export default TodoList;

