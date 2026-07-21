export function Hero({ whatsappNumber }) {
  const msgPilates = encodeURIComponent('Olá! Gostaria de agendar uma aula experimental de Pilates no Studio Mobilizare.');
  const msgQuiro = encodeURIComponent('Olá Dra. Luciana! Gostaria de agendar uma consulta de avaliação clínica / Quiropraxia no Studio Mobilizare.');

  return (
    <section className="bg-[#FAF8F5] dark:bg-[#0C0A06] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 space-y-8">
          <div className="inline-flex items-center space-x-2 bg-[#F3EFE9] dark:bg-[#181511] px-3 py-1.5 rounded-full border border-transparent dark:border-[#3D3429]">
            <span className="w-1.5 h-1.5 bg-[#C5A880] dark:bg-[#D4A647] rounded-full"></span>
            <span className="text-[9px] uppercase tracking-widest font-bold text-[#1E2229]/70 dark:text-[#A69A8A]">Atendimento Exclusivo em Manaus</span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1E2229] dark:text-[#F3ECE3] tracking-tight leading-[1.1]">
            Conecte mente e corpo para uma <span className="italic text-[#C5A880] dark:text-[#E5CEA9] font-normal">vida sem limitações</span>.
          </h1>
          
          <p className="text-sm sm:text-base text-[#1E2229]/60 dark:text-[#A69A8A] leading-relaxed max-w-xl">
            Escolha o seu caminho para o bem-estar no Studio Mobilizare. Oferecemos Pilates clínico de alta performance e Quiropraxia para alívio imediato de dores.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${msgPilates}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1E2229] hover:bg-[#C5A880] dark:bg-[#D4A647] dark:hover:bg-[#B8892B] text-[#FAF8F5] dark:text-[#0C0A06] text-center text-[11px] font-bold uppercase tracking-widest px-7 py-5 rounded-full transition-all shadow-lg shadow-[#1E2229]/10 dark:shadow-none"
            >
              Agendar Aula de Pilates
            </a>
            
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${msgQuiro}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-[#1E2229] dark:border-[#3D3429] text-[#1E2229] dark:text-[#F3ECE3] hover:bg-[#1E2229] dark:hover:bg-[#181511] hover:text-white text-center text-[11px] font-bold uppercase tracking-widest px-7 py-5 rounded-full transition-all"
            >
              Marcar Quiropraxia
            </a>
          </div>
        </div>

        <div className="md:col-span-5 relative">
          <div className="absolute inset-0 bg-[#F3EFE9] dark:bg-[#181511] rounded-[2rem] transform translate-x-3 translate-y-3 -z-10 border border-transparent dark:border-[#3D3429]"></div>
          <div className="w-full aspect-[4/5] rounded-[2rem] border border-[#EAE5DF] dark:border-[#3D3429] overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80" 
              alt="Prática de Pilates" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 dark:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E2229]/30 dark:from-[#0C0A06]/70 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}