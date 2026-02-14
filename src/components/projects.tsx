import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            My Creative Work
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A selection of projects that showcase my passion for design and development.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {portfolioData.projects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden group cursor-pointer transition-all hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1">
                  <div className="relative h-60 w-full">
                    {project.image && (
                      <Image
                        src={project.image.imageUrl}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint={project.image.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-headline text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.shortDescription}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[650px] bg-card">
                <DialogHeader>
                  <DialogTitle className="font-headline text-2xl">{project.title}</DialogTitle>
                  <DialogDescription>
                    {project.shortDescription}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  {project.image && (
                    <div className="relative h-64 w-full rounded-md overflow-hidden">
                      <Image
                        src={project.image.imageUrl}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        data-ai-hint={project.image.imageHint}
                      />
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  {'organizationId' in project && project.organizationId ? (
                    (() => {
                      const org = portfolioData.experience.find(e => e.id === project.organizationId);
                      return (
                        <Badge variant="outline" className="text-sm">
                          Part of my experience at {org ? org.organization : 'a previous company'}
                        </Badge>
                      );
                    })()
                  ) : (
                    <>
                      {'liveUrl' in project && project.liveUrl && (
                        <Button asChild>
                          <Link href={project.liveUrl} target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4"/> Live Demo
                          </Link>
                        </Button>
                      )}
                      {'repoUrl' in project && project.repoUrl && (
                        <Button variant="secondary" asChild>
                          <Link href={project.repoUrl} target="_blank">
                            <Github className="mr-2 h-4 w-4"/> View Code
                          </Link>
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
