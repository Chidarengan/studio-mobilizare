import React, { useState } from 'react';
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
  // Gerenciamento de estado global (Telefone e visibilidade do Instagram)
  const [whatsappNumber, setWhatsappNumber] = useState('5592984572635');
  const [showInstagram, setShowInstagram] = useState(true);

  return (
    <div className="bg-[#FAF8F5] text-[#1E2229] min-h-screen flex flex-col justify-between antialiased selection:bg-[#C5A880] selection:text-[#1E2229]">
      
      {/* 1. Cabeçalho */}
      <Navbar whatsappNumber={whatsappNumber} />

      {/* 2. Destaque Inicial */}
      <Hero whatsappNumber={whatsappNumber} />

      {/* 3. Quiz de Triagem */}
      <Triagem whatsappNumber={whatsappNumber} />

      {/* 4. Apresentação da Dra. Luciana */}
      <Sobre />

      {/* 5. Serviços */}
      <Metodos />

      {/* 6. Prova Social */}
      <Depoimentos />

      {/* 7. Feed do Instagram (Exibição Condicional) */}
      {showInstagram && <InstagramFeed />}

      {/* 8. Rodapé */}
      <Footer />

      {/* 9. Painel Administrativo de Teste */}
      <AdminPanel 
        whatsappNumber={whatsappNumber} 
        setWhatsappNumber={setWhatsappNumber}
        showInstagram={showInstagram}
        setShowInstagram={setShowInstagram}
      />
      
    </div>
  );
}