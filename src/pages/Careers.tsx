
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CareerCard from '@/components/CareerCard';
import { Button } from '@/components/ui/button';

const Careers = () => {
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
              Join Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Work with us to shape the future of technology in a collaborative, remote-first environment.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-96 h-96 bg-develup-purple rounded-full blur-[120px] -top-48 -left-48"></div>
          <div className="absolute w-96 h-96 bg-develup-blue rounded-full blur-[120px] -bottom-48 right-0"></div>
        </div>
      </section>

      {/* Career Values */}
      <section className="py-16 bg-develup-darker">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal-on-scroll">
            <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
            <p className="text-gray-300">
              At Develupers, we believe in creating an environment where talent can thrive. 
              Our remote-first approach allows you to work from anywhere while being part of a global team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-develup-gray p-8 rounded-lg reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div className="h-12 w-12 bg-develup-blue/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-develup-blue text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Remote-First Culture</h3>
              <p className="text-gray-400">
                Work from anywhere in the world with flexible hours that fit your lifestyle.
              </p>
            </div>

            <div className="bg-develup-gray p-8 rounded-lg reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="h-12 w-12 bg-develup-purple/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-develup-purple text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Growth</h3>
              <p className="text-gray-400">
                Continuous learning opportunities, mentorship, and a clear career progression path.
              </p>
            </div>

            <div className="bg-develup-gray p-8 rounded-lg reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              <div className="h-12 w-12 bg-develup-mint/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-develup-mint text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cutting-Edge Projects</h3>
              <p className="text-gray-400">
                Work on innovative projects using the latest technologies and methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 reveal-on-scroll">
            <h2 className="text-3xl font-bold mb-6">Remote Internship Opportunities</h2>
            <p className="text-gray-300 max-w-3xl">
              Our internship programs are designed to provide hands-on experience and mentorship 
              to emerging talents. Join us and kick-start your career in tech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              <CareerCard 
                title="Frontend Intern"
                description="Join our frontend development team and work on creating responsive, user-friendly interfaces."
                responsibilities={[
                  "Develop web components using modern frameworks",
                  "Implement responsive designs",
                  "Collaborate with the UI/UX team",
                  "Write clean, efficient code"
                ]}
                requirements={[
                  "Knowledge of HTML, CSS, and JavaScript",
                  "Familiarity with React or similar frameworks",
                  "Basic understanding of responsive design",
                  "Strong problem-solving skills"
                ]}
              />
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <CareerCard 
                title="Backend Intern"
                description="Work on server-side logic, databases, and application architecture to power our solutions."
                responsibilities={[
                  "Develop API endpoints and services",
                  "Work with databases and data models",
                  "Implement security measures",
                  "Optimize application performance"
                ]}
                requirements={[
                  "Knowledge of server-side languages (Node.js, Python, etc.)",
                  "Basic understanding of databases",
                  "Familiarity with API design",
                  "Problem-solving approach"
                ]}
              />
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              <CareerCard 
                title="Offensive Security Intern"
                description="Join our security team to identify vulnerabilities and strengthen our defense systems."
                responsibilities={[
                  "Conduct penetration testing",
                  "Perform security assessments",
                  "Document security findings",
                  "Research emerging threats"
                ]}
                requirements={[
                  "Basic knowledge of cybersecurity concepts",
                  "Understanding of common vulnerabilities",
                  "Familiarity with security tools",
                  "Strong ethical standards"
                ]}
              />
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
              <CareerCard 
                title="Defensive Security Intern"
                description="Help protect our systems and data by implementing robust security measures."
                responsibilities={[
                  "Monitor security systems",
                  "Implement security protocols",
                  "Respond to security incidents",
                  "Maintain security documentation"
                ]}
                requirements={[
                  "Understanding of security principles",
                  "Knowledge of security tools and practices",
                  "Analytical mindset",
                  "Attention to detail"
                ]}
              />
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: '500ms' }}>
              <CareerCard 
                title="Data Analytics Intern"
                description="Extract insights from data to drive better business decisions and optimize processes."
                responsibilities={[
                  "Analyze complex data sets",
                  "Create data visualizations",
                  "Generate reports and insights",
                  "Support data-driven decision making"
                ]}
                requirements={[
                  "Basic understanding of data analysis",
                  "Familiarity with analytics tools",
                  "Knowledge of SQL basics",
                  "Strong analytical thinking"
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-develup-gray relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center reveal-on-scroll">
            <h2 className="text-3xl font-bold mb-6">
              Don't See a Perfect Fit?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals to join our team. Send us your resume, and we'll be in touch!
            </p>
            <Button className="bg-develup-blue hover:bg-develup-blue/80 text-white px-8 py-6 text-lg">
              Submit Your Resume
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

export default Careers;
