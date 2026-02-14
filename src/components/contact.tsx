"use client";

import { useFormStatus } from "react-dom";
import { useEffect, useActionState, useRef } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

import { submitContactForm } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { WhatsappIcon } from "@/components/icons";


function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Send Message
    </Button>
  );
}

export function Contact() {
  const [state, formAction] = useActionState(submitContactForm, null);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      toast({
        title: "Success!",
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state?.success === false && state.message) {
       // Only show toast for non-validation errors, as they are displayed inline
      if (state.message !== "Validation failed.") {
        toast({
          variant: "destructive",
          title: "Error",
          description: state.message,
        });
      }
    }
  }, [state, toast]);
  

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            Get In Touch
          </h2>
          <p className="max-w-[900px] text-muted-foreground text-base/relaxed md:text-xl/relaxed">
            Have a project in mind or just want to say hello? Drop me a line or reach out directly.
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
        <div className="mx-auto w-full max-w-lg">
          <p className="mb-4 text-center font-semibold text-muted-foreground">Or send me a message directly</p>
          <form ref={formRef} action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your Name" />
              {state?.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" placeholder="your.email@example.com" />
              {state?.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Your message..." rows={5} />
              {state?.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
            </div>
            <SubmitButton />
          </form>
        </div>
      </div>
    </section>
  );
}
