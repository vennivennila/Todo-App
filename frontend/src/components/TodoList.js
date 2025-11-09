import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggleComplete, onDelete }) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>No todos yet. Add one to get started! 🚀</p>
      </div>
    );
  }

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="todo-list-container">
      <div className="todo-stats">
        <span>
          {completedCount} of {totalCount} completed
        </span>
      </div>
      <div className="todo-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;

