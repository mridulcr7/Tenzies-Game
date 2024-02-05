import './App.css';
import Tenzies from './components/tenzies';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import Header from './components/header';
import Body from './components/body';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'



function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} />
          <Route path="/tenzies" element={<Tenzies/>} />
          <Route path="/body" element={<Body />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} /> */}

          <Route
            path="/body"
            element={user ? <Body /> : <Navigate to="/login" />}
          />
          <Route
            path="/"
            element={user ? <Body /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to="/" />}
          />
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/tenzies"
            element={user ? <Tenzies /> : <Navigate to="/login" />}
          />
        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
