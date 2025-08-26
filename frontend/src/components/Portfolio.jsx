import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, ArrowUp, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from '../hooks/use-toast';
import { Toaster } from './ui/toaster';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Portfolio = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-900">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:-translate-y-0.5 transform"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:-translate-y-0.5 transform"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:-translate-y-0.5 transform"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:-translate-y-0.5 transform"
              >
                Projects
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gray-900 hover:bg-gray-800 text-white hover:scale-105 transition-all duration-200"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-800">PM</span>
              </div>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-light text-gray-900 mb-6 tracking-tight">
            Product Manager
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light leading-relaxed">
            6+ years building SaaS products from 0→1<br />
            <span className="text-gray-400">Specializing in MVP development & rapid go-to-market execution</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 hover:scale-105 transition-all duration-200"
            >
              View Projects
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 hover:scale-105 transition-all duration-200"
            >
              Get In Touch
            </Button>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400 mx-auto cursor-pointer" onClick={() => scrollToSection('about')} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-light text-gray-900 mb-12 text-center">About Me</h2>
          <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
            <p className="text-xl mb-6">
              I'm a Product Manager with 6+ years of experience in SaaS, passionate about transforming ideas into products that users love. I specialize in <strong>0→1 product launches</strong>, MVP development, and rapid go-to-market execution.
            </p>
            <p className="text-lg mb-6">
              My journey has been defined by collaborating with entrepreneurs, designers, and developers to translate vision into functional products. I'm skilled in Agile methodologies, stakeholder alignment, and data-driven decision-making, with a proven record of improving adoption and retention by <strong>15–25%</strong>.
            </p>
            <p className="text-lg">
              What drives me most is the intersection of customer needs, technical feasibility, and business value. I believe great products come from deep customer understanding, rigorous experimentation, and seamless cross-functional collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-light text-gray-900 mb-16 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">Product Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Roadmap & Strategy</Badge>
                  <Badge variant="secondary">Adoption & Retention Growth</Badge>
                  <Badge variant="secondary">Pricing & Packaging</Badge>
                  <Badge variant="secondary">GTM Planning</Badge>
                  <Badge variant="secondary">Feature Prioritization</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">Customer-Centric</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Customer Discovery</Badge>
                  <Badge variant="secondary">Voice of Customer</Badge>
                  <Badge variant="secondary">Competitive Analysis</Badge>
                  <Badge variant="secondary">Stakeholder Enablement</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">Technical & Data</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">SQL</Badge>
                  <Badge variant="secondary">REST APIs & Webhooks</Badge>
                  <Badge variant="secondary">Postman</Badge>
                  <Badge variant="secondary">Grafana</Badge>
                  <Badge variant="secondary">A/B Testing</Badge>
                  <Badge variant="secondary">Conversion Analytics</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-light text-gray-900 mb-16 text-center">Experience</h2>
          
          <Card className="mb-8 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl font-semibold text-gray-900">Product Manager</CardTitle>
                  <CardDescription className="text-lg text-gray-600 mt-1">peopleHum (Avniro Group)</CardDescription>
                </div>
                <Badge variant="outline" className="text-sm">6+ Years</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <p><strong>Impact:</strong> Increased onboarding conversion by <strong>15%</strong> and customer retention by <strong>25%</strong> through data-driven product improvements.</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Analyzed funnel drop-offs using SQL and Grafana to inform product roadmap</li>
                      <li>• Drove strategic integrations to expand ecosystem capabilities</li>
                      <li>• Owned high-impact feature launches (bell-curve calibration, AI-powered automation)</li>
                      <li>• Built AI-powered recruiter assistant from concept to MVP in 12 weeks</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Collaboration & Leadership:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Mentored junior PMs and collaborated with UX & Engineering</li>
                      <li>• Partnered with Marketing & Content teams on learning integrations</li>
                      <li>• Supported enterprise deal cycles with product demos</li>
                      <li>• Received spot award for leadership impact</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-light text-gray-900 mb-16 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-semibold text-gray-900">AI-Powered Hire Automation</CardTitle>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
                <CardDescription>Intelligent recruitment pipeline automation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Built an AI-powered recruiter assistant from concept to MVP in under 12 weeks, integrating GPT-4-powered candidate screening and semantic search.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>AI/ML</Badge>
                  <Badge>GPT-4</Badge>
                  <Badge>API Integration</Badge>
                  <Badge>MVP Development</Badge>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg text-sm text-blue-800">
                  <strong>Impact:</strong> 25% efficiency gain, scaled to 10K+ users
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-semibold text-gray-900">Bell Curve Calibration System</CardTitle>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
                <CardDescription>Performance management enhancement</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Designed and launched bell-curve calibration feature for performance cycles, improving data completeness and downstream analytics capabilities.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Performance Management</Badge>
                  <Badge>Data Analytics</Badge>
                  <Badge>Enterprise SaaS</Badge>
                </div>
                <div className="bg-green-50 p-3 rounded-lg text-sm text-green-800">
                  <strong>Impact:</strong> 20-30% improvement in HR productivity
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-semibold text-gray-900">Learning Platform Integration</CardTitle>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
                <CardDescription>Udemy & LinkedIn Learning integration</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Partnered with Marketing & Content teams to launch learning integrations, creating new acquisition hooks and improving user engagement.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>API Integration</Badge>
                  <Badge>Third-party Integration</Badge>
                  <Badge>GTM Strategy</Badge>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg text-sm text-purple-800">
                  <strong>Impact:</strong> 25% boost in engagement, new acquisition channels
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-semibold text-gray-900">Workforce Planning Module</CardTitle>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
                <CardDescription>Enterprise manpower planning solution</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Conducted market feasibility studies and delivered customizable enterprise features for performance planning and individual development plans (IDPs).</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Enterprise SaaS</Badge>
                  <Badge>Market Research</Badge>
                  <Badge>Workforce Analytics</Badge>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg text-sm text-orange-800">
                  <strong>Impact:</strong> Scaled across 100+ enterprise clients (50K+ users)
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-light text-gray-900 mb-16 text-center">Let's Connect</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">Send a Message</CardTitle>
                <CardDescription>I'd love to hear about your next project</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full min-h-32"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white hover:scale-105 transition-all duration-200"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="w-5 h-5" />
                    <span>productmanager@email.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone className="w-5 h-5" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    <span>San Francisco, CA</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">Professional Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="hover:scale-105 transition-all duration-200">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="hover:scale-105 transition-all duration-200">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Ready to collaborate?</h3>
                <p className="text-gray-600 text-sm">
                  I'm always interested in discussing new opportunities, innovative projects, and potential collaborations. Let's build something amazing together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>&copy; 2024 Product Manager Portfolio. Crafted with passion for great products.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gray-900 hover:bg-gray-800 text-white rounded-full p-3 hover:scale-110 transition-all duration-200 shadow-lg"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}

      <Toaster />
    </div>
  );
};

export default Portfolio;