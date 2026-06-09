import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import './App.scss'; 
function App() {
  return (
    <main className="app-main">
      <Header />
      <TodoForm />
      <TodoList />
    </main>
  );
}

export default App;