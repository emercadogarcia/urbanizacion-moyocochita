export default function CierreSection() {
  return (
    <section className="py-[60px] px-6 text-center relative overflow-hidden bg-gradient-to-br from-[#8B5E3C] to-[#6B4226] fade-in">
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>
      
      <div className="relative z-10">
        <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#F0C040] mb-2">Preventa limitada</div>
        <h2 className="font-serif text-[clamp(1.6rem,5vw,2.2rem)] font-bold leading-[1.2] text-white mb-4">Últimos lotes al precio de preventa</h2>
        <p className="text-[rgba(255,255,255,0.8)] text-[15px] leading-[1.7] mb-8">
          Una vez que termine la preventa, el precio sube. Los lotes frente al área escolar son los que más rápido se agotan.
        </p>

        <div className="bg-[rgba(0,0,0,0.2)] border border-[rgba(255,255,255,0.2)] rounded-[12px] p-6 my-8">
          <div className="font-serif text-[clamp(2.5rem,8vw,3.5rem)] font-black text-[#F0C040] leading-none">27</div>
          <p className="text-[rgba(255,255,255,0.7)] text-sm mt-1.5">lotes disponibles en preventa promocional</p>
          
          <div className="bg-[rgba(0,0,0,0.3)] rounded-full h-2.5 my-4 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#C9971C] to-[#F0C040] rounded-full w-[73%]" style={{ animation: 'fill-progress 1.5s ease-out' }}></div>
          </div>
          
          <div className="flex justify-between text-[11px] text-[rgba(255,255,255,0.5)]">
            <span>0 disponibles</span>
            <span className="text-[#F0C040] font-semibold">73% vendido</span>
            <span>100 lotes totales</span>
          </div>
        </div>

        <a
          href="https://wa.me/59170000000?text=Hola%2C%20vi%20el%20mapa%20y%20quiero%20el%20lote%20m%C3%A1s%20cercano%20al%20Colegio%2025%20de%20Mayo.%20%C2%BFCu%C3%A1l%20es%20el%20precio%20de%20preventa%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-[#25D366] text-white font-bold text-[17px] px-8 py-4.5 rounded-full no-underline shadow-[0_6px_24px_rgba(37,211,102,0.4)] hover:scale-105 transition-transform w-full justify-center mt-2"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Consultar Precio de Preventa Ahora
        </a>
        <p className="text-[rgba(255,255,255,0.55)] text-sm mt-4">🔒 No mostramos el precio en la web — escríbenos y recibe el catálogo personalizado</p>
      </div>
      
      <style jsx>{`
        @media (min-width: 768px) {
          section {
            padding: 80px 48px;
          }
          .font-serif {
            font-size: 5rem;
          }
        }
      `}</style>
    </section>
  );
}
