import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Theme from './components/Theme';
import Program from './components/Program';
import Objectives from './components/Objectives';
import Rewards from './components/Rewards';
import Footer from './components/Footer';
import Register from './pages/Register';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1a1a1a] text-white">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Theme />
                <Program />
                <Objectives />
                <Rewards />
                <Footer />
              </>
            } />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
