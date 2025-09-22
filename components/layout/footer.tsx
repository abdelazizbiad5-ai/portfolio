import Link from 'next/link';
import { Code2, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">Alex Johnson</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Full-stack engineer passionate about creating exceptional digital experiences 
              and scalable solutions using modern technologies.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="https://github.com" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="https://linkedin.com" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="https://twitter.com" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="mailto:alex@example.com" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/#about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Featured Work</h3>
            <ul className="space-y-2">
              <li><Link href="/projects/cars-marketplace" className="text-gray-300 hover:text-white transition-colors">Cars Marketplace</Link></li>
              <li><Link href="/projects/real-estate" className="text-gray-300 hover:text-white transition-colors">Real Estate SaaS</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-white transition-colors">All Projects</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Alex Johnson. All rights reserved. Built with Next.js and deployed with love.
          </p>
        </div>
      </div>
    </footer>
  );
}