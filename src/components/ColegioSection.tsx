import React from 'react';

export default function ColegioSection() {
  return (
    <section className="py-[60px] px-6 bg-white fade-in">
      <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#2D6A35] mb-2">El factor decisivo</div>
      <h2 className="font-serif text-[clamp(1.6rem,5vw,2.2rem)] font-bold leading-[1.2] mb-4 text-[#1C4422]">El Colegio 25 de Mayo está dentro de la urbanización</h2>
      <p className="text-[#5A5A5A] text-[15px] leading-[1.7] max-w-[540px]">
        No hay que cruzar calles peligrosas ni depender de transporte escolar. Tus hijos caminan seguros cada mañana — y tu patrimonio crece junto a ellos.
      </p>

      <div className="bg-gradient-to-br from-[#e8f5e9] to-[#c8e6c9] rounded-2xl p-7 mt-8 relative overflow-hidden">
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-xl p-3.5 flex items-center gap-3 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
            <div className="w-11 h-11 rounded-xl bg-[#fff8e1] flex items-center justify-center flex-shrink-0 text-2xl">🏠</div>
            <div>
              <h4 className="text-sm font-semibold text-[#1C4422]">Tu lote en Moyocochita</h4>
              <p className="text-xs text-[#5A5A5A] mt-0.5">Demarcado, escriturado y listo para construir</p>
            </div>
          </div>

          <div className="flex items-center px-5.5 gap-1 text-[#2D6A35] text-xs font-semibold">
            <div className="flex-1 h-0.5 bg-[repeating-linear-gradient(90deg,#2D6A35_0,#2D6A35_6px,transparent_6px,transparent_12px)]"></div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 8l4 4-4 4M3 12h18" />
            </svg>
            <span className="whitespace-nowrap">Solo pasos</span>
            <div className="flex-1 h-0.5 bg-[repeating-linear-gradient(90deg,#2D6A35_0,#2D6A35_6px,transparent_6px,transparent_12px)]"></div>
          </div>

          <div className="bg-white rounded-xl p-3.5 flex items-center gap-3 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
            <div className="w-11 h-11 rounded-xl bg-[#e3f2fd] flex items-center justify-center flex-shrink-0 text-2xl">🏫</div>
            <div>
              <h4 className="text-sm font-semibold text-[#1C4422]">Colegio 25 de Mayo</h4>
              <p className="text-xs text-[#5A5A5A] mt-0.5">Dentro del predio — educación garantizada</p>
            </div>
          </div>

          <div className="flex items-center px-5.5 gap-1 text-[#2D6A35] text-xs font-semibold">
            <div className="flex-1 h-0.5 bg-[repeating-linear-gradient(90deg,#2D6A35_0,#2D6A35_6px,transparent_6px,transparent_12px)]"></div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 8l4 4-4 4M3 12h18" />
            </svg>
            <span className="whitespace-nowrap">Proyección</span>
            <div className="flex-1 h-0.5 bg-[repeating-linear-gradient(90deg,#2D6A35_0,#2D6A35_6px,transparent_6px,transparent_12px)]"></div>
          </div>

          <div className="bg-white rounded-xl p-3.5 flex items-center gap-3 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
            <div className="w-11 h-11 rounded-xl bg-[#e8f5e9] flex items-center justify-center flex-shrink-0 text-2xl">🎓</div>
            <div>
              <h4 className="text-sm font-semibold text-[#1C4422]">Normal educativa — en proyección</h4>
              <p className="text-xs text-[#5A5A5A] mt-0.5">El hub educativo más completo de la región</p>
            </div>
          </div>
        </div>

        <div className="bg-[#2D6A35] text-white rounded-full px-5 py-2.5 text-sm font-semibold text-center mt-5">
          📍 &quot;Tus hijos caminan al colegio — tú ganas plusvalía&quot;
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          section {
            padding: 80px 48px;
          }
        }
      `}</style>
    </section>
  );
}
