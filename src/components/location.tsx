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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.45788226257!2d73.74015607521789!3d18.64332836485848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c058376a91%3A0xd6c5963983a758f1!2sSankalp%20Nagari%2C%20Dehu%20Road%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20412101%2C%20India!5e0!3m2!1sen!2sus!4v1719598282386!5m2!1sen!2sus"
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
