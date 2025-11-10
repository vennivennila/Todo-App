import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { getTodos, createTodo, updateTodo, deleteTodo } from './services/api';

function App() {
  // State to store the list of todos
  const [todos, setTodos] = useState([]);
  // State to handle loading status
  const [loading, setLoading] = useState(true);
  // State to handle error messages
  const [error, setError] = useState(null);

  // Fetch todos when the component mounts
  useEffect(() => {
    fetchTodos();
  }, []);

  // Function to fetch todos from the backend
  const fetchTodos = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getTodos();  // API call to fetch todos
      setTodos(data);
    } catch (err) {
      setError('Failed to fetch todos. Make sure the backend is running on port 8000.');
      console.error('Error fetching todos:', err);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle adding a new todo
  const handleAddTodo = async (title, description) => {
    try {
      const newTodo = await createTodo({ title, description });  // API call to create todo
      setTodos([...todos, newTodo]);  // Update state with new todo
    } catch (err) {
      setError('Failed to create todo.');
      console.error('Error creating todo:', err);
    }
  };

  // Function to toggle completion status of a todo
  const handleToggleComplete = async (id, completed) => {
    try {
      const updatedTodo = await updateTodo(id, { completed: !completed }); // API call to update
      setTodos(todos.map(todo => 
        todo.id === id ? updatedTodo : todo  // Update only the changed todo
      ));
    } catch (err) {
      setError('Failed to update todo.');
      console.error('Error updating todo:', err);
    }
  };

  // Function to delete a todo
  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);  // API call to delete todo
      setTodos(todos.filter(todo => todo.id !== id));  // Remove from state
    } catch (err) {
      setError('Failed to delete todo.');
      console.error('Error deleting todo:', err);
    }
  };

  return (
    <div className="App">
      <div className="container">
        {/* Header Section */}
        <header className="app-header">
          <h1>📝 Todo Application</h1>
          <p>Full-Stack Task - Python Backend + React Frontend</p>
        </header>

        {/* Display error messages */}
        {error && (
          <div className="error-message">
            {error}
            <button onClick={() => setError(null)}>×</button>
          </div>
        )}

        {/* Form to add a new todo */}
        <TodoForm onAdd={handleAddTodo} />

        {/* Show loading message or the list of todos */}
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
