export default function HeroSection() {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[100svh] flex flex-col justify-end p-0 relative overflow-hidden bg-gradient-to-br from-[#1C4422] via-[#2D6A35] to-[#4A9A57]">
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.04) 1px, transparent 1px), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="relative z-2 px-6 pb-20 pt-10 fade-in">
        <div className="inline-flex items-center gap-1.5 bg-[rgba(201,151,28,0.2)] border border-[#C9971C] text-[#F0C040] rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-[0.08em] uppercase mb-4">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="5" fill="#C9971C"/></svg>
          Camargo, Chuquisaca · Preventa Activa
        </div>
        
        <h1 className="font-serif text-[clamp(2rem,7vw,3rem)] font-black text-white leading-[1.15] mb-4">
          El único lugar donde tus hijos <em className="font-serif italic text-[#F0C040]">caminan al colegio</em> desde casa
        </h1>
        
        <p className="text-[rgba(255,255,255,0.82)] text-base leading-[1.6] mb-8 max-w-[480px]">
          Urbanización Moyocochita — lotes de alta plusvalía con el Colegio 25 de Mayo dentro del predio, servicios básicos y seguridad jurídica garantizada.
        </p>
        
        <a
          href="#formulario"
          onClick={scrollToForm}
          className="inline-flex items-center gap-2.5 bg-[#C9971C] text-[#1C4422] font-bold text-base px-7 py-4 rounded-full no-underline shadow-[0_4px_20px_rgba(201,151,28,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(201,151,28,0.5)] transition-all duration-200"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014 11.74 19.79 19.79 0 01.92 3.1 2 2 0 012.9.93h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
          </svg>
          Ver Lotes Disponibles
        </a>
      </div>
      
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[rgba(255,255,255,0.5)] text-[11px] tracking-[0.06em] uppercase" style={{ animation: 'bounce 2.5s infinite' }}>
        <span>Ver más</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
}
