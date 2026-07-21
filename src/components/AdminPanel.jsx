import React, { useState } from 'react';

export function AdminPanel({ whatsappNumber, setWhatsappNumber, showInstagram, setShowInstagram }) {
  const [isAdminOpen, setIsAdminOpen] = useState(true);
  const [tempPhone, setTempPhone] = useState(whatsappNumber);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSavePhone = () => {
    setWhatsappNumber(tempPhone);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  if (!isAdminOpen) {
    return (
      <button 
        onClick={() => setIsAdminOpen(true)}
        className="fixed bottom-4 left-4 z-40 bg-[#1E2229] text-[#C5A880] p-3 rounded-full shadow-lg border border-[#C5A880]/20 text-xs hover:scale-105 transition-all"
        aria-label="Abrir painel administrativo"
      >
        Admin
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-[#1E2229] text-white rounded-3xl p-5 shadow-2xl border border-[#C5A880]/30 max-w-xs animate-fadeIn">
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880]">Admin Simulador</span>
        <button onClick={() => setIsAdminOpen(false)} className="text-xs hover:text-[#C5A880]">✕</button>
      </div>
      
      <div className="space-y-4">
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

        <div className="space-y-1">
          <label className="text-[9px] uppercase tracking-wider font-bold text-white/55">WhatsApp do Studio</label>
          <div className="flex space-x-1">
            <input 
              type="text" 
              value={tempPhone}
              onChange={(e) => setTempPhone(e.target.value)}
              className="bg-white/10 border border-white/20 text-xs rounded px-2 py-1.5 w-full text-white font-mono"
            />
            <button 
              onClick={handleSavePhone}
              className="bg-[#C5A880] text-[#1E2229] font-bold text-[10px] px-3 rounded hover:bg-[#C5A880]/90 transition-colors"
            >
              Salvar
            </button>
          </div>
          {showSuccess && <p className="text-[9px] text-emerald-400">Atualizado com sucesso!</p>}
        </div>
      </div>
    </div>
  );
}