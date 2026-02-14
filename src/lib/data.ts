import { GitHub, Linkedin, Mail, Phone, Code, Monitor, Server, Database, TestTube, Cloud, Palette, Figma, Framer, Git, Nextjs, ReactIcon, Tailwind, Typescript, WhatsappIcon } from '@/components/icons';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const portfolioData = {
  name: "Mohan Babu Asanapuram",
  jobTitle: "AI & Backend Engineer | LLM Automation | FastAPI | Docker | Deployment Specialist",
  experience: [
    {
      id: 'techm',
      organization: 'Tech Mahindra',
      role: 'AI & Backend Engineer',
      duration: '2023 - Present',
    }
  ],
  greetings: [
    "Hi, I'm,",
    "AI, Engineer,",
    "FastAPI, Expert,",
    "System, Builder,"
  ],
  socials: [
    { name: "GitHub", url: "https://github.com/MohanBabu7656", icon: GitHub },
    { name: "LinkedIn", url: "https://linkedin.com/in/mohan-babu-asanapuram-b37923214", icon: Linkedin },
    { name: "Email", url: "mailto:asanapurammohanbabu@gmail.com", icon: Mail },
    { name: "WhatsApp", url: "https://wa.me/qr/DADEAHEKQIS3P1", icon: WhatsappIcon },
    { name: "Phone", url: "tel:6281865015", icon: Phone },
  ],
  about: {
    avatar: PlaceHolderImages.find(img => img.id === 'avatar')?.imageUrl ?? "/image.png",
    descriptionPoints: [
      "Results-driven AI & Backend Engineer with hands-on experience in LLM-powered document automation, FastAPI backend systems, and production-grade deployments.",
      "I specialize in building scalable AI pipelines using LangChain, implementing secure JWT-based authentication systems, and containerizing applications with Docker for consistent dev-to-production environments.",
      "Currently acting as Project POC for AI automation deployments, handling client coordination, release management, and Linux-based hosting using NGINX reverse proxy.",
      "I focus on performance, automation, security, and reliability while building real-world production systems."
    ]
  },
  skills: [
    { name: "Python", icon: Code, category: "Core" },
    { name: "FastAPI", icon: Server, category: "Backend" },
    { name: "LLMs", icon: TestTube, category: "AI" },
    { name: "Docker", icon: Cloud, category: "DevOps" },
    { name: "NGINX", icon: Server, category: "DevOps" },
    { name: "PostgreSQL", icon: Database, category: "Database" },
    { name: "JWT", icon: Server, category: "Security" },
    { name: "Git", icon: Git, category: "Tools" },
  ],
  
  projects: [
    {
      id: "project-1",
      title: "AI-Powered Document Automation Platform",
      shortDescription: "LLM-driven document cleaning, structuring, and automation system.",
      longDescription: `
    Built an end-to-end AI-powered document automation platform using 
    FastAPI and LangChain. The system processes DOCX and PDF files, 
    applies LLM-based cleaning, formatting normalization, and 
    automated summarization.
    
    Implemented secure JWT authentication, containerized the entire 
    application using Docker, and deployed using NGINX reverse proxy 
    in a Linux environment.
    
    Handled deployment documentation, automation scripts, and release workflows.
      `,
      tags: ["FastAPI", "LangChain", "LLMs", "Docker", "NGINX", "JWT", "Linux"],
      image: PlaceHolderImages.find(img => img.id === 'project-1'),
      organizationId: 'techm'
    },    
    {
      id: "project-2",
      title: "JWT-Based Authentication System",
      shortDescription: "Secure login, token generation & refresh workflow.",
      longDescription: `
    Designed and implemented a secure authentication system using 
    FastAPI and JWT. Built user and token schemas, implemented 
    token refresh logic, and created session-based backend workflows.
    
    Ensured secure API access and role-based authorization mechanisms.
      `,
      tags: ["FastAPI", "JWT", "Authentication", "Backend Security"],
      image: PlaceHolderImages.find(img => img.id === 'project-2'),
      organizationId: 'techm'
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
