"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const AnimatedTypingText = ({ texts }: { texts: string[] }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum, texts]);

  return (
    <span className="inline-block pr-1 border-r-2 border-primary" aria-label={text}>
      {text}
    </span>
  );
};

export function Hero() {
  return (
    <section id="hero" className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-background bg-dot-white/[0.1]"></div>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-primary text-xl sm:text-2xl font-normal mb-2">
              <AnimatedTypingText texts={portfolioData.greetings} />
              &nbsp;
            </span>
            {portfolioData.name}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            {portfolioData.jobTitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {portfolioData.socials.map((social) => (
              <Button key={social.name} variant="outline" asChild>
                <Link href={social.url} target="_blank" rel="noopener noreferrer">
                  <social.icon className="mr-2 h-4 w-4" />
                  {social.name}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Link href="#about" aria-label="Scroll to About section">
          <ArrowDown className="h-8 w-8 text-muted-foreground animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
