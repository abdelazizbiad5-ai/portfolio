import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Let's Connect</h3>
                <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a specific project in mind or just want to chat about technology, 
                  feel free to reach out.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm md:text-base font-semibold">Email</p>
                    <p className="text-sm md:text-base text-gray-600">alex@example.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm md:text-base font-semibold">Phone</p>
                    <p className="text-sm md:text-base text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm md:text-base font-semibold">Location</p>
                    <p className="text-sm md:text-base text-gray-600">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="text-xs md:text-sm font-medium mb-2 block">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="text-xs md:text-sm font-medium mb-2 block">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="text-xs md:text-sm font-medium mb-2 block">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <label htmlFor="subject" className="text-xs md:text-sm font-medium mb-2 block">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Let's work together" />
                </div>

                <div>
                  <label htmlFor="message" className="text-xs md:text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    rows={4}
                    className="md:rows-6"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}