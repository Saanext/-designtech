import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Header() {
  const logoImage = PlaceHolderImages.find(p => p.id === 'logo');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-primary text-primary-foreground">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          {logoImage && (
            <Image
              src={logoImage.imageUrl}
              alt={logoImage.description}
              data-ai-hint={logoImage.imageHint}
              width={100}
              height={20}
              priority
            />
          )}
        </Link>
        <nav>
          <Button asChild variant="secondary">
            <Link href="#enroll">Enroll Now</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
