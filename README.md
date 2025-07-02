TaskFlow Kanban Style Task Manager

A full-stack Kanban-style task management application built with a React/Vite frontend and a Node/Express backend.

📦 Prerequisites

Node.js (v14+)

npm (comes with Node.js)

Frontend

Navigate to the frontend folder

cd frontend

Install dependencies

npm install

Environment variables
Create a file named .env in the frontend/ directory with:

VITE_BACKEND_URL="http://localhost:4000"

Available scripts

npm run build – Builds the production bundle

npm run dev   – Starts the development server (default: http://localhost:5173)

Backend

Navigate to the backend folder

cd backend

Install dependencies

npm install

Environment variables
Create a file named .env in the backend/ directory with at least the following (replace placeholders):

PORT=4000
SECRET=<your_app_secret>
JWTSECRET=<your_jwt_secret>
MONGO_URL=<your_mongodb_connection_uri>

PORT – Port on which the server listens (defaults to 4000)

Other values should be kept private and never committed to source control

Start the server

npm start

Usage

Start the backend:

cd backend
npm start

Start the frontend (in a separate terminal):

cd frontend
npm run dev

Open your browser at http://localhost:5173 to view the application.

Security Notes

Never commit real secrets (SECRET, JWTSECRET, MONGO_URL, etc.) to version control.

Use a .gitignore to exclude any .env files.

Happy tasking! 🚀
