import './App.css';
import Tenzies from './components/tenzies';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import Header from './components/header';
import Body from './components/body';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tenzies" element={<Tenzies/>} />
          <Route path="/body" element={<Body />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />


        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
