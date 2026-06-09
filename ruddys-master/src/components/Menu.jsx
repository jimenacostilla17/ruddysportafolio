import burger1 from "../images/burger1.png";
import burger2 from "../images/burger2.png";
import burger3 from "../images/burger3.png";
import burger4 from "../images/burger4.png";

const burgers = [
  {
    id: 1,
    name: "burger1",
    desc: "ingredientes",
    price: "$100",
    image: burger1,
  },
  {
    id: 2,
    name: "burger2",
    desc: "ingredientes",
    price: "150",
    image: burger2,
  },
  {
    id: 3,
    name: "burger3",
    desc: "ingredientes",
    price: "$140",
    image: burger3,
  },
  {
    id: 4,
    name: "burger4",
    desc: "ingredientes",
    price: "$110",
    image: burger4,
  },
];

function Menu() {
  return (
<section
  id="menu"
  className="relative overflow-hidden bg-gradient-to-b from-[#001B66] to-[#000814] py-24 px-6"
>
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[140px] font-black text-white opacity-[0.03] select-none">
        BURGERS
      </h1>

      <div className="relative z-10 text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-black uppercase text-white">
          Nuestras{" "}
          <span className="text-yellow-400 font-allan">
            Hamburguesas
          </span>
        </h2>
      </div>


  <div className="relative z-10 flex flex-wrap justify-center gap-5 mb-20">

<button className="group relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md text-white px-10 py-4 rounded-full font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black hover:border-white">
    <span className="relative z-10">
      Smash
    </span>

    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition" />

  </button>

  <button className="group relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md text-white px-10 py-4 rounded-full font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black hover:border-white">

    <span className="relative z-10">
      Combos
    </span>

    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />

  </button>

  <button className="group relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md text-white px-10 py-4 rounded-full font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black hover:border-white">

    <span className="relative z-10">
      Bebidas
    </span>

    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />

  </button>

</div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">

        {burgers.map((burger) => (

          <div
            key={burger.id}
            className="group relative bg-[#0B2A7A]/80 backdrop-blur-sm border border-white/10 rounded-[40px] px-6 pt-8 pb-8 overflow-hidden hover:-translate-y-4 hover:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(0,119,255,0.15)]"
          >

            <div className="flex justify-center mb-2 relative z-10">
              <img
                src={burger.image}
                alt={burger.name}
                className="w-[260px] h-[220px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="text-center relative z-10">

              <h3 className="text-4xl leading-none font-black text-white mb-4 uppercase">
                {burger.name}
              </h3>

              <p className="text-white/70 text-sm leading-relaxed mb-5">
                {burger.desc}
              </p>

              <p className="text-5xl font-black text-yellow-400 mb-6">
                {burger.price}
              </p>

              <button className="w-full bg-yellow-400 text-black py-4 rounded-2xl font-black uppercase tracking-wide hover:bg-yellow-300 transition">
                Pedir ahora
              </button>

            </div>
          </div>

        ))}

      </div>
    </section>
  );
}

export default Menu;