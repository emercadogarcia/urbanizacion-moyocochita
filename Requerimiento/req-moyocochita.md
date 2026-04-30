# Biblia del Proyecto: Landing Page High-Conversion - Urbanización Moyocochita

## 1. PRD (Product Requirements Document)
**Versión:** 1.2 (Optimizado para Conversión Rápida)
**Estado:** Listo para Implementación

### 1.1. Visión del Producto
Crear un embudo de ventas de una sola página (Landing Page) optimizado para dispositivos móviles, diseñado para transformar el interés en consultas directas. El enfoque principal es el "Beneficio Inmediato": Seguridad familiar por tener al Colegio 25 de Mayo dentro de la urbanizacion y crecimiento de patrimonio garantizado.

### 1.2. Objetivos Estratégicos (KPIs)
* **Velocidad de Respuesta:** Lead directo a WhatsApp en < 3 clics.
* **Urgencia:** Mostrar disponibilidad limitada para forzar la consulta.
* **Autoridad:** Posicionar el proyecto como el "Hub" educativo de la zona (Colegio + Proyección de la Normal).

---

## 2. Arquitectura de Conversión (UX/UI)
Diseño **Mobile-First** con estructura de "Aterrizaje Persuasivo":

1.  **Hero Section (El Gancho):** * *Visual:* Render de alta calidad o foto real del arco de entrada/colegio.
    * *Copy:* Título que resuelva una necesidad (Seguridad/Inversión).
    * *Acción:* Botón flotante "Consultar Lotes Disponibles".
2.  **Social Proof & Trust (Confianza):** Contador de lotes vendidos o fotos de "Entrega de documentos a propietarios".
3.  **Sección Educativa (El Factor Decisivo):** Mapa ilustrado que muestre el Colegio 25 de Mayo dentro del predio. "Tus hijos caminan al colegio, tú ganas plusvalía".
4.  **Grid de Beneficios (Iconografía rápida):**
    * Calle de acceso directo.
    * Servicios básicos (Agua/Luz) con trámite inmediato.
    * Papeles al día (Seguridad Jurídica).
5.  **Galería Dinámica:** Slider optimizado para móviles (Swipe) con fotos reales de las estacas y áreas verdes.
6.  **Cierre de Ventas (Scarcity):** "Últimos lotes en preventa con precio promocional".
7.  **Pie de Conversión:** Mapa de Google Maps embebido y Formulario simplificado.

---

## 3. Reglas de Negocio y Lógica de Venta

* **RN-01 (Estrategia de Precio Oculto):** Se prohíbe mostrar el precio final. Motivo: Fomentar el "Lead Magnet". El usuario debe preguntar para recibir el catálogo de precios y planos.
* **RN-02 (Urgencia Dinámica):** El copy debe incluir frases como "Últimas unidades frente al área escolar".
* **RN-03 (Omnicanalidad de Contacto):**
    * **WhatsApp Personalizado:** Al hacer clic, el mensaje predefinido variará según la sección: *"Hola, vi el mapa y quiero el lote más cercano al Colegio 25 de Mayo"*.
    * **Formulario Lead-Gen:** Solo 3 campos: Nombre, WhatsApp y "Para cuándo busca comprar" (Este último ayuda a calificar el lead).
* **RN-04 (Lead Tracking):** Registro automático de origen del lead para el ERP Moyocochita (Ej: Web_Moyocochita_V1).

---

## 4. Especificación Técnica (Optimización de Carga)

* **Frontend:** React + Tailwind CSS (Uso de `Skeleton Screens` para carga percibida instantánea).
* **Performance:** * Imágenes en WebP con `lazy-loading`.
    * Puntaje mínimo de 90/100 en Google PageSpeed Insights (Crucial para el 4G de Bolivia).
* **Infraestructura:** Dockerizado en Render.com con `Auto-deploy` desde GitHub.
* **Integración:** Webhook hacia n8n para enviar notificación inmediata al equipo de ventas cuando entre un formulario.

---

## 5. Copywriting de Alta Conversión

### Títulos Sugeridos (A/B Testing)
* **Opción A (Familiar):** "El único lugar en Camargo donde tus hijos tienen el colegio a pasos de casa."
* **Opción B (Inversión):** "Asegura tu futuro: Lotes de alta plusvalía junto al Colegio 25 de Mayo."

### Argumentos de Cierre (Bullet points)
* **Cero Distancia:** El Colegio 25 de Mayo está dentro; olvídate del transporte escolar.
* **Plusvalía Educativa:** La cercanía a instituciones educativas garantiza que tu terreno valga más cada año.
* **Entrega Inmediata:** Lotes demarcados y listos para transferencia. No vendemos promesas, vendemos realidades.

---

## 6. Checklist de Activos Multimedia
* **Imágenes:** Usar las fotos de Google Maps (Links 0-8) procesadas con filtros que resalten el verde del entorno.
* **Mapa Interactivo:** Pin personalizado en Google Maps indicando: "Aquí tu casa" - "Aquí el Colegio".
* **Catálogo PDF:** Documento técnico de 2 páginas con planos y requisitos que se envía tras completar el formulario.

---
**Nota para Desarrollo:** Implementar el botón de WhatsApp con efecto de "pulso" para atraer la vista del usuario en los primeros 5 segundos de navegación.