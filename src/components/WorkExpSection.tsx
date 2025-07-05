import React from "react";
import { Timeline } from "./ui/ExpTimeline";
import { Particles } from "./ui/Particles";

const WorkExpSection = () => {
  const data = [
    {
      title: "Frontend Engineer",
      date: "2025 - Present",
      job: "Drugboard.ai",
      content: [
        "Engineering scalable web applications for stealth mode startup using React.js, TypeScript, Storybook, Hero UI, Framer Motion, and Three.js",
        "Implemented component-driven development methodology resulting in improved UI performance and code reusability.",
        "Collaborating with designers and backend developers to implement new features.",
      ],
    },
    {
      title: "Frontend Developer Intern",
      date: "2024-2025",
      job: "Clearspot.ai",
      content: [
        "Developed interactive dashboard for Solar Panel monitoring system using React.js and JavaScript, improving user engagement by 40%",
        " Optimized application performance through code refactoring and image optimization, achieving 20% reduction in page load time",
        "Collaborated with cross-functional teams including UX designers and backend developers to create prototypes and high-fidelity mockups.",
      ],
    },
    {
      title: "Frontend Intern",
      date: "2024",
      job: "Techplement",
      content: [
        "Coordinated with multiple departments to lead a software product of Recipe Finding which was a Web-based Application.",
        "Organized meetings with the other teams to consult and populate the application on Front-end through Api’s deployed on Google cloud platform .",
        "Participated on the Web Development Taskforce to provide Vanilla JavaScript sites to internal customers with 20% reduced load time through Image and Code Optimization.",
      ],
    },
  ];
  return (
    <div className="w-full lg:px-48 md:pl-32 pl-0 md:px-0 sm:px-12 mt-8 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-200 mt-4">
        My Work Experience
      </h2>
      <Particles className="h-full absolute top-0 left-0 z-[1] w-full" />
      <Timeline data={data} />
    </div>
  );
};

export default WorkExpSection;
