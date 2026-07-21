export function Footer() {
  return (
    <footer className="bg-[#1E2229] dark:bg-[#181511] text-[#FAF8F5] dark:text-[#F3ECE3] py-16 px-6 border-t dark:border-[#3D3429] transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-12 items-start">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 border border-white/20 dark:border-[#3D3429] rounded-full flex items-center justify-center font-serif text-xs font-semibold">
              M
            </div>
            <span className="font-serif tracking-widest uppercase text-sm font-bold">Studio Mobilizare</span>
          </div>
          <p className="text-xs text-[#FAF8F5]/50 dark:text-[#A69A8A] max-w-xs leading-relaxed">
            Atendimentos integrados de Pilates e Quiropraxia clínica focados em devolver sua saúde e qualidade de movimento.
          </p>
        </div>

        <div className="text-xs space-y-2 text-[#FAF8F5]/70 dark:text-[#A69A8A]">
          <p className="font-bold text-[#FAF8F5] dark:text-[#E5CEA9] uppercase tracking-wider text-[10px]">Onde nos encontrar</p>
          <p>Bairro Cidade Nova - Manaus, AM</p>
          <p>Atendimento exclusivo sob agendamento prévio via WhatsApp.</p>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto border-t border-[#FAF8F5]/10 dark:border-[#3D3429] mt-12 pt-6 flex flex-col sm:flex-row justify-between text-[10px] text-[#FAF8F5]/40 dark:text-[#A69A8A]/60 uppercase tracking-wider">
        <p>© 2026 Studio Mobilizare. Todos os direitos reservados.</p>
        <p>Desenvolvido por Lucas</p>
      </div>
    </footer>
  );
}