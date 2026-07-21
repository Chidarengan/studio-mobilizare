import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Triagem } from './components/Triagem';
import { Sobre } from './components/Sobre';
import { Metodos } from './components/Metodos';
import { Depoimentos } from './components/Depoimentos';
import { InstagramFeed } from './components/InstagramFeed';
import { Footer } from './components/Footer';
import { AdminPanel } from './components/AdminPanel';

export default function App() {
  const [whatsappNumber, setWhatsappNumber] = useState('5592984572635');
  const [showInstagram, setShowInstagram] = useState(true);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="bg-[#FAF8F5] dark:bg-[#0C0A06] text-[#1E2229] dark:text-[#F3ECE3] min-h-screen flex flex-col justify-between antialiased selection:bg-[#C5A880] selection:text-[#0C0A06] transition-colors duration-300 font-sans">
      <Navbar 
        whatsappNumber={whatsappNumber} 
        onOpenAdmin={() => setIsAdminOpen(true)}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <Hero whatsappNumber={whatsappNumber} />
      <Triagem whatsappNumber={whatsappNumber} />
      <Sobre />
      <Metodos />
      <Depoimentos />
      {showInstagram && <InstagramFeed />}
      <Footer />
      
      {isAdminOpen && (
        <AdminPanel 
          whatsappNumber={whatsappNumber} 
          setWhatsappNumber={setWhatsappNumber}
          showInstagram={showInstagram}
          setShowInstagram={setShowInstagram}
          onClose={() => setIsAdminOpen(false)}
        />
      )}
    </div>
  );
}