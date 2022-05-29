
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Features from './pages/Features';
import Home from './pages/Home';
import Login from './pages/Login';
import Boarding from './pages/Boarding';
import Services from './pages/Services';
import Register from './pages/Signup';
import CreatePost from './pages/createPost/createPost';
import SecondForm from './pages/createPost/secondForm';



function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Features' element={<Features />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Boarding' element={<Boarding />} />
        <Route path='/CreatePost' element={<CreatePost />} />
        <Route path='/SecondForm' element={<SecondForm />} />
      </Routes>
    </Router>
  );
}

export default App;
