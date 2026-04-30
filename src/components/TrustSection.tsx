import React from 'react';

export default function TrustSection() {
  return (
    <section className="py-[60px] px-6 bg-white fade-in">
      <div className="mx-auto max-w-[1120px]">
        <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#2D6A35] mb-2">Por qué confían en nosotros</div>
        <h2 className="font-serif text-[clamp(1.75rem,5vw,2.4rem)] font-bold leading-[1.2] mb-4 text-[#1C4422]">Moyocochita: un proyecto con respaldo real</h2>
        <p className="text-[#5A5A5A] text-[15px] leading-[1.7] max-w-[700px]">
          Más de dos años de desarrollo, trámites completos y propietarios felices avalan nuestro trabajo en la región de Camargo.
        </p>

        <div className="grid gap-4 mt-9 sm:grid-cols-2 xl:grid-cols-4">
          {[
            {
              value: '+80',
              label: 'Lotes vendidos hasta hoy',
              border: 'border-[#2D6A35]',
              text: 'text-[#1C4422]'
            },
            {
              value: '100%',
              label: 'Papeles al día — escrituras en orden',
              border: 'border-[#2D6A35]',
              text: 'text-[#1C4422]'
            },
            {
              value: '1ra',
              label: 'Urb. con colegio propio en la zona',
              border: 'border-[#C9971C]',
              text: 'text-[#8B5E3C]'
            },
            {
              value: '+35%',
              label: 'Plusvalía proyectada a 5 años',
              border: 'border-[#C9971C]',
              text: 'text-[#8B5E3C]'
            }
          ].map((item) => (
            <div key={item.value} className={`bg-white rounded-[18px] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.12)] text-center border-t-4 ${item.border}`}>
              <span className={`font-serif text-2xl font-black leading-none block mb-1 ${item.text}`}>{item.value}</span>
              <div className="text-xs text-[#5A5A5A] font-medium leading-[1.5]">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
