"use client";
import React from "react";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Lights";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import WorkExpSection from "@/components/WorkExpSection";
import ContactSection from "@/components/ContactSection";
import { BackgroundBeamsWithCollision } from "@/components/ui/Beams";
import { Particles } from "@/components/ui/Particles";

const Page = () => (
  <div className="flex flex-col items-center justify-evenly h-full w-full">
    <section
      id="home"
      className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden transition-transform  transform-3d perspective-midrange"
    >
      <BackgroundBeamsWithCollision>
        <HeroSection />
      </BackgroundBeamsWithCollision>
    </section>
    <section
      id="about"
      className="min-h-screen h-full w-full p-6 bg-gradient-to-b from-navy-dark/80 via-midnight to-surface grid place-items-center relative"
    >
      <h2 className="text-2xl font-bold my-4 mb-8">About me</h2>
      <Particles className="h-full absolute top-0 left-0 z-[-1] w-full" />
      <AboutSection />
    </section>
    <section
      id="projects"
      className="min-h-screen w-full bg-gradient-to-b from-navy-dark/80 via-midnight to-surface relative"
    >
      <Particles className="h-full absolute top-0 left-0 z-[-1] w-full" />
      <ProjectSection />
    </section>
    <section
      id="workexperience"
      className="min-h-screen w-full bg-gradient-to-b from-navy-dark/40 via-midnight to-surface/60 "
    >
      <WorkExpSection />
    </section>
    <section
      id="contact"
      className="min-h-screen p-4 sm:p-0 w-full flex justify-center items-center bg-gradient-to-b from-navy-dark/40 via-midnight to-surface/60 relative overflow-hidden border-t border-gold/20"
    >
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.2}
        amplitude={0.8}
        speed={0.8}
      />
      <ContactSection />
    </section>

    <Footer />
  </div>
);

export default Page;
