import { useState, useRef } from 'react';

export function Navbar({ whatsappNumber, onOpenAdmin, isDarkMode, toggleDarkMode }) {
  const msgDefault = encodeURIComponent('Olá! Gostaria de agendar uma consulta de avaliação no Studio Mobilizare.');
  
  const [, setClickCount] = useState(0);
  const clickTimeout = useRef(null);

  const handleLogoClick = () => {
    setClickCount((prev) => {
      const newCount = prev + 1;
      if (newCount >= 10) {
        onOpenAdmin();
        return 0;
      }
      return newCount;
    });

    clearTimeout(clickTimeout.current);
    clickTimeout.current = setTimeout(() => {
      setClickCount(0);
    }, 2000); 
  };

  return (
    <header className="w-full bg-[#FAF8F5] dark:bg-[#181511] sticky top-0 z-40 border-b border-[#EAE5DF] dark:border-[#3D3429] px-6 py-4 flex items-center justify-between transition-colors duration-300">
      <div className="flex items-center space-x-3">
        {/* Logo "M" (10 cliques, SEM efeito hover) */}
        <button 
          onClick={handleLogoClick}
          className="w-9 h-9 border border-[#1E2229]/20 dark:border-[#3D3429] rounded-full flex items-center justify-center font-serif text-sm font-semibold text-[#1E2229] dark:text-[#F3ECE3] bg-[#F3EFE9] dark:bg-[#2A231C] focus:outline-none select-none cursor-default"
          title="Studio Mobilizare"
        >
          M
        </button>
        <div className="flex flex-col">
          <span className="font-serif text-base font-bold tracking-wide text-[#1E2229] dark:text-[#F3ECE3] uppercase leading-none">Studio Mobilizare</span>
          <span className="text-[9px] tracking-[0.22em] uppercase text-[#C5A880] dark:text-[#E5CEA9] font-semibold mt-1">Pilates & Bem-estar</span>
        </div>
      </div>

      <nav className="hidden md:flex items-center space-x-10 text-[11px] font-semibold uppercase tracking-widest text-[#1E2229]/60 dark:text-[#A69A8A]">
        <a href="#sobre" className="hover:text-[#1E2229] dark:hover:text-[#F3ECE3] transition-colors">O Studio</a>
        <a href="#metodos" className="hover:text-[#1E2229] dark:hover:text-[#F3ECE3] transition-colors">Modalidades</a>
        <a href="#depoimentos" className="hover:text-[#1E2229] dark:hover:text-[#F3ECE3] transition-colors">Depoimentos</a>
        <a href="#instagram-section" className="hover:text-[#1E2229] dark:hover:text-[#F3ECE3] transition-colors">Instagram</a>
      </nav>

      <div className="flex items-center space-x-4">
        {/* Botão Sol/Lua */}
        <button 
          onClick={toggleDarkMode}
          className="p-2 text-[#1E2229]/50 dark:text-[#A69A8A] hover:text-[#C5A880] dark:hover:text-[#D4A647] transition-colors focus:outline-none"
          aria-label="Alternar Modo Escuro"
        >
          {isDarkMode ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
          )}
        </button>

        <a 
          href={`https://wa.me/${whatsappNumber}?text=${msgDefault}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="border border-[#1E2229]/30 dark:border-[#D4A647] hover:bg-[#1E2229] dark:hover:bg-[#B8892B] hover:text-white dark:hover:text-[#0C0A06] text-[#1E2229] dark:text-[#D4A647] text-[11px] font-bold uppercase tracking-widest px-5 py-3 rounded-full transition-all"
        >
          Fale Conosco
        </a>
      </div>
    </header>
  );
}