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
import Calender from "./components/Calender";
import Chat from "./components/Chat";
import Inbox from "./components/Inbox";
import EmailTemplate from "./components/EmailTemplate";
import KanbanBoard from "./components/KanbanBoard";
import Details from "./components/Details";
import Project from "./components/Project";
import MemberList from "./components/MemberList";
import RecoverPassword from "./components/RecoverPassword";
import LockScreen from "./components/LockScreen";
import ConfirmMail from "./components/ConfirmMail";
import UserProfile from "./components/UserProfile";
import SideBarMenu from "./components/SideBarMenu";
import Certificates from "./components/Certificates";

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <SideBarMenu /> */}
        <Routes>
          <Route element={<Dashboard />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<UserProfile />} path="/profile" />
          <Route element={<Calender />} path="/calender" />
          <Route element={<Chat />} path="/chat" />
          <Route element={<Inbox />} path="/inbox" />
          <Route element={<EmailTemplate />} path="/emailtemplate" />
          <Route element={<KanbanBoard />} path="/kanbanboard" />
          <Route element={<Details />} path="/details" />
          <Route element={<Project />} path="/project" />
          <Route element={<MemberList />} path="/memberlist" />
          <Route element={<RecoverPassword />} path="/recoverpassword" />
          <Route element={<LockScreen />} path="/lockscreen" />
          <Route element={<ConfirmMail />} path="/confirmmail" />
          <Route element={<Certificates />} path="/certificates" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
