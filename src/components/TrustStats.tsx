export default function TrustStats() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-16 relative z-30">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-blue-900 mb-1">100%</div>
          <div className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase leading-tight">
            Legalmente Establecido
          </div>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-blue-900 mb-1">Chuquisaca</div>
          <div className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase leading-tight">
            Ubicación Estratégica
          </div>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-blue-900 mb-1">Planificado</div>
          <div className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase leading-tight">
            Urbanismo Moderno
          </div>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-blue-900 mb-1">Alta</div>
          <div className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase leading-tight">
            Plusvalía Anual
          </div>
        </div>
      </div>
    </div>
  );
}
