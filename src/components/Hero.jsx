import { useEffect, useState } from "react";
import burger from "../images/burger.png";
import burger1 from "../images/burger1.png";
import burger2 from "../images/burger2.png";
import burger3 from "../images/burger3.png";
import burger4 from "../images/burger4.png";
import logo from "../images/logo.png";

const carouselImages = [burger, burger1, burger2, burger3, burger4];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-screen overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 60% 50%, #00308F 0%, #001F5C 40%, #001449 100%)",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <span
        className=" absolute right-[-40px] top-1/2 -translate-y-1/2 text-white/[0.04] font-black leading-none whitespace-nowrap"
        style={{
          fontSize: "clamp(120px, 20vw, 260px)",
          letterSpacing: "-10px",
        }}
      >
        BURGER
      </span>

      <div
        className="
          relative
          z-10
          w-full
          h-screen
          max-w-[1600px]
          mx-auto
          grid
          md:grid-cols-2
          items-center
          px-6
          md:px-20
        "
      >

        <div
          className="
            flex
            flex-col
            justify-start
            items-start
            gap-5
            -mt-10
            md:-mt-16
          "
        >

          <div className="flex items-center gap-4">

            <img
              src={logo}
              alt="logo"
              className="
                w-28
                h-28
                md:w-32
                md:h-32
                object-contain
                drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]
              "
            />

          </div>

          <h1
            className="
              text-white
              font-black
              leading-[0.9]
            "
            style={{
              fontSize: "clamp(52px, 6vw, 92px)",
            }}
          >
            VINIMOS
            <br />
            A HACERTE
            <br />
            <span className="text-[#ffbe00] font-allan">
            MUY FELIZ
            </span>
          </h1>

        </div>

        <div
          className="
            relative
            flex
            justify-center
            items-center
            h-[500px]
            md:h-[700px]
          "
        >

          <div
            className="
              absolute
              w-[450px]
              h-[450px]
              md:w-[700px]
              md:h-[700px]
              rounded-full
              blur-3xl
              opacity-80
            "
            style={{
              background:
                "radial-gradient(circle, rgba(0,180,255,0.35) 0%, rgba(0,80,255,0.18) 40%, transparent 75%)",
            }}
          ></div>

          <img
            src={carouselImages[activeIndex]}
            alt="burger"
            className="
              relative
              z-10
              w-[420px]
              md:w-[760px]
              object-contain
              drop-shadow-[0_50px_120px_rgba(0,0,0,0.95)]
            "
            style={{
              animation: "float 4s ease-in-out infinite",
            }}
          />

        </div>

      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-18px);
          }
        }
      `}</style>
    </section>
  );
}