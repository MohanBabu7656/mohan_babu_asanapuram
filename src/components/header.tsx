import Link from "next/link";
import { portfolioData } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Header() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="font-headline font-bold text-lg">
            {portfolioData.name}
          </Link>
        </div>
        <nav className="ml-auto flex items-center space-x-2 sm:space-x-4">
          {navItems.map((item) => (
            <Button key={item.name} variant="link" asChild>
              <Link href={item.href} className="text-muted-foreground transition-colors hover:text-foreground">
                {item.name}
              </Link>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
