import React, { useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, Environment, Lightformer } from '@react-three/drei';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import About from './components/About';
import FAQ from './components/FAQ';
import Details from './components/Details';
import VideoSection from './components/VideoSection';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import DNAHelix from './components/Background3D';

// Helper component to track actual DOM height
function ContentTracker({ setPages }) {
  const contentRef = useRef();

  useEffect(() => {
    if (!contentRef.current) return;
    
    const updateHeight = () => {
      if (contentRef.current) {
        const height = contentRef.current.getBoundingClientRect().height;
        // ScrollControls pages are relative to window height
        setPages(height / window.innerHeight);
      }
    };

    const observer = new ResizeObserver(updateHeight);
    observer.observe(contentRef.current);
    window.addEventListener('resize', updateHeight);
    
    // Initial calculation
    setTimeout(updateHeight, 100);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateHeight);
    };
  }, [setPages]);

  return (
    <div ref={contentRef} className="w-full flex flex-col">
      <Hero />
      <About />
      <Services />
      <VideoSection />
      <Testimonials />
      <Details />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  const [pages, setPages] = useState(8); // Default fallback

  return (
    <div id="app-container" className="w-full h-screen bg-slate-50 text-slate-900 font-sans selection:bg-wellness-200 selection:text-wellness-900 overflow-hidden">
      <Navbar />
      
      {/* 
        This is the core of the scrollytelling experience!
        The Canvas covers the full screen, and ScrollControls handles the scrolling.
      */}
      <Canvas camera={{ position: [0, 0, 30], fov: 45 }}>
        <fog attach="fog" args={['#f8fafc', 20, 60]} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#10b981" />
        
        <Environment preset="studio">
          <Lightformer intensity={2} position={[10, 5, 0]} scale={[10, 50, 1]} />
          <Lightformer intensity={1} position={[-10, -5, 0]} scale={[10, 50, 1]} />
        </Environment>

        <ScrollControls pages={pages} damping={0.25} distance={1.2}>
          {/* The 3D animation that reacts to scroll */}
          <DNAHelix />
          
          {/* The HTML overlay that maps to the pages */}
          <Scroll html className="w-full">
            <ContentTracker setPages={setPages} />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
