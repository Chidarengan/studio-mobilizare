import React, { useState, useEffect } from 'react';

export function InstagramFeed() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const scriptId = 'instagram-embed-script';
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [currentSlide]);

  return (
    <section id="instagram-section" className="bg-[#FAF8F5] py-20 px-6 border-t border-[#EAE5DF] flex flex-col items-center">
      <div className="w-full max-w-4xl space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[9px] uppercase tracking-widest font-bold text-[#C5A880]">Acompanhe nosso estúdio</span>
            <h2 className="font-serif text-3xl text-[#1E2229]">Instagram do Studio</h2>
            <p className="text-xs text-[#1E2229]/50">Acesse publicações reais direto do nosso perfil oficial no Instagram.</p>
          </div>
          <a 
            href="https://www.instagram.com/studiomobilizare/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#C5A880] uppercase tracking-wider hover:underline flex items-center space-x-1"
          >
            <span>@studiomobilizare</span>
            <span>→</span>
          </a>
        </div>

        <div className="relative w-full max-w-[340px] sm:max-w-[420px] mx-auto group">
          <button 
            onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
            className="absolute -left-4 sm:-left-16 top-[45%] -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-[#1E2229] text-[#C5A880] border border-[#C5A880]/20 flex items-center justify-center shadow-md hover:bg-[#C5A880] hover:text-[#1E2229] transition-all"
          >
            ‹
          </button>

          <button 
            onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
            className="absolute -right-4 sm:-right-16 top-[45%] -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-[#1E2229] text-[#C5A880] border border-[#C5A880]/20 flex items-center justify-center shadow-md hover:bg-[#C5A880] hover:text-[#1E2229] transition-all"
          >
            ›
          </button>

          <div className="w-full overflow-hidden rounded-[2rem] border border-[#EAE5DF] p-4 bg-[#F3EFE9] shadow-soft">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="w-full shrink-0 flex justify-center px-1">
                <div className="w-full max-w-[350px] min-h-[480px] bg-white rounded-xl shadow-inner overflow-hidden">
                  <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DLzwux2O_u5/" data-instgrm-version="14" style={{ background: '#FFF', border: 0, margin: '1px', width: '100%' }}></blockquote>
                </div>
              </div>
              <div className="w-full shrink-0 flex justify-center px-1">
                <div className="w-full max-w-[350px] min-h-[480px] bg-white rounded-xl shadow-inner overflow-hidden">
                  <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DWHGU-rjhRh/" data-instgrm-version="14" style={{ background: '#FFF', border: 0, margin: '1px', width: '100%' }}></blockquote>
                </div>
              </div>
              <div className="w-full shrink-0 flex justify-center px-1">
                <div className="w-full max-w-[350px] min-h-[480px] bg-white rounded-xl shadow-inner overflow-hidden">
                  <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DYKR4NRjnXX/" data-instgrm-version="14" style={{ background: '#FFF', border: 0, margin: '1px', width: '100%' }}></blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-2 mt-6">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'bg-[#C5A880] w-4' : 'bg-[#1E2229]/20 w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}