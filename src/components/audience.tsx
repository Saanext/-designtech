import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Briefcase, DraftingCompass, Brush } from "lucide-react";
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';

const audience = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Students",
    description: "Aspiring designers looking to build a strong foundation in digital interior design.",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Professionals",
    description: "Interior designers aiming to upgrade their skills with the latest software and techniques.",
  },
  {
    icon: <DraftingCompass className="h-10 w-10 text-primary" />,
    title: "Architects",
    description: "Architects wanting to enhance their visualization and presentation capabilities.",
  },
  {
    icon: <Brush className="h-10 w-10 text-primary" />,
    title: "Design Enthusiasts",
    description: "Hobbyists passionate about design who want to bring their creative ideas to life.",
  },
];

export function Audience() {
  return (
    <section id="audience" className="bg-card py-20 sm:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollAnimationWrapper className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Who Can Join?</h2>
          <p className="mt-4 text-lg text-muted-foreground">This course is perfect for a wide range of creative individuals.</p>
        </ScrollAnimationWrapper>
        <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {audience.map((item, index) => (
            <ScrollAnimationWrapper key={item.title} animation="slide-in-up" delay={`${index * 150}ms`}>
              <Card className="h-full text-center">
                <CardHeader className="p-4 md:p-6">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 sm:h-20 sm:w-20">
                    {item.icon}
                  </div>
                  <CardTitle className="mt-4">{item.title}</CardTitle>
                  <CardDescription className="mt-2">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
