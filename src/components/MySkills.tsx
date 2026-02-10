const MySkills = () => {
  return (
    <div className="px-5 pb-5 md:px-10  lg:px-20 lg:py-20 pt-17" id="skills">
      <h1
        className="
      text-center my-10 md:my-15 lg:my-20 text-xl md:text-3xl uppercase font-extrabold"
      >
        My Skills
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-6 place-items-center gap-4 space-y-2 md:gap-0 lg:gap-3 lg:space-y-0  justify-center items-center  lg:justify-between">
        
          <span className="flex items-center justify-center w-20 h-20  lg:w-30 lg:h-30 rounded-[50%] bg-linear-to-r  from-cyan-400 via-cyan-500 to-cyan-600 shadow-[0_0_20px_rgba(34,211,238,0.4)] text-black text-xs lg:text-sm md:font-semibold">
            HTML
          </span>
          <span className="flex items-center justify-center w-20 h-20 lg:w-30 lg:h-30 rounded-[50%] bg-linear-to-r  from-cyan-400 via-cyan-500 to-cyan-600  shadow-[0_0_20px_rgba(34,211,238,0.4)]  text-black text-xs lg:text-sm md:font-semibold">
            CSS
          </span>
          <span className="flex items-center justify-center w-20 h-20  lg:w-30 lg:h-30 rounded-[50%] bg-linear-to-r  from-cyan-400 via-cyan-500 to-cyan-600 shadow-[0_0_20px_rgba(34,211,238,0.4)] text-black text-xs lg:text-sm md:font-semibold">
            JAVASCRIPT
          </span>
          <span className="flex items-center justify-center w-20 h-20  lg:w-30 lg:h-30 rounded-[50%] bg-linear-to-r  from-cyan-400 via-cyan-500 to-cyan-600 shadow-[0_0_20px_rgba(34,211,238,0.4)] text-black text-xs lg:text-sm md:font-semibold">
            REACT
          </span>
          <span className=" flex items-center justify-center w-20 h-20  lg:w-30 lg:h-30 rounded-[50%] bg-linear-to-r  from-cyan-400 via-cyan-500 to-cyan-600 shadow-[0_0_20px_rgba(34,211,238,0.4)] text-black text-xs lg:text-sm md:font-semibold">
            NEXTJS
          </span>
          <span className=" flex items-center justify-center w-20 h-20  lg:w-30 lg:h-30 rounded-[50%] bg-linear-to-r  from-cyan-400 via-cyan-500 to-cyan-600 shadow-[0_0_20px_rgba(34,211,238,0.4)] text-black text-xs lg:text-sm md:font-semibold">
            TYPESCRIPT
          </span>
        

      </div>
    </div>
  );
};

export default MySkills;
