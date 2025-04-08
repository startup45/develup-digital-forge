
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
    // In a real application, you'd integrate with a form submission service
  };

  return (
    <div className="min-h-screen bg-develup-dark text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-300">
              Have questions or ready to start your project? Contact us today.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-96 h-96 bg-develup-blue rounded-full blur-[120px] -top-48 -left-48"></div>
          <div className="absolute w-96 h-96 bg-develup-purple rounded-full blur-[120px] -bottom-48 -right-48"></div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="reveal-on-scroll">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below, and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Name
                    </label>
                    <Input 
                      id="name" 
                      className="bg-develup-gray border-none text-white" 
                      placeholder="John Doe" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      className="bg-develup-gray border-none text-white" 
                      placeholder="john@example.com" 
                      required 
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    className="bg-develup-gray border-none text-white" 
                    placeholder="How can we help you?" 
                    required 
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Message
                  </label>
                  <Textarea 
                    id="message" 
                    className="bg-develup-gray border-none text-white min-h-[150px]" 
                    placeholder="Tell us about your project or inquiry..." 
                    required 
                  />
                </div>

                <Button type="submit" className="bg-develup-blue hover:bg-develup-blue/80 text-white w-full">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-300 mb-8">
                Reach out to us directly through any of these channels.
              </p>

              <div className="space-y-6">
                <Card className="bg-develup-gray border-none">
                  <CardContent className="flex items-start p-6">
                    <div className="bg-develup-blue/10 p-3 rounded-lg mr-4">
                      <Mail className="w-6 h-6 text-develup-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:contact@develupers.com" className="text-gray-300 hover:text-develup-blue transition-colors">
                        contact@develupers.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-develup-gray border-none">
                  <CardContent className="flex items-start p-6">
                    <div className="bg-develup-purple/10 p-3 rounded-lg mr-4">
                      <Phone className="w-6 h-6 text-develup-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a href="tel:+11234567890" className="text-gray-300 hover:text-develup-purple transition-colors">
                        +1 (123) 456-7890
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-develup-gray border-none">
                  <CardContent className="flex items-start p-6">
                    <div className="bg-develup-mint/10 p-3 rounded-lg mr-4">
                      <Globe className="w-6 h-6 text-develup-mint" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Website</h3>
                      <a href="https://www.develupers.com" className="text-gray-300 hover:text-develup-mint transition-colors">
                        www.develupers.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-develup-gray border-none">
                  <CardContent className="flex items-start p-6">
                    <div className="bg-develup-blue/10 p-3 rounded-lg mr-4">
                      <MapPin className="w-6 h-6 text-develup-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Headquarters</h3>
                      <p className="text-gray-300">
                        Remote-first company with team members worldwide
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-develup-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Find quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-develup-gray p-6 rounded-lg reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              <h3 className="text-xl font-semibold mb-3">How long does a typical project take?</h3>
              <p className="text-gray-400">
                Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, 
                while a complex application could take 3-6 months or more. We'll provide a detailed timeline 
                during our initial consultation.
              </p>
            </div>

            <div className="bg-develup-gray p-6 rounded-lg reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-xl font-semibold mb-3">What are your payment terms?</h3>
              <p className="text-gray-400">
                We typically work on a milestone-based payment schedule. This includes an initial deposit, 
                followed by payments at key project milestones, and a final payment upon project completion. 
                We can discuss specific terms based on your project needs.
              </p>
            </div>

            <div className="bg-develup-gray p-6 rounded-lg reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              <h3 className="text-xl font-semibold mb-3">Do you provide ongoing support?</h3>
              <p className="text-gray-400">
                Yes, we offer various maintenance and support packages to ensure your digital products 
                continue to perform optimally after launch. These can include updates, security patches, 
                performance monitoring, and feature enhancements.
              </p>
            </div>

            <div className="bg-develup-gray p-6 rounded-lg reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
              <h3 className="text-xl font-semibold mb-3">How do you handle confidentiality?</h3>
              <p className="text-gray-400">
                We take confidentiality seriously and are happy to sign NDAs before discussing your project 
                in detail. All client information and project details are kept strictly confidential.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
