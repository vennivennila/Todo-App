import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { getTodos, createTodo, updateTodo, deleteTodo } from './services/api';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getTodos();
      setTodos(data);
    } catch (err) {
      setError('Failed to fetch todos. Make sure the backend is running on port 8000.');
      console.error('Error fetching todos:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async (title, description) => {
    try {
      const newTodo = await createTodo({ title, description });
      setTodos([...todos, newTodo]);
    } catch (err) {
      setError('Failed to create todo.');
      console.error('Error creating todo:', err);
    }
  };

  const handleToggleComplete = async (id, completed) => {
    try {
      const updatedTodo = await updateTodo(id, { completed: !completed });
      setTodos(todos.map(todo => 
        todo.id === id ? updatedTodo : todo
      ));
    } catch (err) {
      setError('Failed to update todo.');
      console.error('Error updating todo:', err);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (err) {
      setError('Failed to delete todo.');
      console.error('Error deleting todo:', err);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1>📝 Todo Application</h1>
          <p>Full-Stack Task - Python Backend + React Frontend</p>
        </header>

        {error && (
          <div className="error-message">
            {error}
            <button onClick={() => setError(null)}>×</button>
          </div>
        )}

        <TodoForm onAdd={handleAddTodo} />

        {loading ? (
          <div className="loading">Loading todos...</div>
        ) : (
          <TodoList
            todos={todos}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDeleteTodo}
          />
        )}
      </div>
    </div>
  );
}

export default App;

