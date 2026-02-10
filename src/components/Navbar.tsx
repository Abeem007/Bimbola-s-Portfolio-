import { useState } from "react";
import Logo from '/images/icon-hamburger.svg'
import Close from "/images/icon-close.svg"
const Navbar = () => {
  const [open, setOpen] = useState(false);
const handleMobileNavClick = () => {
  setOpen(false);
};

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md flex py-6 px-5 md:px-10 lg:px-20 md:py-7 justify-between items-center">
      <div>
        <h2 className="text-xl font-bold">
          Bimbo{" "}
          <span className="bg-clip-text  text-transparent bg-linear-to-r from-cyan-400 via-cyan-500 to-cyan-600">
            Okunade
          </span>
        </h2>
      </div>
      <nav className="hidden md:block font-bold">
        <ul className="flex items-center md:space-x-8 lg:space-x-9 cursor-pointer md:text-xs lg:text-lg ">
          <li>
            <a
              className="relative transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-cyan-400 hover:via-cyan-500 hover:to-cyan-600 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]"
              href="#hero"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="relative transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-cyan-400 hover:via-cyan-500 hover:to-cyan-600 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]"
              href="#about"
            >
              About me
            </a>
          </li>
          <li>
            <a
              className="relative transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-cyan-400 hover:via-cyan-500 hover:to-cyan-600 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]"
              href="#skills"
            >
              My Skills
            </a>
          </li>
          <li>
            {" "}
            <a
              className="relative transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-cyan-400 hover:via-cyan-500 hover:to-cyan-600 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]"
              href="#portfolio"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              className="relative transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-cyan-400 hover:via-cyan-500 hover:to-cyan-600 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]"
              href="#contact"
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>
      <div className="block md:hidden">
        <button onClick={() => setOpen(true)}>
          <img src={Logo} alt="hamburger-menu-button" />
        </button>

        {open && (
          <div
            className=" fixed  md:hidden transition-transform duration-300  bg-black/50  backdrop-blur-md 
  translate-x-0 inset-0 h-full max-w-full flex items-start justify-end pl-10 pt-20"
          >
            <button
              aria-label="close-button"
              onClick={() => setOpen(false)}
              className="absolute top-6 right-5 z-50 hover:bg-white hover:translate-x-1.5 "
            >
              <img src={Close} alt="close-button" />
            </button>
            <nav >
              <ul className="h-60 bg-black/70 cursor-pointer w-51 pl-4  md:text-xs lg:text-lg flex flex-col items-start  justify-start space-y-5 md:space-x-8 lg:space-x-9 ">
                <li>
                  <a
                    className="relative transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-cyan-400 hover:via-cyan-500 hover:to-cyan-600 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]"
                    href="#hero"
                    onClick={handleMobileNavClick}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="relative transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-cyan-400 hover:via-cyan-500 hover:to-cyan-600 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]"
                    href="#about"
                    onClick={handleMobileNavClick}
                  >
                    About me
                  </a>
                </li>
                <li>
                  <a
                    className="relative transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-cyan-400 hover:via-cyan-500 hover:to-cyan-600 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]"
                    href="#skills"
                    onClick={handleMobileNavClick}
                  >
                    My Skills
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    className="relative transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-cyan-400 hover:via-cyan-500 hover:to-cyan-600 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]"
                    href="#portfolio"
                    onClick={handleMobileNavClick}
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    className="relative transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-cyan-400 hover:via-cyan-500 hover:to-cyan-600 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9)] "
                    href="#contact"
                    onClick={handleMobileNavClick}
                  >
                    Contact me
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
