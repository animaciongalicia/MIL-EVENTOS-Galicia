# CLAUDE.md — Mil Eventos Galicia

Este archivo es el contexto de proyecto para Claude Code. Léelo antes de tocar cualquier página, componente o texto. Si algo de lo que vas a construir contradice una regla de aquí, para y pregunta — no improvises tono ni estructura.

---

## 1. Resumen del proyecto

**Mil Eventos Galicia** (mileventosgalicia.com) es una agencia con más de 15 años de trayectoria que organiza eventos para empresas en Galicia: team building, incentivos, jornadas outdoor, congresos y convenciones. También localiza espacios, gestiona traslados y alojamiento. Y tiene una línea de **celebraciones** (página reina propia en el menú — ver sección 8) tanto para empresas (cenas de empresa y de Navidad, inauguraciones, cócteles, aniversarios) como para particulares (cumpleaños de adultos, fincas), con animación propia: DJs, cómicos, monólogos y drag queens.

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

/ecosistema                               Sin landing propia, FUERA del menú principal
  /ecosistema/suunia                      Solo enlazada desde BannerEcosistema y FooterGlobal
  /ecosistema/sea-galicia                 Solo enlazada desde BannerEcosistema y FooterGlobal
  /ecosistema/luxe-galicia                Solo enlazada desde BannerEcosistema y FooterGlobal

/blog                                     Índice con sidebar de categorías
  /blog/categoria/[categoria]
  /blog/[slug]

/contacto                                 Formulario único (contacto + presupuesto)

/celebraciones                            Landing de categoría (página reina), EN el menú principal
  /celebraciones/cenas-de-empresa
  /celebraciones/celebraciones-de-empresa
  /celebraciones/cumpleanos-y-grupos
  /celebraciones/animacion-y-espectaculo

/nosotros                                 Institucional — solo en footer
/aviso-legal                              Institucional — solo en footer
/politica-de-privacidad                   Institucional — solo en footer
/politica-de-cookies                      Institucional — solo en footer
```

**Menú principal (top nav):** `Inicio | Empresas ▾ | Actividades ▾ | Espacios ▾ | Celebraciones ▾ | Blog | Contacto`, con desplegable en Empresas/Actividades/Espacios/Celebraciones enlazando a sus 3-4 páginas pilar (implementado en `components/layout/Header.tsx`).
(Los nombres de menú van acortados; las rutas y los `<title>` mantienen el nombre completo para SEO. Ver tabla de equivalencias en sección 9.)

**Celebraciones SÍ va en el menú principal** como página reina con su propio desplegable (cambio de producto — ver sección 8), sirviendo tanto a empresas como a particulares. Ya no es una página suelta escondida en el footer.

**Nosotros y las 3 páginas legales no van en el menú principal** — solo en `FooterGlobal`. No estaban en el sitemap original; se añadieron al portar la web anterior (existían en mileventosgalicia.com con tráfico real — ver sección 11).

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
  /celebraciones/page.tsx                → landing pilar dentro de (site); hereda Header/FooterGlobal, acento terracota
  /celebraciones/cenas-de-empresa/page.tsx
  /celebraciones/celebraciones-de-empresa/page.tsx
  /celebraciones/cumpleanos-y-grupos/page.tsx
  /celebraciones/animacion-y-espectaculo/page.tsx
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
| `FormularioContacto` | Formulario único reutilizado en `/contacto`. Sigue teniendo variante `celebraciones` (terracota) por si se reutiliza, aunque el clúster de Celebraciones ahora cierra con `CTAFinal` → `/contacto`. |
| `CTAFinal` | Bloque de cierre de página con botón de contacto/presupuesto. |
| `TiraLogos` | Tira de 8-10 logos de clientes, usada en Home y footer. |
| `CifrasDestacadas` | Fila de 2-3 cifras reales en formato caja (ver regla de prueba social, sección 6) — rompe la prosa con un bloque numérico. |
| `CitaDestacada` | Caja de cita/afirmación aislada (borde lateral + texto en serif itálica) para destacar una frase dentro de un tramo largo de contenido. |
| `TarjetasTexto` | Tarjetas de título + texto corto sin imagen (icono opcional), para razones, comparativas o listados que no encajan en `GridEjemplos` ni en `PasosTrabajo`. |
| `PasosTrabajo` | Bloque "Cómo trabajamos" con pasos numerados — reservado a Home y a las 4 páginas pilar de `/eventos-empresa` (ver sección 12). |

**Regla:** antes de crear un componente nuevo, comprueba si uno de estos ya cubre el caso. Si una página pilar necesita algo distinto de `GridEjemplos`, es más probable que el contenido esté mal planteado que que haga falta un componente nuevo — consúltalo.

---

## 5. Reglas de contenido y tono (obligatorio en todo texto de cara al usuario)

Todo texto generado para el sitio corporativo sigue el tono **Rentabilista**: fusión entre la persuasión emocional de Raimon Samsó y la disrupción directa de Marina Miller. Dirigido a empresarios y responsables de organización de eventos, no a consumidores finales genéricos. En `/celebraciones` (ver sección 8) el tono se relaja hacia lo cálido en las páginas de particulares y animación, pero las sub-páginas B2B (cenas y celebraciones de empresa) mantienen el tono Rentabilista.

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

- **Ninguna tiene web propia todavía. Prohibido enlazar a un dominio externo para estas tres marcas.** Cada una tiene su propia página interna en `/ecosistema/[marca]` (`/ecosistema/suunia`, `/ecosistema/sea-galicia`, `/ecosistema/luxe-galicia`), con contenido propio de al menos 1000 palabras que explica qué hace la marca, cuándo entra en juego y cómo se coordina con Mil Eventos Galicia — son la presencia informativa completa de cada marca mientras no tengan sitio propio. `data/ecosistema-marcas.ts` guarda esta ruta interna en el campo `href` de cada `MarcaEcosistema`; `BannerEcosistema` y `FooterGlobal` enlazan siempre con `next/link` a ese `href`, nunca con `<a>` a una URL externa.
- Aparecen en el `BannerEcosistema` (contextual, dentro de página), en el `FooterGlobal` y en sus propias páginas de `/ecosistema` — **nunca como sección propia del menú principal**.
- Enlaces cruzados contextuales, no genéricos:
  - Contenido con componente náutico (regatas, kayak, catamarán) → enlazar a Sea Galicia.
  - Contenido con logística, traslados, programas multi-día → enlazar a Luxe Galicia.
  - Contenido con alojamiento, comidas o programas de incentivo de varios días → enlazar a SUUNIA.
- El banner debe quedar visualmente subordinado al CTA principal de la página (presupuesto/contacto), nunca compitiendo con él.
- Las páginas de `/ecosistema` usan la paleta `atlantico` (parte del sitio corporativo, no una marca visual propia) y siguen la regla de alternar formato (sección 12): `TarjetasTexto`, `CitaDestacada`, `GridEjemplos` con datos propios (`data/ecosistema-*-ejemplos.ts`) en vez de párrafos largos seguidos. No usan `CifrasDestacadas` ni `PasosTrabajo` — no hay cifras propias verificadas de cada marca hermana, y `PasosTrabajo` sigue reservado a Home y a los 4 pilares de `/eventos-empresa` (prioridad de negocio, sección 11). Cada página cierra remitiendo el contacto a Mil Eventos Galicia (`/contacto` vía `CTAFinal`), nunca con un formulario o contacto propio de la marca.

---

## 8. Reglas de `/celebraciones` (clúster pilar)

**Cambio de producto (decisión del cliente):** Celebraciones dejó de ser una página única escondida en el footer y pasó a ser una **página reina en el menú principal**, con su propio desplegable y 4 sub-páginas. Sirve a **empresas y particulares** por igual — ya no es una línea secundaria solo de particulares.

- **Landing de categoría** (`/celebraciones`) con el patrón `LandingCategoria`, dentro del grupo `(site)`: hereda `Header` y `FooterGlobal` corporativos (ya NO tiene layout raíz propio ni `FooterCelebraciones` — se eliminaron). Sus 4 sub-páginas:
  1. `/celebraciones/cenas-de-empresa` — B2B (cena de Navidad, cierre de año, con DJ/espectáculo).
  2. `/celebraciones/celebraciones-de-empresa` — B2B (inauguraciones, cócteles, aniversarios, entregas de premios).
  3. `/celebraciones/cumpleanos-y-grupos` — particulares (cumpleaños de adultos, fincas, celebraciones privadas; recoge los datos antiguos `celebraciones-cumpleanos/fincas/otros-eventos`).
  4. `/celebraciones/animacion-y-espectaculo` — transversal (DJs, monólogos, cómicos, drag queens, animación; las otras 3 enlazan a ella).
- **Paleta:** acento **terracota** conservado como identidad festiva, pero dentro del shell corporativo. Los componentes compartidos (`Hero`, `LandingCategoria`, `CTAFinal`, `CitaDestacada`, `TarjetasTexto`) aceptan `variante="celebraciones"` o `acento="terracota"`; se usa esa variante en todo el clúster. `GridEjemplos` es neutro (no lleva color de marca).
- **Animación real:** DJs, cómicos, monologuistas y drag queens son servicios que la agencia ofrece/coordina de verdad (confirmado por el cliente) — se escriben sin humo (§6), como recursos propios.
- **Tono:** las 2 sub-páginas B2B usan el tono Rentabilista directo; cumpleaños/particulares y animación, más cálido pero igual de directo. No aplican aquí el claim "15 años haciendo que las cosas sucedan" ni la tira de logos corporativos.
- **Cierre:** cada página cierra con `CTAFinal` (acento terracota) hacia `/contacto` — ya no lleva `FormularioContacto` embebido ni enlace de salida a mileventosgalicia.com (era una página aislada; ahora está integrada en el sitio).
- **Enlazado:** las páginas pilar corporativas (Outdoor, Indoor, etc.) siguen sin enlazar a Celebraciones desde su contenido; el clúster de Celebraciones sí puede enlazar a recursos corporativos cuando encaja (p.ej. localización de espacios).

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
- **SUUNIA / Sea Galicia / Luxe Galicia:** de momento no existen como webs propias. Mientras tanto tienen página interna completa en `/ecosistema/[marca]` (ver sección 7) en vez de enlace externo — resuelto. Cuando cada una tenga su propio dominio, esas páginas de `/ecosistema` deberían heredar el sistema de diseño de la sección 12 (misma tipografía y escala, cada una con su propio color de acento) en vez de partir de cero, y `data/ecosistema-marcas.ts` pasaría a apuntar de nuevo a la URL externa.
- **Alquiler de locales en Vigo:** servicio descontinuado (ya no se ofrece y no es escalable), pese a ser uno de los mayores generadores de tráfico de la web anterior. No se menciona "Vigo" en ningún texto del sitio nuevo; la redirección de esa URL antigua apunta a la página genérica de localización de espacios, sin reconstruir esa oferta específica.
- **Prioridad de negocio confirmada:** el foco comercial es el B2B (`/eventos-empresa`) por ser mucho más rentable que celebraciones/particulares, aunque hoy tenga menos tráfico orgánico real que el clúster de cumpleaños de adultos. El contenido de las 4 páginas pilar de `/eventos-empresa` debe tener prioridad de profundidad y mantenimiento sobre el resto.
- **Fotografía real pendiente:** el sitio usaba solo texto y bloques de color, sin ninguna imagen — para una agencia de eventos es un déficit serio de prueba visual. Mientras no hay fotos reales de eventos, espacios y equipo, las tarjetas (`GridEjemplos`, `LandingCategoria`, `TarjetaPost`) y algunos `Hero` (`imagenSeed`) usan fotografía de stock de picsum.photos vía `lib/placeholder-image.ts` — genérica, estable por seed, marcada en el código como placeholder. **Sustituir por fotos reales antes de lanzar**, y entonces desmontar `images.remotePatterns` de picsum en `next.config.js`.

---

## 12. Sistema visual

- **Paleta** (`tailwind.config.ts`, tokens `cream` / `sand` / `ink` / `atlantico` / `terracota`): fondo crema cálido, texto en tinta cálida (nunca negro puro), acento principal verde-azulado "Atlántico" y acento terracota reservado al clúster `/celebraciones` (landing + 4 sub-páginas). Los componentes compartidos con color de marca llevan una prop `acento="atlantico" | "terracota"` (por defecto atlántico) para conmutar sin duplicar componente.
- **Contraste deliberado, no un único crema plano:** el `Hero` y los bloques largos de texto van en `cream-100/200` (nunca oscuros — esa fue la corrección inicial). Pero el cierre de página (`CTAFinal`) y el `FooterGlobal` sí son bloques sólidos en `atlantico-700`/`atlantico-800` con texto claro — acentos puntuales y acotados, no un wash de toda la sección. Las tarjetas (`GridEjemplos`, `LandingCategoria`, `TarjetaPost`) van en `cream-50` (blanco) con sombra para despegarse del fondo de página; los bloques "Cómo trabajamos" de las páginas pilar van en una banda `cream-200` para romper la monotonía. Si una página nueva queda de un único tono de principio a fin, algo se ha hecho mal.
- **Nunca usar directamente** los colores por defecto de Tailwind (`slate-*`, `amber-*`, `gray-*`...) en JSX nuevo — usar siempre los tokens de marca (`bg-cream-100`, `text-ink-700`, `border-sand-200`, `bg-atlantico-700`, `text-terracota-900`, etc.), para que un cambio de paleta futuro se haga en un único sitio (`tailwind.config.ts`).
- **Nunca fijar el número de columnas de un grid a ojo** (`sm:grid-cols-2` porque sí) — usar `gridColsClass(n)` de `components/shared/gridCols.ts`, que elige columnas según la cantidad real de elementos para que nunca quede una tarjeta sola y huérfana en la última fila. Ya se usa en `GridEjemplos`, `LandingCategoria`, `BloqueUltimosPosts`, `BloqueDestacados` y `/blog/categoria/[categoria]`; cualquier grid nuevo de tarjetas con conteo variable debe usarlo también.
- **Un único ancho de contenedor por página: `max-w-5xl`.** Todas las `<section>` de una misma página —texto corrido incluido— usan `mx-auto max-w-5xl px-6`, el mismo ancho que ya usan `Header`, `FooterGlobal`, `GridEjemplos`, `LandingCategoria`, `BannerEcosistema` y `TiraLogos`. Antes los bloques de texto usaban `max-w-3xl` (768px) y los bloques de tarjetas `max-w-5xl` (1024px) alternando en la misma página — el margen izquierdo saltaba de sección en sección y se veía descuadrado. **Nunca uses `max-w-3xl`, `max-w-md` u otro ancho de sección "para que el texto no quede muy ancho"**: dentro de una `<section className="mx-auto max-w-5xl px-6">` puedes limitar un párrafo o lead concreto con `max-w-2xl` en el propio `<p>` (sin `mx-auto`, para que no se recentre y rompa el margen izquierdo común), pero el contenedor de sección siempre es `max-w-5xl`. Excepción: bloques de formulario/CTA autocontenidos y centrados como `FormularioContacto` o los pills de contacto de `/contacto`, que usan `max-w-xl` porque no conviven con otras secciones de ancho distinto en el flujo de la página.
- **Tipografía**: `Fraunces` (serif, cargada vía `next/font/google`) para todo `h1`/`h2`/`h3` — aplicado automáticamente en `app/globals.css`, no hace falta añadir `font-serif` a mano. `Inter` para el resto del texto (`font-sans`, por defecto).
- Hoy solo hay un layout raíz corporativo (`app/(site)/layout.tsx`) — el clúster `/celebraciones` vive dentro de `(site)` y lo hereda. (El antiguo layout raíz aislado `app/(celebraciones)/` se eliminó al convertir Celebraciones en pilar del menú, sección 8.) Si en el futuro se añade un segundo root layout, replicar el mismo bloque de `next/font/google`.
- `/celebraciones` comparte el mismo sistema (misma tipografía, misma escala, mismos componentes base) pero con el acento `terracota` en vez de `atlantico` — más cálido, nunca literalmente otra marca visual (CLAUDE.md §8).
- **Iconos**: set propio dibujado a mano en `components/shared/icons.tsx` (teléfono, WhatsApp, email, ubicación, flecha, chevron) — sin librería externa. Se usan en contacto (footer, `/contacto`), en el desplegable del menú y en los botones de CTA (`Hero`, `CTAFinal`). Cualquier icono nuevo sigue el mismo estilo: trazo 1.5, sin relleno, `viewBox="0 0 24 24"`.
- **`PasosTrabajo`** (`components/shared/PasosTrabajo.tsx`): bloque "Cómo trabajamos" con pasos numerados (círculo + título + descripción corta), reservado a Home y a las 4 páginas pilar de `/eventos-empresa` — la prioridad de negocio (CLAUDE.md §11) tiene también prioridad visual sobre el resto del catálogo de páginas pilar, que sigue con el bloque en prosa simple.
- **Evitar bloques largos de texto corrido.** Cualquier página de más de 2-3 párrafos seguidos debe alternar formato: `CifrasDestacadas`, `CitaDestacada`, `TarjetasTexto`, `GridEjemplos` o `PasosTrabajo` en vez de encadenar más párrafos de prosa. Un párrafo de contexto o cierre está bien; media docena seguidos no. Aplicada ya en `/`, `/eventos-empresa` (landing + 4 pilares), `/actividades` (landing + 4 sub-páginas), `/espacios-y-recursos` (landing + 3 sub-páginas) y `/celebraciones` (landing + 4 sub-páginas, con `acento="terracota"` en los componentes). No aplica a las páginas legales (el texto corrido es lo correcto en un aviso legal) ni a los posts de blog (formato artículo).
