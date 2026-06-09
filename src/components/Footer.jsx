import logo from "../images/logo.png";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function SeccionPedir() {
  return (
    <>
   <section 
   id='contacto'
   className="bg-[radial-gradient(circle_at_top,_#1e3a8a_0%,_#172554_45%,_#0f172a_100%)] p-24 flex items-center justify-center px-4 relative overflow-hidden">
  
  <div className="max-w-lg text-center flex flex-col items-center">
    
    <h2 className="text-white text-2xl md:text-3xl font-bold tracking-wide">
      ¿Estás listo para
    </h2>

    <h1 className="text-[#FFBE00] text-5xl md:text-7xl font-black font-allan mt-2">
      ser feliz?
    </h1>

    <button 
      className="
        mt-6 bg-[#f07026] text-white 
        text-base md:text-lg font-semibold 
        py-2 px-6 rounded-md
      "
    >
      Pedir ahora
    </button>

  </div>

</section>

      <footer className="bg-[#FFBE00] text-blue-950 px-6 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3 text-2xl">
              <img 
                src={logo} 
                alt="Ruddys logo" 
                className="w-48 h-48 object-contain"
              />
            </div>

            <p className="max-w-md font-popins text-blue-950 text-xl">
              Somos <span className="font-semibold">Ruddy's S.A.S.</span>, 
              la experiencia digital de tu hamburguesería favorita. Más que un restaurante, 
              una marca que crece con tecnología propia para hacerte feliz, estés donde estés.
            </p>
            <div className="flex gap-5 mt-6 text-3xl">
  
 <div className="flex gap-5 mt-6 text-3xl items-center">

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:scale-110 transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:scale-110 transition duration-300"
              >
                <FaTiktok />
              </a>

              <a
                href="https://wa.me/5493810000000"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:scale-110 transition duration-300"
              >
                <FaWhatsapp />
              </a>

            </div>
</div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-2xl font-semibold mb-3">Secciones</h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Nuestras hamburguesas</li>
              <li className="hover:text-white cursor-pointer">¿Quiénes somos?</li>
              <li className="hover:text-white cursor-pointer">Nuestras sucursales</li>
            </ul>
          </div>

        </div>

        <div className="text-center text-sm mt-10 opacity-70">
          © 2025 Ruddy's. Todos los derechos reservados.
        </div>
      </footer>
    </>
  );
}