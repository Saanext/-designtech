import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';

const software = [
  {
    id: 'sketchup',
    name: 'SketchUp',
    imageId: 'sketchup-logo',
    description: 'The premier tool for 3D modeling, SketchUp allows for intuitive and precise creation of interior and exterior spaces. It’s the foundation of your design workflow.',
    benefits: [
      'User-friendly interface, easy to learn.',
      'Extensive library of pre-made models (3D Warehouse).',
      'Flexible and powerful for detailed designs.',
      'Seamless integration with other software.',
    ],
  },
  {
    id: 'lumion',
    name: 'Lumion',
    imageId: 'lumia-logo',
    description: 'Bring your SketchUp models to life with Lumion. This powerful rendering software creates stunning, photorealistic images and videos with realistic lighting, materials, and effects.',
    benefits: [
      'Real-time rendering for instant feedback.',
      'Vast library of high-quality materials and objects.',
      'Create breathtaking images, and videos.',
      'Intuitive workflow for designers.',
    ],
  },
];

export function Software() {
  const images = PlaceHolderImages;

  return (
    <section id="software" className="bg-card py-20 sm:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollAnimationWrapper>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Master Industry-Standard Software
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We focus on the tools the pros use to create stunning visuals and win clients.
            </p>
          </div>
        </ScrollAnimationWrapper>
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {software.map((tool) => {
            const image = images.find((img) => img.id === tool.imageId);
            return (
              <ScrollAnimationWrapper key={tool.id} animation="slide-in-up">
                <div className="flex flex-col items-center text-center">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={`${tool.name} logo`}
                      data-ai-hint={image.imageHint}
                      width={120}
                      height={120}
                      className="mb-6 h-20 w-auto"
                    />
                  )}
                  <h3 className="text-2xl font-bold">{tool.name}</h3>
                  <p className="mt-2 max-w-md text-muted-foreground">
                    {tool.description}
                  </p>
                  <div className="mt-6 w-full text-left">
                    <h4 className="font-semibold">Key Benefits:</h4>
                    <ul className="mt-4 space-y-2">
                      {tool.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start">
                          <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
