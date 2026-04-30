'use client';

import { useState } from 'react';

export default function FormSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    whatsapp: '',
    cuando: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the data to your backend/webhook
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Simulate sending to n8n webhook
    // fetch('YOUR_N8N_WEBHOOK_URL', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ ...formData, origen: 'Web_Moyocochita_V1' })
    // });
  };

  if (submitted) {
    return (
      <section className="py-[60px] px-6 bg-white fade-in" id="formulario">
        <div className="text-center py-5">
          <div className="text-5xl mb-3">✓</div>
          <h3 className="font-serif text-[#1C4422] mb-2 text-xl">¡Gracias por tu interés!</h3>
          <p className="text-[#5A5A5A] text-sm leading-[1.6]">
            Nuestro equipo te contactará en menos de 2 horas con toda la información sobre los lotes disponibles.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-[60px] px-6 bg-white fade-in" id="formulario">
      <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#2D6A35] mb-2">Reserva tu consulta</div>
      <h2 className="font-serif text-[clamp(1.6rem,5vw,2.2rem)] font-bold leading-[1.2] mb-4 text-[#1C4422]">¿Cuándo quieres tu lote?</h2>
      <p className="text-[#5A5A5A] text-[15px] leading-[1.7] max-w-[540px]">
        Solo 3 datos y nuestro equipo te contacta en menos de 2 horas con precios, planos y opciones de pago.
      </p>

      <div className="bg-[#F8F2E6] rounded-2xl p-8 mt-8 border border-[#EDE4D0]">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-sm font-semibold text-[#1C4422] mb-1.5">
              Tu nombre completo
            </label>
            <input
              type="text"
              id="nombre"
              placeholder="Ej. Carlos Mamani"
              autoComplete="name"
              required
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              className="w-full px-4 py-3 border-[1.5px] border-[#EDE4D0] rounded-xl text-[15px] text-[#1A1A1A] bg-white focus:outline-none focus:border-[#2D6A35] focus:shadow-[0_0_0_3px_rgba(45,106,53,0.12)] transition-all"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="whatsapp" className="block text-sm font-semibold text-[#1C4422] mb-1.5">
              Número de WhatsApp
            </label>
            <input
              type="tel"
              id="whatsapp"
              placeholder="+591 7X XXX XXX"
              autoComplete="tel"
              required
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              className="w-full px-4 py-3 border-[1.5px] border-[#EDE4D0] rounded-xl text-[15px] text-[#1A1A1A] bg-white focus:outline-none focus:border-[#2D6A35] focus:shadow-[0_0_0_3px_rgba(45,106,53,0.12)] transition-all"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="cuando" className="block text-sm font-semibold text-[#1C4422] mb-1.5">
              Para cuándo busca comprar
            </label>
            <select
              id="cuando"
              required
              value={formData.cuando}
              onChange={(e) => setFormData({ ...formData, cuando: e.target.value })}
              className="w-full px-4 py-3 border-[1.5px] border-[#EDE4D0] rounded-xl text-[15px] text-[#1A1A1A] bg-white focus:outline-none focus:border-[#2D6A35] focus:shadow-[0_0_0_3px_rgba(45,106,53,0.12)] transition-all appearance-none pr-9"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235A5A5A' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 14px center'
              }}
            >
              <option value="">Selecciona una opción</option>
              <option value="inmediato">Lo antes posible</option>
              <option value="1-3 meses">En 1-3 meses</option>
              <option value="3-6 meses">En 3-6 meses</option>
              <option value="6-12 meses">En 6-12 meses</option>
              <option value="mas-12">Más de 1 año</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#2D6A35] text-white font-bold text-base rounded-none rounded-full mt-2 hover:bg-[#1C4422] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014 11.74 19.79 19.79 0 01.92 3.1 2 2 0 012.9.93h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Solicitar información
          </button>
        </form>
        
        <p className="text-center mt-3 text-xs text-[#5A5A5A]">
          Tus datos están protegidos. No compartimos tu información con terceros.
        </p>
      </div>
      
      <style jsx>{`
        @media (min-width: 768px) {
          section {
            padding: 80px 48px;
          }
          .bg-\\[\\#F8F2E6\\] {
            max-width: 540px;
            margin: 32px auto 0;
          }
        }
      `}</style>
    </section>
  );
}
