export default function Footer() {
  return (
    <footer className="py-12 sm:py-20 bg-white px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-blue-900 mb-6 sm:mb-8 leading-tight italic">
          "Invierte hoy en tu futuro en una de las zonas con mayor proyección del sur de Bolivia"
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <a
            href="https://wa.me/59175525618"
            className="bg-green-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-green-100 flex flex-col items-center group transition hover:bg-green-100"
          >
            <i className="fab fa-whatsapp text-3xl sm:text-4xl text-[#25D366] mb-3 sm:mb-4"></i>
            <span className="text-xs sm:text-sm font-bold text-gray-500 uppercase">Principal</span>
            <span className="text-xl sm:text-2xl font-black text-blue-900">75525618</span>
          </a>
          <a
            href="tel:59177870963"
            className="bg-blue-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-blue-100 flex flex-col items-center group transition hover:bg-blue-100"
          >
            <i className="fas fa-phone-alt text-3xl sm:text-4xl text-blue-900 mb-3 sm:mb-4"></i>
            <span className="text-xs sm:text-sm font-bold text-gray-500 uppercase">Alternativo</span>
            <span className="text-xl sm:text-2xl font-black text-blue-900">77870963</span>
          </a>
        </div>

        <div className="border-t border-gray-100 pt-8 sm:pt-12 text-gray-400 text-xs sm:text-sm flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="flex items-center space-x-2">
            <span className="font-black text-blue-900 uppercase text-sm sm:text-base">Urbanización Moyocochita</span>
            <span className="text-xs sm:text-sm">&copy; 2026 Camargo, Chuquisaca</span>
          </div>
          <div className="flex space-x-4 sm:space-x-6">
            <a href="#" className="hover:text-blue-900 text-xs sm:text-sm">
              Facebook
            </a>
            <a href="#" className="hover:text-blue-900 text-xs sm:text-sm">
              Instagram
            </a>
            <a href="#" className="hover:text-blue-900 text-xs sm:text-sm">
              Ubicación Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
