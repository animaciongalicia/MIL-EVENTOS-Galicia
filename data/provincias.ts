// Datos de las páginas de provincia (/eventos-en-galicia/[provincia]).
// SEO local: recuperan el long-tail geográfico ("eventos de empresa en A Coruña",
// "team building en las Rías Baixas"...) sin canibalizar las pilares, que compiten
// por la keyword de región ("en Galicia"). Contenido real: hechos geográficos y
// servicios que la agencia presta de verdad — nada de cifras inventadas por provincia (§6).
//
// REGLA §11: no se menciona "Vigo" en ningún texto del sitio. La página de Pontevedra
// trabaja las Rías Baixas sin nombrar esa ciudad ni usar imágenes cuyo nombre la incluya.

export type CiudadProvincia = {
  nombre: string;
  texto: string;
};

export type Provincia = {
  slug: string;
  nombre: string;
  // Título/descripción SEO propios (§9).
  titulo: string;
  descripcion: string;
  heroImagen: string;
  heroTitulo: string;
  heroSubtitulo: string;
  // Párrafos de intro (2), tono Rentabilista (§5).
  intro: string[];
  cita: string;
  // Ciudades y zonas donde se montan eventos en la provincia.
  ciudades: CiudadProvincia[];
  // Tipos de evento que se montan en la provincia, con gancho local (TarjetasTexto).
  tiposEvento: { titulo: string; texto: string }[];
  // Razones concretas para elegir la provincia (TarjetasTexto).
  porQue: { titulo: string; texto: string }[];
  // Segundo párrafo/cita de refuerzo a media página.
  refuerzo: string;
  // Preguntas frecuentes (acordeón visible + JSON-LD FAQPage). SEO/LLM local.
  faq: { pregunta: string; respuesta: string }[];
  // Párrafo de cierre antes del CTA.
  cierre: string;
  ctaTitulo: string;
};

export const provincias: Provincia[] = [
  {
    slug: "a-coruna",
    nombre: "A Coruña",
    titulo: "Eventos de Empresa en A Coruña | Mil Eventos Galicia",
    descripcion:
      "Organizamos eventos de empresa, team building, incentivos y congresos en A Coruña, Santiago, Ferrol y toda la provincia. Más de 15 años en el terreno.",
    heroImagen: "/images/que-ver-en-la-corun-a.jpg",
    heroTitulo: "Eventos de empresa en A Coruña",
    heroSubtitulo: "Del casco viejo al Finisterre, montamos el evento entero.",
    intro: [
      "A Coruña es donde tenemos la base, y se nota: conocemos cada pazo, cada terraza sobre el mar y cada nave reconvertida antes de que la busques tú en Google. No improvisamos sobre el terreno — lo pisamos todos los meses del año.",
      "Aquí cabe casi todo. Una jornada outdoor en la Costa da Morte, una convención en un palacio de congresos con vistas al puerto, una cena de equipo en Santiago después de la reunión anual. Tú pones el objetivo; nosotros ponemos el sitio, la logística y el ojo para que no falle nada.",
    ],
    cita: "El evento no se recuerda por la ciudad donde fue, sino por cómo salió. Y eso lo decide quién lo monta.",
    ciudades: [
      {
        nombre: "A Coruña ciudad",
        texto:
          "Terrazas sobre la bahía, espacios singulares en el puerto y palacios de congresos con aforo real para una convención grande. La base desde la que trabajamos toda la provincia.",
      },
      {
        nombre: "Santiago de Compostela",
        texto:
          "El reclamo que convence a un equipo que viene de fuera. Congresos, cenas de gala y una ciudad que se vende sola cuando hay delegados de otras sedes.",
      },
      {
        nombre: "Ferrol y las Rías Altas",
        texto:
          "Puerto, naval y naturaleza atlántica sin masificar — para un evento que busca carácter en vez de postal repetida.",
      },
      {
        nombre: "Costa da Morte",
        texto:
          "Faros, acantilados y el Finisterre como escenario. La jornada outdoor que un equipo no olvida, con un plan B listo por si el Atlántico decide participar.",
      },
      {
        nombre: "Betanzos y el interior",
        texto:
          "Cascos históricos y fincas para celebraciones y jornadas a menos de media hora de la ciudad, sin sacrificar comodidad de acceso.",
      },
    ],
    tiposEvento: [
      {
        titulo: "Team building en la costa",
        texto:
          "Del rafting en el Ulla a una jornada por la Costa da Morte: naturaleza atlántica a menos de una hora de la ciudad, con plan B cerrado por si el tiempo aprieta.",
      },
      {
        titulo: "Convenciones y congresos",
        texto:
          "Palacios de congresos con aforo real y hoteles para grupos grandes en la ciudad — con Santiago a cuarenta minutos como sede alternativa que se vende sola.",
      },
      {
        titulo: "Incentivos con Santiago de gancho",
        texto:
          "Un programa de varios días que combina trabajo, gastronomía y la ciudad del Camino — el destino que hace que el equipo de otra sede no falte.",
      },
      {
        titulo: "Cenas y celebraciones de empresa",
        texto:
          "Cierres de año, entregas de premios o una cena de gala frente al puerto, con producción, catering y espectáculo resueltos de principio a fin.",
      },
    ],
    porQue: [
      {
        titulo: "Conectividad de sobra",
        texto:
          "Aeropuerto de Alvedro, el de Santiago a cuarenta minutos y AVE — para que los asistentes de fuera lleguen sin que la logística se coma el presupuesto.",
      },
      {
        titulo: "Santiago vende el viaje",
        texto:
          "Cuando el equipo viene de otra sede, la ciudad del Camino convierte un evento en una razón para no faltar. El reclamo lo pone el destino.",
      },
      {
        titulo: "Costa para el outdoor",
        texto:
          "Playas, faros y acantilados a tiro de piedra para una jornada al aire libre — con alternativa bajo techo si el tiempo se pone atlántico.",
      },
      {
        titulo: "Estamos aquí",
        texto:
          "Es nuestra provincia. Proveedores, espacios y contactos que hemos probado en persona, no una lista sacada de un portal de reservas.",
      },
    ],
    refuerzo:
      "En A Coruña no subcontratamos el conocimiento del terreno: el pazo, la terraza sobre la bahía o la nave para un lanzamiento los hemos pisado nosotros antes de proponértelos.",
    faq: [
      {
        pregunta: "¿Organizáis eventos solo en la ciudad de A Coruña?",
        respuesta:
          "No. Trabajamos toda la provincia: A Coruña ciudad, Santiago de Compostela, Ferrol, la Costa da Morte y el interior. Elegimos la zona según el tipo de evento y de dónde viene tu equipo, no al revés.",
      },
      {
        pregunta: "¿Podéis encargaros también del alojamiento y el transporte?",
        respuesta:
          "Sí. Coordinamos espacio, traslados y alojamiento con un único interlocutor. Para programas de varios días entran en juego nuestras marcas hermanas SUUNIA (estancia y experiencias) y Luxe Galicia (transporte).",
      },
      {
        pregunta: "¿Con cuánta antelación conviene contactar?",
        respuesta:
          "Cuanto antes, más margen. Los espacios con carácter y las fechas señaladas —cierres de año, convenciones de primavera— se reservan con meses. Si ya tienes fecha, ese es el momento de empezar.",
      },
      {
        pregunta: "¿Solo hacéis eventos de empresa o también celebraciones?",
        respuesta:
          "El foco es el evento de empresa, pero también montamos celebraciones —cenas, cócteles, cumpleaños de adultos, aniversarios— con la misma logística seria detrás.",
      },
    ],
    cierre:
      "Tanto si ya tienes fecha y sede como si solo tienes la certeza de que el evento tiene que salir bien, cuanto antes hablemos, más opciones libres tenemos para elegir — en vez de conformarnos con lo que quede.",
    ctaTitulo: "¿Montamos tu próximo evento en A Coruña?",
  },
  {
    slug: "pontevedra",
    nombre: "Pontevedra",
    titulo: "Eventos de Empresa en Vigo, Pontevedra y las Rías Baixas | Mil Eventos Galicia",
    descripcion:
      "Team building náutico, incentivos y eventos de empresa en Vigo, Pontevedra y las Rías Baixas: Sanxenxo, O Grove, Cambados, las Cíes. Más de 15 años organizándolos.",
    heroImagen: "/images/naturaleza-cies-rias-baixas.jpg",
    heroTitulo: "Eventos de empresa en las Rías Baixas",
    heroSubtitulo: "De Vigo a la ría de Arousa: mar, Albariño y un equipo que vuelve con ganas de más.",
    intro: [
      "Las Rías Baixas son el argumento fácil: mar templado, marisco recién sacado y bodegas de Albariño donde una cata deja de ser un cliché para convertirse en el mejor rato del programa. Pero un buen destino mal organizado sigue siendo un evento mediocre.",
      "Por eso trabajamos la provincia entera —de Vigo, el motor económico de la ría, a Pontevedra y la ría de Arousa— con la misma exigencia que en casa: la lancha reservada, el catamarán con aforo real, la bodega que sí recibe grupos y el traslado coordinado para que nadie se quede en tierra mirando el reloj.",
    ],
    cita: "Aquí el escenario juega a favor. Nuestro trabajo es que la organización esté a la altura del paisaje.",
    ciudades: [
      {
        nombre: "Vigo y su ría",
        texto:
          "La mayor ciudad de Galicia y motor de las Rías Baixas: cenas de empresa, team building y celebraciones, con los espacios localizados por nosotros — de una sala con vistas a la ría a un pazo a las afueras.",
      },
      {
        nombre: "Pontevedra ciudad",
        texto:
          "Uno de los cascos históricos más bonitos de Galicia, peatonal y a medida para una jornada que combina reunión de trabajo y ciudad para pasear.",
      },
      {
        nombre: "Sanxenxo y O Grove",
        texto:
          "Playa, náutica y hoteles con capacidad para grupos grandes — el destino de incentivo que un equipo asocia a vacaciones sin serlo.",
      },
      {
        nombre: "A Toxa y la ría de Arousa",
        texto:
          "Balnearios, bateas de mejillón y salidas en barco. El incentivo de varios días con desconexión de verdad, no una sala de hotel con vistas.",
      },
      {
        nombre: "Cambados y O Salnés",
        texto:
          "La capital del Albariño. Catas en bodega, comida sobre la ría y una experiencia gastronómica que se recuerda mejor que cualquier PowerPoint.",
      },
      {
        nombre: "Las Illas Cíes",
        texto:
          "Parque Nacional y una de las mejores playas del mundo como escenario de una jornada irrepetible — con la logística de acceso resuelta por nosotros.",
      },
    ],
    tiposEvento: [
      {
        titulo: "Team building náutico",
        texto:
          "Vela, catamarán, paddle surf o una regata por equipos en la ría — con Sea Galicia, nuestra marca hermana, poniendo la parte náutica cuando el programa la pide.",
      },
      {
        titulo: "Incentivos en las Rías Baixas",
        texto:
          "Playa, balneario en A Toxa y hoteles con aforo para premiar resultados: el destino que un equipo asocia a vacaciones sin dejar de ser un incentivo.",
      },
      {
        titulo: "Catas y enogastronomía",
        texto:
          "El Albariño de Cambados, marisco sobre la ría y bodegas que reciben grupos de verdad — la experiencia que hace que el equipo confirme sin que insistas.",
      },
      {
        titulo: "Cenas y convenciones en Vigo",
        texto:
          "Salas con vistas a la ría, cenas de empresa y cócteles en la mayor ciudad de Galicia, con los espacios localizados y la producción resuelta por nosotros.",
      },
    ],
    porQue: [
      {
        titulo: "El mar como actividad",
        texto:
          "Vela, catamarán, paddle surf o una regata por equipos. Nuestra marca hermana Sea Galicia pone la parte náutica cuando el programa la pide.",
      },
      {
        titulo: "Gastronomía que convence",
        texto:
          "Marisco, Albariño y bodegas que reciben grupos de verdad — el argumento que hace que un equipo confirme asistencia sin que insistas.",
      },
      {
        titulo: "Destino de incentivo",
        texto:
          "Playa, balneario y hoteles con aforo para premiar resultados sin que parezca una reunión disfrazada de escapada.",
      },
      {
        titulo: "Programa multi-día resuelto",
        texto:
          "Alojamiento, traslados y comidas coordinados por un único interlocutor — con SUUNIA reforzando la parte de estancia y experiencias.",
      },
    ],
    refuerzo:
      "El paisaje de las Rías Baixas vende solo. Lo difícil —la lancha reservada, el aforo real del catamarán, el traslado que no deja a nadie en tierra— es justo lo que resolvemos nosotros.",
    faq: [
      {
        pregunta: "¿Trabajáis en Vigo?",
        respuesta:
          "Sí. Vigo es la mayor ciudad de la provincia y una zona donde organizamos eventos de empresa, cenas y celebraciones con normalidad, y localizamos los espacios que necesites. Lo único que no hacemos es alquilar un local propio para fiestas de cumpleaños.",
      },
      {
        pregunta: "¿Qué actividades náuticas podéis montar?",
        respuesta:
          "Vela, catamarán, paddle surf, kayak o una regata por equipos, según el nivel y el tamaño del grupo. La parte náutica la coordina Sea Galicia, nuestra marca hermana especializada en el mar.",
      },
      {
        pregunta: "¿Es buena zona para un incentivo de varios días?",
        respuesta:
          "De las mejores de Galicia. Playa, náutica, balneario en A Toxa y bodegas de Albariño dan de sobra para un programa de dos o tres días, con alojamiento y traslados coordinados por un único interlocutor.",
      },
      {
        pregunta: "¿Podéis organizar una cata de Albariño para la empresa?",
        respuesta:
          "Sí. En Cambados y O Salnés trabajamos con bodegas que reciben grupos con criterio — cata guiada y comida sobre la ría, como actividad de equipo o cierre de un evento más grande.",
      },
    ],
    cierre:
      "Un fin de semana de incentivo, una jornada náutica de equipo o una cata para cerrar el trimestre: nos cuentas el objetivo y te devolvemos un programa con las Rías Baixas trabajando a tu favor.",
    ctaTitulo: "¿Llevamos a tu equipo a las Rías Baixas?",
  },
  {
    slug: "lugo",
    nombre: "Lugo",
    titulo: "Eventos de Empresa en Lugo y la Ribeira Sacra | Mil Eventos Galicia",
    descripcion:
      "Eventos de empresa, jornadas de desconexión e incentivos en Lugo, la Ribeira Sacra, A Mariña y Ribadeo. Más de 15 años organizándolos en toda la provincia.",
    heroImagen: "/images/muralla-de-lugo.jpg",
    heroTitulo: "Eventos de empresa en Lugo",
    heroSubtitulo: "La provincia para desconectar de verdad, no de boquilla.",
    intro: [
      "Lugo es la carta que casi nadie juega, y ahí está su fuerza. Una muralla romana patrimonio de la humanidad, la Ribeira Sacra colgada sobre el Sil y la playa de As Catedrais como escenario — todo lejos del ruido de los destinos de siempre.",
      "Es la provincia para el equipo que necesita salir de la oficina y de la ciudad a la vez. Aquí montamos jornadas de desconexión, incentivos con desconexión real y encuentros donde el paisaje hace la mitad del trabajo — la otra mitad la ponemos nosotros con la logística que un sitio remoto exige.",
    ],
    cita: "Desconexión no es una palabra de folleto. En Lugo es literal: apagas el móvil porque el sitio lo pide.",
    ciudades: [
      {
        nombre: "Lugo ciudad",
        texto:
          "La única muralla romana entera del mundo, y un casco histórico para pasear entre reunión y cena. Un marco con historia sin salir del centro.",
      },
      {
        nombre: "Ribeira Sacra",
        texto:
          "Cañones del Sil, catamarán entre viñedos verticales y bodegas heroicas. El paisaje que convierte una jornada de equipo en una experiencia que se cuenta.",
      },
      {
        nombre: "Ribadeo y As Catedrais",
        texto:
          "La Praia das Catedrais y la costa de A Mariña — arcos de piedra y atlántico para un evento con un escenario imposible de igualar.",
      },
      {
        nombre: "A Mariña lucense",
        texto:
          "Costa tranquila, marisco y hoteles con encanto lejos de la masificación — para un incentivo que se siente exclusivo sin serlo de precio.",
      },
      {
        nombre: "Sarria y el Camino",
        texto:
          "El punto de arranque del último tramo a Santiago. Un reto de equipo con significado, para quien quiere que el team building deje poso.",
      },
    ],
    tiposEvento: [
      {
        titulo: "Jornadas de desconexión",
        texto:
          "Sacar al equipo del ruido de la ciudad y del móvil que no para: la Ribeira Sacra y la costa de A Mariña son el marco para que un equipo se reencuentre de verdad.",
      },
      {
        titulo: "Incentivos en la Ribeira Sacra",
        texto:
          "Catamarán entre viñedos verticales, bodegas heroicas y monasterios sobre el Sil — un incentivo con un paisaje que se cuenta durante meses.",
      },
      {
        titulo: "Team building con significado",
        texto:
          "El último tramo del Camino desde Sarria como reto de equipo: esfuerzo compartido y una meta con sentido, no una gymkana más.",
      },
      {
        titulo: "Reuniones con carácter",
        texto:
          "Una jornada de trabajo dentro de la única muralla romana entera del mundo, con la ciudad histórica para pasear entre sesión y cena.",
      },
    ],
    porQue: [
      {
        titulo: "Desconexión real",
        texto:
          "Lejos de la ciudad y del móvil que no para. La provincia ideal cuando el objetivo del evento es que el equipo se reencuentre de verdad.",
      },
      {
        titulo: "Paisaje con historia",
        texto:
          "Muralla romana, cañones del Sil y una costa de arcos de piedra — escenarios que hacen la mitad del trabajo de impresionar a un equipo.",
      },
      {
        titulo: "La Ribeira Sacra",
        texto:
          "Vino heroico, catamarán y viñedos verticales para una jornada de equipo o una cata que no se parece a ninguna otra en Galicia.",
      },
      {
        titulo: "Logística de sitio remoto",
        texto:
          "Un destino apartado exige traslados y alojamiento bien atados. Es exactamente lo que resolvemos para que la distancia no sea un problema.",
      },
    ],
    refuerzo:
      "Un destino apartado exige una logística impecable: traslados y alojamiento bien atados para que la distancia sea parte del encanto, no del problema. Esa es la parte que ponemos nosotros.",
    faq: [
      {
        pregunta: "¿Merece la pena llevar a un equipo a Lugo estando más lejos?",
        respuesta:
          "Precisamente por eso. La distancia es lo que garantiza la desconexión: sin la oficina cerca, el equipo se implica de verdad. Y la logística de llegar hasta el rincón bueno la resolvemos nosotros.",
      },
      {
        pregunta: "¿Qué se puede hacer en la Ribeira Sacra con la empresa?",
        respuesta:
          "Catamarán por los cañones del Sil, visitas a bodegas heroicas, catas y comidas entre viñedos. Es uno de los escenarios más espectaculares de Galicia para una jornada de equipo o un incentivo.",
      },
      {
        pregunta: "¿Organizáis el Camino de Santiago para empresas?",
        respuesta:
          "Sí. Desde Sarria, el último tramo hasta Santiago funciona como reto de equipo: lo montamos con el alojamiento, el transporte de maletas y el apoyo logístico resueltos para que el grupo solo tenga que caminar.",
      },
      {
        pregunta: "¿Hay espacios para reuniones y congresos en la provincia?",
        respuesta:
          "Sí, en Lugo ciudad y su entorno. Localizamos salas y espacios con aforo real, y combinamos la parte de trabajo con la experiencia —muralla, gastronomía, Ribeira Sacra— que hace que el viaje valga la pena.",
      },
    ],
    cierre:
      "Si lo que buscas es sacar al equipo del ruido y devolverlo con la cabeza en su sitio, Lugo es la provincia — y la logística de llegar hasta el rincón bueno la ponemos nosotros.",
    ctaTitulo: "¿Nos llevamos a tu equipo a Lugo?",
  },
  {
    slug: "ourense",
    nombre: "Ourense",
    titulo: "Eventos de Empresa en Ourense y la Ribeira Sacra | Mil Eventos Galicia",
    descripcion:
      "Incentivos, catas de vino y eventos de empresa en Ourense, la Ribeira Sacra, O Ribeiro y Valdeorras. Termalismo y enoturismo con más de 15 años de experiencia.",
    heroImagen: "/images/teambuilding-bodegas-ribera-sacra.jpg",
    heroTitulo: "Eventos de empresa en Ourense",
    heroSubtitulo: "Vino, termas y el interior que nadie espera.",
    intro: [
      "Ourense tiene dos cartas que ninguna otra provincia gallega juega igual de fuerte: el vino y el agua caliente. Termas urbanas al aire libre, la Ribeira Sacra sobre el Sil y tres denominaciones de origen a un paso — Ribeiro, Valdeorras y la propia Ribeira Sacra.",
      "Es el destino de incentivo para el equipo que ya ha ido a la playa y a la ciudad, y busca algo distinto. Enoturismo de verdad, desconexión termal después de una jornada de trabajo y bodegas que reciben grupos con criterio. Nosotros ponemos el hilo que une todas esas piezas en un programa que fluye.",
    ],
    cita: "El interior de Galicia es la carta que sorprende. Y un equipo se acuerda mucho más de lo que no esperaba.",
    ciudades: [
      {
        nombre: "Ourense ciudad",
        texto:
          "Las termas urbanas al aire libre y un casco histórico termal — desconexión de verdad a pie de ciudad, algo que no ofrece ningún otro destino gallego.",
      },
      {
        nombre: "Ribeira Sacra",
        texto:
          "Cañones del Sil, monasterios y viñedos imposibles. Catamarán entre laderas de vino para una jornada de equipo que se cuenta durante meses.",
      },
      {
        nombre: "O Ribeiro",
        texto:
          "La comarca del vino por excelencia. Catas en bodega y comida entre viñedos para cerrar un trimestre o premiar a un equipo con estilo.",
      },
      {
        nombre: "Valdeorras",
        texto:
          "Godello y mencía en una comarca de vino en auge — enoturismo para quien quiere salir del circuito más trillado y sorprender.",
      },
      {
        nombre: "Allariz y el interior",
        texto:
          "Uno de los pueblos más bonitos de Galicia, con fincas y espacios con encanto para celebraciones y jornadas lejos del bullicio.",
      },
    ],
    tiposEvento: [
      {
        titulo: "Enoturismo para empresas",
        texto:
          "Ribeiro, Valdeorras y Ribeira Sacra a un paso: catas y comidas en bodega que convierten un cierre de trimestre o un incentivo en una experiencia, no en otra diapositiva.",
      },
      {
        titulo: "Incentivos termales",
        texto:
          "Las termas de Ourense al aire libre a pie de ciudad — la desconexión que ningún otro destino gallego pone tan fácil después de una jornada de trabajo.",
      },
      {
        titulo: "Jornadas sobre el Sil",
        texto:
          "Catamarán por los cañones y viñedos verticales de la Ribeira Sacra: un escenario que un equipo que ya lo ha visto todo no espera, y por eso recuerda.",
      },
      {
        titulo: "Celebraciones en el interior",
        texto:
          "Fincas y espacios con encanto en Allariz y el rural ourensano para una cena de empresa o una celebración lejos del bullicio de la costa.",
      },
    ],
    porQue: [
      {
        titulo: "Enoturismo de verdad",
        texto:
          "Tres denominaciones de origen a un paso. Catas y comidas en bodega que convierten un evento en una experiencia, no en una diapositiva más.",
      },
      {
        titulo: "Termalismo único",
        texto:
          "Termas al aire libre a pie de ciudad — la desconexión que ningún otro destino gallego pone tan fácil después de una jornada de trabajo.",
      },
      {
        titulo: "El factor sorpresa",
        texto:
          "El equipo que ya lo ha visto todo no espera el interior. Y precisamente por eso se acuerda del evento que lo llevó allí.",
      },
      {
        titulo: "La Ribeira Sacra",
        texto:
          "Paisaje declarado y vino heroico compartido con Lugo — uno de los escenarios más espectaculares para una jornada de equipo en toda Galicia.",
      },
    ],
    refuerzo:
      "El interior es la carta que sorprende. Y un equipo se acuerda mucho más de lo que no esperaba: por eso Ourense funciona tan bien cuando la playa y la ciudad ya están vistas.",
    faq: [
      {
        pregunta: "¿Por qué elegir el interior en vez de la costa?",
        respuesta:
          "Por el factor sorpresa. El equipo que ya ha ido a la playa y a la ciudad no espera el interior —vino, termas y la Ribeira Sacra— y precisamente por eso se acuerda del evento que lo llevó allí.",
      },
      {
        pregunta: "¿Qué denominaciones de vino se pueden visitar?",
        respuesta:
          "Ribeiro, Valdeorras y la Ribeira Sacra, las tres a un paso. Trabajamos con bodegas que reciben grupos con criterio, para una cata guiada o una comida entre viñedos como actividad de equipo.",
      },
      {
        pregunta: "¿Se puede combinar termalismo con un evento de trabajo?",
        respuesta:
          "Sí, y es una de las bazas de Ourense: las termas al aire libre a pie de ciudad permiten cerrar una jornada de trabajo con una desconexión real, sin salir del destino.",
      },
      {
        pregunta: "¿La Ribeira Sacra es de Lugo o de Ourense?",
        respuesta:
          "De las dos: es un territorio compartido a ambos lados del Sil. Desde Ourense se accede a los cañones, las bodegas y el catamarán con la misma facilidad — montamos el programa donde mejor encaje con tu evento.",
      },
    ],
    cierre:
      "Una cata para cerrar el año, un incentivo termal de fin de semana o una jornada de equipo sobre el Sil: cuéntanos qué buscas y te armamos un programa con el interior de Galicia como carta ganadora.",
    ctaTitulo: "¿Descubrimos Ourense con tu equipo?",
  },
];

export function getProvincia(slug: string): Provincia | undefined {
  return provincias.find((p) => p.slug === slug);
}
