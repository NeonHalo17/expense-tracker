import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarTop from './components/NavbarTop';
import DashBoard from './components/DashBoard';
import Login from './components/Login';

function App() {
  return (
    <main>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<NavbarTop />} />
      </Routes>
    </BrowserRouter>
    </main>
    );
}

export default App;
