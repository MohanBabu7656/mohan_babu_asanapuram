import Image from "next/image";
import { portfolioData } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Briefcase } from "lucide-react";

export function About() {
  const skills = portfolioData.skills;
  const categories = ["All", ...Array.from(new Set(skills.map(s => s.category)))];
  const experiences = portfolioData.experience;

  return (
    <section id="about" className="w-full py-16 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              About Me
            </h2>
            <div className="relative w-48 h-48 md:w-64 md:h-64 mb-6 rounded-full overflow-hidden shadow-lg border-4 border-primary/50">
              <Image
                src={portfolioData.about.avatar}
                alt="Avatar of Mohan Babu Asanapuram"
                fill
                sizes="(max-width: 768px) 192px, 256px"
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 hover:scale-110"
                data-ai-hint="portrait person"
              />
            </div>
            <div className="max-w-prose text-muted-foreground md:text-lg/relaxed space-y-4">
              {portfolioData.about.descriptionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl text-center md:text-left mb-6">Work Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp) => (
                  <div key={exp.id} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Briefcase className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{exp.role}</h4>
                      <p className="font-medium text-primary-foreground/90">{exp.organization}</p>
                      <p className="text-sm text-muted-foreground">{exp.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl text-center md:text-left mb-6">My Skillset</h3>
              <Tabs defaultValue="All" className="w-full">
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-4">
                  {categories.map((category) => (
                    <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                  ))}
                </TabsList>
                {categories.map((category) => (
                  <TabsContent key={category} value={category}>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {skills
                        .filter(skill => category === "All" || skill.category === category)
                        .map((skill) => (
                          <Card key={skill.name} className="flex flex-col items-center justify-center p-4 text-center bg-background/50 hover:bg-background transition-colors">
                            <skill.icon className="w-8 h-8 mb-2 text-primary" />
                            <span className="text-sm font-medium">{skill.name}</span>
                          </Card>
                        ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
