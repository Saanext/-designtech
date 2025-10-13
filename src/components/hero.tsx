import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-banner');

  return (
    <section className="relative h-[80vh] w-full text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-6 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          Master Interior Design with Lumia & SketchUp
        </h1>
        <p className="max-w-2xl text-lg text-neutral-200 md:text-xl">
          Unlock your creative potential and build stunning 3D visualizations. Join our expert-led classes today.
        </p>
        <Button asChild size="lg" className="mt-2">
          <Link href="#enroll">Enroll Now</Link>
        </Button>
      </div>
    </section>
  );
}
