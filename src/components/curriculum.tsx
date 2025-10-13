import { Layers3, Palette, Ruler, Lightbulb, FolderKanban } from "lucide-react";
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';

const curriculumItems = [
  {
    icon: <Layers3 className="h-8 w-8 text-primary" />,
    title: "3D Visualization",
    description: "Create stunningly realistic 3D models of interior spaces from scratch.",
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Material Rendering",
    description: "Master the art of applying textures, colors, and finishes for photorealistic results.",
  },
  {
    icon: <Ruler className="h-8 w-8 text-primary" />,
    title: "Space Planning",
    description: "Learn effective techniques for optimizing layouts and creating functional, beautiful spaces.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Lighting Techniques",
    description: "Explore natural and artificial lighting to create mood and highlight design elements.",
  },
  {
    icon: <FolderKanban className="h-8 w-8 text-primary" />,
    title: "Portfolio Creation",
    description: "Develop a professional portfolio to showcase your skills to potential clients and employers.",
  },
];

export function Curriculum() {
  return (
    <section id="curriculum" className="py-20 sm:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        <ScrollAnimationWrapper className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What You'll Learn</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A comprehensive curriculum designed to take you from beginner to expert.
          </p>
        </ScrollAnimationWrapper>
        <div className="mt-16 space-y-12">
          {curriculumItems.map((item, index) => (
            <ScrollAnimationWrapper key={item.title} animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}>
              <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  {item.icon}
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
