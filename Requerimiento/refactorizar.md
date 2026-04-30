# Guía de Refactorización: Landing Page Minimalista Profesional

Esta guía establece los estándares para una interfaz limpia, enfocada en la eficiencia y conversión, utilizando una jerarquía visual de alto impacto.

---

## 1. Sistema de Color (Regla 60-30-10)
Para un acabado minimalista, el color se usa para guiar el ojo, no para decorar.

* **Dominante (60%):** `#FFFFFF` (Blanco) o `#F9FAFB` (Gris Nube). Uso: Fondos y espacios negativos.
* **Secundario (30%):** `#1E293B` (Azul Pizarra Oscuro). Uso: Títulos (H1, H2), textos de cuerpo e iconos.
* **Acento (10%):** `#F97316` (Naranja Vibrante). Uso: **Únicamente** en botones de conversión (CTA) y elementos de notificación críticos.

---

## 2. Jerarquía Tipográfica (Escala Modular)
Utiliza una fuente **Sans Serif** (ej. *Inter*, *Montserrat* o *Roboto*) para mantener el aspecto técnico y limpio.

| Elemento | Tamaño | Peso (Weight) | Color Hex | Propósito |
| :--- | :--- | :--- | :--- | :--- |
| **H1** | 48px - 60px | 800 (ExtraBold) | `#1E293B` | Propuesta de valor principal |
| **H2** | 32px - 36px | 700 (Bold) | `#1E293B` | Títulos de secciones |
| **H3** | 20px - 24px | 600 (SemiBold) | `#334155` | Beneficios o características |
| **Párrafo** | 16px - 18px | 400 (Regular) | `#475569` | Lectura principal (Gris oscuro) |
| **Small/Label** | 12px - 14px | 500 (Medium) | `#64748B` | Metadatos o etiquetas |
| **Button Text**| 16px | 600 (SemiBold) | `#FFFFFF` | Texto dentro del botón naranja |

---

## 3. Arquitectura del Layout (Estructura Minimalista)

### A. Header (Navegación)
* **Altura:** 70px - 80px.
* **Distribución:** Logo a la izquierda | Enlaces de navegación centrados | Botón "Login/Start" a la derecha.
* **Estilo:** Fondo transparente o blanco con una línea de división inferior muy tenue (`#E2E8F0`).

### B. Hero Section (El Primer Impacto)
* **Padding Superior:** 100px a 120px.
* **Contenido:** * H1 alineado a la izquierda o centrado.
    * Párrafo corto (máximo 3 líneas) con `line-height: 1.6`.
    * Botón CTA principal: Color Naranja, bordes redondeados (8px), sombra suave.
* **Imagen:** Ubicada a la derecha o debajo del texto. Debe ser un "Mockup" limpio o una ilustración técnica (SVG) sin fondo complejo.

### C. Sección de Características (Features)
* **Grid:** 3 columnas.
* **Iconografía:** Iconos lineales (Outline) de 24px en color Azul Pizarra.
* **Espaciado:** Margen de 40px entre cada columna.

---

## 4. Tratamiento de Imágenes y Elementos
1.  **Espacio en Blanco:** No temas dejar vacíos. El espacio en blanco es el que hace que el diseño se sienta "Premium".
2.  **Imágenes:** * Usa el formato `.webp` para optimizar carga.
    * Aplica un `border-radius: 12px` a las capturas de pantalla de software.
    * Usa sombras muy sutiles (`box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1)`).
3.  **Botones:** * Estado Normal: Naranja sólido.
    * Estado Hover: Un tono más oscuro de naranja.
    * Padding interno: `12px` arriba/abajo, `24px` izquierda/derecha.

---

## 5. Checklist de Refactorización Final
- [ ] **Contraste:** ¿Es legible el texto blanco sobre el botón naranja?
- [ ] **Consistencia:** ¿Todos los botones tienen el mismo radio de borde?
- [ ] **Ruido:** ¿He eliminado todas las líneas decorativas innecesarias?
- [ ] **Foco:** ¿Hay más de un color llamando la atención? (Solo debería haber uno: el de conversión).