import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, Environment, Lightformer } from '@react-three/drei';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import About from './components/About';
import FAQ from './components/FAQ';
import Details from './components/Details';
import DNAHelix from './components/Background3D';

function App() {
  return (
    <div className="w-full h-screen bg-slate-50 text-slate-900 font-sans selection:bg-wellness-200 selection:text-wellness-900 overflow-hidden">
      <Navbar />
      
      {/* 
        This is the core of the scrollytelling experience!
        The Canvas covers the full screen, and ScrollControls handles the scrolling.
      */}
      <Canvas camera={{ position: [0, 0, 30], fov: 45 }}>
        <fog attach="fog" args={['#f8fafc', 20, 60]} />
        <ambientLight intensity={2} />
        <directionalLight position={[10, 10, 10]} intensity={3} color="#ffffff" />
        <directionalLight position={[-10, -10, -10]} intensity={1} color="#10b981" />
        
        <Environment preset="studio">
          <Lightformer intensity={5} position={[10, 5, 0]} scale={[10, 50, 1]} />
          <Lightformer intensity={2} position={[-10, -5, 0]} scale={[10, 50, 1]} />
        </Environment>

        <ScrollControls pages={5.3} damping={0.25} distance={1.2}>
          {/* The 3D animation that reacts to scroll */}
          <DNAHelix />
          
          {/* The HTML overlay that maps to the pages */}
          <Scroll html style={{ width: '100%', height: '100vh' }}>
            <Hero />
            <Services />
            <About />
            <FAQ />
            <Details />
            <Footer />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
