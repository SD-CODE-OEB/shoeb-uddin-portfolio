import { Project as PrType } from "@/data";
import { ChevronRightSquare } from "lucide-react";
import React from "react";
import SpotlightCard from "./ui/Spotlight";
import ProjectDescModal from "./ui/ProjectDescModal";

const ProjectCard = ({
  project,
  setPreviewImg,
}: {
  project: PrType;
  setPreviewImg: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setPreviewImg(undefined);
    }
  }, [isOpen, setPreviewImg]);

  return (
    <div
      onMouseEnter={() => setPreviewImg(project.thumbnail)}
      onMouseLeave={() => setPreviewImg(undefined)}
      className="w-full"
    >
      <SpotlightCard
        className="flex-wrap items-center justify-between py-8 my-4 sm:flex sm:my-0 bg-transparent border-none px-4 w-full rounded-none"
        spotlightColor="rgba(255, 255, 255, 0.1)"
      >
        <div className="flex flex-col gap-4 w-full sm:w-2/3">
          <h2 className="text-xl font-bold">{project.title}</h2>
          <div className="flex gap-4 flex-wrap md:flex-nowrap">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-gold text-shadow-navy-dark text-shadow-2xs rounded-full text-xs md:text-sm bg-gradient-to-tr transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <button
          className="text-gold-light px-4 py-2 rounded hover:text-amber-400 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          Read More
          <ChevronRightSquare className="inline ml-2" />
        </button>
      </SpotlightCard>
      {isOpen && (
        <ProjectDescModal
          project={project}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}

      <div className="w-full h-px bg-gradient-to-r from-midnight via-navy to-gold/40 mx-auto rounded-full" />
    </div>
  );
};

export default ProjectCard;
