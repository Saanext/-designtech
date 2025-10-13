import { Typewriter } from './typewriter';
import { Button } from './ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';
import Link from 'next/link';
import { ContactForm } from './contact-form';
import { Card, CardContent } from './ui/card';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-banner');

  return (
    <section id="home" className="relative w-full py-20 sm:py-32 lg:py-40">
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
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />
      <div className="container relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        <ScrollAnimationWrapper className="space-y-6 text-center md:text-left" animation="slide-in-left">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Master <Typewriter words={["Interior Design", "3D Modeling", "Visualization"]} /> with Lumia & SketchUp
          </h1>
          <p className="max-w-2xl text-lg text-white/80 md:text-xl mx-auto md:mx-0">
            Unlock your creative potential and build stunning 3D visualizations. Join our expert-led classes today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg">
              <Link href="#enroll">Enroll Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
              <Link href="#curriculum">View Curriculum</Link>
            </Button>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
