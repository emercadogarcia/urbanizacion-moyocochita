export default function TrustSection() {
  return (
    <section className="py-[60px] px-6 bg-white">
      <div className="fade-in">
        <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#2D6A35] mb-2">Por qué confían en nosotros</div>
        <h2 className="font-serif text-[clamp(1.6rem,5vw,2.2rem)] font-bold leading-[1.2] mb-4 text-[#1C4422]">Moyocochita: un proyecto con respaldo real</h2>
        <p className="text-[#5A5A5A] text-[15px] leading-[1.7] max-w-[540px]">
          Más de dos años de desarrollo, trámites completos y propietarios felices avalan nuestro trabajo en la región de Camargo.
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-9 fade-in">
        <div className="bg-white rounded-[12px] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.12)] text-center border-t-4 border-[#2D6A35]">
          <span className="font-serif text-2xl font-black text-[#1C4422] leading-none block mb-1">+80</span>
          <div className="text-xs text-[#5A5A5A] font-medium leading-[1.4]">Lotes vendidos hasta hoy</div>
        </div>
        
        <div className="bg-white rounded-[12px] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.12)] text-center border-t-4 border-[#2D6A35]">
          <span className="font-serif text-2xl font-black text-[#1C4422] leading-none block mb-1">100%</span>
          <div className="text-xs text-[#5A5A5A] font-medium leading-[1.4]">Papeles al día — escrituras en orden</div>
        </div>
        
        <div className="bg-white rounded-[12px] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.12)] text-center border-t-4 border-[#C9971C]">
          <span className="font-serif text-2xl font-black text-[#8B5E3C] leading-none block mb-1">1ra</span>
          <div className="text-xs text-[#5A5A5A] font-medium leading-[1.4]">Urb. con colegio propio en la zona</div>
        </div>
        
        <div className="bg-white rounded-[12px] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.12)] text-center border-t-4 border-[#C9971C]">
          <span className="font-serif text-2xl font-black text-[#8B5E3C] leading-none block mb-1">+35%</span>
          <div className="text-xs text-[#5A5A5A] font-medium leading-[1.4]">Plusvalía proyectada a 5 años</div>
        </div>
      </div>
      
      <style jsx>{`
        @media (min-width: 768px) {
          section {
            padding: 80px 48px;
          }
          .grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
