// import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import Notes from "./components/Notes";
import Inbox from "./components/Inbox";
import EmailTemplate from "./components/EmailTemplate";
import KanbanBoard from "./components/KanbanBoard";
import Details from "./components/Details";
import Project from "./components/Project";
import MemberList from "./components/MemberList";
import RecoverPassword from "./components/RecoverPassword";
import LockScreen from "./components/LockScreen";
import ConfirmMail from "./components/ConfirmMail";
import UserProfile from "./components/userProfile";
import SideBarMenu from "./components/SideBarMenu";
import Certificates from "./components/Certificates";
import TutorNotes from "./components/Tutor_section/TutorNotes";
import TutorDashboard from "./components/Tutor_section/TutorDashboard";
import jwtDecode from "jwt-decode";
import { getAuthTokenFromLocalStorage } from "./helpers/utils";
import { authenticateUser } from "./actions/auth";
import { connect } from "react-redux";
import ConceptualTest from "./components/ConceptualTest";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import React, { Component } from "react";
import ScheduleClass from "./components/ScheduleClass";
import JitsiComponent from "./components/JitsiComponent";
const PrivateRoute = (privateRouteProps) => {
  const { isLoggedIn, path, component: Component } = privateRouteProps;
  return (
    <Route
      path={path}
      render={(props) => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location, //{pathname:'/settings'}
              },
            }}
          />
        );
      }}
    />
  );
};

class App extends Component {
  componentDidMount() {
    const token = getAuthTokenFromLocalStorage();
    if (token) {
      const user = jwtDecode(token);
      this.props.dispatch(authenticateUser(user));
    }
  }
  render() {
    const { auth } = this.props;
    return (
      <Router>
        <div>
          <Switch>
            {/* <Route component={Dashboard} exact path="/" />
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" /> */}
            <Route component={Dashboard} exact path="/" />
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
            <Route component={UserProfile} path="/profile" />
            <Route component={Calender} path="/calender" />
            <Route component={Notes} path="/notes" />
            <Route component={Inbox} path="/inbox" />
            <Route component={EmailTemplate} path="/emailtemplate" />
            <Route component={KanbanBoard} path="/kanbanboard" />
            <Route component={Details} path="/details" />
            <Route component={Project} path="/project" />
            <Route component={MemberList} path="/memberlist" />
            <Route component={RecoverPassword} path="/recoverpassword" />
            <Route component={LockScreen} path="/lockscreen" />
            <Route component={ConfirmMail} path="/confirmmail" />
            <Route component={Certificates} path="/certificates" />
            <Route component={ScheduleClass} path="/scheduleclass" />
            <Route component={TutorNotes} path="/tutor/notes" />
            <Route component={TutorDashboard} path="/tutor/dashboard" />
            <Route component={ConceptualTest} path="/conceptual-test" />
            <Route component={JitsiComponent} path="/jitsi" />

            <PrivateRoute
              component={UserProfile}
              path="/profile"
              isLoggedIn={auth.isLoggedIn}
            />
            {/* <PrivateRoute
              path="/user/:userId"
              component={User}
              isLoggedIn={auth.isLoggedIn}
            /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route element={<Dashboard />} path="/" />
//           <Route element={<Login />} path="/login" />
//           <Route element={<Register />} path="/register" />
//           <Route element={<UserProfile />} path="/profile" />
//           <Route element={<Calender />} path="/calender" />
//           <Route element={<Notes />} path="/notes" />
//           <Route element={<Inbox />} path="/inbox" />
//           <Route element={<EmailTemplate />} path="/emailtemplate" />
//           <Route element={<KanbanBoard />} path="/kanbanboard" />
//           <Route element={<Details />} path="/details" />
//           <Route element={<Project />} path="/project" />
//           <Route element={<MemberList />} path="/memberlist" />
//           <Route element={<RecoverPassword />} path="/recoverpassword" />
//           <Route element={<LockScreen />} path="/lockscreen" />
//           <Route element={<ConfirmMail />} path="/confirmmail" />
//           <Route element={<Certificates />} path="/certificates" />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
function mapstatetoprops(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapstatetoprops)(App);
