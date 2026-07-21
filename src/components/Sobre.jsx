import React from 'react';

export function Sobre() {
  return (
    <section id="sobre" className="max-w-6xl mx-auto px-6 py-20 lg:py-28 grid md:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <div className="absolute inset-0 bg-[#F3EFE9] rounded-[2.5rem] transform -translate-x-3 translate-y-3 -z-10"></div>
        <div className="w-full aspect-square rounded-[2.5rem] border border-[#EAE5DF] overflow-hidden relative group">
          <img 
            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80" 
            alt="Dra. Luciana" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="space-y-6">
        <span className="text-[9px] uppercase tracking-widest font-bold text-[#C5A880]">O Conceito</span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1E2229] leading-tight">
          Dra. Luciana <br/>
          <span className="text-[#1E2229]/50 italic font-normal text-2xl">Cuidado personalizado em Manaus</span>
        </h2>
        <p className="text-sm text-[#1E2229]/60 leading-relaxed">
          No Studio Mobilizare, cada pessoa é cuidada de forma individualizada. Associamos a precisão da Quiropraxia para o alinhamento articular com os movimentos controlados do Pilates para estabilização, fortalecimento e bem-estar integral.
        </p>

        <div className="space-y-4 pt-4 border-t border-[#EAE5DF]">
          <div className="flex items-start space-x-3">
            <span className="text-[#C5A880] mt-0.5">✔</span>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E2229]">Ambiente Exclusivo</h4>
              <p className="text-xs text-[#1E2229]/50">Estúdio planejado e extremamente tranquilo localizado no bairro Cidade Nova.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-[#C5A880] mt-0.5">✔</span>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E2229]">Foco no Seu Ritmo</h4>
              <p className="text-xs text-[#1E2229]/50">Aulas estruturadas respeitando os limites e a evolução natural do seu corpo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}