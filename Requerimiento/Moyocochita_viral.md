# 📂 Documentación Técnica y de Negocio: Urbanización Moyocochita (Landing Page)

## 1. PRD (Documento de Requerimientos del Producto)
**Meta:** Crear un embudo de ventas digital que convierta el tráfico en leads calificados para la venta de lotes.

### Funcionalidades Requeridas:
* **Sección Hero:** Impacto visual inmediato con propuesta de valor clara.
* **Prueba Social & Urgencia:** Banner de "Últimos lotes disponibles" o "Precios de preventa".
* **Módulo de Beneficios:** Lista visual de amenidades e infraestructura.
* **Integración de Leads:** Formulario conectado a base de datos y botón de WhatsApp persistente.
* **Mapa Interactivo:** Integración con Google Maps centrada en el Colegio 25 de Mayo.

---

## 2. Mapa del Sitio (Planificación y UX)
Estructura de navegación para una **Single Page Application (SPA)** de alto rendimiento:

1.  **Navegación:** Logo, Botón "Llamar Ahora".
2.  **Hero:** Imagen del valle + Título gancho + CTA.
3.  **El Corazón del Proyecto:** Sección destacada: *"El Colegio 25 de Mayo está dentro de nuestra urbanización"*. Explicación de plusvalía por la futura Normal.
4.  **Infraestructura:** Grilla de 4 puntos: Calles abiertas, Lotes estaqueados, Áreas Verdes, Servicios (Luz/Agua).
5.  **Galería:** Carrusel optimizado con fotos de Camargo y los panfletos del proyecto.
6.  **Ubicación:** Mapa embebido (9Q5X+QXQ, Camargo).
7.  **Pie de página:** Copyright e iconos de redes sociales.

---

## 3. Reglas de Negocio (Lógica y Condicionales)
Este apartado define el comportamiento del sistema ante diferentes eventos:

* **Regla de Valor (RN-01):** El copy debe enfatizar que el colegio ocupa el área de equipamiento dentro de la urbanización. No es una referencia externa, es un activo propio que asegura plusvalía permanente.
* **Lógica de Contacto (RN-02):**
    * *Si* el usuario hace clic en WhatsApp, *entonces* abrir chat con +591 75525818 con el mensaje: "Hola Lucho, quiero información sobre los lotes de 300m2 en Moyocochita".
    * *Si* el usuario envía el formulario, *entonces* disparar webhook hacia n8n para registro en Google Sheets y alerta inmediata al vendedor.
* **Gestión de Precios (RN-03):** Prohibido mostrar precios en la web. La estrategia es "Precio bajo consulta" para forzar el lead.
* **Validación (RN-04):** El campo celular debe ser numérico, longitud exacta de 8 dígitos (Bolivia).

---

## 4. Especificaciones Técnicas (Stack & Arquitectura)
Para asegurar escalabilidad y velocidad (Viralidad):

* **Tecnología:** React.js / Next.js para renderizado rápido.
* **Estilos:** Tailwind CSS (Diseño Mobile-First).
* **Assets:** Imágenes en formato `.webp` (máxima compresión para datos móviles).
* **Infraestructura:** Dockerizado para despliegue en Render.com (coherencia con otros sistemas de la empresa).
* **SEO:** Meta tags configurados con palabras clave: "Lotes en Camargo", "Inversión Inmobiliaria Sucre", "Urbanización Moyocochita".

---

## 5. Guía de Contenido (Copywriting Viral)

### Títulos Hook (Atención):
* *"Asegura el futuro de tu familia con el colegio dentro de casa."*
* *"Invierte en Camargo: Lotes de 300m² con alta plusvalía y servicios garantizados."*

### Cuerpo del Mensaje (Deseo):
* **Educación y Seguridad:** Al estar el Colegio 25 de Mayo dentro de los predios, la seguridad y comodidad para tus hijos es inigualable.
* **Crecimiento Exponencial:** Con la proyección de la Escuela Normal de Camargo dentro de la urbanización, tu inversión crece día a día.
* **Listo para ti:** No esperes años. Calles, estacas y servicios de luz/agua están listos para que empieces a construir.

### CTA (Acción):
* "¡Quiero mi lote en Moyocochita!"
* "Agendar visita guiada"

# link de imagens para tomar para la pagina:
https://maps.app.goo.gl/xriqchJRPJYnDiR28
https://maps.app.goo.gl/rTF7FVcQFv9Bnu7k6
https://maps.app.goo.gl/YB8wM97FnNpRfnoT7
https://maps.app.goo.gl/D68hWwtgFmhv6gAN9
https://maps.app.goo.gl/SBJTq9829qrREvZW6
https://maps.app.goo.gl/qeJ6FMyMpz8ccfoo9
https://maps.app.goo.gl/TDvJs8khJzNYT5sQA
https://maps.app.goo.gl/XS9FEKwkFT6QQH8X9
https://maps.app.goo.gl/Jsx6H58DBXdZ47268