export interface Project {
  id: number;
  title: string;
  desc: string;
  points: string[];
  href: string;
  thumbnail: string;
  tags: string[];
  technologies?: string[];
}

export const projects: Project[] = [
  {
    id: 956743844,
    title: "Business Directory App",
    desc: "A modern business directory web application built with TypeScript. Deployed on Vercel for easy access and scalability.",
    points: [
      "TypeScript-based frontend",
      "Business listings, search, and detail pages",
      "Deployed on Vercel",
    ],
    href: "https://github.com/SD-CODE-OEB/business-directory-app",
    thumbnail: "/bdrepo.png",
    tags: ["TypeScript", "Web App", "Vercel", "Directory"],
    technologies: ["typescript", "react", "next", "tailwind"],
  },
  {
    id: 951944752,
    title: "Stationery SaaS",
    desc: "A SaaS web application for stationery business management, featuring modern UI and TypeScript integration.",
    points: [
      "SaaS platform for stationery businesses",
      "TypeScript and modern frontend stack",
      "Live demo deployment",
    ],
    href: "https://github.com/SD-CODE-OEB/stationery-Saas",
    thumbnail: "/saasstnry.png",
    tags: ["SaaS", "TypeScript", "Web App", "Business"],
    technologies: ["typescript", "react", "next", "tailwind"],
  },
  {
    id: 989507790,
    title: "3D Game",
    desc: "A browser-based 3D game built using HTML and JavaScript, demonstrating interactive graphics and gameplay.",
    points: [
      "Interactive 3D graphics in browser",
      "Pure HTML and JavaScript",
      "Game development showcase",
    ],
    href: "https://github.com/SD-CODE-OEB/3dgame",
    thumbnail: "/3dgame.png",
    tags: ["Game", "HTML", "JavaScript", "3D"],
    technologies: ["html", "css", "javascript", "threejs"],
  },
  {
    id: 993620576,
    title: "Django Blog App",
    desc: "A blogging platform built with Django, providing CRUD operations for posts and a responsive frontend.",
    points: [
      "Built with Django",
      "Blog post creation, editing, and deletion",
      "Responsive design",
    ],
    href: "https://github.com/SD-CODE-OEB/django-blog-app",
    thumbnail: "/blogapp.png",
    tags: ["Django", "Blog", "Web App", "Python"],
    technologies: ["django", "htmx", "css"],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/SD-CODE-OEB",
    src: "/social/github.png",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shoebuddin944",
    src: "/social/linkedin.svg",
  },
  {
    name: "Twitter",
    href: "https://x.com/ushoeb944",
    src: "/social/x.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/1_in_million_syed_shoeb_904",
    src: "/social/instagram.svg",
  },
];
