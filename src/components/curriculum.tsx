import { Layers3, Palette, Ruler, Lightbulb, FolderKanban, Sparkles } from "lucide-react";
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';

const curriculumItems = [
  {
    icon: <Layers3 className="h-8 w-8 text-primary" />,
    title: "SketchUp Fundamentals",
    description: "Create stunningly realistic 3D models of interior spaces from scratch.",
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Lumion Rendering",
    description: "Master the art of applying textures, colors, and lighting for photorealistic results in Lumion.",
  },
  {
    icon: <Ruler className="h-8 w-8 text-primary" />,
    title: "Advanced Space Planning",
    description: "Learn effective techniques for optimizing layouts and creating functional, beautiful spaces.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Advanced Lighting Techniques",
    description: "Explore natural and artificial lighting in Lumion to create mood and highlight design elements.",
  },
  {
    icon: <FolderKanban className="h-8 w-8 text-primary" />,
    title: "Portfolio Creation",
    description: "Develop a professional portfolio with high-quality renders to showcase your skills.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Future of Design",
    description: "Understand the future scope of 3D visualization and how to stay ahead in the industry.",
  }
];

export function Curriculum() {
  return (
    <section id="curriculum" className="py-20 sm:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        <ScrollAnimationWrapper className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What You'll Learn</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A comprehensive curriculum designed to take you from beginner to expert in SketchUp and Lumion.
          </p>
        </ScrollAnimationWrapper>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {curriculumItems.map((item, index) => (
            <ScrollAnimationWrapper key={item.title} animation="slide-in-up" delay={`${index * 100}ms`}>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
