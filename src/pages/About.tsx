
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import ValueCard from '@/components/ValueCard';
import { Shield, Zap, BarChart, Users } from 'lucide-react';

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
              Transforming Ideas into Digital Reality
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
                Founded with a vision to bridge the gap between innovative ideas and cutting-edge technology, 
                Develupers emerged as a team of passionate tech enthusiasts determined to revolutionize digital solutions.
                Based in Erode, Tamil Nadu, we've grown from a small local team to a global remote-first company 
                with talent spanning multiple continents.
              </p>
              <p className="text-gray-300 mb-6">
                Our journey began with a simple belief: technology should enable businesses to thrive, 
                not create barriers. We've cultivated an environment where creativity meets technical excellence, 
                allowing us to deliver solutions that don't just meet expectations—they exceed them.
              </p>
              <p className="text-gray-300">
                Today, we serve clients ranging from ambitious startups to established enterprises, providing 
                end-to-end digital transformation services that drive growth, efficiency, and innovation. 
                Our diverse portfolio spans web and mobile development, cybersecurity, data analytics, 
                and strategic consulting—all delivered with our signature blend of technical precision and creative vision.
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
            <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The principles that guide our work, shape our culture, and define our relationships with clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ValueCard 
              icon={Shield} 
              title="Security-First Approach" 
              description="We integrate advanced security practices into every project from day one, ensuring your digital assets are protected against evolving threats."
            />
            
            <ValueCard 
              icon={Zap} 
              title="Rapid Delivery" 
              description="Our agile methodology and optimized workflows enable us to deliver high-quality solutions with industry-leading turnaround times."
            />
            
            <ValueCard 
              icon={BarChart} 
              title="Data-Driven Excellence" 
              description="We leverage analytics and performance metrics to continuously improve our processes and deliver measurable results for our clients."
            />
            
            <ValueCard 
              icon={Users} 
              title="Client Collaboration" 
              description="We view our clients as partners, maintaining transparent communication and involving you in key decisions throughout the development journey."
            />
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-3xl font-bold mb-6">Our Process</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A systematic approach to turning your vision into digital reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-develup-gray p-8 rounded-lg relative reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-develup-blue flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Discovery</h3>
              <p className="text-gray-400">
                We dive deep into understanding your business objectives, market position, and specific requirements through collaborative strategy sessions.
              </p>
            </div>

            <div className="bg-develup-gray p-8 rounded-lg relative reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-develup-purple flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Design & Planning</h3>
              <p className="text-gray-400">
                Our team crafts a comprehensive solution blueprint, outlining architecture, technology stack, and implementation roadmap tailored to your needs.
              </p>
            </div>

            <div className="bg-develup-gray p-8 rounded-lg relative reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-develup-mint flex items-center justify-center">
                <span className="text-develup-darker font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Development</h3>
              <p className="text-gray-400">
                Using agile methodologies, we develop your solution with regular sprints, continuous integration, and rigorous quality assurance at every stage.
              </p>
            </div>

            <div className="bg-develup-gray p-8 rounded-lg relative reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-develup-blue flex items-center justify-center">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Deployment & Support</h3>
              <p className="text-gray-400">
                We ensure smooth deployment and provide comprehensive training, documentation, and ongoing maintenance to maximize your solution's long-term value.
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
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with Develupers to bring your vision to life with cutting-edge technology and expert guidance.
            </p>
            <Button className="bg-develup-blue hover:bg-develup-blue/80 text-white px-8 py-6 text-lg">
              Start Your Project
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
