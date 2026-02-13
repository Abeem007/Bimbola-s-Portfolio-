import profile from "/images/Profile5.jpg";

const AboutMe = () => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20 md:gap-25 lg:gap-32  px-5  py-20 md:px-10 lg:px-20 md:pb-20 pt-32 "
      id="about"
    >
      <div className="space-y-6 flex flex-col items-center lg:items-start mx-auto  ">
        <h2 className="uppercase text-xl md:text-4xl flex items-center justify-center  lg:justify-left font-extrabold tracking-widest mb-4">
          {" "}
          <span className="h-6 w-0.5 md:h-7 md:w-0.75 bg-linear-to-r  from-cyan-400  to-blue-500 mr-4"></span>
          ABOUT ME
        </h2>
        <div className="space-y-3 md:space-y-4 text-[15px] md:text-base lg:space-y-6 text-center lg:text-left">
          <p className="text-gray-300 leading-relaxed  ">
            Hello, I'm{" "}
            <span className="bg-clip-text  text-transparent bg-linear-to-r from-cyan-400  to-blue-500">
              Abimbola
            </span>
            , a frontend developer with an economics background, which means I
            don’t just build interfaces, I think about users, data, and
            real-world impact while writing clean, scalable code.
          </p>
          <p className="text-gray-300 leading-relaxed">
            I think in systems and details. Today, I use that mindset to build
            clean, responsive web interfaces that feel good to use and easy to
            maintain.
          </p>
        </div>

        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/Abimbola Okunade CV.pdf";
            link.download = "Abimbola_Okunade_CV.pdf";
            link.click();
          }}
          className="bg-linear-to-r  from-cyan-400  to-blue-500  hover:from-cyan-300 hover:via-cyan-300 hover:to-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] text-black text-xs mt-4 font-medium w-40 h-12 cursor-pointer transition-all duration-300 active:scale-90"
        >
          DOWNLOAD CV
        </button>
      </div>
      <div className="relative flex justify-center  lg:justify-end ">
        <div className=" w-75 h-90 md:w-90 md:h-110 lg:w-95 lg:h-122 absolute  border-4 border-cyan-500 -right-0.5 md:-top-3 md:left-40  lg:left-0 lg:-right-4"></div>
        <img
          src={profile}
          alt="Profile Picture"
          className="relative z-1 w-75 h-80 md:w-86 md:h-95 lg:w-95 lg:h-100 top-4 right-3  md:top-4 md:right-16 lg:right-8  lg:top-10  rounded  object-cover shadow-2xl "
        />
      </div>
    </div>
  );
};

export default AboutMe;
