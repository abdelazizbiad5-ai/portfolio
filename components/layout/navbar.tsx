'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Code2 } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/#contact' },
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

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && !(event.target as Element).closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b' 
          : 'bg-transparent'
      )}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 font-bold text-xl z-50">
              <Code2 className="w-8 h-8 text-blue-600" />
              <span className={cn(
                'transition-colors',
                scrolled ? 'text-gray-900' : 'text-white'
              )}>
                Alex Johnson
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'transition-colors font-medium hover:scale-105 transform duration-200',
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
                asChild
              >
                <Link href="/#contact">Contact Me</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="mobile-menu-container lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="relative z-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-900" />
                ) : (
                  <Menu className={cn('w-6 h-6', scrolled ? 'text-gray-900' : 'text-white')} />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="mobile-menu-container fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full pt-20 pb-6 px-6">
              <div className="flex-1">
                <nav className="space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        'block px-4 py-3 text-lg font-medium rounded-lg transition-colors duration-200',
                        pathname === item.href
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      )}
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="pt-6 border-t">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  asChild
                  onClick={handleLinkClick}
                >
                  <Link href="/#contact">Contact Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}