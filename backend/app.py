from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

# Initialize FastAPI app
app = FastAPI()

# Enable CORS to allow frontend running on localhost:3000 to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory database to store todos (temporary storage)
todos = []
next_id = 1  # Auto-incrementing ID for new todos

# Pydantic model for creating a new todo
class TodoCreate(BaseModel):
    title: str
    description: Optional[str] = ""  # Optional description, default empty

# Pydantic model for updating a todo
class TodoUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    completed: Optional[bool] = None

# Pydantic model representing a todo (response model)
class Todo(BaseModel):
    id: int
    title: str
    description: str
    completed: bool
    created_at: str  # ISO formatted creation datetime

# Root endpoint to check if API is running
@app.get("/")
def read_root():
    return {"message": "Todo API"}

# Get all todos
@app.get("/api/todos", response_model=List[Todo])
def get_all_todos():
    return todos

# Get a single todo by ID
@app.get("/api/todos/{todo_id}", response_model=Todo)
def get_todo(todo_id: int):
    todo = next((t for t in todos if t["id"] == todo_id), None)
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    return todo

# Create a new todo
@app.post("/api/todos", response_model=Todo)
def create_todo(todo: TodoCreate):
    global next_id
    new_todo = {
        "id": next_id,
        "title": todo.title,
        "description": todo.description,
        "completed": False,
        "created_at": datetime.now().isoformat()  # Store creation time
    }
    todos.append(new_todo)
    next_id += 1
    return new_todo

# Update an existing todo by ID
@app.put("/api/todos/{todo_id}", response_model=Todo)
def update_todo(todo_id: int, todo_update: TodoUpdate):
    # Find the todo
    todo = next((t for t in todos if t["id"] == todo_id), None)
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    
    # Update fields only if provided
    if todo_update.title is not None:
        todo["title"] = todo_update.title
    if todo_update.description is not None:
        todo["description"] = todo_update.description
    if todo_update.completed is not None:
        todo["completed"] = todo_update.completed
    
    return todo

# Delete a todo by ID
@app.delete("/api/todos/{todo_id}")
def delete_todo(todo_id: int):
    global todos
    todo = next((t for t in todos if t["id"] == todo_id), None)
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    
    todos = [t for t in todos if t["id"] != todo_id]
    return {"message": "Todo deleted", "id": todo_id}

# Run the app using Uvicorn (for development)
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
