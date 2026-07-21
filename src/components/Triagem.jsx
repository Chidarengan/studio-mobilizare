import { useState } from 'react';

export function Triagem({ whatsappNumber }) {
  const [activeObjective, setActiveObjective] = useState(null);

  const objetivos = [
    {
      id: 'postura',
      title: 'Melhorar Postura',
      label: 'Postura',
      servico: 'Pilates',
      msg: 'Gostaria de agendar uma aula de Pilates focado em postura'
    },
    {
      id: 'dores',
      title: 'Alívio de Dores',
      label: 'Alívio de Dores',
      servico: 'Quiropraxia',
      msg: 'Gostaria de agendar uma consulta de Quiropraxia para alívio de dores'
    },
    {
      id: 'estresse',
      title: 'Reduzir o Estresse',
      label: 'Reduzir Estresse',
      servico: 'Pilates',
      msg: 'Gostaria de agendar uma aula experimental de Pilates para reduzir o estresse'
    },
    {
      id: 'flexibilidade',
      title: 'Ganhar Flexibilidade',
      label: 'Flexibilidade',
      servico: 'Pilates',
      msg: 'Gostaria de agendar uma aula experimental de Pilates para flexibilidade'
    }
  ];

  return (
    <section className="bg-[#F3EFE9] dark:bg-[#181511] py-16 px-6 border-y border-[#EAE5DF] dark:border-[#3D3429] transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <div className="space-y-2">
          <span className="text-[9px] uppercase tracking-widest font-bold text-[#C5A880] dark:text-[#E5CEA9]">Seu Momento</span>
          <h2 className="font-serif text-3xl text-[#1E2229] dark:text-[#F3ECE3] tracking-tight">Qual é o seu principal objetivo hoje?</h2>
          <p className="text-xs text-[#1E2229]/50 dark:text-[#A69A8A]">Selecione para direcionar seu atendimento personalizado no Studio Mobilizare:</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {objetivos.map((obj) => (
            <button 
              key={obj.id}
              onClick={() => setActiveObjective(obj)} 
              className={`border p-6 rounded-2xl flex flex-col items-center justify-center space-y-3 transition-all hover:scale-[1.02] ${
                activeObjective?.id === obj.id 
                  ? 'border-[#C5A880] dark:border-[#D4A647] ring-2 ring-[#C5A880]/30 dark:ring-[#D4A647]/30 bg-[#F3EFE9] dark:bg-[#2A231C]' 
                  : 'bg-[#FAF8F5] dark:bg-[#0C0A06] border-[#EAE5DF] dark:border-[#3D3429]'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                activeObjective?.id === obj.id 
                  ? 'bg-[#1E2229] dark:bg-[#D4A647] text-[#C5A880] dark:text-[#0C0A06]' 
                  : 'bg-[#FAF8F5] dark:bg-[#181511] text-[#C5A880] dark:text-[#D4A647]'
              }`}>
                ◆
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1E2229] dark:text-[#F3ECE3]">{obj.label}</span>
            </button>
          ))}
        </div>

        {activeObjective && (
          <div className="max-w-lg mx-auto bg-[#FAF8F5] dark:bg-[#0C0A06] p-8 rounded-3xl border border-[#EAE5DF] dark:border-[#3D3429] space-y-5 shadow-soft">
            <p className="text-xs text-[#1E2229]/60 dark:text-[#A69A8A] leading-relaxed">
              Para quem busca <strong className="text-[#C5A880] dark:text-[#E5CEA9] uppercase tracking-wider text-xs">{activeObjective.title}</strong>, o Studio Mobilizare indica sessões de <span className="font-bold text-[#1E2229] dark:text-[#F3ECE3]">{activeObjective.servico}</span> presenciais para alinhamento e consciência corporal.
            </p>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Realizei o autodiagnóstico no site do Studio Mobilizare. ' + activeObjective.msg + '.')}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#1E2229] dark:bg-[#D4A647] hover:bg-[#C5A880] dark:hover:bg-[#B8892B] text-white dark:text-[#0C0A06] px-6 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-md transition-all"
            >
              <span>Prosseguir pelo WhatsApp</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}