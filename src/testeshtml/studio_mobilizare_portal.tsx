import React, { useState, useRef, useEffect } from 'react';

// =========================================================================
// 1. COMPONENTE: NAVBAR
// =========================================================================
function Navbar({ whatsappNumber }) {
  const msgDefault = encodeURIComponent('Olá! Gostaria de agendar uma consulta de avaliação no Studio Mobilizare.');

  return (
    <header className="w-full bg-[#FAF8F5]/80 backdrop-blur-md sticky top-0 z-40 border-b border-[#EAE5DF] px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        {/* Monograma Minimalista */}
        <div className="w-9 h-9 border border-[#1E2229]/20 rounded-full flex items-center justify-center font-serif text-sm font-semibold text-[#1E2229] bg-[#F3EFE9]">
          M
        </div>
        <div className="flex flex-col">
          <span className="font-serif text-base font-bold tracking-wide text-[#1E2229] uppercase leading-none">Studio Mobilizare</span>
          <span className="text-[9px] tracking-[0.22em] uppercase text-[#C5A880] font-semibold mt-1">Pilates & Bem-estar</span>
        </div>
      </div>

      {/* Navegação Principal */}
      <nav className="hidden md:flex items-center space-x-10 text-[11px] font-semibold uppercase tracking-widest text-[#1E2229]/60">
        <a href="#sobre" className="hover:text-[#1E2229] transition-colors">O Studio</a>
        <a href="#metodos" className="hover:text-[#1E2229] transition-colors">Modalidades</a>
        <a href="#depoimentos" className="hover:text-[#1E2229] transition-colors">Depoimentos</a>
        <a href="#instagram-section" className="hover:text-[#1E2229] transition-colors">Instagram</a>
      </nav>

      {/* CTA de Agendamento */}
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

// =========================================================================
// 2. COMPONENTE: HERO
// =========================================================================
function Hero({ whatsappNumber }) {
  const msgPilates = encodeURIComponent('Olá! Gostaria de agendar uma aula experimental de Pilates no Studio Mobilizare.');
  const msgQuiro = encodeURIComponent('Olá Dra. Luciana! Gostaria de agendar uma consulta de avaliação clínica / Quiropraxia no Studio Mobilizare.');

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-7 space-y-8">
        <div className="inline-flex items-center space-x-2 bg-[#F3EFE9] px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full"></span>
          <span className="text-[9px] uppercase tracking-widest font-bold text-[#1E2229]/70">Atendimento Exclusivo em Manaus</span>
        </div>
        
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1E2229] tracking-tight leading-[1.1]">
          Conecte mente e corpo para uma <span className="italic text-[#C5A880] font-normal">vida sem limitações</span>.
        </h1>
        
        <p className="text-sm sm:text-base text-[#1E2229]/60 leading-relaxed max-w-xl">
          Escolha o seu caminho para o bem-estar no Studio Mobilizare. Oferecemos Pilates clínico de alta performance e Quiropraxia para alívio imediato de dores.
        </p>

        {/* CTAs Duplos Separados */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${msgPilates}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#1E2229] hover:bg-[#C5A880] text-[#FAF8F5] hover:text-[#1E2229] text-center text-[11px] font-bold uppercase tracking-widest px-7 py-5 rounded-full transition-all shadow-lg shadow-[#1E2229]/10"
          >
            Agendar Aula de Pilates
          </a>
          
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${msgQuiro}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-[#1E2229] text-[#1E2229] hover:bg-[#1E2229] hover:text-white text-center text-[11px] font-bold uppercase tracking-widest px-7 py-5 rounded-full transition-all"
          >
            Marcar Quiropraxia
          </a>
        </div>
      </div>

      {/* Imagem de Destaque Abstrata */}
      <div className="md:col-span-5 relative">
        <div className="absolute inset-0 bg-[#F3EFE9] rounded-[2rem] transform translate-x-3 translate-y-3 -z-10"></div>
        <div className="w-full aspect-[4/5] rounded-[2rem] border border-[#EAE5DF] overflow-hidden relative group">
          <img 
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80" 
            alt="Prática de Pilates clínico estrutural no Studio Mobilizare" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E2229]/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 3. COMPONENTE: TRIAGEM (Seleção de Objetivos)
// =========================================================================
function Triagem({ whatsappNumber }) {
  const [activeObjective, setActiveObjective] = useState(null);

  const objetivos = [
    {
      id: 'postura',
      title: 'Melhorar Postura',
      label: 'Postura',
      servico: 'Pilates',
      msg: 'Gostaria de agendar uma aula de Pilates focado em postura',
      icon: (
        <svg className="w-5 h-5 text-[#C5A880] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4a4 4 0 100 8 4 4 0 000-8zM12 14a8 8 0 00-8 8h16a8 8 0 00-8-8z" />
        </svg>
      )
    },
    {
      id: 'dores',
      title: 'Alívio de Dores',
      label: 'Alívio de Dores',
      servico: 'Quiropraxia',
      msg: 'Gostaria de agendar uma consulta de Quiropraxia para alívio de dores',
      icon: (
        <svg className="w-5 h-5 text-[#C5A880] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1v12z" />
        </svg>
      )
    },
    {
      id: 'estresse',
      title: 'Reduzir o Estresse',
      label: 'Reduzir Estresse',
      servico: 'Pilates',
      msg: 'Gostaria de agendar uma aula experimental de Pilates para reduzir o estresse',
      icon: (
        <svg className="w-5 h-5 text-[#C5A880] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      )
    },
    {
      id: 'flexibilidade',
      title: 'Ganhar Flexibilidade',
      label: 'Flexibilidade',
      servico: 'Pilates',
      msg: 'Gostaria de agendar uma aula experimental de Pilates para flexibilidade',
      icon: (
        <svg className="w-5 h-5 text-[#C5A880] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
        </svg>
      )
    }
  ];

  const handleSelect = (obj) => {
    setActiveObjective(obj);
  };

  return (
    <section className="bg-[#F3EFE9] py-16 px-6 border-y border-[#EAE5DF]">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <div className="space-y-2">
          <span className="text-[9px] uppercase tracking-widest font-bold text-[#C5A880]">Seu Momento</span>
          <h2 className="font-serif text-3xl text-[#1E2229] tracking-tight">Qual é o seu principal objetivo hoje?</h2>
          <p className="text-xs text-[#1E2229]/50">Selecione para drecionar seu atendimento personalizado no Studio Mobilizare:</p>
        </div>

        {/* Grid de Cards de Opção */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {objetivos.map((obj) => (
            <button 
              key={obj.id}
              onClick={() => handleSelect(obj)} 
              className={`border p-6 rounded-2xl flex flex-col items-center justify-center space-y-3 transition-all hover:scale-[1.02] hover:shadow-soft group ${
                activeObjective?.id === obj.id 
                  ? 'border-[#C5A880] ring-2 ring-[#C5A880]/30 bg-[#F3EFE9]' 
                  : 'bg-[#FAF8F5] border-[#EAE5DF]'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                activeObjective?.id === obj.id 
                  ? 'bg-[#1E2229] text-white' 
                  : 'bg-[#F3EFE9]'
              }`}>
                {obj.icon}
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1E2229]">{obj.label}</span>
            </button>
          ))}
        </div>

        {/* Painel de Resposta Dinâmica com Animação */}
        {activeObjective && (
          <div className="max-w-lg mx-auto bg-[#FAF8F5] p-8 rounded-3xl border border-[#EAE5DF] space-y-5 shadow-soft animate-fadeIn">
            <p className="text-xs text-[#1E2229]/60 leading-relaxed">
              Para quem busca <strong className="text-[#C5A880] uppercase tracking-wider text-xs">{activeObjective.title}</strong>, o Studio Mobilizare indica sessões de <span className="font-bold text-[#1E2229]">{activeObjective.servico}</span> presenciais para alinhamento e consciência corporal.
            </p>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Realizei o autodiagnóstico no site do Studio Mobilizare. ' + activeObjective.msg + '.')}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#1E2229] hover:bg-[#C5A880] text-white hover:text-[#1E2229] px-6 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-md transition-all"
            >
              <span>Prosseguir pelo WhatsApp</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

// =========================================================================
// 4. COMPONENTE: SOBRE
// =========================================================================
function Sobre() {
  return (
    <section id="sobre" className="max-w-6xl mx-auto px-6 py-20 lg:py-28 grid md:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <div className="absolute inset-0 bg-[#F3EFE9] rounded-[2.5rem] transform -translate-x-3 translate-y-3 -z-10"></div>
        <div className="w-full aspect-square rounded-[2.5rem] border border-[#EAE5DF] overflow-hidden relative group">
          <img 
            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80" 
            alt="Dra. Luciana em seu espaço de Pilates e Quiropraxia" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E2229]/30 to-transparent"></div>
        </div>
      </div>

      <div className="space-y-6">
        <span className="text-[9px] uppercase tracking-widest font-bold text-[#C5A880]">O Conceito</span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1E2229] leading-tight">
          Dra. Luciana <br/>
          <span className="text-[#1E2229]/50 italic font-normal text-2xl">Cuidado personalizado em Manaus</span>
        </h2>
        <p className="text-sm text-[#1E2229]/60 leading-relaxed">
          No Studio Mobilizare, cada pessoa é cuidada de forma individualizada. Associamos a precisão cirúrgica da Quiropraxia para o alinhamento articular com os movimentos controlados do Pilates para estabilização, fortalecimento e bem-estar integral.
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

// =========================================================================
// 5. COMPONENTE: METODOS
// =========================================================================
function Metodos() {
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
    <section id="metodos" className="bg-[#FAF8F5] border-t border-[#EAE5DF] py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="text-[9px] uppercase tracking-widest font-bold text-[#C5A880]">Nossos Serviços</span>
          <h2 className="font-serif text-3xl text-[#1E2229] tracking-tight">O que oferecemos</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {servicos.map((item, index) => (
            <div key={index} className="bg-[#FAF8F5] border border-[#EAE5DF] rounded-3xl overflow-hidden hover:shadow-soft transition-all">
              <div className="h-48 overflow-hidden relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#1E2229]">{item.title}</h3>
                <p className="text-xs text-[#1E2229]/50 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 6. COMPONENTE: DEPOIMENTOS
// =========================================================================
function Depoimentos() {
  const testemunhos = [
    {
      author: 'Aline M.',
      role: 'Aluna de Pilates - Cidade Nova',
      text: 'Comecei a fazer Pilates no Studio Mobilizare por causa de constantes dores nas costas e cansaço físico. Hoje, sinto meu corpo muito mais leve, alongado e com a postura completamente corrigida.'
    },
    {
      author: 'Fabrício S.',
      role: 'Paciente de Quiropraxia',
      text: 'Sempre fui travado e achava que dores nas articulações eram normais do dia a dia. A quiropraxia clínica me devolveu a mobilidade que eu não tinha há anos. Atendimento maravilhoso!'
    }
  ];

  return (
    <section id="depoimentos" className="bg-[#F3EFE9] py-20 px-6 border-t border-[#EAE5DF]">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="text-[9px] uppercase tracking-widest font-bold text-[#C5A880]">Histórias Reais</span>
          <h2 className="font-serif text-3xl text-[#1E2229] tracking-tight">O que dizem os alunos e pacientes</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testemunhos.map((item, index) => (
            <div key={index} className="bg-[#FAF8F5] border border-[#EAE5DF] p-8 rounded-3xl space-y-4 relative shadow-soft">
              <span className="absolute top-6 right-8 text-4xl text-[#C5A880]/15 font-serif">“</span>
              <p className="text-xs text-[#1E2229]/70 italic leading-relaxed">
                "{item.text}"
              </p>
              <div className="pt-2">
                <p className="text-xs font-bold text-[#1E2229] uppercase tracking-wider">{item.author}</p>
                <p className="text-[9px] text-[#1E2229]/40 font-semibold uppercase">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 7. COMPONENTE: INSTAGRAM FEED (Carrossel Horizontal de Transição Exclusiva)
// =========================================================================
function InstagramFeed() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Carregar e processar o script oficial de incorporação do Instagram
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

  // Processar mídias quando mudar de slide para evitar quebras visuais
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section id="instagram-section" className="bg-[#FAF8F5] py-20 px-6 border-t border-[#EAE5DF] flex flex-col items-center">
      <div className="w-full max-w-4xl space-y-8">
        
        {/* Cabeçalho */}
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

        {/* CONTAINER DO CARROSSEL DEDICADO */}
        <div className="relative w-full max-w-[340px] sm:max-w-[420px] mx-auto group">
          
          {/* Seta Esquerda */}
          <button 
            onClick={prevSlide}
            className="absolute -left-4 sm:-left-16 top-[45%] -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-[#1E2229] text-[#C5A880] border border-[#C5A880]/20 flex items-center justify-center shadow-md hover:bg-[#C5A880] hover:text-[#1E2229] active:scale-95 transition-all focus:outline-none"
            aria-label="Slide anterior"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Seta Direita */}
          <button 
            onClick={nextSlide}
            className="absolute -right-4 sm:-right-16 top-[45%] -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-[#1E2229] text-[#C5A880] border border-[#C5A880]/20 flex items-center justify-center shadow-md hover:bg-[#C5A880] hover:text-[#1E2229] active:scale-95 transition-all focus:outline-none"
            aria-label="Próximo slide"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Mask Wrapper do Carrossel */}
          <div className="w-full overflow-hidden rounded-[2rem] border border-[#EAE5DF] p-4 bg-[#F3EFE9] shadow-soft">
            
            {/* Trilho de Slide */}
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              
              {/* SLIDE 1 */}
              <div className="w-full shrink-0 flex justify-center px-1">
                <div className="w-full max-w-[350px] min-h-[480px] bg-white rounded-xl shadow-inner flex flex-col justify-between overflow-hidden">
                  <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DLzwux2O_u5/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: 'calc(100% - 2px)' }}>
                    <div style={{ padding: '16px' }}> 
                      <a href="https://www.instagram.com/p/DLzwux2O_u5/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank" rel="noopener noreferrer"> 
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}> 
                          <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div> 
                          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}> 
                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div> 
                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                          </div>
                        </div>
                        <div style={{ padding: '19% 0' }}></div> 
                        <p style={{ color: '#1E2229', fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '17px', textAlign: 'center' }}>Carregando publicação do Instagram...</p>
                      </a>
                    </div>
                  </blockquote>
                </div>
              </div>

              {/* SLIDE 2 */}
              <div className="w-full shrink-0 flex justify-center px-1">
                <div className="w-full max-w-[350px] min-h-[480px] bg-white rounded-xl shadow-inner flex flex-col justify-between overflow-hidden">
                  <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DWHGU-rjhRh/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: 'calc(100% - 2px)' }}>
                    <div style={{ padding: '16px' }}> 
                      <a href="https://www.instagram.com/p/DWHGU-rjhRh/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank" rel="noopener noreferrer"> 
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}> 
                          <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div> 
                          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}> 
                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div> 
                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                          </div>
                        </div>
                        <div style={{ padding: '19% 0' }}></div> 
                        <p style={{ color: '#1E2229', fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '17px', textAlign: 'center' }}>Carregando publicação do Instagram...</p>
                      </a>
                    </div>
                  </blockquote>
                </div>
              </div>

              {/* SLIDE 3 */}
              <div className="w-full shrink-0 flex justify-center px-1">
                <div className="w-full max-w-[350px] min-h-[480px] bg-white rounded-xl shadow-inner flex flex-col justify-between overflow-hidden">
                  <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DYKR4NRjnXX/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: 'calc(100% - 2px)' }}>
                    <div style={{ padding: '16px' }}> 
                      <a href="https://www.instagram.com/p/DYKR4NRjnXX/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank" rel="noopener noreferrer"> 
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}> 
                          <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div> 
                          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}> 
                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div> 
                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                          </div>
                        </div>
                        <div style={{ padding: '19% 0' }}></div> 
                        <p style={{ color: '#1E2229', fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '17px', textAlign: 'center' }}>Carregando publicação do Instagram...</p>
                      </a>
                    </div>
                  </blockquote>
                </div>
              </div>

            </div>
          </div>

          {/* Dots Indicadores Estilo Insta */}
          <div className="flex justify-center space-x-2 mt-6">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'bg-[#C5A880] w-4' : 'bg-[#1E2229]/20 w-2'
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 8. COMPONENTE: FOOTER
// =========================================================================
function Footer() {
  return (
    <footer className="bg-[#1E2229] text-[#FAF8F5] py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-12 items-start">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center font-serif text-xs font-semibold">
              M
            </div>
            <span className="font-serif tracking-widest uppercase text-sm font-bold">Studio Mobilizare</span>
          </div>
          <p className="text-xs text-[#FAF8F5]/50 max-w-xs leading-relaxed">
            Atendimentos integrados de Pilates e Quiropraxia clínica focados em devolver sua saúde e qualidade de movimento.
          </p>
        </div>

        <div className="text-xs space-y-2 text-[#FAF8F5]/70">
          <p className="font-bold text-[#FAF8F5] uppercase tracking-wider text-[10px]">Onde nos encontrar</p>
          <p>Bairro Cidade Nova - Manaus, AM</p>
          <p>Atendimento exclusivo sob agendamento prévio via WhatsApp.</p>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto border-t border-[#FAF8F5]/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between text-[10px] text-[#FAF8F5]/40 uppercase tracking-wider">
        <p>© 2026 Studio Mobilizare. Todos os direitos reservados.</p>
        <p>Desenvolvido por Lucas</p>
      </div>
    </footer>
  );
}

// =========================================================================
// 9. COMPONENTE: BOTÃO FLOATING WHATSAPP
// =========================================================================
function FloatingWhatsapp({ whatsappNumber }) {
  const msgDefault = encodeURIComponent('Olá! Gostaria de agendar uma consulta de avaliação no Studio Mobilizare.');

  return (
    <a 
      id="btn-floating-wa" 
      href={`https://wa.me/${whatsappNumber}?text=${msgDefault}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-28 right-6 z-50 bg-[#1E2229] text-[#C5A880] hover:bg-[#C5A880] hover:text-[#1E2229] border border-[#C5A880]/30 p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center md:bottom-8 md:right-8"
      aria-label="Fale pelo WhatsApp"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.978 14.074.956 11.48.956c-5.437 0-9.864 4.373-9.868 9.803-.001 1.738.468 3.43 1.36 4.947L1.87 20.76l5.01-1.307c1.3.1 2.2.3 3.5.3z"/>
      </svg>
    </a>
  );
}

// =========================================================================
// 10. COMPONENTE: ADMIN PANEL (Para Demonstração Clínica)
// =========================================================================
function AdminPanel({ whatsappNumber, setWhatsappNumber, showInstagram, setShowInstagram }) {
  const [isAdminOpen, setIsAdminOpen] = useState(true);
  const [tempPhone, setTempPhone] = useState(whatsappNumber);
  const [showSuccess, setShowSucess] = useState(false);

  const handleSavePhone = () => {
    setWhatsappNumber(tempPhone);
    setShowSucess(true);
    setTimeout(() => setShowSucess(false), 3000);
  };

  if (!isAdminOpen) {
    return (
      <button 
        onClick={() => setIsAdminOpen(true)}
        className="fixed bottom-4 left-4 z-40 bg-[#1E2229] text-[#C5A880] hover:bg-[#1E2229]/90 p-3 rounded-full shadow-lg border border-[#C5A880]/20 flex items-center justify-center text-xs space-x-1"
      >
        <span>⚙️ Admin</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-[#1E2229] text-white rounded-3xl p-5 shadow-2xl border border-[#C5A880]/30 max-w-xs transition-all duration-300">
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880] flex items-center space-x-1">
          ⚙️ Admin Simulador
        </span>
        <button onClick={() => setIsAdminOpen(false)} className="text-xs hover:text-[#C5A880] p-1">✖</button>
      </div>
      
      <p className="text-[10px] text-white/50 mb-4 leading-relaxed">
        Use este painel para testar a reatividade das variáveis de ambiente em tempo real.
      </p>

      <div className="space-y-4">
        {/* Toggle Instagram */}
        <div className="flex items-center justify-between">
          <label className="text-[11px] font-medium text-white/80">Exibir Instagram?</label>
          <button 
            onClick={() => setShowInstagram(!showInstagram)} 
            className={`w-10 h-6 rounded-full p-1 transition-colors relative flex items-center ${
              showInstagram ? 'bg-[#C5A880]' : 'bg-white/20'
            }`}
          >
            <div className={`w-4 h-4 bg-[#1E2229] rounded-full transform transition-transform ${
              showInstagram ? 'translate-x-4' : 'translate-x-0'
            }`} />
          </button>
        </div>

        {/* Mudar Telefone WhatsApp */}
        <div className="space-y-1">
          <label className="text-[9px] uppercase tracking-wider font-bold text-white/55">WhatsApp do Studio</label>
          <div className="flex space-x-1">
            <input 
              type="text" 
              value={tempPhone}
              onChange={(e) => setTempPhone(e.target.value)}
              className="bg-white/10 border border-white/20 text-xs rounded px-2 py-1.5 w-full text-white font-mono focus:outline-none focus:border-[#C5A880]"
            />
            <button 
              onClick={handleSavePhone}
              className="bg-[#C5A880] text-[#1E2229] font-bold text-[10px] px-3 rounded hover:bg-[#C5A880]/80 transition-colors"
            >
              Salvar
            </button>
          </div>
          {showSuccess && (
            <p className="text-[9px] text-emerald-400">Número updated com sucesso!</p>
          )}
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 11. COMPONENTE PRINCIPAL MESTRE: APP
// =========================================================================
export default function App() {
  const [whatsappNumber, setWhatsappNumber] = useState('5592984572635');
  const [showInstagram, setShowInstagram] = useState(true);

  return (
    <div className="bg-[#FAF8F5] text-[#1E2229] min-h-screen flex flex-col justify-between antialiased selection:bg-[#C5A880] selection:text-[#1E2229]">
      
      {/* 1. Header & Menu */}
      <Navbar whatsappNumber={whatsappNumber} />

      {/* 2. Hero Section */}
      <Hero whatsappNumber={whatsappNumber} />

      {/* 3. Seletor de Objetivos (Triagem Express) */}
      <Triagem whatsappNumber={whatsappNumber} />

      {/* 4. Sobre a Profissional */}
      <Sobre />

      {/* 5. Especialidades clínicas */}
      <Metodos />

      {/* 6. Depoimentos */}
      <Depoimentos />

      {/* 7. Instagram Feed (Exibição Condicional Controlada pelo Estado) */}
      {showInstagram && <InstagramFeed />}

      {/* 8. Rodapé */}
      <Footer />

      {/* 9. Botão Flutuante de Conversão */}
      <FloatingWhatsapp whatsappNumber={whatsappNumber} />

      {/* 10. Painel Administrativo de Monitoramento */}
      <AdminPanel 
        whatsappNumber={whatsappNumber} 
        setWhatsappNumber={setWhatsappNumber}
        showInstagram={showInstagram}
        setShowInstagram={setShowInstagram}
      />

    </div>
  );
}