import { ScrollAnimationWrapper } from './scroll-animation-wrapper';

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        <ScrollAnimationWrapper>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About The Course
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our comprehensive program is designed to equip you with the skills to master interior design using industry-standard software like Lumion and SketchUp.
            </p>
          </div>
        </ScrollAnimationWrapper>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <ScrollAnimationWrapper animation="slide-in-up" delay="0ms">
            <div className="rounded-lg border bg-card p-6 text-center shadow-sm h-full md:p-8">
              <h3 className="text-xl font-semibold">The Program</h3>
              <p className="mt-2 text-muted-foreground">
                An immersive learning experience covering everything from fundamentals to advanced techniques in Lumion and SketchUp.
              </p>
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animation="slide-in-up" delay="200ms">
            <div className="rounded-lg border bg-card p-6 text-center shadow-sm h-full md:p-8">
              <h3 className="text-xl font-semibold">Duration</h3>
              <p className="mt-2 text-muted-foreground">
                Flexible 8-week online course, designed to fit your schedule. Learn at your own pace with lifetime access to materials.
              </p>
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animation="slide-in-up" delay="400ms">
            <div className="rounded-lg border bg-card p-6 text-center shadow-sm h-full md:p-8">
              <h3 className="text-xl font-semibold">Future Scope</h3>
              <p className="mt-2 text-muted-foreground">
                Gain job-ready skills, build a professional portfolio, and open doors to careers in design, architecture, and visualization.
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
