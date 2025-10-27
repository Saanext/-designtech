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
    <section id="promo" className="py-20 sm:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="overflow-hidden rounded-xl bg-card shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="relative hidden h-full min-h-[300px] md:block">
              {promoImage && (
                <Image
                  src={promoImage.imageUrl}
                  alt="Promotional offer background"
                  data-ai-hint="modern design workspace"
                  fill
                  className="object-cover"
                />
              )}
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="p-8 text-center md:text-left md:p-12 flex flex-col justify-center">
              <ScrollAnimationWrapper>
                <Badge variant="secondary" className="mb-4 inline-flex">
                  <Clock className="mr-2 h-4 w-4" />
                  Limited Time Offer
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  New Batch Starts <br /> <span className="text-primary">10th Nov 2025</span>
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Enroll now to secure your spot and unlock an exclusive discount. Your design future awaits.
                </p>
                <CountdownTimer targetDate={targetDate} />
                <div className="mt-8">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="#enroll">Enroll Now & Claim Offer</Link>
                  </Button>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
