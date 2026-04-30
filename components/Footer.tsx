export default function Footer() {
  return (
    <footer className="bg-[#1C4422] text-[rgba(255,255,255,0.7)] text-center py-9 px-6 text-sm leading-[1.8]">
      <p>
        <strong className="text-white">Urbanización Moyocochita</strong><br/>
        Camargo, Chuquisaca, Bolivia
      </p>
      <p className="mt-2">
        Lotes de alta plusvalía con el Colegio 25 de Mayo dentro del predio.
      </p>
      <div className="mt-3 flex justify-center gap-5">
        <a href="https://wa.me/59170000000" target="_blank" rel="noopener noreferrer" className="text-[#F0C040] no-underline text-sm">
          WhatsApp
        </a>
        <a href="#formulario" className="text-[#F0C040] no-underline text-sm">
          Contacto
        </a>
      </div>
      <p className="mt-4 text-xs text-[rgba(255,255,255,0.5)]">
        © 2024 Moyocochita. Todos los derechos reservados.
      </p>
    </footer>
  );
}
