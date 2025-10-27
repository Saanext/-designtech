import Link from 'next/link';
import { CurrentYear } from './current-year';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold">Design tech</p>
          <p className="text-sm text-muted-foreground">info.designtech18@gmail.com</p>
          <p className="text-sm text-muted-foreground">8856096064</p>
        </div>
        <p className="text-center text-sm text-muted-foreground order-last sm:order-none">
          © <CurrentYear /> Design tech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
