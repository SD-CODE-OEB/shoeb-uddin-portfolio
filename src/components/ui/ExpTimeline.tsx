"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "motion/react";

interface TimelineEntry {
  title: string;
  date?: string;
  job?: string;
  content: string[];
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent rounded-2xl font-sans md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative pb-20 bg-transparent">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start py-10 lg:pt-10 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute lg:-left-[15px] left-3 w-10 rounded-full shadow-glow-lg bg-gold-light/80 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-gradient-to-bl from-gold via-midnight to-gold p-2" />
              </div>
              <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl">
                <h3 className="text-neutral-300">{item.date}</h3>
                <h3 className="text-neutral-400">{item.title}</h3>
                <h3 className="text-neutral-500">{item.job}</h3>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="block mb-4 text-2xl font-bold text-left md:hidden text-neutral-300">
                <h3>{item.date}</h3>
                <h3>{item.job}</h3>
              </div>
              {item.content.map((txt, idx) => (
                <p
                  key={idx}
                  className="mb-3 font-normal text-neutral-400 px-4 text-balance sm:px-0"
                >
                  {txt}
                </p>
              ))}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "10px",
          }}
          className="absolute md:left-8 lg:left-1 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-gold via-gold-light to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
