import React from 'react';

export default function GallerySection() {
  const slides = [
    {
      emoji: '🏞️',
      title: 'Arco de ingreso',
      desc: 'Entrada principal pavimentada con señalización'
    },
    {
      emoji: '🌿',
      title: 'Lotes demarcados',
      desc: 'Cada lote con estacas y límites definidos'
    },
    {
      emoji: '🏫',
      title: 'Colegio 25 de Mayo',
      desc: 'Infraestructura educativa dentro del predio'
    },
    {
      emoji: '🌳',
      title: 'Espacios verdes',
      desc: 'Zona de esparcimiento familiar planificada'
    },
    {
      emoji: '🗺️',
      title: 'Vista panorámica',
      desc: 'Ubicación estratégica en Camargo'
    }
  ];

  return (
    <section className="py-[60px] px-0 bg-[#1C4422] fade-in">
      <div className="mx-auto max-w-[1120px] px-6 pb-8">
        <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#F0C040] mb-2">Imágenes reales del terreno</div>
        <h2 className="font-serif text-[clamp(1.75rem,5vw,2.4rem)] font-bold leading-[1.2] text-white">Ve lo que estás comprando</h2>
      </div>

      <div className="flex gap-4 overflow-x-auto scroll-smooth px-6 pb-4 scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:snap-none md:px-0 md:pb-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-[78vw] max-w-[340px] snap-center rounded-3xl overflow-hidden bg-[rgba(255,255,255,0.12)] backdrop-blur-sm border border-[rgba(255,255,255,0.18)] md:min-w-0 md:max-w-none"
          >
            <div className="h-[180px] bg-[rgba(255,255,255,0.08)] flex items-center justify-center overflow-hidden">
              <div className="text-center text-[rgba(255,255,255,0.65)]">
                <span className="text-4xl block mb-1.5">{slide.emoji}</span>
                <p className="text-xs">{slide.title}</p>
              </div>
            </div>
            <div className="p-3.5 px-4">
              <h4 className="text-sm font-semibold text-white mb-1">{slide.title}</h4>
              <p className="text-xs text-[rgba(255,255,255,0.75)]">{slide.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4 px-6 text-[rgba(255,255,255,0.45)] text-xs flex items-center justify-center gap-2 md:px-0">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        Desliza para ver más fotos
      </div>
    </section>
  );
}
