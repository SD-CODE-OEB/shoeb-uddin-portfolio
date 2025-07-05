import {
  ArrowDownLeftFromSquareIcon,
  BadgeInfoIcon,
  BriefcaseBusiness,
  HomeIcon,
  UserCircleIcon,
  WandSparklesIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { AnimatedTooltip } from "./ui/Tooltip";
interface Link {
  name: string;
  icon: React.ReactNode;
  href: string;
}
const Navbar = () => {
  const links: Link[] = [
    {
      name: "Home",
      icon: <HomeIcon />,
      href: "#home",
    },
    {
      name: "About",
      icon: <BadgeInfoIcon />,
      href: "#about",
    },
    {
      name: "Projects",
      icon: <WandSparklesIcon />,
      href: "#projects",
    },
    {
      name: "Work Experience",
      icon: <BriefcaseBusiness />,
      href: "#workexperience",
    },
    {
      name: "Contact",
      icon: <UserCircleIcon />,
      href: "#contact",
    },
    {
      name: "Resume",
      icon: <ArrowDownLeftFromSquareIcon />,
      href: "/resume.pdf",
    },
  ];
  return (
    <div className="fixed left-1/2 -translate-x-1/2 md:-translate-y-1/2 z-50 bottom-1 md:bottom-0 md:top-1/2 md:left-4 md:-translate-x-0">
      <nav className=" p-4 pt-4 min-h-auto min-w-1/4 rounded-2xl my-4 text-gold-light flex justify-between items-center gap-8 overflow-visible md:bottom-0 md:flex-col md:min-w-[80px] md:min-h-[120px] md:ml-4 ring-2 ring-surface/40 shadow-glow shadow-surface backdrop-blur-2xl">
        {links.map((link) => (
          <AnimatedTooltip key={link.name} content={link.name}>
            <Link
              key={link.name}
              href={link.href}
              className="flex justify-center items-center relative group text-gold-light hover:text-gold transition-colors ring-0"
            >
              {link.icon}
            </Link>
          </AnimatedTooltip>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
