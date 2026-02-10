import { motion } from "framer-motion";
import { type Project } from "../types/project";
import { ExternalLink, Github } from "lucide-react";

interface MacbookCardProps {
  project: Project;
}

const MacbookCard = ({ project }: MacbookCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="w-full h-full bg-linear-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-300"
    >
      
      <div className="bg-linear-to-r from-gray-800 to-gray-900 px-4 py-3 flex items-center justify-between border-b border-gray-700">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="text-xs text-gray-400 font-mono">{project.title}</div>
      </div>

     
      <div className="p-4 bg-linear-to-b from-gray-900 to-black">
        <div className="relative rounded-lg overflow-hidden border border-gray-800 bg-black">
        
          <div className="aspect-video overflow-hidden bg-linear-to-br from-gray-900 to-black">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
          </div>

          
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/90 to-transparent">
            <h3 className="text-xl font-bold text-white mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-gray-300 line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>

        
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-linear-to-r from-cyan-900/30 to-blue-900/30 text-cyan-300 rounded-full text-xs border border-cyan-700/30"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
      </div>

     
      <div className="bg-linear-to-r from-gray-800/50 to-gray-900/50 px-4 py-3 flex items-center justify-between border-t border-gray-700">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-gray-800 to-gray-900 rounded-lg hover:from-cyan-900/30 hover:to-blue-900/30 transition-all group"
        >
          <Github size={18} className="text-gray-300 group-hover:text-white" />
          <span className="text-sm text-gray-300 group-hover:text-white">
            Code
          </span>
        </a>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-cyan-700/20 to-blue-700/20 rounded-lg hover:from-cyan-600/40 hover:to-blue-600/40 transition-all group"
          >
            <ExternalLink
              size={18}
              className="text-cyan-300 group-hover:text-cyan-200"
            />
            <span className="text-sm text-cyan-300 group-hover:text-cyan-200">
              Live Demo
            </span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default MacbookCard;
