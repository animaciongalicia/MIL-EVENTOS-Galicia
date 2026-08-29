# CLAUDE.md — Mil Eventos Galicia

Este archivo es el contexto de proyecto para Claude Code. Léelo antes de tocar cualquier página, componente o texto. Si algo de lo que vas a construir contradice una regla de aquí, para y pregunta — no improvises tono ni estructura.

---

## 1. Resumen del proyecto

**Mil Eventos Galicia** (mileventosgalicia.com) es una agencia con más de 15 años de trayectoria que organiza eventos para empresas en Galicia: team building, incentivos, jornadas outdoor, congresos y convenciones. También localiza espacios, gestiona traslados y alojamiento, y tiene una línea secundaria de celebraciones sociales (cumpleaños de adultos, fincas, eventos especiales).

**Lo que esta web NO debe parecer:**
- Un catálogo de producto tipo e-commerce ("elige tu actividad y añádela al carrito"). Ninguna actividad individual tiene ficha ni URL propia — se presentan como ejemplos embebidos dentro de páginas pilar más amplias.
- Una web corporativa genérica, fría, llena de tópicos de "sinergias" y "excelencia". El tono es directo, cercano, con carácter — ver sección 5.
- Una web que vive de aparentar (logos infinitos, cifras infladas, humo). La prueba social es real y comedida — ver sección 6.

**Público objetivo:** responsables de RRHH, dirección y organización de eventos en empresas (principalmente Galicia, pero también fuera). Secundariamente, particulares buscando celebraciones especiales (cumpleaños 35+, fincas).

---

## 2. Stack técnico

- **Framework:** Next.js (App Router), React, Tailwind CSS.
- **Despliegue:** Vercel.
- **Repositorio:** GitHub.
- **Contenido:** archivos (Markdown/MDX o JSON), sin CMS ni base de datos en la primera fase. Los posts de blog viven como archivos `.mdx` en el repo.
- **Formularios:** el formulario de `/contacto` no usa backend ni proveedor externo. Construye un `mailto:` con los datos ya redactados (`data/contacto.ts` centraliza el email, teléfono y enlace de WhatsApp) y lo abre en el cliente de correo del usuario — lo envía él mismo desde su cuenta a `info@mileventosgalicia.com`, con copia automática para él. Teléfono/WhatsApp de contacto: +34 678 288 284.
- **Analítica:** no instalada por defecto. Si en el futuro se activa (Vercel Analytics o Google Analytics), se usará para alimentar el bloque "Más leídos" del blog (ver sección 4 y sección 10, pendiente abierto).
- **Sin backend propio, sin login, sin panel de administración** en esta fase. Los contenidos se editan directamente en el repo.

---

## 3. Arquitectura de rutas

Sitemap de referencia: `sitemap-definitivo.md` (debe mantenerse sincronizado con este documento; si cambia uno, se actualiza el otro).

```
/                                          Home

/eventos-empresa                          Landing de categoría
  /eventos-empresa/team-building
  /eventos-empresa/incentivos
  /eventos-empresa/jornadas-outdoor
  /eventos-empresa/congresos-y-convenciones

/actividades                              Hub con sidebar fijo
  /actividades/outdoor
  /actividades/indoor
  /actividades/gastronomia-y-vinos
  /actividades/a-medida

/espacios-y-recursos                      Landing de categoría
  /espacios-y-recursos/localizacion-espacios
  /espacios-y-recursos/traslados
  /espacios-y-recursos/alojamiento

/blog                                     Índice con sidebar de categorías
  /blog/categoria/[categoria]
  /blog/[slug]

/contacto                                 Formulario único (contacto + presupuesto)

/celebraciones                            Página única, FUERA del menú principal
```

**Menú principal (top nav):** `Inicio | Empresas ▾ | Actividades ▾ | Espacios ▾ | Blog | Contacto`
(Los nombres de menú van acortados; las rutas y los `<title>` mantienen el nombre completo para SEO. Ver tabla de equivalencias en sección 9.)

**Celebraciones nunca aparece en el menú principal.** Solo se enlaza desde el footer global.

Estructura de carpetas sugerida en `/app`:
```
/app
  /page.tsx                              → Home
  /eventos-empresa/page.tsx
  /eventos-empresa/team-building/page.tsx
  /eventos-empresa/incentivos/page.tsx
  /eventos-empresa/jornadas-outdoor/page.tsx
  /eventos-empresa/congresos-y-convenciones/page.tsx
  /actividades/layout.tsx                → layout con sidebar persistente
  /actividades/outdoor/page.tsx
  /actividades/indoor/page.tsx
  /actividades/gastronomia-y-vinos/page.tsx
  /actividades/a-medida/page.tsx
  /espacios-y-recursos/page.tsx
  /espacios-y-recursos/localizacion-espacios/page.tsx
  /espacios-y-recursos/traslados/page.tsx
  /espacios-y-recursos/alojamiento/page.tsx
  /blog/layout.tsx                       → layout con sidebar de categorías
  /blog/page.tsx
  /blog/categoria/[categoria]/page.tsx
  /blog/[slug]/page.tsx
  /contacto/page.tsx
  /celebraciones/page.tsx                → layout/tema visual propio, no hereda el layout corporativo
```

---

## 4. Sistema de componentes reutilizables

No dupliques markup entre páginas parecidas. Estos son los componentes base que deben existir en `/components`:

| Componente | Uso |
|---|---|
| `Hero` | Cabecera de cada página (título + subtítulo + CTA). Variantes: corporativa, celebraciones. |
| `LandingCategoria` | Patrón compartido por `/eventos-empresa` y `/espacios-y-recursos`: intro + tarjetas de acceso a sublandings. |
| `SidebarActividades` | Sidebar persistente del hub `/actividades`, con los 4 enlaces pilar. |
| `SidebarBlog` | Sidebar persistente de `/blog`, con las 6 categorías. |
| `GridEjemplos` | Grid de 4-6 tarjetas de ejemplo dentro de una página pilar (nombre + 2 líneas, sin link a página propia). |
| `TarjetaPost` | Tarjeta de post para listados de blog (imagen, categoría, título, extracto, fecha). |
| `BloqueUltimosPosts` | Bloque de los 5 posts más recientes en `/blog`. |
| `BloqueDestacados` | Bloque de posts curados a mano (ver sección 10, sustituye a "más leídos" mientras no haya analítica). |
| `BannerEcosistema` | Banner contextual que enlaza a SUUNIA / Sea Galicia / Luxe Galicia según la página (ver sección 7). |
| `FooterGlobal` | Footer con ecosistema de marcas, enlace a `/celebraciones`, tira de logos y claim de prueba social. |
| `FormularioContacto` | Formulario único reutilizado en `/contacto` (y embebido al final de `/celebraciones` con copy propio). |
| `CTAFinal` | Bloque de cierre de página con botón de contacto/presupuesto. |
| `TiraLogos` | Tira de 8-10 logos de clientes, usada en Home y footer. |

**Regla:** antes de crear un componente nuevo, comprueba si uno de estos ya cubre el caso. Si una página pilar necesita algo distinto de `GridEjemplos`, es más probable que el contenido esté mal planteado que que haga falta un componente nuevo — consúltalo.

---

## 5. Reglas de contenido y tono (obligatorio en todo texto de cara al usuario)

Todo texto generado para el sitio corporativo (no aplica a `/celebraciones`, ver sección 8) sigue el tono **Rentabilista**: fusión entre la persuasión emocional de Raimon Samsó y la disrupción directa de Marina Miller. Dirigido a empresarios y responsables de organización de eventos, no a consumidores finales genéricos.

**Usar siempre:**
- Segunda persona ("tú", "tu equipo", "vosotros") — casi nunca "nosotros" o "nuestro equipo".
- Frases cortas, ritmo ágil, estilo oral.
- Apelar a la emoción antes que a la lógica; después justificar con razones concretas ("porque...").
- Alguna dosis de humor sarcástico, sin caer en la broma fácil ni en el cinismo vacío.
- Estructura escaneable: párrafos de 2-3 frases, subtítulos, viñetas cuando el formato lo permita.
- Cierre de página siempre con frase de acción o reflexión potente, nunca con un simple "Contáctanos".

**Evitar siempre:**
- Verbos débiles ("aprende", "descubre" usado sin fuerza, "preocúpate").
- Vocabulario corporativo hueco: "sinergias", "excelencia", "soluciones integrales", "equipo de profesionales altamente cualificado".
- Frases largas, subordinadas innecesarias, tono neutro de folleto institucional.
- Superlativos sin sustento ("el mejor", "único en Galicia") si no se puede justificar.

**Estructura de página tipo (páginas pilar y landings):**
Hero (titular + subtítulo) → contexto/problema → 4-6 ejemplos (`GridEjemplos`) → CTA de cierre potente.

**Longitud de posts de blog:** mínimo 400-500 palabras, sin excepción. Un post más corto no se publica — se amplía o se descarta.

Si Claude Code necesita generar un texto nuevo (nueva página, nuevo post, nuevo ejemplo dentro de una página pilar) y no tiene claro el enfoque, debe preguntar antes de escribir: *"¿lo enfoco desde la emoción-persuasión o desde la acción directa?"* — no asumir un tono neutro por defecto.

---

## 6. Reglas de prueba social

- Claim ancla, presente en Home y en `/eventos-empresa`: **"Más de 15 años haciendo que las cosas sucedan."**
- Tira de 8-10 logos de clientes reales (hay margen para rotar entre ~20-30 disponibles), sin acompañarlos de cifras infladas.
- Como mucho 2-3 cifras, y solo si son reales y verificables (años de trayectoria, nº de eventos, nº de empresas que repiten). Mejor 2 cifras ciertas que 5 cifras de humo.
- **Prohibido:** contadores falsos, testimonios inventados, cifras redondas sin justificación ("+500 eventos" solo si es cierto y demostrable).
- La prueba social apoya el mensaje, no lo sustituye — nunca debe ocupar más espacio visual que el contenido de la propia página.

---

## 7. Reglas del ecosistema de marcas

Tres marcas hermanas: **SUUNIA** (alojamientos, comidas y experiencias / DMC), **Sea Galicia** (actividades náuticas), **Luxe Galicia** (transporte y desplazamientos).

- Aparecen en el `BannerEcosistema` (contextual, dentro de página) y en el `FooterGlobal` — **nunca como sección propia del menú principal**.
- Enlaces cruzados contextuales, no genéricos:
  - Contenido con componente náutico (regatas, kayak, catamarán) → enlazar a Sea Galicia.
  - Contenido con logística, traslados, programas multi-día → enlazar a Luxe Galicia.
  - Contenido con alojamiento, comidas o programas de incentivo de varios días → enlazar a SUUNIA.
- El banner debe quedar visualmente subordinado al CTA principal de la página (presupuesto/contacto), nunca compitiendo con él.

---

## 8. Reglas de `/celebraciones`

- Página única y autocontenida, sin sub-rutas.
- Layout y paleta visual **distintos** al resto del sitio (más cálidos, menos corporativos) — no reutilizar el `Hero` ni el `FooterGlobal` corporativos tal cual; usar variante propia.
- Tono más cálido que el resto del sitio, pero igual de directo — no aplican aquí el claim "15 años haciendo que las cosas sucedan" ni la tira de logos de clientes corporativos.
- Bloques internos: cumpleaños de adultos · fincas y espacios especiales · otros eventos especiales · contacto.
- Enlace de entrada único desde el `FooterGlobal` del sitio corporativo. Enlace de salida discreto hacia mileventosgalicia.com en su propio footer, para quien haya llegado directo por SEO/campaña y busque en realidad un evento de empresa.
- Nunca se enlaza desde el contenido de páginas pilar corporativas (Outdoor, Indoor, etc.) ni desde el menú principal.

---

## 9. SEO básico

- Cada página define `title` y `description` propios; el nombre de menú acortado NO sustituye al título SEO completo.

| Ruta | Nombre en menú | Título SEO orientativo |
|---|---|---|
| `/eventos-empresa` | Empresas | "Eventos para Empresas en Galicia \| Mil Eventos Galicia" |
| `/actividades` | Actividades | "Actividades de Team Building en Galicia \| Mil Eventos Galicia" |
| `/espacios-y-recursos` | Espacios | "Espacios y Recursos para Eventos en Galicia \| Mil Eventos Galicia" |

- Los posts de blog deben incluir metadatos (`title`, `description`, categoría, fecha) en el frontmatter del `.mdx`.
- Enlazado interno obligatorio: cada post de blog cierra con un enlace a la página pilar relacionada; cada página pilar puede enlazar a posts relacionados si existen.

---

## 10. Convenciones de código

- Naming de carpetas y rutas en minúsculas, con guiones (`kebab-case`), igual que las URLs del sitemap.
- Componentes en `PascalCase`, un componente por archivo.
- Datos de "ejemplos" dentro de páginas pilar (los 4-6 bloques de `GridEjemplos`) deben vivir en un archivo de datos separado (`data/actividades-outdoor.ts`, etc.), no hardcodeados en el JSX de la página — así se pueden editar sin tocar el componente.
- Posts de blog: un archivo `.mdx` por post en `/content/blog/`, con frontmatter que incluya `categoria` (una de las 6 definidas en `lib/blog.ts`: `team-building`, `incentivos`, `jornadas-outdoor`, `congresos-y-convenciones`, `gastronomia-y-vinos`, `espacios-y-recursos`). Cada categoría mapea 1:1 con una página pilar para que el enlazado interno del post nunca sea ambiguo.
- Antes de añadir una página pilar nueva o una categoría nueva de blog, actualizar tanto este `CLAUDE.md` como `sitemap-definitivo.md`.

---

## 11. Pendientes / decisiones abiertas

- **Bloque "Más leídos" del blog:** requiere analítica conectada (Vercel Analytics o Google Analytics) para ser un ranking real. Hasta que se decida, se implementa como `BloqueDestacados` (curado a mano por el cliente) en el mismo espacio visual. No implementar un ranking falso ni simulado.
- **Espacios y Recursos con sidebar:** queda como landing simple (patrón `LandingCategoria`) por ahora; si el volumen de contenido crece, valorar darle el mismo tratamiento de hub con sidebar que `/actividades`.
- ~~Proveedor del formulario de contacto~~ — decidido: `mailto:` sin backend (ver sección 2).
- **Redirecciones desde la web anterior:** mileventosgalicia.com ya existe en producción, con posts y páginas indexados. Antes de lanzar este sitio hay que mapear las URLs antiguas a las nuevas (`next.config.js` → `redirects()`) para no perder el posicionamiento. Pendiente de que el cliente aporte el listado de URLs actuales (sitemap.xml, export de Google Search Console, o acceso directo).
- **SUUNIA / Sea Galicia / Luxe Galicia:** de momento no existen como webs propias — solo se enlazan como marcas hermanas (`data/ecosistema-marcas.ts`, `BannerEcosistema`, footer). Cuando se construyan, deberían heredar el sistema de diseño de la sección 12 (misma tipografía y escala, cada una con su propio color de acento) en vez de partir de cero.

---

## 12. Sistema visual

- **Paleta** (`tailwind.config.ts`, tokens `cream` / `sand` / `ink` / `atlantico` / `terracota`): fondo crema cálido, texto en tinta cálida (nunca negro puro), acento principal verde-azulado "Atlántico" (botones, enlaces activos, titulares destacados del sitio corporativo) y acento terracota reservado a `/celebraciones`. Ningún bloque de página va a fondo oscuro a sangre completa — el color de marca se usa en texto y botones, no como wash de sección entera (ver Hero y CTAFinal).
- **Nunca usar directamente** los colores por defecto de Tailwind (`slate-*`, `amber-*`, `gray-*`...) en JSX nuevo — usar siempre los tokens de marca (`bg-cream-100`, `text-ink-700`, `border-sand-200`, `bg-atlantico-700`, `text-terracota-900`, etc.), para que un cambio de paleta futuro se haga en un único sitio (`tailwind.config.ts`).
- **Tipografía**: `Fraunces` (serif, cargada vía `next/font/google`) para todo `h1`/`h2`/`h3` — aplicado automáticamente en `app/globals.css`, no hace falta añadir `font-serif` a mano. `Inter` para el resto del texto (`font-sans`, por defecto).
- Ambos layouts raíz (`app/(site)/layout.tsx` y `app/(celebraciones)/celebraciones/layout.tsx`) cargan las mismas dos fuentes de forma independiente, porque son root layouts separados (ver sección 8). Si se añade un tercer root layout, replicar el mismo bloque de `next/font/google`.
- `/celebraciones` comparte el mismo sistema (misma tipografía, misma escala, mismos componentes base) pero con la paleta `terracota` en vez de `atlantico` — más cálida, nunca literalmente otra marca visual (CLAUDE.md §8).
