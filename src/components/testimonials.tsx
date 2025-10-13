"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';

const testimonials = [
  {
    name: "Sarah L.",
    title: "Interior Design Student",
    quote: "This course transformed my understanding of 3D modeling. The instructors are fantastic, and the hands-on projects were invaluable for my portfolio. Highly recommended!",
    imageId: "testimonial-1",
  },
  {
    name: "Michael B.",
    title: "Professional Architect",
    quote: "As an architect, I wanted to improve my rendering skills. The techniques taught in this course have significantly enhanced the quality of my presentations. It was a great investment.",
    imageId: "testimonial-2",
  },
  {
    name: "Jessica P.",
    title: "Design Enthusiast",
    quote: "I started as a complete beginner, and now I feel confident creating my own interior designs. The community is so supportive, and the course is easy to follow. I had a blast!",
    imageId: "testimonial-3",
  },
];

export function Testimonials() {
  const images = PlaceHolderImages;

  return (
    <section id="testimonials" className="py-20 sm:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        <ScrollAnimationWrapper className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What Our Students Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real stories from our successful graduates.
          </p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animation="fade-in" delay="200ms" className="mt-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => {
                const image = images.find(img => img.id === testimonial.imageId);
                return (
                  <CarouselItem key={testimonial.name} className="p-4 md:basis-1/2">
                      <Card className="h-full">
                        <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={`Photo of ${testimonial.name}`}
                              data-ai-hint={image.imageHint}
                              width={80}
                              height={80}
                              className="mb-4 rounded-full"
                            />
                          )}
                          <blockquote className="text-muted-foreground italic">"{testimonial.quote}"</blockquote>
                          <div className="mt-4">
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </CardContent>
                      </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:inline-flex" />
            <CarouselNext className="hidden sm:inline-flex" />
          </Carousel>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
