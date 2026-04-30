export default function BenefitsSection() {
  return (
    <section className="py-[60px] px-6 bg-[#F8F2E6] fade-in">
      <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#2D6A35] mb-2">Todo incluido</div>
      <h2 className="font-serif text-[clamp(1.6rem,5vw,2.2rem)] font-bold leading-[1.2] mb-4 text-[#1C4422]">4 razones para decidir hoy</h2>

      <div className="grid grid-cols-2 gap-3.5 mt-8">
        <div className="bg-white rounded-[12px] p-5 shadow-[0_2px_12px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 transition-transform duration-200">
          <div className="w-12 h-12 rounded-xl bg-[#EDE4D0] flex items-center justify-center text-2xl mb-3">🛣️</div>
          <h4 className="text-sm font-semibold text-[#1C4422] mb-1">Acceso directo</h4>
          <p className="text-xs text-[#5A5A5A] leading-[1.5]">Calle pavimentada de ingreso exclusiva para la urbanización</p>
        </div>
        
        <div className="bg-white rounded-[12px] p-5 shadow-[0_2px_12px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 transition-transform duration-200">
          <div className="w-12 h-12 rounded-xl bg-[#EDE4D0] flex items-center justify-center text-2xl mb-3">💧</div>
          <h4 className="text-sm font-semibold text-[#1C4422] mb-1">Agua y Luz</h4>
          <p className="text-xs text-[#5A5A5A] leading-[1.5]">Servicios básicos con trámite inmediato a tu nombre</p>
        </div>
        
        <div className="bg-white rounded-[12px] p-5 shadow-[0_2px_12px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 transition-transform duration-200">
          <div className="w-12 h-12 rounded-xl bg-[#EDE4D0] flex items-center justify-center text-2xl mb-3">📄</div>
          <h4 className="text-sm font-semibold text-[#1C4422] mb-1">Seguridad jurídica</h4>
          <p className="text-xs text-[#5A5A5A] leading-[1.5]">Escrituras individuales al día — cero riesgo legal</p>
        </div>
        
        <div className="bg-white rounded-[12px] p-5 shadow-[0_2px_12px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 transition-transform duration-200">
          <div className="w-12 h-12 rounded-xl bg-[#EDE4D0] flex items-center justify-center text-2xl mb-3">🌳</div>
          <h4 className="text-sm font-semibold text-[#1C4422] mb-1">Áreas verdes</h4>
          <p className="text-xs text-[#5A5A5A] leading-[1.5]">Espacios de esparcimiento y arborización planificada</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#1C4422] to-[#2D6A35] rounded-2xl p-6 mt-6 text-center">
        <p className="text-white text-[15px] leading-[1.6] mb-4">
          <strong className="text-[#F0C040]">No vendemos promesas.</strong><br/>
          Vendemos lotes demarcados, listos para transferencia inmediata.
        </p>
        <a
          href="https://wa.me/59170000000?text=Hola%2C%20quiero%20ver%20el%20cat%C3%A1logo%20de%20lotes%20y%20planos%20de%20Moyocochita"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-[#1C4422] font-bold text-sm px-6 py-3 rounded-full no-underline hover:scale-105 transition-transform"
        >
          📋 Recibir catálogo de planos
        </a>
      </div>
      
      <style jsx>{`
        @media (min-width: 768px) {
          section {
            padding: 80px 48px;
          }
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
