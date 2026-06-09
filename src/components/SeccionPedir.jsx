import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Sucursales() {
  const locales = [
    {
      nombre: "RUDDY’S BARRIO NORTE",
      direccion: "Santa Fe 277, San Miguel de Tucumán",
      link: "https://maps.google.com",
      posicion: [-26.8241, -65.2226],
    },
    {
      nombre: "RUDDY’S FLIP",
      direccion: "Av. Aconquija 365, Yerba Buena",
      link: "https://maps.google.com",
      posicion: [-26.8167, -65.3170],
    },
    {
      nombre: "RUDDY’S PERÓN",
      direccion: "Av. J. D. Perón 1180, Yerba Buena",
      link: "https://maps.google.com",
      posicion: [-26.8160, -65.2950],
    },
  ];

  return (
    <section 
    id='locales'
    className="bg-[#f4f4f4] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-black uppercase text-[#022859]">
            Nuestras <h2 className="text-[#FFBE00] font-allan">Sucursales</h2>
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl mb-10 shadow-lg">
          <MapContainer
            center={[-26.8241, -65.2226]}
            zoom={11}
            scrollWheelZoom={false}
            className="h-[500px] w-full"
          >
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {locales.map((local, index) => (
              <Marker key={index} position={local.posicion}>
                <Popup>{local.nombre}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {locales.map((local, index) => (
            <div
              key={index}
              className="bg-[#022859] rounded-3xl p-6 text-white shadow-xl"
            >
              <h3 className="text-2xl font-black uppercase mb-4">
                {local.nombre}
              </h3>

              <p className="text-lg mb-8">
                {local.direccion}
              </p>

              <a
                href={local.link}
                target="_blank"
                rel="noreferrer"
                className="
                  block
                  bg-[#FFBE00]
                  hover:bg-yellow-400
                  transition
                  text-center
                  text-white
                  font-bold
                  py-4
                  rounded-2xl
                "
              >
                Ver en el mapa
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
