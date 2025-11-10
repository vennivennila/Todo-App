# 📝 Todo App — Full Stack Project

## 📌 Description
A simple Full-Stack Todo Application built using **Flask (Python)** for the backend and **React.js** for the frontend.  
This app allows users to **add**, **view**, **update**, and **delete** todos.  
It demonstrates the integration between RESTful APIs and a React client.

---

## ⚙️ Tech Stack
- **Frontend:** React.js, Axios, Bootstrap  
- **Backend:** Flask, Flask-CORS, SQLAlchemy  
- **Database:** SQLite  
- **Languages:** Python, JavaScript  

---

## 🏗️ Folder Structure
```
Todo-App/
│
├── backend/
│   ├── app.py
│   ├── models.py
│   ├── requirements.txt
│
└── frontend/
    ├── src/
    ├── public/
    ├── package.json
```

---

## 🧩 Setup Instructions

### 🔹 Backend Setup
```bash
cd backend
python -m venv venv
venv\Scripts\activate      
pip install -r requirements.txt
python app.py
```
Backend runs on 👉 http://localhost:5000

---

### 🔹 Frontend Setup
```bash
cd frontend
npm install
npm start
```
Frontend runs on 👉 http://localhost:3000

---

## 🔗 API Endpoints

| Method | Endpoint    | Description     |
|---------|-------------|-----------------|
| GET     | /todos      | Fetch all todos |
| POST    | /todos      | Add a new todo  |
| PUT     | /todos/id   | Update a todo   |
| DELETE  | /todos/id   | Delete a todo   |

---

## 🧠 Features
✅ Add, update, and delete todos  
✅ Responsive user interface  
✅ Integrated Flask REST API  
✅ Clean and modular folder structure  
✅ Simple, clear, and beginner-friendly setup  

---
## 📸 Screenshots / Demo

<img src="https://res.cloudinary.com/dmjwhclog/image/upload/v1762756772/Capture_ylq73b.png" width="400" />



---
## 🧾 Example Flow
1. Run backend → Flask API starts at port 5000  
2. Run frontend → React app starts at port 3000  
3. React app communicates with backend using Axios  
4. Data is stored and retrieved from SQLite database  

---

## 🧑‍💻 Author
**VENNILA**  
📧 Email: vennilavennila472@gmail.com  
🔗 GitHub: [https://github.com/vennivennila](https://github.com/vennivennila)

---
