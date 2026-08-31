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

/actividades                              Landing de categoría
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

/nosotros                                 Institucional — solo en footer
/aviso-legal                              Institucional — solo en footer
/politica-de-privacidad                   Institucional — solo en footer
/politica-de-cookies                      Institucional — solo en footer
```

**Menú principal (top nav):** `Inicio | Empresas ▾ | Actividades ▾ | Espacios ▾ | Blog | Contacto`, con desplegable en Empresas/Actividades/Espacios enlazando a sus 3-4 páginas pilar (implementado en `components/layout/Header.tsx`).
(Los nombres de menú van acortados; las rutas y los `<title>` mantienen el nombre completo para SEO. Ver tabla de equivalencias en sección 9.)

**Celebraciones nunca aparece en el menú principal.** Solo se enlaza desde el footer global.

**Nosotros y las 3 páginas legales tampoco van en el menú principal** — solo en `FooterGlobal`, igual que Celebraciones. No estaban en el sitemap original; se añadieron al portar la web anterior (existían en mileventosgalicia.com con tráfico real — ver sección 11).

Estructura de carpetas sugerida en `/app`:
```
/app
  /page.tsx                              → Home
  /eventos-empresa/page.tsx
  /eventos-empresa/team-building/page.tsx
  /eventos-empresa/incentivos/page.tsx
  /eventos-empresa/jornadas-outdoor/page.tsx
  /eventos-empresa/congresos-y-convenciones/page.tsx
  /actividades/page.tsx
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
| `LandingCategoria` | Patrón compartido por `/eventos-empresa`, `/actividades` y `/espacios-y-recursos`: intro + tarjetas de acceso a sublandings. |
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
- ~~Actividades con sidebar~~ — descartado: la barra lateral no aportaba nada. `/actividades` es ahora una landing de categoría igual que `/eventos-empresa` y `/espacios-y-recursos` (patrón `LandingCategoria`), y sus 4 páginas pilar llevan `Hero` completo en vez del `h1` suelto que tenían dentro del layout con sidebar.
- ~~Proveedor del formulario de contacto~~ — decidido: `mailto:` sin backend (ver sección 2).
- ~~Redirecciones desde la web anterior~~ — mapeadas en `next.config.js` → `redirects()` a partir del export de Search Console (Coverage + Performance) y GA4 aportado por el cliente. Cubre las URLs con tráfico/impresiones reales, no el sitemap completo (que incluye ~400 páginas de adjuntos de imagen de WordPress sin valor). **Revisar contra el `sitemap.xml` real antes de lanzar**, por si queda alguna URL indexada sin cubrir.
- **Aviso legal / Política de privacidad:** las páginas existen (`/aviso-legal`, `/politica-de-privacidad`) pero con datos de la empresa (razón social, NIF/CIF, domicilio social, registro) como placeholder — no se han inventado. Pendiente de que el cliente los aporte antes de lanzar.
- **Quiénes somos:** página mínima con los únicos hechos verificados (CLAUDE.md §1 y §6). Pendiente de que el cliente aporte la historia real de la agencia y el equipo para ampliarla.
- **SUUNIA / Sea Galicia / Luxe Galicia:** de momento no existen como webs propias — solo se enlazan como marcas hermanas (`data/ecosistema-marcas.ts`, `BannerEcosistema`, footer). Cuando se construyan, deberían heredar el sistema de diseño de la sección 12 (misma tipografía y escala, cada una con su propio color de acento) en vez de partir de cero.
- **Alquiler de locales en Vigo:** servicio descontinuado (ya no se ofrece y no es escalable), pese a ser uno de los mayores generadores de tráfico de la web anterior. No se menciona "Vigo" en ningún texto del sitio nuevo; la redirección de esa URL antigua apunta a la página genérica de localización de espacios, sin reconstruir esa oferta específica.
- **Prioridad de negocio confirmada:** el foco comercial es el B2B (`/eventos-empresa`) por ser mucho más rentable que celebraciones/particulares, aunque hoy tenga menos tráfico orgánico real que el clúster de cumpleaños de adultos. El contenido de las 4 páginas pilar de `/eventos-empresa` debe tener prioridad de profundidad y mantenimiento sobre el resto.
- **Fotografía real pendiente:** el sitio usaba solo texto y bloques de color, sin ninguna imagen — para una agencia de eventos es un déficit serio de prueba visual. Mientras no hay fotos reales de eventos, espacios y equipo, las tarjetas (`GridEjemplos`, `LandingCategoria`, `TarjetaPost`) y algunos `Hero` (`imagenSeed`) usan fotografía de stock de picsum.photos vía `lib/placeholder-image.ts` — genérica, estable por seed, marcada en el código como placeholder. **Sustituir por fotos reales antes de lanzar**, y entonces desmontar `images.remotePatterns` de picsum en `next.config.js`.

---

## 12. Sistema visual

- **Paleta** (`tailwind.config.ts`, tokens `cream` / `sand` / `ink` / `atlantico` / `terracota`): fondo crema cálido, texto en tinta cálida (nunca negro puro), acento principal verde-azulado "Atlántico" y acento terracota reservado a `/celebraciones`.
- **Contraste deliberado, no un único crema plano:** el `Hero` y los bloques largos de texto van en `cream-100/200` (nunca oscuros — esa fue la corrección inicial). Pero el cierre de página (`CTAFinal`) y el `FooterGlobal` sí son bloques sólidos en `atlantico-700`/`atlantico-800` con texto claro — acentos puntuales y acotados, no un wash de toda la sección. Las tarjetas (`GridEjemplos`, `LandingCategoria`, `TarjetaPost`) van en `cream-50` (blanco) con sombra para despegarse del fondo de página; los bloques "Cómo trabajamos" de las páginas pilar van en una banda `cream-200` para romper la monotonía. Si una página nueva queda de un único tono de principio a fin, algo se ha hecho mal.
- **Nunca usar directamente** los colores por defecto de Tailwind (`slate-*`, `amber-*`, `gray-*`...) en JSX nuevo — usar siempre los tokens de marca (`bg-cream-100`, `text-ink-700`, `border-sand-200`, `bg-atlantico-700`, `text-terracota-900`, etc.), para que un cambio de paleta futuro se haga en un único sitio (`tailwind.config.ts`).
- **Nunca fijar el número de columnas de un grid a ojo** (`sm:grid-cols-2` porque sí) — usar `gridColsClass(n)` de `components/shared/gridCols.ts`, que elige columnas según la cantidad real de elementos para que nunca quede una tarjeta sola y huérfana en la última fila. Ya se usa en `GridEjemplos`, `LandingCategoria`, `BloqueUltimosPosts`, `BloqueDestacados` y `/blog/categoria/[categoria]`; cualquier grid nuevo de tarjetas con conteo variable debe usarlo también.
- **Tipografía**: `Fraunces` (serif, cargada vía `next/font/google`) para todo `h1`/`h2`/`h3` — aplicado automáticamente en `app/globals.css`, no hace falta añadir `font-serif` a mano. `Inter` para el resto del texto (`font-sans`, por defecto).
- Ambos layouts raíz (`app/(site)/layout.tsx` y `app/(celebraciones)/celebraciones/layout.tsx`) cargan las mismas dos fuentes de forma independiente, porque son root layouts separados (ver sección 8). Si se añade un tercer root layout, replicar el mismo bloque de `next/font/google`.
- `/celebraciones` comparte el mismo sistema (misma tipografía, misma escala, mismos componentes base) pero con la paleta `terracota` en vez de `atlantico` — más cálida, nunca literalmente otra marca visual (CLAUDE.md §8).
- **Iconos**: set propio dibujado a mano en `components/shared/icons.tsx` (teléfono, WhatsApp, email, ubicación, flecha, chevron) — sin librería externa. Se usan en contacto (footer, `/contacto`), en el desplegable del menú y en los botones de CTA (`Hero`, `CTAFinal`). Cualquier icono nuevo sigue el mismo estilo: trazo 1.5, sin relleno, `viewBox="0 0 24 24"`.
- **`PasosTrabajo`** (`components/shared/PasosTrabajo.tsx`): bloque "Cómo trabajamos" con pasos numerados (círculo + título + descripción corta), reservado a las 4 páginas pilar de `/eventos-empresa` — la prioridad de negocio (CLAUDE.md §11) tiene también prioridad visual sobre el resto del catálogo de páginas pilar, que sigue con el bloque en prosa simple.
