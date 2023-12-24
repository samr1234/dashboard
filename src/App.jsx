import Login from "./Components/Auth/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/Auth/Signup";
import ProjectsDashboard from "./Components/Dashboard/ProjectDashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       
    <Route  path="/login" element={<Login/>} />
    <Route  path="*" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/dashboard" element={<ProjectsDashboard/>} />

    </Routes>

  </BrowserRouter>
  )
}

export default App