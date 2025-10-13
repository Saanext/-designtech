import { ScrollAnimationWrapper } from './scroll-animation-wrapper';

export function Location() {
  return (
    <section id="location" className="py-20 sm:py-32 bg-card">
      <div className="container mx-auto max-w-5xl px-4">
        <ScrollAnimationWrapper>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Location
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Visit us at our design studio.
            </p>
          </div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animation="fade-in" delay="200ms" className="mt-12">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.996533355994!2d73.8545330148929!3d18.52932338740411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c09b7a4b3f8f%3A0x286b7e0f8c7e9b4d!2sShaniwar%20Wada!5e0!3m2!1sen!2sin!4v1620986791986!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Our Location"
              className="absolute inset-0"
            ></iframe>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
