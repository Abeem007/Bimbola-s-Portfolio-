import { useState, useEffect, useCallback } from "react";
import { motion, type PanInfo } from "framer-motion";
import { projects } from "../data/projects";
import MacbookCard from "./MacbookCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsPerView, setProjectsPerView] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const updateProjectsPerView = () => {
      if (window.innerWidth < 640) {
        setProjectsPerView(1);
      } else if (window.innerWidth < 1024) {
        setProjectsPerView(2);
      } else {
        setProjectsPerView(3);
      }
    };

    updateProjectsPerView();
    window.addEventListener("resize", updateProjectsPerView);
    return () => window.removeEventListener("resize", updateProjectsPerView);
  }, []);

  const totalPages = Math.ceil(projects.length / projectsPerView);

  const startIndex = currentIndex * projectsPerView;
  const endIndex = startIndex + projectsPerView;
  const visibleProjects = projects.slice(startIndex, endIndex);

  const handleNext = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % totalPages);

    setTimeout(() => setIsAnimating(false), 300);
  }, [totalPages, isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);

    setTimeout(() => setIsAnimating(false), 300);
  }, [totalPages, isAnimating]);

  const handleDragEnd = useCallback(
    (_: any, info: PanInfo) => {
      if (isAnimating) return;

      const swipeThreshold = 50;
      const velocityThreshold = 500;

      if (
        info.offset.x < -swipeThreshold ||
        info.velocity.x < -velocityThreshold
      ) {
        handleNext();
      } else if (
        info.offset.x > swipeThreshold ||
        info.velocity.x > velocityThreshold
      ) {
        handlePrev();
      }
    },
    [handleNext, handlePrev, isAnimating],
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20  md:pt-19 md:pb-3"
      id="portfolio"
    >
      <div className="flex flex-col items-center">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide mb-4 sm:mb-0">
            Featured Projects
          </h2>

          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              disabled={isAnimating}
              className="p-2 sm:p-3 rounded-full bg-linear-to-r from-cyan-500/20 to-blue-500/20 text-white hover:from-cyan-500/30 hover:to-blue-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              aria-label="Previous projects"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>

            <div className="text-sm sm:text-base text-gray-300">
              <span className="text-cyan-400">{currentIndex + 1}</span>
              <span className="mx-2">/</span>
              <span>{totalPages}</span>
            </div>

            <button
              onClick={handleNext}
              disabled={isAnimating}
              className="p-2 sm:p-3 rounded-full bg-linear-to-r from-cyan-500/20 to-blue-500/20 text-white hover:from-cyan-500/30 hover:to-blue-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              aria-label="Next projects"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        <motion.div
          className="w-full relative"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
        >
          <div className="overflow-hidden">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {visibleProjects.map((project) => (
                <div key={`${project.id}-${currentIndex}`} className="w-full">
                  <MacbookCard project={project} />
                </div>
              ))}

              {Array.from({
                length: projectsPerView - visibleProjects.length,
              }).map((_, idx) => (
                <div
                  key={`empty-${idx}`}
                  className="w-full opacity-0 pointer-events-none"
                >
                  <div className="h-100" />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <div className="flex gap-2 sm:gap-3 mt-8 md:mt-12">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(idx);
                  setTimeout(() => setIsAnimating(false), 300);
                }
              }}
              className={`transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 sm:w-10 h-2 sm:h-3 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg"
                  : "w-2 sm:w-3 h-2 sm:h-3 bg-gray-600 hover:bg-gray-500 rounded-full"
              }`}
              aria-label={`Go to page ${idx + 1}`}
              disabled={isAnimating}
            />
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
            Technologies Used
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {Array.from(
              new Set(visibleProjects.flatMap((p) => p.techStack)),
            ).map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 sm:px-4 sm:py-2 bg-linear-to-r from-cyan-500/10 to-blue-500/10 text-cyan-300 rounded-full text-sm sm:text-base border border-cyan-500/20 hover:border-cyan-500/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center text-gray-400 text-sm md:hidden">
          <div className="flex items-center justify-center gap-2">
            <ChevronLeft size={16} className="text-cyan-400" />
            <span>Swipe or use buttons to navigate</span>
            <ChevronRight size={16} className="text-cyan-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
