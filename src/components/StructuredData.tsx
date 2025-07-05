import Script from "next/script";

const StructuredData = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shoeb Uddin",
    alternateName: "Syed Shoeb Uddin",
    jobTitle: ["Frontend Developer", "Full-Stack Developer", "Web Developer"],
    description:
      "Experienced Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies with expertise in building interactive 3D applications and SaaS platforms",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://shoebuddin.dev",
    image: "/profile.jpg",
    sameAs: [
      "https://github.com/SD-CODE-OEB",
      "https://www.linkedin.com/in/shoebuddin944",
      "https://x.com/ushoeb944",
      "https://www.instagram.com/1_in_million_syed_shoeb_904",
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Node.js",
      "Frontend Development",
      "Full-Stack Development",
      "Web Development",
      "UI/UX Design",
      "Three.js",
      "Django",
      "Python",
      "SaaS Development",
      "Business Directory Applications",
      "Interactive 3D Games",
      "Modern Web Applications",
      "Responsive Web Design",
      "Progressive Web Apps",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Frontend Development",
        description:
          "Specialized in modern frontend technologies including React, Next.js, and TypeScript",
      },
    ],
    owns: [
      {
        "@type": "WebSite",
        name: "Shoeb Uddin Portfolio",
        url: process.env.NEXT_PUBLIC_SITE_URL || "https://shoebuddin.dev",
      },
    ],
    workExample: [
      {
        "@type": "CreativeWork",
        name: "Business Directory App",
        description:
          "A modern business directory web application built with TypeScript",
        url: "https://github.com/SD-CODE-OEB/business-directory-app",
        programmingLanguage: "TypeScript",
      },
      {
        "@type": "CreativeWork",
        name: "Stationery SaaS",
        description:
          "A SaaS web application for stationery business management",
        url: "https://github.com/SD-CODE-OEB/stationery-Saas",
        programmingLanguage: "TypeScript",
      },
      {
        "@type": "CreativeWork",
        name: "3D Game",
        description: "A browser-based 3D game built using HTML and JavaScript",
        url: "https://github.com/SD-CODE-OEB/3dgame",
        programmingLanguage: "JavaScript",
      },
      {
        "@type": "CreativeWork",
        name: "Django Blog App",
        description: "A blogging platform built with Django",
        url: "https://github.com/SD-CODE-OEB/django-blog-app",
        programmingLanguage: "Python",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Shoeb Uddin - Developer Portfolio",
    alternateName: "Shoeb Uddin Portfolio",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://shoebuddin.dev",
    description:
      "Portfolio website showcasing frontend development projects, SaaS applications, and interactive 3D experiences built with modern web technologies",
    author: {
      "@type": "Person",
      name: "Shoeb Uddin",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          (process.env.NEXT_PUBLIC_SITE_URL || "https://shoebuddin.dev") +
          "/#projects",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Shoeb Uddin Developer Portfolio",
    description:
      "A comprehensive portfolio showcasing frontend development projects including SaaS applications, business directory apps, interactive 3D games, and Django-based web applications",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://shoebuddin.dev",
    author: {
      "@type": "Person",
      name: "Shoeb Uddin",
    },
    dateCreated: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    inLanguage: "en-US",
    keywords:
      "Frontend Development, React, Next.js, TypeScript, SaaS, 3D Games, Django, Web Development",
  };

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioSchema),
        }}
      />
    </>
  );
};

export default StructuredData;
