// SEO Configuration - Add these environment variables to your .env.local file
export const SEO_CONFIG = {
  // Replace with your actual domain
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://shoebuddin.dev",

  // Google Search Console verification
  GOOGLE_SITE_VERIFICATION: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,

  // Site information
  SITE_NAME: "Shoeb Uddin - Developer Portfolio",
  SITE_DESCRIPTION:
    "Experienced Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies. View my portfolio featuring interactive 3D projects, SaaS applications, and responsive web solutions built with cutting-edge technologies.",

  // Social media handles
  TWITTER_HANDLE: "@ushoeb944",

  // Contact information
  EMAIL: "contact@shoebuddin.dev", // Replace with your actual email

  // Author information
  AUTHOR: {
    name: "Shoeb Uddin",
    alternateNames: ["Syed Shoeb Uddin", "Shoeb", "SD-CODE-OEB"],
    title: "Frontend Developer & Full-Stack Engineer",
    bio: "Experienced Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies with expertise in building interactive 3D applications and SaaS platforms",
    image: "/profile.jpg",
    social: {
      github: "https://github.com/SD-CODE-OEB",
      linkedin: "https://www.linkedin.com/in/shoebuddin944",
      twitter: "https://x.com/ushoeb944",
      instagram: "https://www.instagram.com/1_in_million_syed_shoeb_904",
    },
  },

  // Skills and technologies
  SKILLS: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Node.js",
    "Three.js",
    "Django",
    "Python",
    "Frontend Development",
    "Full-Stack Development",
    "Web Development",
    "UI/UX Design",
    "SaaS Development",
    "Progressive Web Apps",
    "Responsive Web Design",
    "Modern Web Applications",
  ],

  // Featured projects for SEO
  FEATURED_PROJECTS: [
    {
      name: "Business Directory App",
      description:
        "A modern business directory web application built with TypeScript",
      url: "https://github.com/SD-CODE-OEB/business-directory-app",
      technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      name: "Stationery SaaS",
      description: "A SaaS web application for stationery business management",
      url: "https://github.com/SD-CODE-OEB/stationery-Saas",
      technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      name: "3D Game",
      description: "A browser-based 3D game built using HTML and JavaScript",
      url: "https://github.com/SD-CODE-OEB/3dgame",
      technologies: ["JavaScript", "HTML5", "CSS3", "Three.js"],
    },
    {
      name: "Django Blog App",
      description: "A blogging platform built with Django",
      url: "https://github.com/SD-CODE-OEB/django-blog-app",
      technologies: ["Django", "Python", "HTMX", "CSS3"],
    },
  ],
};

// Keywords for different pages/sections
export const KEYWORDS = {
  HOME: [
    "Shoeb Uddin",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Expert",
    "Full-Stack Developer",
    "Web Developer",
    "JavaScript Developer",
    "UI/UX Developer",
    "Three.js Developer",
    "Django Developer",
    "SaaS Developer",
    "Portfolio",
    "Business Directory App",
    "Interactive 3D Games",
    "Modern Web Applications",
  ],

  ABOUT: [
    "About Shoeb Uddin",
    "Frontend Developer Experience",
    "React Expert",
    "Next.js Specialist",
    "TypeScript Developer",
    "Web Development Skills",
    "Modern Web Technologies",
    "UI/UX Design",
    "Full-Stack Development",
  ],

  PROJECTS: [
    "Frontend Development Projects",
    "React Projects",
    "Next.js Applications",
    "TypeScript Projects",
    "SaaS Applications",
    "Business Directory App",
    "3D Games",
    "Django Applications",
    "Interactive Web Applications",
    "Modern Web Development",
    "Portfolio Projects",
  ],

  CONTACT: [
    "Contact Shoeb Uddin",
    "Hire Frontend Developer",
    "React Developer for Hire",
    "Next.js Developer Contact",
    "TypeScript Developer",
    "Web Development Services",
    "Frontend Development Consultation",
    "SaaS Development Services",
  ],
};

export default SEO_CONFIG;
