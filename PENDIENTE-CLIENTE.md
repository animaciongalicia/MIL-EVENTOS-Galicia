# Pendiente del cliente antes de lanzar

La web está terminada a nivel técnico y de contenido. Lo único que falta para
lanzar son **datos reales que solo puede aportar el cliente** — no se inventan
(fotos, logos, datos legales, historia). Esta es la lista completa, ordenada
por prioridad, con dónde va cada cosa en el código.

---

## 1. Fotografía real — prioridad ALTA

Hoy toda la web usa fotografía de stock genérica (picsum.photos) marcada como
placeholder. Para una agencia de eventos es el déficit más visible: no hay
ninguna prueba visual real de eventos, espacios ni equipo.

**Qué hace falta:**
- Fotos de eventos reales (team building, congresos, incentivos, outdoor).
- Fotos de espacios (pazos, naves, salas, exteriores).
- Fotos del equipo / la agencia trabajando (para "Quiénes somos").
- Foto o cabecera para `/celebraciones` (tono más cálido).

**Dónde van:**
- Archivos en `public/images/hero/`, `public/images/actividades/`,
  `public/images/celebraciones/` (ya existen las carpetas).
- Al sustituirlas se elimina el bloque `picsum.photos` de `next.config.js` y
  se ajusta `lib/placeholder-image.ts`.

---

## 2. Logos de clientes reales — prioridad ALTA

La tira de logos ("Más de 15 años…") está vacía a la espera de los archivos.
Es prueba social clave y ahora mismo no se muestra nada.

**Qué hace falta:**
- 8–10 logos de clientes reales (hay margen para rotar entre ~20–30).
- Formato preferible: SVG o PNG con fondo transparente.

**Dónde van:**
- Archivos en `public/images/logos-clientes/`.
- Se listan en `data/logos-clientes.ts` (hoy es un array vacío con un ejemplo
  comentado).

---

## 3. Datos legales — prioridad ALTA (obligación legal para lanzar)

Las páginas existen pero con los campos como placeholder — no se han inventado
(lo prohíbe la LSSI-CE).

**Qué hace falta:**
- Razón social, NIF/CIF, domicilio social, datos de inscripción registral.
- Revisión de la política de privacidad y de cookies por el cliente / su
  asesor legal (sobre todo si en el futuro se activa analítica).

**Dónde van:**
- `app/(site)/aviso-legal/page.tsx`
- `app/(site)/politica-de-privacidad/page.tsx`
- `app/(site)/politica-de-cookies/page.tsx`
- La dirección también aparece en el footer: `data/contacto.ts`
  (campo `DIRECCION_CONTACTO`, hoy "Galicia, España").

---

## 4. Historia real de la agencia — prioridad MEDIA

La página "Quiénes somos" está en mínimos, con solo los hechos verificados
(+15 años, líneas de servicio). Falta la historia real para darle carácter.

**Qué hace falta:**
- Cómo y cuándo nació la agencia, quién la fundó.
- El equipo (nombres / roles, si se quiere mostrar).
- Algún dato o hito real que se pueda contar sin inflar.

**Dónde va:**
- `app/(site)/nosotros/page.tsx`

---

## 5. Logo real de la marca — prioridad MEDIA

Ahora hay un favicon y una tarjeta de compartir (Open Graph) provisionales,
generados por código con un monograma "M" sobre el verde de marca.

**Qué hace falta:**
- El logo real de Mil Eventos Galicia como archivo (SVG o PNG de buena
  resolución).

**Dónde va:**
- Favicon: `app/icon.tsx` y `app/apple-icon.tsx`.
- Tarjeta de compartir en redes: `app/(site)/opengraph-image.tsx` y
  `app/(celebraciones)/celebraciones/opengraph-image.tsx`.
- Opcional: mostrarlo también en la cabecera (`components/layout/Header.tsx`),
  hoy es solo texto.

---

## 6. Revisión final de SEO antes de lanzar — prioridad MEDIA

- Cotejar las redirecciones de `next.config.js` contra el `sitemap.xml` real
  de la web antigua, por si queda alguna URL indexada con tráfico sin cubrir.
- Decidir si se activa analítica (Vercel Analytics o Google Analytics). Si se
  activa, alimenta el bloque "Más leídos" del blog y obliga a revisar la
  política de cookies.

---

## Resumen rápido

| # | Qué | Bloquea lanzamiento | Depende de |
|---|-----|:---:|-----|
| 1 | Fotografía real | Recomendado | Cliente |
| 2 | Logos de clientes | Recomendado | Cliente |
| 3 | Datos legales | **Sí (legal)** | Cliente |
| 4 | Historia de la agencia | No | Cliente |
| 5 | Logo real | No | Cliente |
| 6 | Revisión SEO / analítica | No | Decisión |

Todo lo demás (estructura, contenido, diseño, blog, menú, SEO técnico,
formulario) está terminado y subido.
