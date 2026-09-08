# Migración SEO — no perder posiciones al pasar de WordPress a la web nueva

Checklist de lo que hay que tener cerrado antes de apuntar el dominio a la web
nueva, y qué necesito de ti para dejarlo perfecto.

## 1. Redirecciones 301 (lo más crítico)
La web nueva ya tiene redirecciones en `next.config.js → redirects()` mapeadas
a partir de un export anterior de Search Console. Para no perder SEO hay que
comprobar que **toda URL antigua con tráfico o enlaces** redirige a su
equivalente nueva (301), y que ninguna quede en 404.

**Qué necesito de ti (una de estas dos, la que puedas):**
- **A (mejor): export de Search Console.** En https://search.google.com/search-console
  → tu propiedad → *Rendimiento* → filtro últimos 12 meses → pestaña **Páginas**
  → botón **Exportar** → CSV/Excel. Sube el archivo al repo (carpeta `/seo-import/`)
  o pégamelo. Con eso saco TODAS las URLs que reciben clics/impresiones y verifico
  que cada una tenga su 301.
- **B: la lista de URLs** que me dices que subes. Vale un `sitemap.xml`, un pantallazo
  o un pegado de URLs. Yo no puedo entrar a mileventosgalicia.com desde aquí (la red
  del entorno bloquea dominios externos), así que necesito el archivo/lista.

Con eso te devuelvo: URLs cubiertas ✅, las que faltan por redirigir ➕ (las añado a
`next.config.js`), y las que dan 404 en la web nueva ⚠️.

## 2. Analítica y Search Console (ya montado, faltan tus IDs)
El código ya está listo; solo hay que poner 2 variables en Vercel
(ver `.env.example`), las MISMAS que usa tu plugin del WordPress:
- `NEXT_PUBLIC_GA_ID` → ID de medición de GA4 (`G-XXXXXXXXXX`).
- `NEXT_PUBLIC_GSC_VERIFICATION` → token de la "Etiqueta HTML" de Search Console.

Dónde encontrarlos:
- **GA4:** GA4 → Administrar → Flujos de datos → tu web → *ID de medición*.
- **GSC:** Search Console → Configuración → Verificación de propiedad → *Etiqueta HTML*
  → copia solo el valor de `content="..."`.

> Nota RGPD: GA4 idealmente debe cargar tras el consentimiento de cookies. Hoy carga
> si está la variable. Si quieres, monto un banner de consentimiento que lo condicione.

## 3. Antes de lanzar (dominio)
- Reapuntar el dominio a Vercel (DNS).
- Dar de alta el `sitemap.xml` de la web nueva en Search Console (ya se genera en
  `/sitemap.xml`).
- Mantener la propiedad antigua en GSC unas semanas para vigilar 404 y redirecciones.
- Revisar `robots.txt` (ya se genera) y que no quede `noindex` de pruebas.

## 4. Contenido pendiente que aportas tú (no técnico)
- **Logos reales de clientes** → los pongo en la tira de home y footer (hoy oculta).
- **Datos legales** (razón social, NIF/CIF, domicilio, registro mercantil) → aviso legal
  y política de privacidad (hoy con placeholder).
- **Política de cookies** → si el WP no la tiene, la redacto con lo que uséis (GA4, etc.).
- **Historia real / equipo** → para ampliar Quiénes somos.

Cuando subas las URLs y/o el export de GSC, lo proceso y cierro el punto 1.
