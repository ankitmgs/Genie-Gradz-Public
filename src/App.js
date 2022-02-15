import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import "./assets/css/bootstrapDark.css";
import "./assets/css/appDark.css";
import "./assets/css/bootstrap.css";
import "./assets/css/app.css";
import "./assets/css/icon.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserProfile from "./components/userProfile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Dashboard />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<UserProfile />} path="/profile" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
