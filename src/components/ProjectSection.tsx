import React from "react";
import { projects } from "@/data";
import { motion, useMotionValue, useSpring } from "motion/react";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (event: React.MouseEvent) => {
    x.set(event.clientX + 20);
    y.set(event.clientY + 20);
  };
  const [previewImg, setPreviewImg] = React.useState<string | undefined>(
    undefined
  );
  return (
    <div className="relative p-4" onMouseMove={handleMouseMove}>
      <h2 className="text-3xl font-bold text-center mt-52 sm:mt-32 md:mt-0 md:px-64 sm:px-32 text-gray-200">
        Projects
      </h2>
      {/* <div className="lg:w-3/4 w-1/4 h-px bg-gold/20 mx-auto my-4 rounded-full" /> */}
      <div className="w-full max-auto lg:px-48 md:px-32 mt-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            setPreviewImg={setPreviewImg}
          />
        ))}
        {previewImg && (
          <motion.img
            className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
            style={{ x: springX, y: springY }}
            src={previewImg}
          />
        )}
        {/* <ProjectDescModal /> */}
      </div>
    </div>
  );
};

export default ProjectSection;
