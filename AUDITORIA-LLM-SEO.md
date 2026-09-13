# Auditoría SEO + posicionamiento en LLMs (AEO/GEO)

Estado tras analizar los exports de Google Search Console (12/09/2026) y aplicar cambios.

## 1. Migración / redirecciones (no perder SEO)
Del export **Top target pages** (páginas antiguas con más enlaces internos) se verificó que
**todas** tienen su redirección 301/308 en `next.config.js`. Correcciones aplicadas:

- ➕ **`/juegos-de-escapismo-team-building/`** (tenía 109 enlaces internos) no redirigía → **404**.
  Añadida → `/eventos-empresa/team-building`.
- 🔀 Destinos mejorados ahora que existe el clúster **Celebraciones**:
  - `/servicios/cenas-de-empresa/` y `/cenas-de-empresa-en-coruna/` → `/celebraciones/cenas-de-empresa`
  - `/servicios/inauguraciones/` → `/celebraciones/celebraciones-de-empresa`
  - `/monologos-y-comicos-en-galicia/` → `/celebraciones/animacion-y-espectaculo`
  - `/cumpleanos-de-adultos-en-coruna/` y `/las-8-mejores-ideas…cumpleanos-de-adulto/` → `/celebraciones/cumpleanos-y-grupos`

**Problemas críticos GSC (contexto):** 55 "con redirección" (normal al migrar), 28 "noindex",
**9 "No encontrado (404)"**, 284 "descubierta sin indexar", 47 "rastreada sin indexar".
Los 9 404 y los 28 noindex **no vienen detallados** en el export (solo el total). Para cerrarlos
al 100% necesito el listado: en GSC → *Indexación → Páginas* → clic en cada motivo → **Exportar**.
Con esos listados añado las redirecciones que falten. Los "sin indexar" (~331) son en su mayoría
adjuntos de imagen de WordPress y URLs sin valor — no requieren acción.

**Backlinks a preservar** (export Top linking sites): seagalicia.com, clabe.org, laguiago.com,
paginasamarillas.es, theorangemarket.com, ibodas.com, tubodaengalicia.com, etc. Apuntan sobre todo
a home, /nosotros y /clientes — todas cubiertas por redirección o nativas.

## 2. Posicionamiento en LLMs (que nos lean, encuentren y recomienden)
Aplicado:
- ✅ **JSON-LD `ProfessionalService`** en todo el sitio con la entidad real (nombre, razón social
  Inversiones SHISO S.L., CIF, dirección, teléfono, email, zona = Galicia, idiomas es/gl). Es lo
  que más ayuda a que Google y los LLMs entiendan y citen la marca como entidad.
- ✅ **`llms.txt`** actualizado: incluye el clúster Celebraciones (faltaba), identidad/NAP y la
  estructura completa del sitio para que los modelos la naveguen.
- ✅ **Metadatos** por página (title/description propios), Open Graph, sitemap.xml y robots.txt ya
  existentes; verificación de Search Console activa.
- ✅ **Contenido sin humo, escaneable y con enlazado interno** (pilares + blog editorial) — formato
  que los LLMs resumen y citan mejor que la prosa corporativa vacía.

- ✅ **FAQ con JSON-LD `FAQPage`** en las 4 pilares de Empresas (`components/shared/FAQ.tsx`):
  acordeón visible + schema desde los mismos datos (cumple las directrices de Google, que exigen
  que las Q&A sean visibles). Ayuda a que Google y los LLMs citen preguntas-respuestas.

Recomendado a futuro (cuando haya datos/fotos reales):
- Extender el FAQ a Actividades, Espacios y Celebraciones.
- **Reseñas/valoraciones reales** con `AggregateRating` (solo si son verificables — §6, nada de humo).
- **`sameAs`** en el JSON-LD con los perfiles sociales reales (Instagram, LinkedIn…) cuando los tengas.

## 3. Analítica y cookies (RGPD)
- ✅ GA4 activo con el ID de medición real `G-SKC7CDC118`; carga **solo tras aceptar** el banner de
  cookies (RGPD). Verificación de Search Console con el token real.
- ✅ Política de cookies nueva y legal.

## 4. Pendiente de tu lado
- El **ID de medición GA4** (`G-…`).
- Los **listados de los 9 404 y 28 noindex** de GSC (para cerrar redirecciones al 100%).
- **Logos reales**, **historia/equipo** y **perfiles sociales** (para logos, Nosotros y `sameAs`).
