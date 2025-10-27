import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';
import { Badge } from './ui/badge';
import { Clock } from 'lucide-react';
import { CountdownTimer } from './countdown-timer';

export function PromoBanner() {
  const targetDate = '2025-11-10T00:00:00';

  return (
    <section id="promo" className="py-20 sm:py-0">
      <div className="container mx-auto max-w-5xl px-4">
        <ScrollAnimationWrapper>
          <div className="rounded-lg border bg-card p-8 text-center shadow-lg sm:p-12">
            <Badge variant="secondary" className="mb-4">
              <Clock className="mr-2 h-4 w-4" />
              Limited Time Offer
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              New Batch Starts <span className="text-primary">10th Nov 2025</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Don't miss your chance to master interior design. Enroll now to secure your spot and get an exclusive discount.
            </p>
            <CountdownTimer targetDate={targetDate} />
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="#enroll">Enroll Now & Claim Offer</Link>
              </Button>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
