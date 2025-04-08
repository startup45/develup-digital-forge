
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Globe, Smartphone, Code, Shield, Database, Palette, Code2, Users } from 'lucide-react';

const Services = () => {
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

      {/* Hero Section */}
      <section className="pt-48 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Comprehensive digital solutions to help your business thrive in the modern world.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-96 h-96 bg-develup-blue rounded-full blur-[120px] -top-48 -right-48"></div>
          <div className="absolute w-96 h-96 bg-develup-purple rounded-full blur-[120px] -bottom-48 -left-48"></div>
        </div>
      </section>

      {/* Web Development Section */}
      <section id="web" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-on-scroll">
              <div className="bg-develup-blue/5 p-10 rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 z-0">
                  <div className="absolute w-40 h-40 bg-develup-blue rounded-full blur-[60px] top-10 right-10"></div>
                </div>
                <Globe className="w-16 h-16 text-develup-blue mb-6 relative z-10" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
                  Web Development
                </h2>
                <p className="text-gray-300 mb-6 relative z-10">
                  Custom websites and web applications with responsive design and optimal performance.
                </p>
                <ul className="space-y-3 mb-8 relative z-10">
                  <li className="flex items-start">
                    <span className="text-develup-blue mr-2">✓</span>
                    <span>Responsive website design and development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-develup-blue mr-2">✓</span>
                    <span>Progressive web applications (PWAs)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-develup-blue mr-2">✓</span>
                    <span>E-commerce solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-develup-blue mr-2">✓</span>
                    <span>Content management systems</span>
                  </li>
                </ul>
                <Button className="bg-develup-blue hover:bg-develup-blue/80 text-white">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="order-first lg:order-last reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-2xl font-bold mb-4">Modern Web Solutions</h3>
              <p className="text-gray-300 mb-6">
                Our web development team creates cutting-edge websites and web applications that 
                are not only visually stunning but also functionally robust. We focus on building 
                responsive, accessible, and high-performing web solutions that deliver exceptional 
                user experiences.
              </p>
              <p className="text-gray-300 mb-6">
                Using the latest technologies and frameworks, we ensure your website stands out 
                from the competition while achieving your business goals. Whether you need a 
                simple informational website or a complex web application, we've got you covered.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-develup-gray p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Technologies</h4>
                  <p className="text-sm text-gray-400">React, Vue, Angular, Node.js</p>
                </div>
                <div className="bg-develup-gray p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Timeline</h4>
                  <p className="text-sm text-gray-400">4-12 weeks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Development Section */}
      <section id="app" className="py-20 bg-develup-darker">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-2xl font-bold mb-4">Mobile Experiences</h3>
              <p className="text-gray-300 mb-6">
                Our app development team specializes in creating native and cross-platform 
                mobile applications that deliver exceptional user experiences. We focus on 
                intuitive interfaces, smooth performance, and robust functionality.
              </p>
              <p className="text-gray-300 mb-6">
                From concept to deployment, we handle every aspect of the app development 
                process, ensuring your application meets the highest standards of quality 
                and user satisfaction. Our apps are designed to work flawlessly across 
                different devices and platforms.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-develup-gray p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Platforms</h4>
                  <p className="text-sm text-gray-400">iOS, Android, Cross-platform</p>
                </div>
                <div className="bg-develup-gray p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Timeline</h4>
                  <p className="text-sm text-gray-400">8-16 weeks</p>
                </div>
              </div>
            </div>
            <div className="reveal-on-scroll">
              <div className="bg-develup-mint/5 p-10 rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 z-0">
                  <div className="absolute w-40 h-40 bg-develup-mint rounded-full blur-[60px] bottom-10 left-10"></div>
                </div>
                <Smartphone className="w-16 h-16 text-develup-mint mb-6 relative z-10" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
                  App Development
                </h2>
                <p className="text-gray-300 mb-6 relative z-10">
                  Native and cross-platform mobile applications for iOS and Android devices.
                </p>
                <ul className="space-y-3 mb-8 relative z-10">
                  <li className="flex items-start">
                    <span className="text-develup-mint mr-2">✓</span>
                    <span>iOS and Android native apps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-develup-mint mr-2">✓</span>
                    <span>Cross-platform development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-develup-mint mr-2">✓</span>
                    <span>UI/UX mobile design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-develup-mint mr-2">✓</span>
                    <span>App maintenance and updates</span>
                  </li>
                </ul>
                <Button className="bg-develup-mint hover:bg-develup-mint/80 text-develup-darker">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center reveal-on-scroll">
            More Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Software Development */}
            <div id="software" className="bg-develup-gray p-8 rounded-xl reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              <Code className="w-12 h-12 text-develup-purple mb-6" />
              <h3 className="text-2xl font-bold mb-4">Software Development</h3>
              <p className="text-gray-300 mb-6">
                Tailored software solutions to automate processes and improve efficiency.
                Our team builds custom software that addresses your specific business needs.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm">
                  <span className="text-develup-purple mr-2">✓</span>
                  <span>Custom business applications</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-develup-purple mr-2">✓</span>
                  <span>Process automation</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-develup-purple mr-2">✓</span>
                  <span>Integration with existing systems</span>
                </li>
              </ul>
              <Button variant="outline" className="border-white/20 hover:bg-white/5">
                Learn More
              </Button>
            </div>

            {/* Cybersecurity */}
            <div id="cyber" className="bg-develup-gray p-8 rounded-xl reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <Shield className="w-12 h-12 text-develup-blue mb-6" />
              <h3 className="text-2xl font-bold mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-6">
                Protecting your digital assets with robust security measures and monitoring.
                We ensure your systems and data are safe from threats.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm">
                  <span className="text-develup-blue mr-2">✓</span>
                  <span>Security assessments</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-develup-blue mr-2">✓</span>
                  <span>Penetration testing</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-develup-blue mr-2">✓</span>
                  <span>Security monitoring</span>
                </li>
              </ul>
              <Button variant="outline" className="border-white/20 hover:bg-white/5">
                Learn More
              </Button>
            </div>

            {/* Data Analytics */}
            <div id="data" className="bg-develup-gray p-8 rounded-xl reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              <Database className="w-12 h-12 text-develup-mint mb-6" />
              <h3 className="text-2xl font-bold mb-4">Data Analytics</h3>
              <p className="text-gray-300 mb-6">
                Extracting meaningful insights from your data to drive informed decisions.
                Turn your raw data into actionable business intelligence.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm">
                  <span className="text-develup-mint mr-2">✓</span>
                  <span>Data visualization</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-develup-mint mr-2">✓</span>
                  <span>Business intelligence</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-develup-mint mr-2">✓</span>
                  <span>Predictive analytics</span>
                </li>
              </ul>
              <Button variant="outline" className="border-white/20 hover:bg-white/5">
                Learn More
              </Button>
            </div>

            {/* UI/UX Design */}
            <div id="design" className="bg-develup-gray p-8 rounded-xl reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
              <Palette className="w-12 h-12 text-develup-purple mb-6" />
              <h3 className="text-2xl font-bold mb-4">UI/UX Design</h3>
              <p className="text-gray-300 mb-6">
                Creating intuitive and engaging user experiences for your digital products.
                We design interfaces that users love to interact with.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm">
                  <span className="text-develup-purple mr-2">✓</span>
                  <span>User research</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-develup-purple mr-2">✓</span>
                  <span>Interface design</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-develup-purple mr-2">✓</span>
                  <span>Usability testing</span>
                </li>
              </ul>
              <Button variant="outline" className="border-white/20 hover:bg-white/5">
                Learn More
              </Button>
            </div>

            {/* Technical Consulting */}
            <div id="consulting" className="bg-develup-gray p-8 rounded-xl reveal-on-scroll" style={{ transitionDelay: '500ms' }}>
              <Code2 className="w-12 h-12 text-develup-blue mb-6" />
              <h3 className="text-2xl font-bold mb-4">Technical Consulting</h3>
              <p className="text-gray-300 mb-6">
                Expert guidance on technology strategy, implementation, and optimization.
                We help you make informed technical decisions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm">
                  <span className="text-develup-blue mr-2">✓</span>
                  <span>Technology assessment</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-develup-blue mr-2">✓</span>
                  <span>Digital transformation</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-develup-blue mr-2">✓</span>
                  <span>Solution architecture</span>
                </li>
              </ul>
              <Button variant="outline" className="border-white/20 hover:bg-white/5">
                Learn More
              </Button>
            </div>

            {/* Project Management */}
            <div id="management" className="bg-develup-gray p-8 rounded-xl reveal-on-scroll" style={{ transitionDelay: '600ms' }}>
              <Users className="w-12 h-12 text-develup-mint mb-6" />
              <h3 className="text-2xl font-bold mb-4">Project Management</h3>
              <p className="text-gray-300 mb-6">
                Ensuring your projects are delivered on time, within budget, and to specification.
                Our project management approach keeps everything on track.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm">
                  <span className="text-develup-mint mr-2">✓</span>
                  <span>Agile methodologies</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-develup-mint mr-2">✓</span>
                  <span>Resource allocation</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-develup-mint mr-2">✓</span>
                  <span>Risk management</span>
                </li>
              </ul>
              <Button variant="outline" className="border-white/20 hover:bg-white/5">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-develup-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal-on-scroll">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss how we can help bring your ideas to life.
            </p>
            <Button className="bg-develup-blue hover:bg-develup-blue/80 text-white px-8 py-6 text-lg">
              Get a Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
