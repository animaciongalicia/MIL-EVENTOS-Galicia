# Sitemap definitivo — Mil Eventos Galicia

Mapa de rutas de referencia. Debe mantenerse sincronizado con la sección 3 de `CLAUDE.md` — si cambia uno, se actualiza el otro.

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

/nosotros                                 Institucional, solo en footer
/aviso-legal                              Institucional, solo en footer
/politica-de-privacidad                   Institucional, solo en footer
/politica-de-cookies                      Institucional, solo en footer
```

## Menú principal (top nav)

`Inicio | Empresas ▾ | Actividades ▾ | Espacios ▾ | Blog | Contacto`, con desplegable en Empresas/Actividades/Espacios hacia sus páginas pilar.

Los nombres de menú van acortados; las rutas y los `<title>` mantienen el nombre completo para SEO (ver tabla de equivalencias en la sección 9 de `CLAUDE.md`).

**Celebraciones, Nosotros y las páginas legales nunca aparecen en el menú principal.** Solo se enlazan desde el `FooterGlobal`.

## Reglas de mantenimiento

- Antes de añadir una página pilar nueva o una categoría nueva de blog, actualizar tanto este archivo como `CLAUDE.md` (secciones 3 y 10).
- Ninguna actividad individual tiene ficha ni URL propia — se presentan como ejemplos embebidos (`GridEjemplos`) dentro de las páginas pilar de `/actividades`.
- Las 6 categorías de blog deben coincidir exactamente con los valores permitidos en el frontmatter `categoria` de los `.mdx` de `/content/blog`.
