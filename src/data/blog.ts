// Blog/Articles data for SEO content
export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
  publishedAt: string;
  readingTime: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Modern Web Applications with Next.js 15 and React 19",
    description:
      "Learn how to leverage the latest features in Next.js 15 and React 19 for building high-performance web applications.",
    content: `
      Next.js 15 brings exciting new features and improvements that make building modern web applications easier and more efficient. 
      In this article, we'll explore the key features including Turbopack, improved performance, and better developer experience.
      
      Key topics covered:
      - Turbopack integration and performance benefits
      - React 19 server components
      - Improved routing and navigation
      - TypeScript enhancements
      - Deployment optimizations
      
      Whether you're building a portfolio, e-commerce site, or complex web application, these tools provide the foundation for success.
    `,
    tags: ["Next.js", "React", "TypeScript", "Web Development", "Performance"],
    publishedAt: "2024-01-15",
    readingTime: "5 min read",
    slug: "nextjs-15-react-19-modern-web-development",
  },
  {
    id: "2",
    title: "Mastering TypeScript for Frontend Development",
    description:
      "A comprehensive guide to using TypeScript effectively in frontend projects, from basic types to advanced patterns.",
    content: `
      TypeScript has become an essential tool for frontend developers, providing type safety and better development experience.
      This guide covers everything you need to know about TypeScript in frontend development.
      
      Topics covered:
      - Type system fundamentals
      - React with TypeScript
      - Advanced TypeScript patterns
      - Integration with modern build tools
      - Best practices and common pitfalls
      
      Learn how to write more maintainable and scalable frontend code with TypeScript.
    `,
    tags: ["TypeScript", "Frontend", "React", "JavaScript", "Development"],
    publishedAt: "2024-01-10",
    readingTime: "8 min read",
    slug: "mastering-typescript-frontend-development",
  },
  {
    id: "3",
    title: "Creating Interactive 3D Experiences with Three.js",
    description:
      "Explore how to build engaging 3D web experiences using Three.js, from basic scenes to complex interactive applications.",
    content: `
      Three.js opens up a world of possibilities for creating immersive web experiences. 
      This article walks through building interactive 3D applications for the web.
      
      What you'll learn:
      - Three.js fundamentals and scene setup
      - Loading and manipulating 3D models
      - Animation and interaction handling
      - Performance optimization techniques
      - Integration with React applications
      
      Perfect for developers looking to add that extra dimension to their web projects.
    `,
    tags: ["Three.js", "3D", "WebGL", "JavaScript", "Interactive"],
    publishedAt: "2024-01-05",
    readingTime: "10 min read",
    slug: "interactive-3d-experiences-threejs",
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getRelatedPosts = (
  currentPost: BlogPost,
  limit: number = 3
): BlogPost[] => {
  return blogPosts
    .filter((post) => post.id !== currentPost.id)
    .filter((post) => post.tags.some((tag) => currentPost.tags.includes(tag)))
    .slice(0, limit);
};
