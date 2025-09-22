'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Code2 } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Cars Demo', href: '/projects/cars-marketplace' },
  { name: 'Real Estate Demo', href: '/projects/real-estate' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b' 
        : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
            <Code2 className="w-8 h-8 text-blue-600" />
            <span className={cn(
              'transition-colors',
              scrolled ? 'text-gray-900' : 'text-white'
            )}>
              Alex Johnson
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'transition-colors font-medium',
                  pathname === item.href
                    ? 'text-blue-600'
                    : scrolled
                    ? 'text-gray-700 hover:text-blue-600'
                    : 'text-white hover:text-blue-200'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant={scrolled ? "default" : "secondary"} 
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Contact Me
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={cn('w-6 h-6', scrolled ? 'text-gray-900' : 'text-white')} />
            ) : (
              <Menu className={cn('w-6 h-6', scrolled ? 'text-gray-900' : 'text-white')} />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block px-3 py-2 text-base font-medium rounded-md transition-colors',
                  pathname === item.href
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}