import Navbar from "./Navbar";
import heroBg from "/images/HeroBg2.webp";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-30 "
      style={{ backgroundImage: `url(${heroBg})` }} id="hero"
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10">
        <Navbar />
        <div className="flex flex-col items-center justify-center m-20 lg:m-40 ">
          <div
            className="backdrop-blur-md bg-white/5 border border-cyan-400/60 rounded-2xl px-5 py-6 md:px-10 md:py-12 text-center shadow-[0_0_40px_rgba(34,211,238,0.25)]">
          
            <h1 className=" font-bold mb-4 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)] text-center text-xl md:text-4xl lg:text-5xl">
              Hello, I am{" "}
              <span
                className="
                  text-transparent bg-clip-text
                  bg-linear-to-r from-cyan-400 via-cyan-500 to-cyan-600
                  drop-shadow-[0_0_14px_rgba(34,211,238,0.9)]
                "
              >
                Bimbo
              </span>{" "}
            </h1>
            <div className="text-center  text-gray-200 space-y-1 lg:space-y-3 ">
              <h2 className="tracking-wide text-sm text-nowrap md:text-2xl lg:text-3xl ">A Frontend Developer</h2>
              <h3 className="text-cyan-400 text-sm md:text-xl lg:text-2xl ">Ready to Work. Globally.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
