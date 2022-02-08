import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import './assets/css/bootstrapDark.css'
import './assets/css/appDark.css'
import './assets/css/bootstrap.css'
import './assets/css/app.css'
import './assets/css/icon.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Dashboard />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
