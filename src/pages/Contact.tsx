
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
              Let's discuss how we can elevate your digital presence and drive your business forward.
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
              <h2 className="text-2xl font-bold mb-6">Start the Conversation</h2>
              <p className="text-gray-300 mb-8">
                Whether you're looking for a complete digital transformation, a specific technical solution, or simply want to explore possibilities, we're here to help. Fill out the form, and our team will get back to you within 24 hours.
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
                    placeholder="Project Inquiry / Collaboration / Support" 
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
                    placeholder="Tell us about your project goals, timeline, and any specific requirements..." 
                    required 
                  />
                </div>

                <Button type="submit" className="bg-develup-blue hover:bg-develup-blue/80 text-white w-full">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
              <p className="text-gray-300 mb-8">
                While we're based in Erode, Tamil Nadu, India, our team works globally. We're always available to discuss your project, answer questions, or provide support through multiple channels.
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
                      <p className="text-gray-400 text-sm mt-1">
                        For quotes, inquiries, and support
                      </p>
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
                      <p className="text-gray-400 text-sm mt-1">
                        Monday-Friday, 9AM-6PM IST
                      </p>
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
                      <p className="text-gray-400 text-sm mt-1">
                        Explore our services and portfolio
                      </p>
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
                        Erode, Tamil Nadu, India
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
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
              Get quick answers to common questions about our services and collaborative process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-develup-gray p-6 rounded-lg reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              <h3 className="text-xl font-semibold mb-3">How do you handle projects across different time zones?</h3>
              <p className="text-gray-400">
                As a global remote-first company, we're experienced in working across time zones. We establish 
                communication protocols and overlapping work hours to ensure seamless collaboration with clients 
                worldwide, backed by project management tools that provide real-time updates and transparency.
              </p>
            </div>

            <div className="bg-develup-gray p-6 rounded-lg reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-xl font-semibold mb-3">What's your typical project workflow?</h3>
              <p className="text-gray-400">
                We follow an agile development approach with regular sprints and client checkpoints. 
                After the initial discovery phase, we establish clear milestones with deliverables and 
                feedback opportunities. This ensures you're always informed and involved in the development 
                process from concept to completion.
              </p>
            </div>

            <div className="bg-develup-gray p-6 rounded-lg reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              <h3 className="text-xl font-semibold mb-3">Do you provide ongoing maintenance?</h3>
              <p className="text-gray-400">
                Yes, we offer comprehensive maintenance packages to ensure your digital solutions remain 
                secure, performant, and up-to-date. Our support options include regular updates, security 
                monitoring, performance optimization, and technical assistance based on your specific needs 
                and budget.
              </p>
            </div>

            <div className="bg-develup-gray p-6 rounded-lg reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
              <h3 className="text-xl font-semibold mb-3">How do you ensure project security?</h3>
              <p className="text-gray-400">
                Security is integrated into every phase of our development process. We implement industry 
                best practices for secure coding, conduct regular vulnerability assessments, use encrypted 
                communications, and follow strict data protection protocols. All client information and 
                project details are kept confidential under NDA.
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
