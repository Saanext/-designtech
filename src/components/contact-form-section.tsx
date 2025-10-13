import { ContactForm } from './contact-form';

export function ContactFormSection() {
    return (
        <section id="enroll" className="w-full bg-card py-20 sm:py-32">
            <div className="container mx-auto max-w-2xl px-4">
                <div className="rounded-lg border bg-background p-8 shadow-lg">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
