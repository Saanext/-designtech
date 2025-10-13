import { ContactForm } from './contact-form';

export function Hero() {
  return (
    <section id="enroll" className="w-full bg-card py-20 sm:py-32">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Master Interior Design with Lumia & SketchUp
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
            Unlock your creative potential and build stunning 3D visualizations. Join our expert-led classes today.
          </p>
        </div>
        <div className="rounded-lg border bg-background p-8 shadow-lg">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
