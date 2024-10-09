import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from '@/components/motion/fade-in';
import { TextGenerateEffect } from '@/components/motion/text-generate-effect';

export default function HeroSection() {
  return (
    <FadeIn>
      <section className="relative h-[600px] flex items-center justify-center text-black bg-gray-100">
        <div className="absolute inset-0 bg-cover bg-center z-0" 
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"}}
        ></div>
        <div className="absolute inset-0 bg-white opacity-80 z-10"></div>
        <div className="relative z-20 text-center max-w-3xl mx-auto px-4">
          <TextGenerateEffect words="Bienvenue chez JD Motors 80" className="text-5xl font-bold mb-4" />
          <p className="text-xl mb-8">Votre spécialiste du négoce automobile à Amiens</p>
          <Link href="/vehicules">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 transition-colors">
              Découvrir nos véhicules
            </Button>
          </Link>
        </div>
      </section>
    </FadeIn>
  );
}