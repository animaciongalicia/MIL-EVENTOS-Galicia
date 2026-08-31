import Hero from "@/components/shared/Hero";
import LandingCategoria from "@/components/shared/LandingCategoria";
import TiraLogos from "@/components/shared/TiraLogos";
import CTAFinal from "@/components/shared/CTAFinal";
import { logosClientes } from "@/data/logos-clientes";

const areas = [
  {
    titulo: "Eventos de empresa",
    descripcion: "Team building, incentivos, jornadas outdoor, congresos y convenciones.",
    href: "/eventos-empresa",
  },
  {
    titulo: "Actividades",
    descripcion: "El catálogo de experiencias que le dan forma a tu evento.",
    href: "/actividades",
  },
  {
    titulo: "Espacios y recursos",
    descripcion: "El sitio, el traslado y el alojamiento, resueltos.",
    href: "/espacios-y-recursos",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        titulo="Organizar el evento de tu empresa no debería darte más trabajo del que ya tienes."
        subtitulo="Más de 15 años haciendo que las cosas sucedan."
        ctaTexto="Cuéntanos tu evento"
        ctaHref="/contacto"
        imagenSeed="mil-eventos-galicia-home"
      />

      <section className="mx-auto max-w-3xl px-6 py-16 text-lg leading-relaxed text-ink-700">
        <p>
          Organizar un evento de empresa no es solo elegir una actividad y reservar un espacio. Es
          coordinar proveedores que no siempre responden a tiempo, ajustar presupuestos que
          cambian a mitad de proceso, anticipar imprevistos que aparecen el mismo día del evento
          y, sobre todo, conseguir que el resultado cumpla el objetivo por el que se organizó — ya
          sea unir a un equipo, premiar un buen año o presentar un proyecto ante clientes e
          inversores.
        </p>
        <p className="mt-4">
          En Mil Eventos Galicia llevamos más de quince años ocupándonos de esa complejidad para
          que tú no tengas que hacerlo. Trabajamos con responsables de RRHH, dirección y
          organización de eventos de empresas de toda Galicia — y de fuera de la comunidad, cuando
          el evento lo requiere — que necesitan un interlocutor único capaz de gestionar cada fase
          del proceso: desde la primera idea hasta el último detalle logístico del día del evento.
        </p>
        <p className="mt-4">
          No partimos de un catálogo cerrado de actividades para que elijas una y ya está.
          Partimos de tu objetivo, y construimos el evento — la actividad, el espacio, el
          transporte, el alojamiento si hace falta — alrededor de ese objetivo.
        </p>
      </section>

      <section className="bg-cream-200 py-16">
        <div className="mx-auto max-w-3xl px-6 text-ink-700">
          <h2 className="text-2xl font-bold text-atlantico-700">Qué hacemos</h2>
          <p className="mt-3 text-lg leading-relaxed">
            Organizamos tres tipos de servicio, que se pueden contratar juntos o por separado
            según lo que ya tengas resuelto.
          </p>

          <h3 className="mt-8 text-lg font-semibold text-ink-900">Eventos de empresa</h3>
          <p className="mt-2 leading-relaxed">
            El núcleo de nuestro trabajo son los eventos corporativos. Dentro de esta línea
            distinguimos cuatro formatos, porque cada uno responde a una necesidad distinta y
            exige un planteamiento diferente. El <strong>team building</strong> busca fortalecer
            la cohesión de un equipo — ya sea uno que lleva años trabajando junto o uno recién
            formado tras una fusión o una ampliación de plantilla. Los programas de{" "}
            <strong>incentivos</strong> reconocen y motivan a quienes más aportan, con un formato
            que va desde una cena bien elegida hasta un viaje de varios días. Las{" "}
            <strong>jornadas outdoor</strong> sirven para desconectar del entorno habitual de
            trabajo con un propósito concreto: integrar, cerrar un proyecto, o simplemente
            recuperar energía antes de una temporada exigente. Y los{" "}
            <strong>congresos y convenciones</strong> son las citas de mayor formato, donde la
            producción técnica, la gestión de ponentes y la logística de los asistentes que vienen
            de fuera marcan la diferencia entre un evento que se recuerda por su contenido y uno
            que se recuerda por sus fallos.
          </p>

          <h3 className="mt-8 text-lg font-semibold text-ink-900">Actividades</h3>
          <p className="mt-2 leading-relaxed">
            Para dar forma a cada evento contamos con un catálogo amplio de actividades —
            outdoor, indoor, gastronómicas y a medida — que utilizamos como piezas modulares, no
            como productos cerrados que se venden sueltos. Una misma jornada puede combinar una
            actividad náutica por la mañana, una comida con producto gallego al mediodía y un
            taller en equipo por la tarde; la combinación depende del objetivo del evento, del
            perfil de los asistentes y del tiempo disponible, no de un listado fijo del que elegir
            sin más. Cuando ninguna actividad del catálogo encaja con lo que necesitas, la
            diseñamos desde cero — es, de hecho, uno de los encargos que más se repite.
          </p>

          <h3 className="mt-8 text-lg font-semibold text-ink-900">Espacios y recursos</h3>
          <p className="mt-2 leading-relaxed">
            Completamos el servicio con todo lo que rodea al evento y que, sin ser la actividad en
            sí, determina si sale bien. Localizamos el espacio con el aforo y el carácter
            adecuados — desde pazos y fincas históricas hasta naves industriales o salas de
            congresos —, gestionamos los traslados desde el aeropuerto o entre sedes, y
            coordinamos el alojamiento cuando el programa se extiende más de un día. Son
            decisiones logísticas que, mal resueltas, pueden arruinar la percepción de un evento
            perfectamente planteado, y las gestionamos con el mismo cuidado que dedicamos a la
            actividad principal.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 text-ink-700">
        <h2 className="text-2xl font-bold text-atlantico-700">Un servicio que se adapta a la escala del evento</h2>
        <p className="mt-3 leading-relaxed">
          No hay un tamaño único de evento de empresa, y no tratamos todos igual. Un team
          building para un equipo de diez personas necesita agilidad y trato cercano; una
          convención para trescientos asistentes necesita producción técnica, gestión de
          acreditaciones y un plan de contingencia para cada eslabón de la cadena. Aplicamos el
          mismo nivel de exigencia a los dos, pero con recursos y procesos distintos, ajustados al
          alcance real de cada encargo.
        </p>
        <p className="mt-4 leading-relaxed">
          Esa capacidad de escalar es, junto con el conocimiento del territorio, lo que nos
          permite trabajar tanto con pymes que organizan su primer evento corporativo como con
          grandes empresas que ya tienen un departamento de eventos propio y buscan un proveedor
          local de confianza para la parte operativa en Galicia.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-atlantico-700">Cómo trabajamos</h2>
        <p className="mt-3 leading-relaxed">
          Nuestro proceso empieza siempre con una conversación, no con un catálogo. Te preguntamos
          por el objetivo del evento, el número de asistentes, el presupuesto disponible y
          cualquier condicionante que debamos tener en cuenta — desde restricciones alimentarias
          hasta fechas que no se pueden mover. A partir de ahí te presentamos una propuesta
          concreta, con dos o tres alternativas razonadas, no una lista interminable de opciones
          para que decidas tú solo entre cifras que no sabes comparar.
        </p>
        <p className="mt-4 leading-relaxed">
          Una vez aprobada la propuesta, nos encargamos de cerrar espacios, proveedores,
          transporte y alojamiento, y de coordinar cada pieza para que encajen en el horario
          previsto. El día del evento, nuestro equipo está presente para resolver cualquier
          imprevisto — de eso se trata precisamente de contratar una agencia: de no tener que
          estar pendiente de la logística mientras intentas disfrutar, o dirigir, tu propio
          evento.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-atlantico-700">
          Por qué Mil Eventos Galicia
        </h2>
        <p className="mt-3 leading-relaxed">
          Llevamos más de quince años organizando eventos de empresa en Galicia. En ese tiempo
          hemos aprendido que la diferencia entre un evento que funciona y uno que no rara vez
          está en la actividad elegida, y casi siempre está en la ejecución: en la capacidad de
          anticipar problemas antes de que ocurran, de coordinar a varios proveedores sin que se
          note la coordinación, y de adaptar sobre la marcha cuando algo no sale según lo
          previsto.
        </p>
        <p className="mt-4 leading-relaxed">
          Conocemos el territorio gallego de primera mano — sus espacios, sus proveedores, sus
          productores locales — y eso nos permite proponer opciones que una agencia sin presencia
          real en la comunidad difícilmente puede ofrecer. Además, formamos parte de un ecosistema
          de marcas especializadas en alojamiento y experiencias (SUUNIA), actividades náuticas
          (Sea Galicia) y transporte (Luxe Galicia), lo que nos permite resolver programas
          complejos con un único punto de contacto, en lugar de obligarte a coordinar tú mismo a
          varios proveedores independientes.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-atlantico-700">Para quién trabajamos</h2>
        <p className="mt-3 leading-relaxed">
          Trabajamos principalmente con responsables de RRHH, dirección y organización de eventos
          de empresas de toda Galicia, desde pequeñas compañías que organizan su primer team
          building hasta grandes organizaciones que celebran una convención anual para varios
          cientos de personas. También gestionamos eventos para empresas de fuera de la comunidad
          que buscan Galicia como destino, por su paisaje, su gastronomía y su oferta de espacios
          singulares. Si tu empresa necesita organizar un evento y no sabes por dónde empezar, ese
          es exactamente el punto en el que entramos nosotros.
        </p>
        <p className="mt-4 leading-relaxed">
          Cuéntanos qué necesitas organizar y en cuánto tiempo. El resto — desde la primera
          propuesta hasta el cierre del evento — lo resolvemos nosotros.
        </p>
      </section>

      <LandingCategoria intro="Todo lo que necesita un evento de empresa, en un mismo sitio." sublandings={areas} />

      <TiraLogos logos={logosClientes} />

      <CTAFinal titulo="¿Va a ser un evento más, o el que todos recuerden? Empecemos por hablar." />
    </>
  );
}
