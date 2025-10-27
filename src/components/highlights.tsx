import { CheckCircle, Video, Users, Trophy } from "lucide-react";
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';

const highlights = [
  {
    icon: <Video className="h-6 w-6 text-primary" />,
    text: "Online Interactive session",
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    text: "Access to a student community",
  },
  {
    icon: <Trophy className="h-6 w-6 text-primary" />,
    text: "Certificate of Completion",
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    text: "Hands-on projects and assignments",
  },
];

export function Highlights() {
  return (
    <section id="highlights" className="bg-card py-20 sm:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        <ScrollAnimationWrapper className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Course Highlights</h2>
        </ScrollAnimationWrapper>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-2">
          {highlights.map((highlight, index) => (
            <ScrollAnimationWrapper key={highlight.text} animation="slide-in-up" delay={`${index * 100}ms`}>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  {highlight.icon}
                </div>
                <p className="text-lg font-medium">{highlight.text}</p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
