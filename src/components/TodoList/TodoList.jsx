
import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.scss';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;