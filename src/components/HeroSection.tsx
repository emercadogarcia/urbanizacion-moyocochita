export default function HeroSection() {
  return (
    <section id="inicio" className="hero-section min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6">
      <div className="max-w-5xl text-center">
        <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/30 text-white mb-6 sm:mb-8">
          <span className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></span>
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-yellow-100">
            Disponibilidad Inmediata
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-8xl font-extrabold text-white mb-6 sm:mb-8 leading-none">
          Lotes de Terreno <br /> en <span className="text-yellow-400">Camargo</span>
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-blue-50 mb-8 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed px-2">
          Listos para invertir y vivir en la <strong>Urbanización Moyocochita</strong>. Calidad de vida en el Chaco boliviano.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
          <a
            href="https://wa.me/59175525618?text=Hola%20me%20interesa%20solicitar%20informacion%20sobre%20los%20lotes%20de%20la%20Urbanizacion%20Moyocochita" target="_blank" rel="noopener noreferrer"
            className="btn-shine bg-yellow-400 text-blue-900 font-extrabold px-6 sm:px-10 py-4 sm:py-5 rounded-2xl shadow-2xl hover:shadow-yellow-400/20 transition-all text-sm sm:text-lg flex items-center justify-center"
          >
            SOLICITAR INFORMACIÓN <i className="fas fa-arrow-right ml-2 sm:ml-3 text-xs sm:text-sm"></i>
          </a>
          <a
            href="#galeria"
            className="bg-white/10 backdrop-blur-md text-white border border-white/40 font-bold px-6 sm:px-10 py-4 sm:py-5 rounded-2xl hover:bg-white/20 transition text-sm sm:text-lg"
          >
            VER PLANO DE LOTES
          </a>
        </div>
      </div>
    </section>
  );
}
