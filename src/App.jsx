import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css'

// Components
import Header from './component/Header';
import Footer from './component/Footer';
import ScrollToTop from './ScrollTop';

// Pages
import Home from './page/Home';
import About from './page/About';
import Projects from './page/Projects';
import Skill from './page/Skill';
import Contact from './page/Contact';


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Header/>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
