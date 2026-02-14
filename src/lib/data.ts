import { GitHub, Linkedin, Mail, Twitter, Code, Monitor, Server, Database, TestTube, Cloud, Palette, Figma, Framer, Git, Nextjs, ReactIcon, Tailwind, Typescript } from '@/components/icons';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const portfolioData = {
  name: "Mohan Babu Asanapuram",
  jobTitle: "Creative Developer & UI/UX Enthusiast",
  greetings: ["Hello, I'm", "Hola, soy", "Bonjour, je suis"],
  socials: [
    { name: "GitHub", url: "https://github.com", icon: GitHub },
    { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
    { name: "Twitter", url: "https://twitter.com", icon: Twitter },
    { name: "Email", url: "mailto:mohan@example.com", icon: Mail },
  ],
  about: {
    avatar: PlaceHolderImages.find(img => img.id === 'avatar')?.imageUrl ?? "https://picsum.photos/seed/avatar/400/400",
    description: "I am a passionate and results-oriented Creative Developer with a strong eye for UI/UX design. With a foundation in modern web technologies, I specialize in building beautiful, functional, and user-centric digital experiences. My journey in tech has been driven by a constant curiosity and a desire to merge the worlds of design and development seamlessly. From crafting pixel-perfect interfaces to architecting robust full-stack applications, I thrive on challenges that push my creative and technical boundaries."
  },
  skills: [
    { name: "React", icon: ReactIcon, category: "Frontend" },
    { name: "Next.js", icon: Nextjs, category: "Frontend" },
    { name: "TypeScript", icon: Typescript, category: "Languages" },
    { name: "Tailwind CSS", icon: Tailwind, category: "Frontend" },
    { name: "Figma", icon: Figma, category: "Design" },
    { name: "Framer", icon: Framer, category: "Design" },
    { name: "Node.js", icon: Server, category: "Backend" },
    { name: "Git", icon: Git, category: "Tools" },
    { name: "Databases", icon: Database, category: "Backend" },
    { name: "Testing", icon: TestTube, category: "Tools" },
    { name: "Cloud Services", icon: Cloud, category: "Tools" },
    { name: "UI/UX Design", icon: Palette, category: "Design" }
  ],
  projects: [
    {
      id: "project-1",
      title: "Interactive Data Dashboard",
      shortDescription: "A dynamic and responsive data visualization platform.",
      longDescription: "This project is a comprehensive data dashboard built with Next.js and Recharts, offering users an interactive way to explore complex datasets. It features real-time data updates, customizable chart types, and a sleek, modern user interface designed for intuitive navigation. The backend is powered by a Node.js API, ensuring high performance and scalability.",
      tags: ["Next.js", "React", "Tailwind CSS", "Data Visualization"],
      image: PlaceHolderImages.find(img => img.id === 'project-1'),
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: "project-2",
      title: "E-commerce Storefront",
      shortDescription: "A modern, full-featured online shopping experience.",
      longDescription: "A complete e-commerce solution designed for a seamless user journey from product discovery to checkout. Features include a powerful search, product filtering, user accounts, and a secure payment gateway integration. The UI/UX was meticulously designed in Figma and brought to life with Framer Motion for subtle, engaging animations.",
      tags: ["React", "E-commerce", "Figma", "Framer Motion"],
      image: PlaceHolderImages.find(img => img.id === 'project-2'),
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: "project-3",
      title: "Creative Agency Website",
      shortDescription: "A visually-driven portfolio site for a design agency.",
      longDescription: "This is a portfolio website for a creative agency, focusing on showcasing their work through a highly visual and interactive gallery. The design employs a minimalist aesthetic with bold typography and captivating animations to create a premium feel. Built with a headless CMS for easy content management.",
      tags: ["UI/UX", "Animation", "Headless CMS", "TypeScript"],
      image: PlaceHolderImages.find(img => img.id === 'project-3'),
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: "project-4",
      title: "AI-Powered Content Generator",
      shortDescription: "A SaaS tool for generating marketing copy using AI.",
      longDescription: "A software-as-a-service application that leverages generative AI to help users create compelling marketing copy. The tool provides various templates and tones of voice, allowing for highly customized content generation. The project involved fine-tuning AI models and building a scalable cloud infrastructure to support the service.",
      tags: ["GenAI", "SaaS", "Next.js", "Cloud"],
      image: PlaceHolderImages.find(img => img.id === 'project-4'),
      liveUrl: "#",
      repoUrl: "#"
    }
  ]
};

export type PortfolioData = typeof portfolioData;
