const navItems = [
  { label: "MENÚ", href: "#menu" },
  { label: "SUCURSALES", href: "#locales" },
  { label: "QUIENES SOMOS", href: "#quienes-somos" },
  { label: "CONTACTO", href: "#contacto" },
];

export default function Navbar() {
  return (
    <div className="
    fixed bottom-4 left-1/2 -translate-x-1/2
    z-50 w-full flex px-4

   md:absolute md:bottom-5 md:left-1/2
   md:-translate-x-1/2
   md:px-20">

      <nav className="flex gap-3 md:gap-4 flex-nowrap">

        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="
  flex items-center justify-center text-center
  font-bold
  text-[10px] md:text-[13px]
  leading-tight
  rounded-full
  w-20 h-20 md:w-32 md:h-32
  border border-white/15
  bg-white/5
  text-white
  backdrop-blur-md
  transition-all duration-300
  hover:bg-[#ffbe00]
  hover:text-black
  hover:border-[#ffbe00]
  hover:scale-110
            "
          >
            <span className="px-2">
              {item.label}
            </span>
          </a>
        ))}

      </nav>

    </div>
  );
}