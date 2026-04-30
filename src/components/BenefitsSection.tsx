export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 sm:mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-blue-900 text-xs sm:text-sm font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">
              ¿Por qué invertir aquí?
            </h2>
            <p className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Tu terreno en la zona con mayor proyección
            </p>
          </div>
          <p className="text-gray-500 text-sm sm:text-lg max-w-sm">
            La Urbanización Moyocochita ofrece la combinación perfecta entre naturaleza, seguridad y retorno de inversión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
          <div className="card-hover bg-white p-6 sm:p-10 rounded-2xl sm:rounded-[2.5rem] border border-gray-100">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-50 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-8">
              <i className="fas fa-home text-blue-900 text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Lotes Listos para Vivir</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Urbanización diseñada con calles amplias y distribución organizada para tu comodidad.
            </p>
          </div>
          <div className="card-hover bg-white p-6 sm:p-10 rounded-2xl sm:rounded-[2.5rem] border border-gray-100">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-50 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-8">
              <i className="fas fa-seedling text-yellow-600 text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Entorno Productivo</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Camargo es tierra de sol y vino, un municipio próspero con un futuro brillante.
            </p>
          </div>
          <div className="card-hover bg-white p-6 sm:p-10 rounded-2xl sm:rounded-[2.5rem] border border-gray-100">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-50 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-8">
              <i className="fas fa-shield-alt text-blue-900 text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Inversión Patrimonial</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Asegura el futuro de tu familia adquiriendo bienes raíces en una zona de expansión.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
