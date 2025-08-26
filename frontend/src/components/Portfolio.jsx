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
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.data.success) {
        toast({
          title: "Message sent successfully!",
          description: response.data.message,
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-teal-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-600 hover:text-emerald-600 transition-all duration-300 hover:-translate-y-0.5 transform relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-slate-600 hover:text-emerald-600 transition-all duration-300 hover:-translate-y-0.5 transform relative group"
              >
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-slate-600 hover:text-emerald-600 transition-all duration-300 hover:-translate-y-0.5 transform relative group"
              >
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-slate-600 hover:text-emerald-600 transition-all duration-300 hover:-translate-y-0.5 transform relative group"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-200"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-200/30 to-teal-200/30 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-teal-200/30 to-emerald-200/30 blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full animate-pulse group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center group-hover:bg-emerald-50 transition-colors duration-300">
                <span className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">PM</span>
              </div>
              {/* Rotating ring animation */}
              <div className="absolute inset-0 border-2 border-emerald-300 rounded-full animate-spin opacity-20"></div>
              <div className="absolute inset-4 border border-teal-300 rounded-full animate-ping opacity-30"></div>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-light text-slate-800 mb-6 tracking-tight">
            <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">Product</span>{' '}
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default">Manager</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 font-light leading-relaxed">
            <span className="inline-block hover:text-emerald-600 transition-colors duration-300">6+ years building SaaS products from 0→1</span><br />
            <span className="text-slate-400 hover:text-teal-500 transition-colors duration-300">Specializing in MVP development & rapid go-to-market execution</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-200 group"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-200">View Projects</span>
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-400 px-8 py-3 hover:scale-105 transition-all duration-300 group"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-200">Get In Touch</span>
            </Button>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-6 h-6 text-emerald-400 mx-auto cursor-pointer hover:text-emerald-600 transition-colors duration-300 hover:scale-110" onClick={() => scrollToSection('about')} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cgrid fill="none" stroke="%2310b981" stroke-width="1" opacity="0.1"/%3E%3C/svg%3E')] opacity-30"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl font-light text-slate-800 mb-12 text-center">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="prose prose-lg mx-auto text-slate-600 leading-relaxed">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-emerald-100 hover:border-emerald-200 group">
              <p className="text-xl mb-6 group-hover:text-slate-700 transition-colors duration-300">
                I'm a Product Manager with 6+ years of experience in SaaS, passionate about transforming ideas into products that users love. I specialize in <strong className="text-emerald-600">0→1 product launches</strong>, MVP development, and rapid go-to-market execution.
              </p>
              <p className="text-lg mb-6 group-hover:text-slate-700 transition-colors duration-300">
                My journey has been defined by collaborating with entrepreneurs, designers, and developers to translate vision into functional products. I'm skilled in Agile methodologies, stakeholder alignment, and data-driven decision-making, with a proven record of improving adoption and retention by <strong className="text-teal-600">15–25%</strong>.
              </p>
              <p className="text-lg group-hover:text-slate-700 transition-colors duration-300">
                What drives me most is the intersection of customer needs, technical feasibility, and business value. I believe great products come from deep customer understanding, rigorous experimentation, and seamless cross-functional collaboration.
              </p>
            </div>
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
                    disabled={isSubmitting}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
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