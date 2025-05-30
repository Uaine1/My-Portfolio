import React from 'react'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"
import Technologies from "./components/Techs"
import Experiences from "./components/Exp"
import Projects from "./components/Proj"
import Contacts from "./components/Contact"

function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(185,178,138,0.6),rgba(255,255,255,0))]"></div>

      </div>
      <div className='container mx-auto px-8'>
        <Navbar/>
        <Hero/>
        <About/>
        <Technologies/>
        <Experiences/>
        <Projects/>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
