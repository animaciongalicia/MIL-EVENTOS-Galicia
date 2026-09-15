/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Todas las imágenes son fotos reales servidas desde /public (ver CLAUDE.md
  // §11). Ya no se usa picsum.photos ni ningún host remoto, por lo que no hace
  // falta configurar images.remotePatterns.

  // Redirecciones desde mileventosgalicia.com (WordPress) construidas a partir
  // del export de Google Search Console (Coverage + Performance) y de Google
  // Analytics 4 aportados por el cliente (30/08/2026). Cubren las URLs reales
  // con tráfico/impresiones — no el listado completo del sitemap antiguo, que
  // incluye ~400 páginas de adjuntos de imagen de WordPress sin valor propio
  // (galerías de posts, logos de clientes, etc.) ya cubiertas por los
  // wildcards `:path*` de sus páginas padre. Revisar contra el sitemap.xml
  // real antes del lanzamiento por si falta alguna URL indexada.
  async redirects() {
    return [
      // --- Celebraciones: el clúster de mayor tráfico real de todo el sitio
      // (cumpleaños de adultos) ---
      { source: "/celebraciones-privadas/:path*", destination: "/celebraciones", permanent: true },
      { source: "/celebraciones-familiares/:path*", destination: "/celebraciones", permanent: true },
      { source: "/cumpleanos-de-adultos-en-coruna/:path*", destination: "/celebraciones/cumpleanos-y-grupos", permanent: true },
      { source: "/cumpleanos-en-casa/:path*", destination: "/celebraciones", permanent: true },
      { source: "/las-8-mejores-ideas-para-celebrar-un-cumpleanos-de-adulto/:path*", destination: "/celebraciones/cumpleanos-y-grupos", permanent: true },
      { source: "/organizacion-de-cumpleanos/:path*", destination: "/celebraciones", permanent: true },
      { source: "/organiza-un-cumpleanos-especial/:path*", destination: "/celebraciones", permanent: true },
      { source: "/como-organizar-una-boda-pequena/:path*", destination: "/celebraciones", permanent: true },
      { source: "/eventos-privados/:path*", destination: "/celebraciones", permanent: true },
      { source: "/fiestas-universitarias/:path*", destination: "/celebraciones", permanent: true },
      { source: "/regalos/regalos-para-bodas/:path*", destination: "/celebraciones", permanent: true },
      { source: "/regalos/regalos-para-parejas/:path*", destination: "/celebraciones", permanent: true },

      // --- Eventos de empresa ---
      { source: "/eventos-empresariales", destination: "/eventos-empresa", permanent: true },
      { source: "/eventos-empresariales/actividades-team-building/:path*", destination: "/eventos-empresa/team-building", permanent: true },
      { source: "/eventos-empresariales/eventos-corporativos/:path*", destination: "/eventos-empresa/congresos-y-convenciones", permanent: true },
      { source: "/eventos-empresariales/incentivos/:path*", destination: "/eventos-empresa/incentivos", permanent: true },
      { source: "/eventos-empresariales/jornadas-outdoor/:path*", destination: "/eventos-empresa/jornadas-outdoor", permanent: true },
      { source: "/servicios", destination: "/eventos-empresa", permanent: true },
      { source: "/servicios/eventos-marca/:path*", destination: "/eventos-empresa/congresos-y-convenciones", permanent: true },
      { source: "/servicios/inauguraciones/:path*", destination: "/celebraciones/celebraciones-de-empresa", permanent: true },
      { source: "/servicios/diseno-grafico-marketing-eventos-galicia-2/:path*", destination: "/eventos-empresa/congresos-y-convenciones", permanent: true },
      { source: "/servicios/gestion-redes-sociales/:path*", destination: "/eventos-empresa", permanent: true },
      { source: "/personal-de-produccion/:path*", destination: "/eventos-empresa/congresos-y-convenciones", permanent: true },
      { source: "/organizar-evento-empresa-galicia/:path*", destination: "/eventos-empresa", permanent: true },
      { source: "/organizacion-de-eventos/:path*", destination: "/eventos-empresa", permanent: true },
      { source: "/mejorar-ventas-y-procesos/:path*", destination: "/eventos-empresa/incentivos", permanent: true },
      { source: "/regalos", destination: "/eventos-empresa/incentivos", permanent: true },
      { source: "/regalos/otros-regalos/:path*", destination: "/eventos-empresa/incentivos", permanent: true },
      { source: "/regalos-personalizados-exito-asegurado/:path*", destination: "/eventos-empresa/incentivos", permanent: true },
      { source: "/incentivo-ruta-y-paseo-entre-bateas/:path*", destination: "/eventos-empresa/incentivos", permanent: true },
      { source: "/incentivo-visita-bodega-albarino/:path*", destination: "/actividades/gastronomia-y-vinos", permanent: true },
      { source: "/viajes-de-empresa/:path*", destination: "/eventos-empresa/incentivos", permanent: true },
      { source: "/viaje-en-catamaran-cañones-del-sil", destination: "/eventos-empresa/incentivos", permanent: true },
      { source: "/camino-santiago-grupos-empresa/:path*", destination: "/eventos-empresa/jornadas-outdoor", permanent: true },
      { source: "/organizacion-de-eventos-deportivos/:path*", destination: "/eventos-empresa/jornadas-outdoor", permanent: true },
      { source: "/cenas-de-navidad/:path*", destination: "/eventos-empresa/team-building", permanent: true },
      { source: "/como-planificar-una-cena-tematica-exitosa-para-tu-empresa/:path*", destination: "/eventos-empresa/team-building", permanent: true },
      { source: "/multiaventura-para-equipo/:path*", destination: "/eventos-empresa/team-building", permanent: true },
      { source: "/team-building-equipo-ventas/:path*", destination: "/eventos-empresa/team-building", permanent: true },
      { source: "/team-building-voluntariado/:path*", destination: "/eventos-empresa/team-building", permanent: true },
      { source: "/como-organizar-el-team-building-perfecto-en-galicia/:path*", destination: "/eventos-empresa/team-building", permanent: true },
      { source: "/gymkanas-tematicas-como-actividad-de-teambuilding/:path*", destination: "/eventos-empresa/team-building", permanent: true },
      { source: "/gymkana-juegos-empleados/:path*", destination: "/eventos-empresa/team-building", permanent: true },
      { source: "/gymkana-turistica-para-empresas-en-coruna/:path*", destination: "/eventos-empresa/team-building", permanent: true },
      { source: "/juegos-de-escapismo-team-building/:path*", destination: "/eventos-empresa/team-building", permanent: true },

      // --- Actividades ---
      { source: "/actividades-para-eventos/:path*", destination: "/actividades", permanent: true },
      { source: "/las-5-mejores-actividades-al-aire-libre-para-empresas/:path*", destination: "/actividades/outdoor", permanent: true },
      { source: "/deportes-acuaticos-en-las-rias-baixas/:path*", destination: "/actividades/outdoor", permanent: true },
      { source: "/rutas-de-senderismo-por-las-islas-cies/:path*", destination: "/actividades/outdoor", permanent: true },
      { source: "/ruta-canones-sil-ribeira-sacra/:path*", destination: "/blog/ribeira-sacra-canones-sil-equipo-empresa", permanent: true },
      { source: "/experiencia-golf/:path*", destination: "/actividades/outdoor", permanent: true },
      { source: "/eventos-en-el-mar-barco/:path*", destination: "/actividades/outdoor", permanent: true },
      { source: "/eventos-nauticos-en-sanxenxo/:path*", destination: "/actividades/outdoor", permanent: true },
      { source: "/carreras-de-karts-para-empresas/:path*", destination: "/actividades/indoor", permanent: true },
      { source: "/team-building-taller-de-risoterapia/:path*", destination: "/actividades/indoor", permanent: true },
      { source: "/mejillones-por-la-ria-de-arousa/:path*", destination: "/actividades/gastronomia-y-vinos", permanent: true },
      { source: "/taller-cocina-empleados/:path*", destination: "/actividades/gastronomia-y-vinos", permanent: true },
      { source: "/regalo-taller-de-reposteria/:path*", destination: "/actividades/gastronomia-y-vinos", permanent: true },
      { source: "/chef-a-domicilio/:path*", destination: "/actividades/gastronomia-y-vinos", permanent: true },
      { source: "/fiesta-cocteleria/:path*", destination: "/actividades/gastronomia-y-vinos", permanent: true },
      { source: "/catering-para-eventos-en-coruna/:path*", destination: "/actividades/gastronomia-y-vinos", permanent: true },
      { source: "/catering-y-eventos-de-empresa/:path*", destination: "/actividades/gastronomia-y-vinos", permanent: true },
      { source: "/servicios-de-catering/:path*", destination: "/actividades/gastronomia-y-vinos", permanent: true },
      { source: "/servicios/catering/:path*", destination: "/actividades/gastronomia-y-vinos", permanent: true },
      { source: "/servicios/cenas-de-empresa/:path*", destination: "/celebraciones/cenas-de-empresa", permanent: true },
      { source: "/cenas-de-empresa-en-coruna/:path*", destination: "/celebraciones/cenas-de-empresa", permanent: true },
      { source: "/cenas-de-empresa-restaurantes/:path*", destination: "/actividades/gastronomia-y-vinos", permanent: true },
      { source: "/vuelo-en-globo-empresas/:path*", destination: "/actividades/a-medida", permanent: true },
      { source: "/animaciones-para-eventos/:path*", destination: "/actividades/a-medida", permanent: true },
      { source: "/monologos-y-comicos-en-galicia/:path*", destination: "/celebraciones/animacion-y-espectaculo", permanent: true },
      { source: "/como-hacer-eventos-tematicos-consejos-y-trucos/:path*", destination: "/actividades/a-medida", permanent: true },

      // --- Espacios y recursos ---
      { source: "/recursos", destination: "/espacios-y-recursos", permanent: true },
      { source: "/localizacion-de-espacios/:path*", destination: "/espacios-y-recursos/localizacion-espacios", permanent: true },
      { source: "/alquiler-de-locales-para-eventos/:path*", destination: "/espacios-y-recursos/localizacion-espacios", permanent: true },
      // Servicio de alquiler de locales en Vigo descontinuado — se manda a la
      // página genérica de localización de espacios (sin mención a Vigo en el
      // copy) en vez de reconstruir esa oferta específica. Ver CLAUDE.md §11.
      { source: "/locales-en-vigo/:path*", destination: "/espacios-y-recursos/localizacion-espacios", permanent: true },
      { source: "/recursos/alquiler-de-locales/:path*", destination: "/espacios-y-recursos/localizacion-espacios", permanent: true },
      { source: "/locales-fiestas-y-eventos/:path*", destination: "/espacios-y-recursos/localizacion-espacios", permanent: true },
      { source: "/mobiliario-para-eventos/:path*", destination: "/espacios-y-recursos/localizacion-espacios", permanent: true },
      { source: "/montajes-eventos/:path*", destination: "/espacios-y-recursos/localizacion-espacios", permanent: true },
      { source: "/eventos-en-coruna-marineda-city/:path*", destination: "/espacios-y-recursos/localizacion-espacios", permanent: true },
      { source: "/recursos/vehiculos-y-transportes/:path*", destination: "/espacios-y-recursos/traslados", permanent: true },
      { source: "/recursos/agencia-de-viajes-suunia/:path*", destination: "/espacios-y-recursos/alojamiento", permanent: true },
      { source: "/hoteles-para-eventos-vigo-coruna/:path*", destination: "/espacios-y-recursos/alojamiento", permanent: true },
      { source: "/las-casas-rurales-eventos-de-empresa/:path*", destination: "/espacios-y-recursos/alojamiento", permanent: true },

      // --- Institucional ---
      // OJO: usar :path+ (uno o más), NO :path* (cero o más), en las reglas cuyo
      // destino es su propia ruta base. Con :path* la ruta base (p.ej. /aviso-legal)
      // se captura a sí misma y genera un bucle 308 infinito que impide que la
      // página real cargue. Con :path+ solo se redirigen las subrutas antiguas de
      // WordPress (/aviso-legal/algo) y la página real sirve en /aviso-legal.
      { source: "/nosotros/:path+", destination: "/nosotros", permanent: true },
      { source: "/clientes/:path*", destination: "/", permanent: true },
      { source: "/aviso-legal/:path+", destination: "/aviso-legal", permanent: true },
      { source: "/politica-de-privacidad/:path+", destination: "/politica-de-privacidad", permanent: true },
      { source: "/politica-de-cookies/:path+", destination: "/politica-de-cookies", permanent: true },

      // --- Blog e institucional menor (sin equivalente directo → home o blog) ---
      { source: "/blog/page/:path*", destination: "/blog", permanent: true },
      { source: "/nueva-discoteca-en-coruna-moom-57/:path*", destination: "/", permanent: true },
      { source: "/forum-gastronomico-coruna-en-marzo-2017/:path*", destination: "/", permanent: true },
      { source: "/asesorar-pubs-y-locales-en-tiempos-de/:path*", destination: "/", permanent: true },
      { source: "/checkout/:path*", destination: "/", permanent: true },

      // --- URLs antiguas detectadas en el export de indexación de GSC (sept.
      // 2026) que no estaban cubiertas. Las de /feed/, wp-login.php y
      // wp-content/* se dejan sin redirección a propósito (404 correcto, sin
      // valor SEO; Google las retira). ---
      { source: "/servicios-para-empresas/:path*", destination: "/eventos-empresa", permanent: true },
      { source: "/incentivos-y-outdoor-training/:path*", destination: "/eventos-empresa/incentivos", permanent: true },
      { source: "/trabajo-en-equipo-rafting-paintball/:path*", destination: "/eventos-empresa/team-building", permanent: true },
      { source: "/monologuista-cena-empresa/:path*", destination: "/celebraciones/animacion-y-espectaculo", permanent: true },
      // Entradas legacy de Blogger (rutas con fecha y .html) todavía rastreadas:
      { source: "/2012/05/regalos-personalizados-exito-asegurado.html", destination: "/eventos-empresa/incentivos", permanent: true },
      { source: "/2014/04/incentivo-ruta-y-paseo-entre-bateas.html", destination: "/eventos-empresa/incentivos", permanent: true },
      { source: "/2014/11/cenas-de-empresa-en-coruna.html", destination: "/celebraciones/cenas-de-empresa", permanent: true },
      { source: "/2009/06/cenas-de-empresa.html", destination: "/celebraciones/cenas-de-empresa", permanent: true },

      // --- Cierre de cobertura tras cruzar TODAS las URLs con tráfico/impresiones
      // de los exports de GSC/GA (sept. 2026): páginas cuyos "padres" no tenían
      // regla y caían en 404 (muchas son páginas-adjunto de imagen de WP, 1 vista;
      // la regla de padre :path* cubre la página y todos sus adjuntos de golpe).
      { source: "/conciertos/:path*", destination: "/eventos-empresa/congresos-y-convenciones", permanent: true },
      { source: "/espacios-para-eventos/:path*", destination: "/espacios-y-recursos/localizacion-espacios", permanent: true },
      { source: "/alquiler-de-locales-fin-de-ano-coruna/:path*", destination: "/espacios-y-recursos/localizacion-espacios", permanent: true },
      { source: "/aumenta-las-ventas-galicia/:path*", destination: "/eventos-empresa/incentivos", permanent: true },
      { source: "/incentivo-paquete-especial-rias-baixas/:path*", destination: "/eventos-empresa/incentivos", permanent: true },
      { source: "/como-organizar-eventos-outdoor/:path*", destination: "/eventos-empresa/jornadas-outdoor", permanent: true },
      { source: "/eventos-en-coruna-y-galicia/:path*", destination: "/eventos-empresa", permanent: true },
      { source: "/comunicar-eventos-empresa/:path*", destination: "/eventos-empresa/congresos-y-convenciones", permanent: true },
      { source: "/audiovisuales/:path*", destination: "/eventos-empresa/congresos-y-convenciones", permanent: true },
      { source: "/detalles-para-eventos/:path*", destination: "/actividades/a-medida", permanent: true },
      { source: "/animacion-de-eventos/:path*", destination: "/celebraciones/animacion-y-espectaculo", permanent: true },
      { source: "/gran-fiesta-cenas-de-empresa/:path*", destination: "/celebraciones/cenas-de-empresa", permanent: true },
      { source: "/llegan-las-navidades-y-sus-cenas_13/:path*", destination: "/celebraciones/cenas-de-empresa", permanent: true },
      { source: "/fiestas-en-discotecas/:path*", destination: "/celebraciones", permanent: true },
      { source: "/bodas-especiales-originales/:path*", destination: "/celebraciones", permanent: true },
      { source: "/cumpleanos-infantiles-regalos/:path*", destination: "/celebraciones", permanent: true },
      { source: "/mas-informacion-sobre-las-cookies/:path*", destination: "/politica-de-cookies", permanent: true },
      // Servicios de marketing/publicidad descontinuados → hub de empresa.
      { source: "/difusion-comunicacion/:path*", destination: "/eventos-empresa", permanent: true },
      { source: "/publicidad-marketing/:path*", destination: "/eventos-empresa", permanent: true },
      { source: "/publicidad-parabriseado/:path*", destination: "/eventos-empresa", permanent: true },
      // Subrutas de /servicios sin regla específica arriba (congresos-y-ferias,
      // incentivo-viajes-suunia-copia, etc.) — catch-all al final para que las
      // reglas /servicios/... más específicas de arriba ganen por orden.
      { source: "/servicios/congresos-y-ferias/:path*", destination: "/eventos-empresa/congresos-y-convenciones", permanent: true },
      { source: "/servicios/:path+", destination: "/eventos-empresa", permanent: true },
    ];
  },
};

module.exports = nextConfig;
