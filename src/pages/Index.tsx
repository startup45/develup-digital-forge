
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThreeBackground from '@/components/ThreeBackground';
import ServiceCard from '@/components/ServiceCard';
import ValueCard from '@/components/ValueCard';
import { Button } from '@/components/ui/button';
import { Code, Globe, Smartphone, Shield, Database, Palette, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, {
      threshold: 0.1
    });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-develup-dark text-white">
      <Navbar />
      <ThreeBackground />

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 md:pt-60 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              From <span className="text-gradient">Idea</span> to <span className="text-gradient">Impact</span> – We Develup.
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A remote-first tech company building scalable digital products that drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-develup-blue hover:bg-develup-blue/80 text-white px-6 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-white/20 bg-transparent hover:bg-white/5 text-white px-6 py-6 text-lg">
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-develup-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital solutions to help your business thrive in the modern world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              <ServiceCard 
                title="Web Development"
                description="Custom websites and web applications with responsive design and optimal performance."
                icon={Globe}
                color="blue"
              />
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <ServiceCard 
                title="App Development"
                description="Native and cross-platform mobile applications for iOS and Android devices."
                icon={Smartphone}
                color="mint"
              />
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              <ServiceCard 
                title="Software Development"
                description="Tailored software solutions to automate processes and improve efficiency."
                icon={Code}
                color="purple"
              />
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
              <ServiceCard 
                title="Cybersecurity"
                description="Protecting your digital assets with robust security measures and monitoring."
                icon={Shield}
                color="blue"
              />
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: '500ms' }}>
              <ServiceCard 
                title="Data Analytics"
                description="Extracting meaningful insights from your data to drive informed decisions."
                icon={Database}
                color="mint"
              />
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: '600ms' }}>
              <ServiceCard 
                title="UI/UX Design"
                description="Creating intuitive and engaging user experiences for your digital products."
                icon={Palette}
                color="purple"
              />
            </div>
          </div>
          
          <div className="text-center mt-12 reveal-on-scroll">
            <Link to="/services">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-on-scroll">
              <div className="relative">
                <div className="aspect-square bg-develup-gray rounded-3xl overflow-hidden grid-pattern">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 bg-develup-blue rounded-full opacity-20 animate-pulse absolute"></div>
                    <div className="w-60 h-60 bg-develup-purple rounded-full opacity-10 animate-pulse delay-300 absolute"></div>
                    <div className="w-80 h-80 bg-develup-mint rounded-full opacity-5 animate-float absolute"></div>
                    <div className="z-10 relative transform rotate-12">
                      <div className="w-12 h-12 bg-develup-blue rounded-lg absolute -top-6 -left-6 animate-float" style={{ animationDelay: '0.5s' }}></div>
                      <div className="w-8 h-8 bg-develup-mint rounded-lg absolute top-20 -right-4 animate-float" style={{ animationDelay: '1.5s' }}></div>
                      <div className="w-10 h-10 bg-develup-purple rounded-lg absolute -bottom-6 left-10 animate-float" style={{ animationDelay: '1s' }}></div>
                      <div className="bg-develup-gray glass-morphism p-4 rounded-lg w-60">
                        <div className="h-2 w-10 bg-develup-blue rounded mb-3"></div>
                        <div className="h-2 w-20 bg-white/20 rounded mb-3"></div>
                        <div className="h-2 w-16 bg-white/20 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Makes Us <span className="text-gradient">Unique</span>
              </h2>
              <p className="text-gray-300 mb-8">
                At Develupers, we combine technical expertise with a passion for innovation. 
                Our team of skilled professionals is committed to delivering top-quality solutions 
                that help businesses thrive in an increasingly digital world.
              </p>
              <div className="space-y-6">
                <ValueCard 
                  title="Automation"
                  description="We leverage automation to streamline processes and increase efficiency."
                  icon={Code}
                />
                <ValueCard 
                  title="AI Integration"
                  description="Advanced artificial intelligence solutions to give your business a competitive edge."
                  icon={Database}
                />
                <ValueCard 
                  title="Security First"
                  description="Your data and systems are protected with industry-leading security measures."
                  icon={Shield}
                />
                <ValueCard 
                  title="Transparent Process"
                  description="Clear communication and visibility throughout the development lifecycle."
                  icon={Briefcase}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-develup-gray relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-gradient">Develup</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's work together to turn your ideas into impactful digital solutions.
            </p>
            <Button className="bg-develup-blue hover:bg-develup-blue/80 text-white px-8 py-6 text-lg">
              Get a Free Consultation
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-96 h-96 bg-develup-blue rounded-full blur-[120px] -top-48 -right-48"></div>
          <div className="absolute w-96 h-96 bg-develup-purple rounded-full blur-[120px] -bottom-48 -left-48"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
