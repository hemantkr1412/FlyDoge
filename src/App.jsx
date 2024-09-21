import { useState } from 'react'
import './App.css';
import Hero from './componets/Hero';
import Tokenomics from './componets/Tokenomics';
import Howtobuy from './componets/HowToBuy';
import Roadmap from './componets/RoadMap';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';

function App() {


  return (
    <div>
      <Navbar />
      <Hero />
      <Tokenomics />
      <Howtobuy />
      <Roadmap />
      <Footer />
    </div>
  )
}

export default App
