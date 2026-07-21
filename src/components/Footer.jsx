import React from 'react';

export function Footer() {
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