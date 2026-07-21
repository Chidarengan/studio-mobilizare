import { useState } from 'react';

export function AdminPanel({ 
  whatsappNumber, 
  setWhatsappNumber, 
  showInstagram, 
  setShowInstagram, 
  showBanner, 
  setShowBanner, 
  bannerText, 
  setBannerText, 
  onClose 
}) {
  const [tempPhone, setTempPhone] = useState(whatsappNumber);
  const [tempBannerText, setTempBannerText] = useState(bannerText);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    setWhatsappNumber(tempPhone);
    setBannerText(tempBannerText);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <>
      {/* Fundo escuro atrás do modal */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={onClose}></div>
      
      {/* Caixa do Admin */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-[#181511] text-[#F3ECE3] rounded-3xl p-6 shadow-2xl border border-[#D4A647]/30 w-full max-w-sm">
        <div className="flex items-center justify-between border-b border-[#3D3429] pb-3 mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4A647]">⚙️ Simulador Admin</span>
          <button onClick={onClose} className="text-xs hover:text-[#D4A647] p-1">✕</button>
        </div>

        <div className="space-y-4 text-left">
          
          {/* 1. TOGGLE: Banner de Aviso no Topo */}
          <div className="flex items-center justify-between">
            <label className="text-xs text-[#A69A8A]">Banner de Topo Ativo?</label>
            <button 
              onClick={() => setShowBanner(!showBanner)} 
              className={`w-10 h-6 rounded-full p-1 transition-colors relative flex items-center ${
                showBanner ? 'bg-[#D4A647]' : 'bg-[#2A231C]'
              }`}
            >
              <div className={`w-4 h-4 bg-[#0C0A06] rounded-full transform transition-transform ${
                showBanner ? 'translate-x-4' : 'translate-x-0'
              }`} />
            </button>
          </div>

          {/* Campo de Texto do Banner */}
          {showBanner && (
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-[#A69A8A]">Texto do Banner</label>
              <input 
                type="text" 
                value={tempBannerText}
                onChange={(e) => setTempBannerText(e.target.value)}
                className="bg-[#2A231C] border border-[#3D3429] text-xs rounded px-2.5 py-1.5 w-full text-[#F3ECE3] focus:outline-none focus:border-[#D4A647]"
              />
            </div>
          )}

          {/* 2. TOGGLE: Exibir Feed do Instagram */}
          <div className="flex items-center justify-between border-t border-[#3D3429] pt-3">
            <label className="text-xs text-[#A69A8A]">Exibir Seção Instagram?</label>
            <button 
              onClick={() => setShowInstagram(!showInstagram)} 
              className={`w-10 h-6 rounded-full p-1 transition-colors relative flex items-center ${
                showInstagram ? 'bg-[#D4A647]' : 'bg-[#2A231C]'
              }`}
            >
              <div className={`w-4 h-4 bg-[#0C0A06] rounded-full transform transition-transform ${
                showInstagram ? 'translate-x-4' : 'translate-x-0'
              }`} />
            </button>
          </div>

          {/* 3. INPUT: WhatsApp do Studio */}
          <div className="space-y-1 border-t border-[#3D3429] pt-3">
            <label className="text-[10px] uppercase font-bold text-[#A69A8A]">WhatsApp do Studio</label>
            <input 
              type="text" 
              value={tempPhone}
              onChange={(e) => setTempPhone(e.target.value)}
              className="bg-[#2A231C] border border-[#3D3429] text-xs rounded px-2.5 py-1.5 w-full text-[#F3ECE3] font-mono focus:outline-none focus:border-[#D4A647]"
            />
          </div>

          {/* Botão Salvar */}
          <button 
            onClick={handleSave}
            className="w-full bg-[#D4A647] text-[#0C0A06] font-bold text-xs py-2.5 rounded-xl hover:bg-[#B8892B] transition-colors mt-2"
          >
            Salvar Alterações
          </button>
          
          {showSuccess && <p className="text-[10px] text-emerald-400 text-center">Atualizado com sucesso!</p>}
        </div>
      </div>
    </>
  );
}