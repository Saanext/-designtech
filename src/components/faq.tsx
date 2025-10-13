import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollAnimationWrapper } from './scroll-animation-wrapper';

const faqItems = [
  {
    question: "Is this course suitable for beginners?",
    answer: "Absolutely! We start with the fundamentals of both SketchUp and Lumia, so no prior experience is required. We'll guide you step-by-step from beginner to proficient."
  },
  {
    question: "What software do I need?",
    answer: "You will need the latest versions of SketchUp and Lumia. We provide guidance on how to get student licenses or trials where applicable."
  },
  {
    question: "How long will I have access to the course materials?",
    answer: "You get lifetime access to all course materials, including video lessons, project files, and any future updates. Learn at your own pace, whenever you want."
  },
  {
    question: "Will I get a certificate upon completion?",
    answer: "Yes, upon successfully completing the course and all its projects, you will receive a Certificate of Completion from Design tech to showcase your new skills."
  },
  {
    question: "Is there a community or support available?",
    answer: "Yes! You'll be invited to our exclusive student community where you can interact with peers, share your work, and get feedback from instructors."
  },
];


export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-32">
      <div className="container mx-auto max-w-3xl px-4">
        <ScrollAnimationWrapper className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions? We've got answers.
          </p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animation="fade-in" delay="200ms" className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
