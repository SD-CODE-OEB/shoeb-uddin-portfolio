import { socialLinks } from "@/data";
import React from "react";
import FuzzyText from "./ui/texts/FuzzyText";

import { Icon } from "./Frameworks";
import Link from "next/link";
import { Particles } from "./ui/Particles";

const Footer = () => {
  const [windowWidth, setWindowWidth] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getFontSize = React.useMemo(() => {
    if (windowWidth < 480) return 36; // Mobile
    if (windowWidth < 768) return 42; // Tablet
    return 52; // Desktop
  }, [windowWidth]);

  return (
    <footer className="w-full border-t border-gold pb-20 md:pb-4 relative">
      <Particles className="h-full absolute top-0 left-0 z-[-10] w-full" />
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-6 z-50">
        <div className="col-span-2 flex flex-col items-start justify-center gap-4">
          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={0.001}
            enableHover={true}
            color="#ffd077"
            fontSize={getFontSize}
            fontFamily="inherit"
          >
            © Shoeb Uddin
          </FuzzyText>
          <p className="text-gray-600 mt-2 text-xl font-semibold md:self-end pr-0 sm:pr-8 lg:pr-8 mx-auto">
            {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="col-span-2 flex flex-col md:items-start justify-between gap-4 md:justify-self-end">
          <h3 className="text-2xl  font-semibold">Find me on</h3>
          <div className="flex justify-evenly items-center gap-2 sm:gap-8 lg:gap-12">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                className=""
              >
                <Icon key={link.name} src={link.src} height={40} width={40} />
                <span className="text-xs font-semibold">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
