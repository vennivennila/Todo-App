# Todo Application

Full-stack Todo app with Python backend and React frontend.

## Features

- Create, view, update, and delete todos
- Mark todos as complete
- Simple and clean interface

## Setup

### Backend (Python)

1. Go to backend folder:
   ```bash
   cd backend
   ```

2. Create virtual environment:
   ```bash
   python -m venv venv
   venv\Scripts\activate
   ```

3. Install packages:
   ```bash
   pip install -r requirements.txt
   ```

4. Run server:
   ```bash
   python main.py
   ```
   Server runs on http://localhost:8000

### Frontend (React)

1. Open new terminal, go to frontend folder:
   ```bash
   cd frontend
   ```

2. Install packages:
   ```bash
   npm install
   ```

3. Start app:
   ```bash
   npm start
   ```
   App opens at http://localhost:3000

## How to Run

1. Start backend first (Terminal 1):
   ```bash
   cd backend
   python main.py
   ```

2. Start frontend (Terminal 2):
   ```bash
   cd frontend
   npm start
   ```

3. Use the app in your browser

## API Endpoints

- GET /api/todos - Get all todos
- POST /api/todos - Create todo
- PUT /api/todos/{id} - Update todo
- DELETE /api/todos/{id} - Delete todo

## Technologies

- Backend: FastAPI, Python
- Frontend: React, Axios

