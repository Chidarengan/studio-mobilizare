export function Depoimentos() {
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
    <section id="depoimentos" className="bg-[#F3EFE9] dark:bg-[#181511] py-20 px-6 border-t border-[#EAE5DF] dark:border-[#3D3429] transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="text-[9px] uppercase tracking-widest font-bold text-[#C5A880] dark:text-[#E5CEA9]">Histórias Reais</span>
          <h2 className="font-serif text-3xl text-[#1E2229] dark:text-[#F3ECE3] tracking-tight">O que dizem os alunos e pacientes</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testemunhos.map((item, index) => (
            <div key={index} className="bg-[#FAF8F5] dark:bg-[#0C0A06] border border-[#EAE5DF] dark:border-[#3D3429] p-8 rounded-3xl space-y-4 relative">
              <span className="absolute top-6 right-8 text-4xl text-[#C5A880]/15 dark:text-[#D4A647]/20 font-serif">“</span>
              <p className="text-xs text-[#1E2229]/70 dark:text-[#A69A8A] italic leading-relaxed">
                "{item.text}"
              </p>
              <div className="pt-2">
                <p className="text-xs font-bold text-[#1E2229] dark:text-[#F3ECE3] uppercase tracking-wider">{item.author}</p>
                <p className="text-[9px] text-[#1E2229]/40 dark:text-[#A69A8A]/70 font-semibold uppercase">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}