export default function GallerySection() {
  return (
    <section id="galeria" className="py-16 sm:py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative group order-2 md:order-1">
          <div className="absolute -inset-4 bg-yellow-400/20 rounded-[2rem] md:rounded-[3rem] blur-2xl group-hover:bg-yellow-400/30 transition duration-500"></div>
          <div className="relative bg-white p-2 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80"
              alt="Mapa de Lotes Moyocochita"
              className="w-full h-auto rounded-[1.2rem] md:rounded-[1.8rem] opacity-90"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-blue-900/90 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm flex items-center">
                <i className="fas fa-search-plus mr-2"></i> VER PLANO DETALLADO
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-yellow-400 text-xs sm:text-sm font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">
            Disponibilidad
          </h2>
          <h3 className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-6 sm:mb-8 leading-none">
            Distribución Planificada
          </h3>
          <p className="text-base sm:text-xl text-slate-300 mb-8 sm:mb-10 font-light leading-relaxed">
            Contamos con lotes de diversas dimensiones, todos con acceso directo a calles internas proyectadas, garantizando una excelente ventilación y asoleamiento.
          </p>
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3 sm:space-x-4 border-b border-white/10 pb-3 sm:pb-4">
              <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold text-sm sm:text-base">
                01
              </span>
              <span className="text-sm sm:text-lg font-semibold">
                Calles internas proyectadas
              </span>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 border-b border-white/10 pb-3 sm:pb-4">
              <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold text-sm sm:text-base">
                02
              </span>
              <span className="text-sm sm:text-lg font-semibold">
                Áreas verdes recreativas
              </span>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 border-b border-white/10 pb-3 sm:pb-4">
              <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold text-sm sm:text-base">
                03
              </span>
              <span className="text-sm sm:text-lg font-semibold">
                Cercanía a centros de servicio
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
