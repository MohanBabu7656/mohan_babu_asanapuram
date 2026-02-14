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
        <div className="flex items-center mr-4 flex-1 min-w-0">
          <Link href="/" className="font-headline font-bold text-base sm:text-lg truncate" title={portfolioData.name}>
            {portfolioData.name}
          </Link>
        </div>
        <nav className="flex items-center space-x-1 sm:space-x-2">
          {navItems.map((item) => (
            <Button key={item.name} variant="link" asChild className="px-1 sm:px-2">
              <Link href={item.href} className="text-muted-foreground transition-colors hover:text-foreground text-xs sm:text-sm whitespace-nowrap">
                {item.name}
              </Link>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
