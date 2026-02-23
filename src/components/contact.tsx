"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/icons";


export function Contact() {
  
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Get In Touch
          </h2>
          <p className="max-w-[900px] text-muted-foreground text-base/relaxed sm:text-lg/relaxed">
            Have a project in mind or just want to say hello? Feel free to reach out directly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild className="w-full sm:w-auto">
                <Link href="https://wa.me/qr/DADEAHEKQIS3P1" target="_blank" rel="noopener noreferrer">
                    <WhatsappIcon className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                </Link>
            </Button>
            <Button variant="secondary" asChild className="w-full sm:w-auto">
                <Link href="tel:6281865015">
                    <Phone className="mr-2 h-5 w-5" />
                    +91 6281865015
                </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
