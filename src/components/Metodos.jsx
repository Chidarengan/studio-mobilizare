export function Metodos() {
  const servicos = [
    {
      title: 'Pilates Presencial',
      desc: 'Trabalho completo de postura, flexibilidade e fortalecimento do core com acompanhamento próximo em aparelhos modernos.',
      img: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Quiropraxia Clínica',
      desc: 'Manipulações articulares e ajustes precisos de alta velocidade para destravar as articulações e restabelecer o sistema nervoso.',
      img: 'https://images.unsplash.com/photo-1519813538030-f5a941551277?auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Cuidado Integrado',
      desc: 'A associação perfeita de liberação miofascial e ventosaterapia para descompressão e regeneração profunda das fibras musculares.',
      img: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <section id="metodos" className="bg-[#FAF8F5] dark:bg-[#0C0A06] border-t border-[#EAE5DF] dark:border-[#3D3429] py-20 px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="text-[9px] uppercase tracking-widest font-bold text-[#C5A880] dark:text-[#E5CEA9]">Nossos Serviços</span>
          <h2 className="font-serif text-3xl text-[#1E2229] dark:text-[#F3ECE3] tracking-tight">O que oferecemos</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {servicos.map((item, index) => (
            <div key={index} className="bg-[#FAF8F5] dark:bg-[#181511] border border-[#EAE5DF] dark:border-[#3D3429] rounded-3xl overflow-hidden transition-all">
              <div className="h-48 overflow-hidden relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-90 dark:opacity-80" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#1E2229] dark:text-[#F3ECE3]">{item.title}</h3>
                <p className="text-xs text-[#1E2229]/50 dark:text-[#A69A8A] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}