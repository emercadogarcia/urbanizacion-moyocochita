export default function MapSection() {
  return (
    <section className="py-[60px] px-6 bg-[#EDE4D0]">
      <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#2D6A35] mb-2">Ubicación estratégica</div>
      <h2 className="font-serif text-[clamp(1.6rem,5vw,2.2rem)] font-bold leading-[1.2] mb-4 text-[#1C4422]">Encuéntranos en Camargo</h2>
      <p className="text-[#5A5A5A] text-[15px] leading-[1.7] max-w-[540px]">
        Urbanización Moyocochita está ubicada en una zona de crecimiento en Camargo, Chuquisaca, con fácil acceso desde el centro de la ciudad.
      </p>

      <div className="mt-7 rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.12)] h-[280px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.123456789!2d-64.123456!3d-20.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDAnMjQuNCJTIDY0wrA3JzIwLjQiVw!5e0!3m2!1ses!2sbo!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="mt-5 bg-white rounded-xl p-4 flex items-center gap-3">
        <span className="text-2xl flex-shrink-0">🚗</span>
        <div>
          <h4 className="text-sm font-semibold text-[#1C4422]">Cómo llegar</h4>
          <p className="text-xs text-[#5A5A5A] mt-0.5 leading-[1.5]">
            Desde el centro de Camargo, toma la carretera principal hacia el sur. El acceso está señalizado y la calle de ingreso está completamente pavimentada.
          </p>
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
