import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Software } from '@/components/software';
import { Audience } from '@/components/audience';
import { Curriculum } from '@/components/curriculum';
import { Highlights } from '@/components/highlights';
import { Testimonials } from '@/components/testimonials';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Software />
        <Audience />
        <Curriculum />
        <Highlights />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
