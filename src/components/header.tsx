"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#software", label: "Software" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#faq", label: "FAQ" },
  { href: "#testimonials", label: "Testimonials" },
];

export function Header() {
  const logoImage = PlaceHolderImages.find((p) => p.id === "logo");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  
  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-primary backdrop-blur supports-[backdrop-filter]:bg-primary/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          {logoImage && (
            <Image
              src={logoImage.imageUrl}
              alt={logoImage.description}
              data-ai-hint={logoImage.imageHint}
              width={120}
              height={24}
              priority
            />
          )}
        </Link>
        <nav className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild variant="secondary">
            <Link href="#enroll">Enroll Now</Link>
          </Button>
        </nav>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden text-white border-white/50 hover:bg-white/10 hover:text-white">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4">
              <Link href="/" onClick={closeSheet}>
                {logoImage && (
                  <Image
                    src={logoImage.imageUrl}
                    alt={logoImage.description}
                    data-ai-hint={logoImage.imageHint}
                    width={120}
                    height={24}
                  />
                )}
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground"
                  onClick={closeSheet}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild>
                <Link href="#enroll" onClick={closeSheet}>Enroll Now</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
