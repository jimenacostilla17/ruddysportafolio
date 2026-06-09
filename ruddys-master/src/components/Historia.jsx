import foto1 from "../images/foto1.jpg";
import foto2 from "../images/foto2.jpeg";
import foto3 from "../images/foto3.jpeg";
import foto4 from "../images/foto4.jpeg";
import foto5 from "../images/foto5.jpeg";
import foto6 from "../images/foto6.jpeg";

export default function Historia() {
  return (
    <section
      id="quienes-somos"
      className="bg-[#FFBE00] min-h-screen overflow-hidden py-10"
    >
      <h2 className="text-5xl md:text-7xl font-semibold uppercase text-white text-center py-8">
        NUESTRA <span className="font-allan text-blue-950">HISTORIA</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* ── GRID DE IMÁGENES ── */}
        <div className="flex gap-3 p-6 h-auto md:max-h-[520px] mx-auto w-full max-w-[580px]">

          {/* Columna izquierda: imagen grande arriba + imagen chica abajo */}
          <div className="flex flex-col gap-3 flex-1">
            <img
              src={foto2}
              alt=""
              className="w-full flex-[2] object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
              style={{ minHeight: 0 }}
            />
            <img
              src={foto6}
              alt=""
              className="w-full flex-[1] object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
              style={{ minHeight: 0 }}
            />
          </div>

          {/* Columna central: tres imágenes iguales */}
          <div className="flex flex-col gap-3 flex-1">
            <img
              src={foto1}
              alt=""
              className="w-full flex-1 object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
              style={{ minHeight: 0 }}
            />
            <img
              src={foto4}
              alt=""
              className="w-full flex-1 object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
              style={{ minHeight: 0 }}
            />
            <img
              src={foto3}
              alt=""
              className="w-full flex-1 object-cover rounded-2xl shadow-lg transition-transform"
              style={{ minHeight: 0 }}
            />
          </div>

          {/* Columna derecha: imagen chica arriba + imagen grande abajo */}
          <div className="flex flex-col gap-3 flex-1 ">
            <img
              src={foto5}
              alt=""
              className="w-full flex-[1] object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
              style={{ minHeight: 0 }}
            />
            <img
              src={foto1}
              alt=""
              className="w-full flex-[2] object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
              style={{ minHeight: 0 }}
            />
          </div>

        </div>

        {/* ── TEXTO (sin cambios) ── */}
        <div className="p-8 md:p-12 text-center">
          <p className="text-2xl md:text-4xl font-semibold leading-relaxed mb-4">
            Somos Ruddy's, una hamburguesería nacida en Tucumán con una misión clara:
          </p>

          <p className="text-3xl md:text-5xl font-bold mb-4 text-blue-950">
            Hacer hamburguesas que te hagan{" "}
            <span className="font-allan">muy feliz</span>.
          </p>

          <p className="text-2xl md:text-4xl font-semibold leading-relaxed">
            Cocinamos con productos frescos, medallones hechos en casa, y todo
            el fuego que lleva una hamburguesa de verdad.
          </p>
        </div>

      </div>
    </section>
  );
}