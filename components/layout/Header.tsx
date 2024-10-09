"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/motion/fade-in';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <FadeIn>
      <header className="bg-white text-black shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">JD Motors 80</Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/vehicules" className="hover:text-gray-600 transition-colors">Véhicules</Link>
              <Link href="/services" className="hover:text-gray-600 transition-colors">Services</Link>
              <Link href="/a-propos" className="hover:text-gray-600 transition-colors">À Propos</Link>
              <Link href="/contact" className="hover:text-gray-600 transition-colors">Contact</Link>
            </nav>
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link href="/vehicules" className="hover:text-gray-600 transition-colors">Véhicules</Link>
              <Link href="/services" className="hover:text-gray-600 transition-colors">Services</Link>
              <Link href="/a-propos" className="hover:text-gray-600 transition-colors">À Propos</Link>
              <Link href="/contact" className="hover:text-gray-600 transition-colors">Contact</Link>
            </nav>
          </div>
        )}
      </header>
    </FadeIn>
  );
};

export default Header;