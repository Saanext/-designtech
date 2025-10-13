import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Audience } from '@/components/audience';
import { Curriculum } from '@/components/curriculum';
import { Highlights } from '@/components/highlights';
import { Testimonials } from '@/components/testimonials';
import { ContactForm } from '@/components/contact-form';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Audience />
        <Curriculum />
        <Highlights />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
