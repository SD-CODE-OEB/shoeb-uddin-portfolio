import React from "react";
import Image from "next/image";
import { Globe } from "./ui/Globe";
import { motion } from "motion/react";
import Frameworks from "./Frameworks";
import CopyEmail from "./ui/CopyEmail";
import DraggableContainer from "./DraggableContainer";

const AboutSection = () => {
  return (
    <motion.div
      className="grid grid-cols-1 gap-8 lg:gap-4 lg:grid-cols-6 auto-rows-[14rem] lg:px-48 sm:px-32 md:auto-rows-[18rem] md:min-w-2xl h-full w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Main intro card */}
      <motion.div
        className="flex items-end bg-gradient-radial rounded-lg grid-1 lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-5 overflow-hidden relative cursor-pointer group h-max md:h-full w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
          transition: { duration: 0.3, type: "spring", stiffness: 300 },
        }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="absolute scale-[1.75] -right-[5rem] -top-[1rem] bottom-0 md:scale-[3] md:left-1/4 lg:bottom-[15rem] md:inset-y-10 lg:scale-[2.5]"
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
        >
          <Image
            src="/coding-pov.png"
            alt="coding"
            width={600}
            priority
            height={600}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          className="z-10 flex justify-center items-start gap-4 flex-col p-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.p
            className="text-shadow-sm text-shadow-surface"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Hi, I&apos;m Shoeb Uddin
          </motion.p>
          <motion.p
            className="text-shadow-sm text-gray-300"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            I am a Frontend developer with a passion for building beautiful and
            functional web applications. I can also structure backend APIs to
            help you with a seamless full-stack development experience.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Draggable container card */}
      <motion.div
        className="grid-2 min-h-[200px] sm:min-h-auto lg:row-start-3 lg:col-start-1 lg:col-end-4 bg-gradient-radial rounded-lg overflow-hidden group cursor-pointer h-full w-full "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 15px 30px rgba(99, 102, 241, 0.2)",
          transition: { duration: 0.3, type: "spring", stiffness: 300 },
        }}
      >
        <DraggableContainer />
      </motion.div>

      {/* Time zone card */}
      <motion.div
        className="grid-3 lg:row-start-1 lg:col-start-5 lg:col-end-12 bg-gradient-to-b bg-gradient-radial relative overflow-hidden rounded-lg cursor-pointer group h-full "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.15,
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
          transition: { duration: 0.3, type: "spring", stiffness: 300 },
        }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="z-10 w-3/4 p-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.h2
            className="text-xl text-gray-200 mt-2 font-bold"
            whileHover={{ scale: 1.05, color: "#ffffff" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Time Zone
          </motion.h2>
          <motion.p
            className="text-gray-400 w-full my-1"
            whileHover={{ scale: 1.02, color: "#d1d5db" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            I&apos;m based in <strong>Hyderabad</strong> and Open to work{" "}
            <strong>remotely </strong>worldwide.
          </motion.p>
          <motion.figure
            className="absolute left-12 top-1/3"
            whileHover={{ scale: 1.02, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Globe />
          </motion.figure>
        </motion.div>
      </motion.div>

      {/* Contact card */}
      <motion.div
        className="grid-4 lg:row-start-2 lg:col-start-5 lg:col-end-12 bg-gradient-radial overflow-hidden rounded-lg cursor-pointer group "
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6,182,212,0.2) 0.8px, transparent 0)`,
          backgroundSize: "8px 8px",
          backgroundRepeat: "repeat",
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.25,
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 15px 30px rgba(218, 112, 214, 0.2)",
          transition: { duration: 0.3, type: "spring", stiffness: 300 },
        }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="flex flex-col items-center justify-center gap-4 size-full"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div
            className="text-center mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Do you want to work with me?
          </motion.div>
          <CopyEmail />
        </motion.div>
      </motion.div>

      {/* Tech stack card */}
      <motion.div
        className="grid-5 lg:row-start-3 lg:col-start-4 lg:col-end-12 bg-gradient-radial rounded-lg relative overflow-hidden cursor-pointer group h-max md:h-full z-50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
          transition: { duration: 0.3, type: "spring", stiffness: 300 },
        }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="z-10 w-1/2 p-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.h2
            className="text-xl text-gray-200 mt-2 font-bold"
            whileHover={{ scale: 1.05, color: "#ffffff" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Tech Stack
          </motion.h2>
          <motion.p
            className="text-gray-400 w-full my-2"
            whileHover={{ scale: 1.02, color: "#d1d5db" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            I specialize in variety of{" "}
            <strong>languages, frameworks and tools</strong> that allow me to
            build <strong>robust & scalable</strong> applications.
          </motion.p>
        </motion.div>
        <motion.div
          className="absolute inset-y-0 md:-inset-y-0 w-full h-full start-1/2 md:scale-125 z-10"
          whileHover={{ scale: 1.1, x: 10 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
        >
          <Frameworks />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;
