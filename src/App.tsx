import Hero from './components/Hero'
import About from './components/About'
import Theme from './components/Theme'
import Program from './components/Program'
import Objectives from './components/Objectives'
import Rewards from './components/Rewards'
import Footer from './components/Footer'
function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Hero />
      <About />
      <Theme />
      <Program />
      <Objectives />
      <Rewards />
      <Footer />
    </div>
  )
}

export default App