import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Software } from '@/components/software';
import { Audience } from '@/components/audience';
import { Curriculum } from '@/components/curriculum';
import { Highlights } from '@/components/highlights';
import { Location } from '@/components/location';
import { Faq } from '@/components/faq';
import { Footer } from '@/components/footer';
import { ContactFormSection } from '@/components/contact-form-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Software />
        <Audience />
        <Curriculum />
        <Highlights />
        <Location />
        <Faq />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}
