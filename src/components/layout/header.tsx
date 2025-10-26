
import Link from 'next/link';
import { RiceLogo } from '@/components/icons/rice-logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import LanguageSwitcher from './language-switcher';

export default function Header({ lng }: { lng: string }) {
  const navItems = [
    { href: `/${lng}/about`, label: 'About' },
    { href: `/${lng}/features`, label: 'Features' },
    { href: `/${lng}/investors`, label: 'Investors' },
    { href: `/${lng}/franchise`, label: 'Franchise' },
    { href: `/${lng}/farmers`, label: 'Farmers' },
    { href: `/${lng}/research`, label: 'Research' },
    { href: `/${lng}/blog`, label: 'Blog' },
    { href: `/${lng}/ecosystem`, label: 'Ecosystem' },
    { href: `/${lng}/contact`, label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href={`/${lng}`} className="flex items-center gap-2" aria-label="RICE Bharat Home">
          <RiceLogo className="h-8 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-4 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher lng={lng} />
        </nav>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-6">
                <Link href={`/${lng}`} className="flex items-center gap-2 text-lg font-semibold mb-4">
                  <RiceLogo className="h-8 w-auto" />
                  <span className="sr-only">RICE Bharat</span>
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground block py-1"
                  >
                    {item.label}
                  </Link>
                ))}
                <LanguageSwitcher lng={lng} />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
