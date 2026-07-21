import React, { useState } from 'react';

// Agora ele recebe o 'onClose' para podermos fechar o painel
export function AdminPanel({ whatsappNumber, setWhatsappNumber, showInstagram, setShowInstagram, onClose }) {
  const [tempPhone, setTempPhone] = useState(whatsappNumber);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSavePhone = () => {
    setWhatsappNumber(tempPhone);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <>
      {/* Fundo escuro semitransparente para dar destaque ao painel */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={onClose}></div>
      
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-[#1E2229] text-white rounded-3xl p-6 shadow-2xl border border-[#C5A880]/30 w-full max-w-sm animate-fadeIn">
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880]">⚙️ Modo Desenvolvedor</span>
          <button onClick={onClose} className="text-xs hover:text-[#C5A880] p-1">✕</button>
        </div>
        
        <p className="text-[11px] text-white/50 mb-5 leading-relaxed">
          Painel restrito. Altere as variáveis do site em tempo real.
        </p>

        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-white/80">Exibir seção Instagram?</label>
            <button 
              onClick={() => setShowInstagram(!showInstagram)} 
              className={`w-11 h-6 rounded-full p-1 transition-colors relative flex items-center ${
                showInstagram ? 'bg-[#C5A880]' : 'bg-white/20'
              }`}
            >
              <div className={`w-4 h-4 bg-[#1E2229] rounded-full transform transition-transform ${
                showInstagram ? 'translate-x-5' : 'translate-x-0'
              }`} />
            </button>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-wider font-bold text-white/55">Nº do WhatsApp (DDD + Número)</label>
            <div className="flex space-x-2">
              <input 
                type="text" 
                value={tempPhone}
                onChange={(e) => setTempPhone(e.target.value)}
                className="bg-white/10 border border-white/20 text-xs rounded-lg px-3 py-2 w-full text-white font-mono focus:outline-none focus:border-[#C5A880]"
              />
              <button 
                onClick={handleSavePhone}
                className="bg-[#C5A880] text-[#1E2229] font-bold text-[11px] px-4 rounded-lg hover:bg-[#C5A880]/90 transition-colors"
              >
                Salvar
              </button>
            </div>
            {showSuccess && <p className="text-[10px] text-emerald-400 pt-1">Atualizado com sucesso!</p>}
          </div>
        </div>
      </div>
    </>
  );
}