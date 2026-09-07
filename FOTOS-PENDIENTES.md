# Fotos pendientes de subir

Lista de las fotos reales que aún faltan, con el **nombre de archivo exacto** que
debe tener cada una. Sube cada foto a `public/images/` con ese nombre (en
minúsculas, con guiones, sin espacios ni acentos) y avísame — al llamarse
exactamente así, conectarlas a la web es directo.

## Reglas al guardar la foto
- **Formato:** `.jpg` (o `.jpeg`). Nombre en minúsculas y con guiones.
- **Orientación:** horizontal (apaisada) siempre que se pueda — las tarjetas son
  16:9. Una foto vertical se recorta por los lados y pierde parte.
- **Tamaño:** mínimo ~1200 px de ancho. Cuanto más nítida, mejor (se recorta con
  `object-cover`, nunca se estira).
- **Nada de texto ni marcas de agua** encima de la foto.

---

## 🔴 Prioridad 1 — Transporte (arregla Traslados y Luxe Galicia)
Hoy estas tarjetas muestran paisajes/monumentos: no hay ni un vehículo.

| Nombre de archivo | Qué debe mostrar |
|---|---|
| `autocar-grupo-evento.jpg` | Autocar / autobús de grupo (exterior) |
| `minibus-traslado-evento.jpg` | Minibús o furgoneta tipo Vito / Clase V |
| `coche-vip-chofer.jpg` | Coche VIP negro (berlina) con chófer |
| `recogida-aeropuerto-evento.jpg` | Recogida en aeropuerto (cartel con nombre, maletas) |
| `interior-autocar-grupo.jpg` | Interior de autocar con asientos |
| `flota-vehiculos-evento.jpg` | Varios vehículos juntos / logística multi-día |

## 🔴 Prioridad 2 — Alojamiento
Hoy muestran pueblos y paisajes: no hay ninguna habitación ni hotel.

| Nombre de archivo | Qué debe mostrar |
|---|---|
| `habitacion-hotel-evento.jpg` | Habitación de hotel bonita |
| `pazo-casa-rural-galicia.jpg` | Exterior de pazo o casa rural gallega |
| `recepcion-check-in-hotel.jpg` | Recepción / mostrador de check-in |
| `hotel-con-encanto-galicia.jpg` | Fachada o hall de hotel con encanto |
| `suite-vip-ponentes.jpg` | Suite o habitación VIP |
| `hotel-grupo-delegados.jpg` | Exterior de hotel grande / grupo llegando |

## 🟠 Prioridad 3 — Espacios (Localización)

| Nombre de archivo | Qué debe mostrar |
|---|---|
| `pazo-finca-evento-interior.jpg` | Interior de pazo o finca montado para evento |
| `nave-industrial-loft-evento.jpg` | Nave / loft industrial de evento |
| `bodega-vino-galicia.jpg` | Interior de bodega (barricas, sala de cata) |

## 🟠 Prioridad 4 — Producción de congresos

| Nombre de archivo | Qué debe mostrar |
|---|---|
| `escenario-produccion-av-congreso.jpg` | Escenario con iluminación / equipo audiovisual |
| `set-streaming-camara-evento.jpg` | Cámara / set de streaming en un evento |

## 🟢 Prioridad 5 — Gastronomía y celebraciones (mejoran stopgaps actuales)

| Nombre de archivo | Qué debe mostrar |
|---|---|
| `ruta-tapas-casco-viejo.jpg` | Tapas / mesa de bar en casco viejo |
| `copa-cata-vino-galicia.jpg` | Copa de vino / cata en primer plano |
| `finca-jardin-piscina-evento.jpg` | Finca con jardín y piscina |
| `carpa-toldo-evento-finca.jpg` | Carpa / toldo de evento montado |

## 🟢 Prioridad 6 — Actividades indoor

| Nombre de archivo | Qué debe mostrar |
|---|---|
| `escape-room-team-building.jpg` | Escape room (grupo resolviendo pistas) |
| `torneo-juegos-de-mesa.jpg` | Mesa con juegos de mesa / torneo |

---

## Mapa de conexión (para Claude — no hace falta que lo toques)
Cada archivo va a esta tarjeta:

- **Traslados** (`data/espacios-traslados.ts`): recogida-aeropuerto → "Traslados desde aeropuerto";
  minibus-traslado → "Transporte entre sedes"; autocar-grupo → "Autobuses para grupos grandes";
  coche-vip-chofer → "Vehículos privados y VIP"; flota-vehiculos → "Logística multi-día";
  interior-autocar-grupo → "Acceso a espacios rurales o de difícil llegada".
- **Luxe Galicia** (`data/ecosistema-luxe-galicia-ejemplos.ts`): recogida-aeropuerto → "Traslado desde el aeropuerto";
  minibus-traslado → "Transporte entre sedes"; flota-vehiculos → "Logística de congreso multi-día";
  coche-vip-chofer → "Vuelta al hotel tras el evento"; autocar-grupo → "Transporte para grupos grandes";
  interior-autocar-grupo → "Traslado nocturno tras la cena de gala".
- **Alojamiento** (`data/espacios-alojamiento.ts`): habitacion-hotel → "Hoteles y bloques de habitaciones";
  hotel-con-encanto → "Alojamientos con encanto"; pazo-casa-rural → "Programas de varios días";
  suite-vip-ponentes → "Habitaciones para ponentes y VIP"; recepcion-check-in → "Seguimiento y check-in coordinado";
  hotel-grupo-delegados → "Alojamiento para delegados internacionales".
- **Localización** (`data/espacios-localizacion-espacios.ts`): pazo-finca-evento-interior → "Pazos y fincas históricas";
  nave-industrial-loft-evento → "Naves y espacios industriales"; bodega-vino-galicia → "Bodegas y espacios con producto propio".
- **Congresos** (`data/eventos-empresa-congresos-y-convenciones.ts`): escenario-produccion-av-congreso → "Producción técnica completa";
  set-streaming-camara-evento → "Streaming y contenido posterior".
- **Gastronomía** (`data/actividades-gastronomia.ts`): ruta-tapas-casco-viejo → "Ruta de tapas por el casco viejo";
  copa-cata-vino-galicia → "Catas de vino gallego".
- **Celebraciones fincas** (`data/celebraciones-fincas.ts`): finca-jardin-piscina-evento → "Fincas con jardín y piscina";
  carpa-toldo-evento-finca → "Carpas y toldos".
- **Indoor** (`data/actividades-indoor.ts`): escape-room-team-building → "Escape room temático";
  torneo-juegos-de-mesa → "Torneos de juegos de mesa".

Total: **23 fotos**.
