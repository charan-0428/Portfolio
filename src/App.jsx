
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Navbar from './Components/Navbar/Navbar';
import Home from './Main/Home/Home';
import About from './Main/About/About';
import Contact from './Main/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Projects from './Main/Project/Project';
import ScrollToTop from './Main/Scrolltotop';



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Navbar />
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path="/home" element={<Home />} />
         <Route path="/about" element={<About/>}/>
         <Route path="/project" element={<Projects/>}/>
         <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
