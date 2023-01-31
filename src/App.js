import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './App.css';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contacto' element={<Contact />} />
    </Routes>
  );
}

export default App;
