import React from 'react';

export function Navbar({ whatsappNumber }) {
  const msgDefault = encodeURIComponent('Olá! Gostaria de agendar uma consulta de avaliação no Studio Mobilizare.');

  return (
    <header className="w-full bg-[#FAF8F5]/80 backdrop-blur-md sticky top-0 z-40 border-b border-[#EAE5DF] px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-9 h-9 border border-[#1E2229]/20 rounded-full flex items-center justify-center font-serif text-sm font-semibold text-[#1E2229] bg-[#F3EFE9]">
          M
        </div>
        <div className="flex flex-col">
          <span className="font-serif text-base font-bold tracking-wide text-[#1E2229] uppercase leading-none">Studio Mobilizare</span>
          <span className="text-[9px] tracking-[0.22em] uppercase text-[#C5A880] font-semibold mt-1">Pilates & Bem-estar</span>
        </div>
      </div>

      <nav className="hidden md:flex items-center space-x-10 text-[11px] font-semibold uppercase tracking-widest text-[#1E2229]/60">
        <a href="#sobre" className="hover:text-[#1E2229] transition-colors">O Studio</a>
        <a href="#metodos" className="hover:text-[#1E2229] transition-colors">Modalidades</a>
        <a href="#depoimentos" className="hover:text-[#1E2229] transition-colors">Depoimentos</a>
        <a href="#instagram-section" className="hover:text-[#1E2229] transition-colors">Instagram</a>
      </nav>

      <div>
        <a 
          href={`https://wa.me/${whatsappNumber}?text=${msgDefault}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="border border-[#1E2229]/30 hover:bg-[#1E2229] hover:text-white text-[#1E2229] text-[11px] font-bold uppercase tracking-widest px-5 py-3 rounded-full transition-all"
        >
          Fale Conosco
        </a>
      </div>
    </header>
  );
}