---
trigger: always_on
---

# File Structure Rules
- Paginas en `/app` o `/pages` (Next.js 15+ usar App Router).
- Componentes reutilizables en `/components`.
- Hooks en `/hooks`.
- Utilidades en `/lib`.
- Tipos globales en `/types`.

# Component Architecture Rules
- Los componentes deben ser funcionales (no clases).
- Props tipadas con `interface` o `type`.
- Evitar lÃ³gica compleja en la UI â†’ mover a hooks o servicios.
- Un componente = una responsabilidad.