import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import BannerEcosistema from "@/components/shared/BannerEcosistema";
import CTAFinal from "@/components/shared/CTAFinal";
import PasosTrabajo from "@/components/shared/PasosTrabajo";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import CitaDestacada from "@/components/shared/CitaDestacada";
import { incentivosEjemplos } from "@/data/eventos-empresa-incentivos";
import { SUUNIA } from "@/data/ecosistema-marcas";

export const metadata: Metadata = {
  title: "Programas de Incentivos en Galicia | Mil Eventos Galicia",
  description: "Programas de incentivos para empresas en Galicia.",
};

export default function IncentivosPage() {
  return (
    <>
      <Hero titulo="Incentivos" subtitulo="Programas que premian y motivan." />

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          Dar las gracias con un email no motiva a nadie. Y un cheque regalo genérico tampoco,
          por mucho que cueste.
        </p>
        <p className="mt-4">
          El error más habitual no es el presupuesto, es la genericidad: el mismo premio para
          todo el equipo comercial, sin distinguir a quien de verdad ha destacado por encima del
          resto.
        </p>
        <p className="mt-4">
          Un incentivo bien diseñado hace dos cosas a la vez: reconoce un logro concreto, y deja
          claro — sin decirlo con esas palabras — que la empresa se ha fijado en el detalle.
        </p>
        <p className="mt-4">
          El presupuesto no es lo primero que decidimos. Lo primero es a quién va dirigido y por
          qué, porque eso determina qué formato tiene sentido y cuál sería un desperdicio de
          dinero y de ocasión.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <CitaDestacada texto="Lo que funciona es un reconocimiento que se recuerda: un viaje, una experiencia, un momento que la persona no se habría dado a sí misma." />
        <p className="mt-6 text-lg leading-relaxed text-ink-700">
          Y que se entrega bien — no un vale que llega por correo interno sin más explicación,
          sino algo con producción, con historia que contar el lunes en la oficina. La forma de
          entregarlo importa tanto como lo que se entrega.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <h2 className="text-xl font-bold text-atlantico-700">Un buen programa escala con el logro</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
          No es lo mismo premiar un buen trimestre que celebrar un objetivo anual cumplido por
          todo el equipo — el presupuesto y el formato cambian según lo que se celebra.
        </p>
        <div className="mt-6">
          <TarjetasTexto
            icono={false}
            items={[
              {
                titulo: "Reconocimiento puntual",
                texto:
                  "Para quien ha cerrado el trimestre o un proyecto concreto — un gesto individual, no un vale genérico para todos por igual.",
              },
              {
                titulo: "Premio de equipo",
                texto:
                  "Una experiencia compartida para el equipo que ha alcanzado un hito conjunto, con producción cuidada y un momento de entrega que se recuerde.",
              },
              {
                titulo: "Viaje de varios días",
                texto:
                  "Para todo el equipo que ha cumplido el objetivo anual, con la producción y la logística incluidas de principio a fin, sin que nadie tenga que organizar nada.",
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold text-atlantico-700">Qué incentivo según qué logro</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            El motivo del reconocimiento condiciona el formato — premiar lo mismo de siempre, pase
            lo que pase, acaba devaluando el gesto por completo.
          </p>
          <div className="mt-6">
            <TarjetasTexto
              icono={false}
              items={[
                {
                  titulo: "Comercial individual destacado",
                  texto: "Un reconocimiento visible, delante del equipo, no un ingreso silencioso en la nómina que nadie más ve.",
                },
                {
                  titulo: "Equipo que cumple objetivo",
                  texto: "Una experiencia compartida — celebra el logro conjunto, no reparte premios individuales sueltos que dividen al grupo.",
                },
                {
                  titulo: "Antigüedad o aniversario",
                  texto: "Algo con más carga simbólica que económica: reconoce el tiempo dedicado, no solo el resultado del último trimestre.",
                },
                {
                  titulo: "Cierre de año de toda la empresa",
                  texto: "El formato de mayor producción — cena, evento o viaje, según el presupuesto disponible y el tamaño de la plantilla.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-xl font-bold text-atlantico-700">Errores que evitamos</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
          Cosas que hemos visto fallar en programas de incentivos mal planteados, y que
          descartamos desde el principio de la conversación.
        </p>
        <div className="mt-6">
          <TarjetasTexto
            icono={false}
            items={[
              {
                titulo: "El mismo premio para todos",
                texto: "Diluye el reconocimiento y convierte algo especial en un trámite administrativo más, indistinguible de una nómina.",
              },
              {
                titulo: "Entrega sin producción",
                texto: "Un vale que llega por correo interno sin más explicación no genera ninguna historia que contar el lunes en la oficina.",
              },
              {
                titulo: "Premiar demasiado tarde",
                texto: "El reconocimiento pierde fuerza cuanto más se aleja del logro que lo motivó — meses después ya no significa lo mismo.",
              },
              {
                titulo: "No avisar con antelación",
                texto: "Un viaje de equipo anunciado con dos semanas de margen genera más estrés que ilusión, por bien planteado que esté el programa.",
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-5xl px-6 text-ink-700">
          <h2 className="text-xl font-bold text-atlantico-700">Cómo trabajamos</h2>
          <PasosTrabajo
            pasos={[
              {
                titulo: "Nos cuentas el objetivo",
                descripcion: "Retener, motivar, premiar resultados concretos — y a quién va dirigido exactamente.",
              },
              {
                titulo: "Fijamos el presupuesto por persona",
                descripcion: "Desde un reconocimiento puntual hasta un viaje de varios días, sin sorpresas a mitad de proceso.",
              },
              {
                titulo: "Diseñamos el programa",
                descripcion: "Cena, experiencia o viaje — con la producción incluida, no solo la reserva del sitio.",
              },
              {
                titulo: "Coordinamos la entrega",
                descripcion: "Incluido el momento de reconocimiento, si quieres que forme parte visible del evento.",
              },
            ]}
          />
          <p className="mt-6 leading-relaxed">
            Si el programa incluye desplazamiento o alojamiento para el equipo, lo coordinamos con
            nuestras marcas hermanas (ver más abajo) para que sea un único interlocutor, no tres
            proveedores distintos que hay que sincronizar tú mismo.
          </p>
          <p className="mt-4 leading-relaxed">
            El proceso es el mismo para un reconocimiento puntual que para un viaje de equipo
            completo — cambia el alcance, no la manera de trabajar. Y en los dos casos, la fecha
            de entrega se fija desde el principio, no se improvisa cuando ya está todo decidido.
          </p>
        </div>
      </section>

      <GridEjemplos ejemplos={incentivosEjemplos} />

      <BannerEcosistema marca={SUUNIA} />

      <section className="mx-auto max-w-5xl px-6 pt-12 text-lg leading-relaxed text-ink-700">
        <p>
          Coordinamos alojamiento, comidas y experiencias de varios días con SUUNIA cuando el
          incentivo lo requiere, para que sigas teniendo un único interlocutor de principio a fin.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-atlantico-700">Para quién diseñamos estos programas</h2>
        <p className="mt-3">
          Trabajamos con equipos comerciales que necesitan reconocer resultados individuales, con
          dirección y RRHH que preparan el cierre de año de toda la empresa, y con cualquier
          departamento que quiera celebrar un hito concreto sin recurrir al vale genérico de
          siempre.
        </p>
        <p className="mt-4">
          También con empresas que hasta ahora resolvían esto con una cesta de Navidad o una paga
          extra sin más explicación, y que quieren empezar a reconocer resultados de una forma que
          de verdad se note dentro del equipo.
        </p>
        <p className="mt-4">
          Si todavía no tienes claro si lo que necesitas es un incentivo o un{" "}
          <a href="/eventos-empresa/team-building" className="text-atlantico-700 underline">
            team building
          </a>
          , la diferencia está en el objetivo: premiar un resultado concreto, o fortalecer la
          relación entre las personas del equipo.
        </p>
        <p className="mt-4 font-semibold text-ink-900">
          Cuéntanos a quién quieres premiar y por qué. El formato lo diseñamos nosotros.
        </p>
      </section>

      <CTAFinal titulo="El mejor incentivo es el que se recuerda meses después de gastárselo." ctaTexto="Diseñamos tu programa" />
    </>
  );
}
