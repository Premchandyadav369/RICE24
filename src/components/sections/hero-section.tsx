import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, TrendingUp, Building, Link2 } from 'lucide-react';
import { useTranslation } from '@/i18n';

export default async function HeroSection({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng);
  return (
    <section id="hero" className="relative bg-gradient-to-b from-green-50 via-amber-50 to-background py-20 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg"
          alt="Rural landscape with technology integration"
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
          data-ai-hint="farmer field"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
          {t('hero_title')}
        </h1>

        {/* Tagline */}
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground font-medium">
          {t('hero_tagline')}
        </p>

        {/* Explainer video placeholder */}
        <div className="mt-8 mx-auto w-full max-w-2xl h-80 bg-slate-200/50 rounded-lg flex items-center justify-center border border-dashed">
            <p className="text-muted-foreground">Quick explainer animation or short video here</p>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform transition-transform hover:scale-105">
            <Link href={`/${lng}/contact`}>
              Join as Farmer <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 shadow-md transform transition-transform hover:scale-105">
            <Link href={`/${lng}/investors`}>
              Partner with Us
            </Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="text-primary hover:bg-primary/10 transform transition-transform hover:scale-105">
            <Link href={`/${lng}/investors`}>
              Invest in RICE
            </Link>
          </Button>
        </div>

        {/* Impact Counters */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <Users className="h-10 w-10 mx-auto text-primary" />
            <p className="text-3xl font-bold mt-2">10</p>
            <p className="text-muted-foreground">Farmers Reached</p>
          </div>
          <div className="text-center">
            <TrendingUp className="h-10 w-10 mx-auto text-primary" />
            <p className="text-3xl font-bold mt-2">10</p>
            <p className="text-muted-foreground">Crops Predicted</p>
          </div>
          <div className="text-center">
            <Building className="h-10 w-10 mx-auto text-primary" />
            <p className="text-3xl font-bold mt-2">10+</p>
            <p className="text-muted-foreground">Centers Planned</p>
          </div>
          <div className="text-center">
            <Link2 className="h-10 w-10 mx-auto text-primary" />
            <p className="text-3xl font-bold mt-2">0</p>
            <p className="text-muted-foreground">Market Partners Linked</p>
          </div>
        </div>
      </div>
    </section>
  );
}
