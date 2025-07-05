import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

import { OrbitingCircles } from "./ui/OrbitingCircles";

const Frameworks = () => {
  const skills = {
    programmingLanguages: [
      "typescript",
      "javascript",
      "java",
      "python",
      "mysql",
    ],
    frameworks: ["react", "next", "nodejs", "tailwind", "boostrap", "mongodb"],
    tools: [
      "git",
      "docker",
      "github",
      "vscode",
      "yarn",
      "npm",
      "overleaf",
      "windows",
      "vercel",
    ],
    databases: ["mysql", "mongodb"],
  };
  return (
    <div className="relative flex h-[18rem] w-full items-center justify-center overflow-hidden z-[200]">
      <OrbitingCircles iconSize={80} radius={80} reverse speed={2}>
        {" "}
        {skills.programmingLanguages.map((lang) => (
          <Icon
            key={lang}
            src={`/pr-logos/${lang}.svg`}
            height={30}
            width={30}
          />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={120} radius={120} speed={1.5}>
        {skills.frameworks.map((framework) => (
          <Icon
            key={framework}
            src={`/pr-logos/${framework}.svg`}
            height={40}
            width={40}
          />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={80} radius={160} reverse speed={1}>
        {skills.tools.map((tool) => (
          <Icon key={tool} src={`/tools/${tool}.svg`} height={30} width={30} />
        ))}
      </OrbitingCircles>
    </div>
  );
};

export const Icon = ({
  src,
  height,
  width,
}: {
  src: string;
  height: number;
  width: number;
}) => {
  return (
    <motion.div
      className="flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
    >
      <Image src={src} alt="img" className="" width={width} height={height} />
    </motion.div>
  );
};

export default Frameworks;
