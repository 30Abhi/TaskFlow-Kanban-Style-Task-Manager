import {  Routes, Route, Navigate } from "react-router-dom";
import SignUpPage from "./components/Pages/SignupPage";
import TaskPage from "./components/Pages/taskPage";
import LoginPage from "./components/Pages/LoginPage";

function App () {
  return(
      <Routes>
        <Route path="/" element={<Navigate to="/signup"/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/task" element={<TaskPage/>} />
      </Routes>
  )
  
}

export default App
