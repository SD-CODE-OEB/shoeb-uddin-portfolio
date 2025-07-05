import React from "react";
import { motion } from "motion/react";
const Card = ({
  text,
  style,
  image,
  containerRef,
}: {
  text?: string;
  image?: string;
  style?: React.CSSProperties;
  containerRef?: React.RefObject<HTMLDivElement>;
}) => {
  return image && !text ? (
    <motion.img
      drag
      dragConstraints={containerRef}
      whileHover={{ scale: 1.05 }}
      dragElastic={1}
      src={image}
      alt={""}
      style={style}
      className="rounded-full absolute cursor-grab"
    />
  ) : (
    <motion.div
      className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-gradient-to-br from-navy via-navy-dark shadow-sm to-surface w-[12rem] cursor-grab"
      style={style}
      drag
      dragConstraints={containerRef}
      whileHover={{ scale: 1.05 }}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default Card;
