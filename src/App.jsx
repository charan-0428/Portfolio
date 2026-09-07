import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Background from './Components/Background/Background';
import Home from './Main/Home/Home';
import About from './Main/About/About';
import Contact from './Main/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Projects from './Main/Project/Project';
import ScrollToTop from './Main/Scrolltotop';
import useScrollReveal from './hooks/useScrollReveal';

function AppShell() {
  const { pathname } = useLocation();
  useScrollReveal(pathname);

  return (
    <>
      <ScrollToTop />
      <Background />
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
