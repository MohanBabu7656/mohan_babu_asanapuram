"use client";

import { useState, useRef, useEffect, useTransition } from 'react';
import { Bot, Loader2, Send, User } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { askAI } from '@/lib/actions';
import { cn } from '@/lib/utils';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

// A simple component to find and render clickable links in text
const LinkifiedContent = ({ text }: { text: string }) => {
  const urlRegex = /(https?:\/\/\S+|mailto:\S+|tel:\S+)/g;
  const parts = text.split(urlRegex);

  return (
    <p className="text-sm break-words">
      {parts.map((part, i) => {
        if (!part || !part.match(urlRegex)) {
          return part;
        }

        const href = part;
        let display = part;
        if (part.startsWith('mailto:')) {
          display = part.substring('mailto:'.length);
        } else if (part.startsWith('tel:')) {
          display = part.substring('tel:'.length);
        }
        
        const isHttpLink = part.startsWith('http');

        return (
          <a
            key={i}
            href={href}
            target={isHttpLink ? "_blank" : undefined}
            rel={isHttpLink ? "noopener noreferrer" : undefined}
            className="text-primary underline hover:text-primary/80"
          >
            {display}
          </a>
        );
      })}
    </p>
  );
};


export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const callAI = (question: string) => {
    if (!question.trim() || isPending) return;

    const userMessage: Message = { role: 'user', content: question };
    setMessages((prev) => [...prev, userMessage]);
    if (input) setInput('');

    startTransition(async () => {
      const assistantResponse = await askAI(question);
      const assistantMessage: Message = { role: 'assistant', content: assistantResponse };
      setMessages((prev) => [...prev, assistantMessage]);
    });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    callAI(input);
  };
  
  const suggestedQuestions = [
    "What are Mohan's main skills?",
    "Tell me about his work experience.",
    "How can I contact him?",
  ];

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
            size="icon"
          >
            <Bot className="h-7 w-7" />
            <span className="sr-only">Open AI Assistant</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <SheetHeader>
            <SheetTitle className="font-headline">Portfolio AI Assistant</SheetTitle>
          </SheetHeader>
          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full" ref={scrollAreaRef}>
              <div className="p-4 space-y-4">
                <div className="flex items-start gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback><Bot size={20}/></AvatarFallback>
                  </Avatar>
                  <div className="p-3 rounded-lg bg-muted max-w-[80%]">
                    <p className="text-sm">Hello! I'm Mad. Ask me anything about Mohan's portfolio, skills, or projects, or try one of the suggestions below.</p>
                  </div>
                </div>

                {messages.length === 0 && (
                  <div className="flex flex-col items-start gap-2">
                     {suggestedQuestions.map((q, i) => (
                      <Button key={i} variant="outline" size="sm" className="w-auto text-left justify-start" onClick={() => callAI(q)} disabled={isPending}>
                        {q}
                      </Button>
                    ))}
                  </div>
                )}

                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      'flex items-start gap-3',
                      message.role === 'user' ? 'justify-end' : ''
                    )}
                  >
                    {message.role === 'assistant' && (
                      <Avatar className="w-8 h-8">
                        <AvatarFallback><Bot size={20}/></AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={cn(
                        'p-3 rounded-lg max-w-[80%]',
                        message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                      )}
                    >
                      {message.role === 'assistant' ? (
                        <LinkifiedContent text={message.content} />
                      ) : (
                        <p className="text-sm">{message.content}</p>
                      )}
                    </div>
                    {message.role === 'user' && (
                       <Avatar className="w-8 h-8">
                         <AvatarFallback><User size={20}/></AvatarFallback>
                       </Avatar>
                    )}
                  </div>
                ))}
                 {isPending && (
                  <div className="flex items-start gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback><Bot size={20}/></AvatarFallback>
                    </Avatar>
                    <div className="p-3 rounded-lg bg-muted">
                      <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t flex items-center gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about a project..."
              disabled={isPending}
            />
            <Button type="submit" size="icon" disabled={isPending || !input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </SheetContent>
      </Sheet>
    </>
  );
}
