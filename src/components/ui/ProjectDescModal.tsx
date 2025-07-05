import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Project } from "@/data";
import { ExternalLink, X } from "lucide-react";

const ProjectDescModal = ({
  project,
  isOpen,
  setIsOpen,
}: {
  project: Project;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
          mass: 1,
          duration: 0.5,
        }}
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-tl from-midnight via-navy to-navy-dark border-gold-light/40"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-gold/10 hover:bg-gold/80 transition-colors cursor-pointer"
        >
          <X className="" size={24} />
        </button>
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={800}
          height={800}
          className="w-full rounded-t-2xl"
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold">{project.title}</h5>
          <p className="text-sm text-gold/10 text-shadow-2xs text-shadow-gold-light">
            {project.desc}
          </p>
          <ul className="mt-2 space-y-2">
            {project.points.map((point, index) => (
              <li key={index} className="text-slate-300">
                - {point}
              </li>
            ))}
          </ul>
          <div className="mt-2 flex items-center justify-between flex-wrap">
            <div className="gap-4 flex items-center flex-wrap">
              {project?.technologies?.map((tag, index) => (
                <Image
                  key={index}
                  src={`/pr-logos/${tag.toLowerCase()}.svg`}
                  alt={tag}
                  width={100}
                  height={100}
                  className="inline-block w-12 h-12 object-bottom"
                />
              ))}
            </div>
            <a href={project?.href} target="_blank" rel="noopener noreferrer">
              View Project
              <span>
                <ExternalLink className="inline ml-2" size={16} />
              </span>
            </a>
          </div>
        </div>
        <div></div>
      </motion.div>
    </div>
  );
};

export default ProjectDescModal;
