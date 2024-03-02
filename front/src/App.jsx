import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../component/Home';
import About from '../component/About';
import Contact from '../component/Contact';
import Menu from '../component/Menu';
import Navbar from '../component/Navbar';
import './App.css';
import Footer from '../component/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
