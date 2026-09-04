# Sitemap definitivo — Mil Eventos Galicia

Mapa de rutas de referencia. Debe mantenerse sincronizado con la sección 3 de `CLAUDE.md` — si cambia uno, se actualiza el otro.

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

/nosotros                                 Institucional, solo en footer
/aviso-legal                              Institucional, solo en footer
/politica-de-privacidad                   Institucional, solo en footer
/politica-de-cookies                      Institucional, solo en footer
```

## Menú principal (top nav)

`Inicio | Empresas ▾ | Actividades ▾ | Espacios ▾ | Celebraciones ▾ | Blog | Contacto`, con desplegable en Empresas/Actividades/Espacios/Celebraciones hacia sus páginas pilar.

Los nombres de menú van acortados; las rutas y los `<title>` mantienen el nombre completo para SEO (ver tabla de equivalencias en la sección 9 de `CLAUDE.md`).

**Celebraciones SÍ aparece en el menú principal** como página reina con desplegable (ver CLAUDE.md §8). **Nosotros, las páginas legales y las de `/ecosistema` nunca aparecen en el menú principal** — solo se enlazan desde el `FooterGlobal` (y, en el caso de `/ecosistema`, también desde `BannerEcosistema`). Las de `/ecosistema` no tienen web externa propia — no se enlaza a ningún dominio externo para SUUNIA, Sea Galicia o Luxe Galicia (ver CLAUDE.md §7).

## Reglas de mantenimiento

- Antes de añadir una página pilar nueva o una categoría nueva de blog, actualizar tanto este archivo como `CLAUDE.md` (secciones 3 y 10).
- Ninguna actividad individual tiene ficha ni URL propia — se presentan como ejemplos embebidos (`GridEjemplos`) dentro de las páginas pilar de `/actividades`.
- Las 6 categorías de blog deben coincidir exactamente con los valores permitidos en el frontmatter `categoria` de los `.mdx` de `/content/blog`.
