---
trigger: manual
---

# 💻 Technical & Architecture Rules

## 🏗 Arquitectura de Componentes
- **Paradigma:** Componentes funcionales (Hooks-based). No usar clases.
- **Tipado:** Props tipadas con `interface` o `type`. Evitar el uso de `any`.
- **Responsabilidad Única:** Un componente = Una responsabilidad.
- **Lógica desacoplada:** Mover la lógica compleja de la UI hacia **Custom Hooks** o servicios externos.

## 📂 Estructura de Archivos (Next.js 15+ App Router)
- **Rutas/Páginas:** Ubicadas en `/app`.
- **Componentes:** Ubicados en `/components`.
- **Hooks:** Ubicados en `/hooks`.
- **Utilidades/Lógica:** Ubicados en `/lib` o `/services`.
- **Tipos:** Ubicados en `/types` para definiciones globales.

## 🎨 Estilos y UI
- **Framework:** Usar **Tailwind CSS** para todos los estilos.
- **No Híbridos:** No mezclar con CSS Modules o Styled-components.
- **Consistencia:** Mantener nombres de clases claros y reutilizar utilidades del proyecto.

## 🧪 Reglas de Testing
- **Ubicación:** Tests en carpeta `__tests__` o con sufijo `.test.tsx`.
- **Stack:** **Jest** + **React Testing Library**.
- **Mínimo:** Al menos un test funcional por componente principal.