import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';
import { Badge } from './ui/badge';
import { Clock } from 'lucide-react';
import { CountdownTimer } from './countdown-timer';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function PromoBanner() {
  const targetDate = '2025-11-10T00:00:00';
  const promoImage = PlaceHolderImages.find(p => p.id === 'hero-banner');

  return (
    <section id="promo" className="relative py-20 sm:py-32">
      {promoImage && (
          <Image
            src={promoImage.imageUrl}
            alt="Promotional offer background"
            data-ai-hint="modern design workspace"
            fill
            className="object-cover"
          />
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background/80 to-background/90" />

      <div className="container relative mx-auto max-w-4xl px-4">
        <ScrollAnimationWrapper className="text-center">
            <Badge variant="secondary" className="mb-4 inline-flex border-transparent bg-white/80 backdrop-blur-sm">
              <Clock className="mr-2 h-4 w-4 text-primary" />
              Limited Time Offer
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              New Batch Starts <span className="text-primary">10th Nov 2025</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Enroll now to secure your spot and unlock an exclusive discount. Your design future awaits.
            </p>
            <div className="mt-8 flex justify-center">
                 <CountdownTimer targetDate={targetDate} />
            </div>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="#enroll">Enroll Now & Claim Offer</Link>
              </Button>
            </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
