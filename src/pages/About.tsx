
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen bg-develup-dark text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Develupers</span>
            </h1>
            <p className="text-xl text-gray-300">
              From Idea to Impact – We Develup.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-96 h-96 bg-develup-purple rounded-full blur-[120px] -top-48 -right-48"></div>
          <div className="absolute w-96 h-96 bg-develup-blue rounded-full blur-[120px] -bottom-48 -left-48"></div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6">
                Founded in 2021, Develupers started with a simple mission: to help businesses 
                leverage technology to achieve their goals. What began as a small team of 
                passionate developers has grown into a comprehensive digital solutions provider 
                with expertise across multiple domains.
              </p>
              <p className="text-gray-300 mb-6">
                We believe that technology should be accessible, adaptable, and aligned with 
                business objectives. Our remote-first approach allows us to bring together 
                the best talent from around the world, creating diverse teams that bring 
                fresh perspectives to every project.
              </p>
              <p className="text-gray-300">
                Today, we serve clients ranging from startups to established enterprises, 
                delivering solutions that drive growth, efficiency, and innovation. Our 
                commitment to quality, transparency, and client satisfaction remains at 
                the core of everything we do.
              </p>
            </div>
            <div className="order-first lg:order-last reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="relative">
                <div className="aspect-square bg-develup-gray rounded-3xl overflow-hidden grid-pattern">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 bg-develup-blue rounded-full opacity-20 animate-pulse absolute"></div>
                    <div className="w-60 h-60 bg-develup-purple rounded-full opacity-10 animate-pulse delay-300 absolute"></div>
                    <div className="z-10 relative">
                      <div className="bg-develup-mint text-develup-darker font-bold px-6 py-3 rounded-full">
                        From Idea to Impact
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-develup-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The principles that guide our work and shape our culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-develup-gray p-8 rounded-lg reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div className="h-12 w-12 bg-develup-blue/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-develup-blue text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-400">
                We constantly explore new technologies and approaches to deliver cutting-edge solutions 
                that keep our clients ahead of the curve.
              </p>
            </div>

            <div className="bg-develup-gray p-8 rounded-lg reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="h-12 w-12 bg-develup-purple/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-develup-purple text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-400">
                We are committed to delivering high-quality work that exceeds expectations and 
                stands the test of time.
              </p>
            </div>

            <div className="bg-develup-gray p-8 rounded-lg reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              <div className="h-12 w-12 bg-develup-mint/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-develup-mint text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-400">
                We believe in the power of teamwork, both within our organization and with our clients, 
                to achieve outstanding results.
              </p>
            </div>

            <div className="bg-develup-gray p-8 rounded-lg reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
              <div className="h-12 w-12 bg-develup-blue/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-develup-blue text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-gray-400">
                We maintain open and honest communication throughout our processes, ensuring clients 
                are always informed and involved.
              </p>
            </div>

            <div className="bg-develup-gray p-8 rounded-lg reveal-on-scroll" style={{ transitionDelay: '500ms' }}>
              <div className="h-12 w-12 bg-develup-purple/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-develup-purple text-2xl font-bold">5</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Adaptability</h3>
              <p className="text-gray-400">
                We embrace change and remain flexible, allowing us to pivot quickly and respond 
                effectively to evolving needs and challenges.
              </p>
            </div>

            <div className="bg-develup-gray p-8 rounded-lg reveal-on-scroll" style={{ transitionDelay: '600ms' }}>
              <div className="h-12 w-12 bg-develup-mint/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-develup-mint text-2xl font-bold">6</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-400">
                We conduct our business with the highest ethical standards, building trust through 
                consistency and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-3xl font-bold mb-6">Our Process</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A systematic approach to turning ideas into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-develup-gray p-8 rounded-lg relative reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-develup-blue flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Discovery</h3>
              <p className="text-gray-400">
                We start by understanding your business, goals, and requirements through in-depth consultations.
              </p>
            </div>

            <div className="bg-develup-gray p-8 rounded-lg relative reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-develup-purple flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Planning</h3>
              <p className="text-gray-400">
                We create a detailed roadmap, outlining scope, timeline, resources, and deliverables.
              </p>
            </div>

            <div className="bg-develup-gray p-8 rounded-lg relative reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-develup-mint flex items-center justify-center">
                <span className="text-develup-darker font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Execution</h3>
              <p className="text-gray-400">
                Our team develops, tests, and refines your solution using agile methodologies.
              </p>
            </div>

            <div className="bg-develup-gray p-8 rounded-lg relative reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-develup-blue flex items-center justify-center">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Launch & Support</h3>
              <p className="text-gray-400">
                We deploy your solution and provide ongoing maintenance and enhancement services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-develup-gray relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center reveal-on-scroll">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's turn your ideas into impactful digital solutions.
            </p>
            <Button className="bg-develup-blue hover:bg-develup-blue/80 text-white px-8 py-6 text-lg">
              Start a Project
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-96 h-96 bg-develup-mint rounded-full blur-[120px] -top-48 -right-48"></div>
          <div className="absolute w-96 h-96 bg-develup-blue rounded-full blur-[120px] -bottom-48 -left-48"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
