'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgdjE0aDEwVjM0em0wLTE2VjRIMjZ2MTRoMTBWMTggem0tMTQgMHYxNEg0VjE4aDEwVjRIMjZ2MTBoMTBWMTggeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <Badge className="mb-6 bg-emerald-500/20 text-emerald-100 border-emerald-500/30 hover:bg-emerald-500/30">
            Available for new opportunities
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Full-Stack Engineer
            <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Building the Future
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            I create exceptional web applications and digital experiences using modern technologies. 
            Specializing in React, Next.js, and full-stack development with a focus on user experience and scalable architecture.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/projects">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                View My Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6">
            <Link href="https://github.com" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="https://linkedin.com" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="mailto:alex@example.com" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full p-1">
          <div className="w-1 h-3 bg-white rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}