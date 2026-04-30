export default function GallerySection() {
  return (
    <section id="galeria" className="py-16 sm:py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative group order-2 md:order-1">
          <div className="absolute -inset-4 bg-yellow-400/20 rounded-[2rem] md:rounded-[3rem] blur-2xl group-hover:bg-yellow-400/30 transition duration-500"></div>
          <div className="relative bg-white p-2 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15000!2d-65.21!3d-20.64!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e38c7e0e2a3f6d%3A0x9f25b4e0e0b4b0b0!2sCamargo%2C%20Chuquisaca!5e1!3m2!1ses!2sbo!4v1"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-[1.2rem] md:rounded-[1.8rem] border-0"
              title="Ubicación Urbanización Moyocochita - Camargo, Chuquisaca"
            ></iframe>
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
