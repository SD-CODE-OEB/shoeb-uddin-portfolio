"use client";
import React from "react";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Lights";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import WorkExpSection from "@/components/WorkExpSection";
import ContactSection from "@/components/ContactSection";
import { Particles } from "@/components/ui/Particles";

const Page = () => (
  <main className="flex flex-col items-center justify-evenly h-full w-full">
    <section
      id="home"
      className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden transition-transform  transform-3d perspective-midrange"
      aria-label="Hero section - Shoeb Uddin Frontend Developer"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6,182,212,0.2) 1px, transparent 0)`,
        backgroundSize: "10px 10px",
        backgroundRepeat: "repeat",
        backgroundColor: "var(--secondary)",
        color: "var(--text-color)",
      }}
    >
      <HeroSection />
    </section>

    <section
      id="about"
      className="min-h-screen h-full w-full p-6 bg-gradient-to-b from-navy-dark/80 via-midnight to-surface grid place-items-center relative"
      aria-label="About Shoeb Uddin - Frontend Developer specializing in React, Next.js, and TypeScript"
    >
      <header>
        <h1 className="text-2xl font-bold my-4 mb-8">About me</h1>
      </header>
      <Particles className="h-full absolute top-0 left-0 z-[-1] w-full" />
      <AboutSection />
    </section>

    <section
      id="projects"
      className="min-h-screen w-full bg-gradient-to-b from-navy-dark/80 via-midnight to-surface relative"
      aria-label="Frontend development projects - SaaS applications, 3D games, and business directory apps"
    >
      <Particles className="h-full absolute top-0 left-0 z-[-1] w-full" />
      <ProjectSection />
    </section>

    <section
      id="workexperience"
      className="min-h-screen w-full bg-gradient-to-b from-navy-dark/40 via-midnight to-surface/60"
      aria-label="Professional work experience in frontend development"
    >
      <WorkExpSection />
    </section>

    <section
      id="contact"
      className="min-h-screen p-4 sm:p-0 w-full flex justify-center items-center bg-gradient-to-b from-navy-dark/40 via-midnight to-surface/60 relative overflow-hidden border-t border-gold/20"
      aria-label="Contact Shoeb Uddin - Frontend Developer for hire"
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
  </main>
);

export default Page;
