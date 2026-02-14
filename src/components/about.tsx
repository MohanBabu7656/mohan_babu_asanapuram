import Image from "next/image";
import { portfolioData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function About() {
  const skills = portfolioData.skills;
  const categories = ["All", ...Array.from(new Set(skills.map(s => s.category)))];

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
            <p className="max-w-prose text-muted-foreground md:text-lg/relaxed">
              {portfolioData.about.description}
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl text-center md:text-left">My Skillset</h3>
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
    </section>
  );
}
