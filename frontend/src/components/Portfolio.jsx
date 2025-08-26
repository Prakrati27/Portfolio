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
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-300 hover:text-blue-400 transition-all duration-300 hover:-translate-y-0.5 transform relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-slate-300 hover:text-blue-400 transition-all duration-300 hover:-translate-y-0.5 transform relative group"
              >
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-slate-300 hover:text-blue-400 transition-all duration-300 hover:-translate-y-0.5 transform relative group"
              >
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-slate-300 hover:text-blue-400 transition-all duration-300 hover:-translate-y-0.5 transform relative group"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute inset-1 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://customer-assets.emergentagent.com/job_mvp-builder-7/artifacts/mffcfezq_689d5dfa351ec49d8df646d2-HeadshotPro.png" 
                  alt="Prakrati Chaudhary - Product Manager"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Rotating ring animation */}
              <div className="absolute inset-0 border-2 border-blue-400/30 rounded-full animate-spin opacity-60"></div>
              <div className="absolute inset-4 border border-purple-400/40 rounded-full animate-ping opacity-40"></div>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tight">
            <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">Prakrati</span>{' '}
            <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default">Chaudhary</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light leading-relaxed">
            <span className="inline-block hover:text-blue-400 transition-colors duration-300">Product Manager | 6+ years building SaaS products from 0→1</span><br />
            <span className="text-slate-400 hover:text-purple-400 transition-colors duration-300">Specializing in MVP development & rapid go-to-market execution</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 group"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-200">View Projects</span>
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="border-slate-500 text-slate-300 hover:bg-slate-800 hover:border-blue-400 hover:text-blue-400 px-8 py-3 hover:scale-105 transition-all duration-300 group"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-200">Get In Touch</span>
            </Button>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-6 h-6 text-blue-400 mx-auto cursor-pointer hover:text-purple-400 transition-colors duration-300 hover:scale-110" onClick={() => scrollToSection('about')} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-32 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl font-light text-white mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="prose prose-lg mx-auto text-slate-300 leading-relaxed">
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 border border-slate-700 hover:border-blue-500/30 group">
              <p className="text-xl mb-6 group-hover:text-slate-200 transition-colors duration-300">
                I'm a Product Manager with 6+ years of experience in SaaS, passionate about transforming ideas into products that users love. I specialize in <strong className="text-blue-400">0→1 product launches</strong>, MVP development, and rapid go-to-market execution.
              </p>
              <p className="text-lg mb-6 group-hover:text-slate-200 transition-colors duration-300">
                My journey has been defined by collaborating with entrepreneurs, designers, and developers to translate vision into functional products. I'm skilled in Agile methodologies, stakeholder alignment, and data-driven decision-making, with a proven record of improving adoption and retention by <strong className="text-purple-400">15–25%</strong>.
              </p>
              <p className="text-lg group-hover:text-slate-200 transition-colors duration-300">
                What drives me most is the intersection of customer needs, technical feasibility, and business value. I believe great products come from deep customer understanding, rigorous experimentation, and seamless cross-functional collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-900 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-light text-white mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills & Expertise</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 border-slate-700 hover:border-blue-500/50 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                  Product Management
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors duration-200 hover:scale-105 border-blue-500/30">Roadmap & Strategy</Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors duration-200 hover:scale-105 border-blue-500/30">Adoption & Retention Growth</Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors duration-200 hover:scale-105 border-blue-500/30">Pricing & Packaging</Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors duration-200 hover:scale-105 border-blue-500/30">GTM Planning</Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors duration-200 hover:scale-105 border-blue-500/30">Feature Prioritization</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 border-slate-700 hover:border-purple-500/50 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                  Customer-Centric
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors duration-200 hover:scale-105 border-purple-500/30">Customer Discovery</Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors duration-200 hover:scale-105 border-purple-500/30">Voice of Customer</Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors duration-200 hover:scale-105 border-purple-500/30">Competitive Analysis</Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors duration-200 hover:scale-105 border-purple-500/30">Stakeholder Enablement</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-2 border-slate-700 hover:border-indigo-500/50 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors duration-300">
                  Technical & Data
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 transition-colors duration-200 hover:scale-105 border-indigo-500/30">SQL</Badge>
                  <Badge variant="secondary" className="bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 transition-colors duration-200 hover:scale-105 border-indigo-500/30">REST APIs & Webhooks</Badge>
                  <Badge variant="secondary" className="bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 transition-colors duration-200 hover:scale-105 border-indigo-500/30">Postman</Badge>
                  <Badge variant="secondary" className="bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 transition-colors duration-200 hover:scale-105 border-indigo-500/30">Grafana</Badge>
                  <Badge variant="secondary" className="bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 transition-colors duration-200 hover:scale-105 border-indigo-500/30">A/B Testing</Badge>
                  <Badge variant="secondary" className="bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 transition-colors duration-200 hover:scale-105 border-indigo-500/30">Conversion Analytics</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-light text-white mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          
          <Card className="mb-8 group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1 border-slate-700 bg-slate-800/90 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    Product Manager
                  </CardTitle>
                  <CardDescription className="text-lg text-slate-400 mt-1 group-hover:text-purple-400 transition-colors duration-300">
                    peopleHum (Avniro Group)
                  </CardDescription>
                </div>
                <Badge variant="outline" className="text-sm border-blue-500/30 text-blue-400 group-hover:bg-blue-500/10 transition-colors duration-300">
                  6+ Years
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-lg border-l-4 border-blue-500 group-hover:shadow-md transition-shadow duration-300">
                  <p className="group-hover:text-slate-200 transition-colors duration-300">
                    <strong className="text-blue-400">Impact:</strong> Increased onboarding conversion by <strong className="text-blue-300">15%</strong> and customer retention by <strong className="text-purple-300">25%</strong> through data-driven product improvements.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-slate-800/70 p-4 rounded-lg hover:bg-slate-700/70 transition-colors duration-300">
                    <h4 className="font-semibold text-white mb-3 text-blue-400">Key Achievements:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="hover:text-slate-200 transition-colors duration-200">• Analyzed funnel drop-offs using SQL and Grafana to inform product roadmap</li>
                      <li className="hover:text-slate-200 transition-colors duration-200">• Drove strategic integrations to expand ecosystem capabilities</li>
                      <li className="hover:text-slate-200 transition-colors duration-200">• Owned high-impact feature launches (bell-curve calibration, AI-powered automation)</li>
                      <li className="hover:text-slate-200 transition-colors duration-200">• Built AI-powered recruiter assistant from concept to MVP in 12 weeks</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-800/70 p-4 rounded-lg hover:bg-slate-700/70 transition-colors duration-300">
                    <h4 className="font-semibold text-white mb-3 text-purple-400">Collaboration & Leadership:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="hover:text-slate-200 transition-colors duration-200">• Mentored junior PMs and collaborated with UX & Engineering</li>
                      <li className="hover:text-slate-200 transition-colors duration-200">• Partnered with Marketing & Content teams on learning integrations</li>
                      <li className="hover:text-slate-200 transition-colors duration-200">• Supported enterprise deal cycles with product demos</li>
                      <li className="hover:text-slate-200 transition-colors duration-200">• Received spot award for leadership impact</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-light text-white mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            <Card className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
              <CardHeader className="relative z-10">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    AI-Powered Hire Automation
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-110" />
                </div>
                <CardDescription className="text-slate-400 group-hover:text-purple-400 transition-colors duration-300">
                  Intelligent recruitment pipeline automation
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-slate-300 mb-4 group-hover:text-slate-200 transition-colors duration-300">
                  Built an AI-powered recruiter assistant from concept to MVP in under 12 weeks, integrating GPT-4-powered candidate screening and semantic search.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors duration-200 hover:scale-105 border-blue-500/30">AI/ML</Badge>
                  <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors duration-200 hover:scale-105 border-blue-500/30">GPT-4</Badge>
                  <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors duration-200 hover:scale-105 border-blue-500/30">API Integration</Badge>
                  <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors duration-200 hover:scale-105 border-blue-500/30">MVP Development</Badge>
                </div>
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-3 rounded-lg text-sm border-l-4 border-blue-500 group-hover:shadow-md transition-shadow duration-300">
                  <strong className="text-blue-400">Impact:</strong> <span className="text-blue-300">25% efficiency gain, scaled to 10K+ users</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
              <CardHeader className="relative z-10">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                    Bell Curve Calibration System
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-all duration-300 group-hover:scale-110" />
                </div>
                <CardDescription className="text-slate-400 group-hover:text-blue-400 transition-colors duration-300">
                  Performance management enhancement
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-slate-300 mb-4 group-hover:text-slate-200 transition-colors duration-300">
                  Designed and launched bell-curve calibration feature for performance cycles, improving data completeness and downstream analytics capabilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors duration-200 hover:scale-105 border-purple-500/30">Performance Management</Badge>
                  <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors duration-200 hover:scale-105 border-purple-500/30">Data Analytics</Badge>
                  <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors duration-200 hover:scale-105 border-purple-500/30">Enterprise SaaS</Badge>
                </div>
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-3 rounded-lg text-sm border-l-4 border-green-500 group-hover:shadow-md transition-shadow duration-300">
                  <strong className="text-green-400">Impact:</strong> <span className="text-green-300">20-30% improvement in HR productivity</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-2 border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-indigo-400 rounded-full animate-pulse opacity-60"></div>
              <CardHeader className="relative z-10">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors duration-300">
                    Learning Platform Integration
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-all duration-300 group-hover:scale-110" />
                </div>
                <CardDescription className="text-slate-400 group-hover:text-purple-400 transition-colors duration-300">
                  Udemy & LinkedIn Learning integration
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-slate-300 mb-4 group-hover:text-slate-200 transition-colors duration-300">
                  Partnered with Marketing & Content teams to launch learning integrations, creating new acquisition hooks and improving user engagement.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 transition-colors duration-200 hover:scale-105 border-indigo-500/30">API Integration</Badge>
                  <Badge className="bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 transition-colors duration-200 hover:scale-105 border-indigo-500/30">Third-party Integration</Badge>
                  <Badge className="bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 transition-colors duration-200 hover:scale-105 border-indigo-500/30">GTM Strategy</Badge>
                </div>
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-3 rounded-lg text-sm border-l-4 border-purple-500 group-hover:shadow-md transition-shadow duration-300">
                  <strong className="text-purple-400">Impact:</strong> <span className="text-purple-300">25% boost in engagement, new acquisition channels</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
              <CardHeader className="relative z-10">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    Workforce Planning Module
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-110" />
                </div>
                <CardDescription className="text-slate-400 group-hover:text-indigo-400 transition-colors duration-300">
                  Enterprise manpower planning solution
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-slate-300 mb-4 group-hover:text-slate-200 transition-colors duration-300">
                  Conducted market feasibility studies and delivered customizable enterprise features for performance planning and individual development plans (IDPs).
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors duration-200 hover:scale-105 border-blue-500/30">Enterprise SaaS</Badge>
                  <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors duration-200 hover:scale-105 border-blue-500/30">Market Research</Badge>
                  <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors duration-200 hover:scale-105 border-blue-500/30">Workforce Analytics</Badge>
                </div>
                <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 p-3 rounded-lg text-sm border-l-4 border-orange-500 group-hover:shadow-md transition-shadow duration-300">
                  <strong className="text-orange-400">Impact:</strong> <span className="text-orange-300">Scaled across 100+ enterprise clients (50K+ users)</span>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-br from-emerald-200/20 to-teal-200/20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-to-br from-teal-200/20 to-cyan-200/20 blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl font-light text-slate-800 mb-16 text-center">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Let's Connect</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-emerald-200 bg-white/90 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors duration-300">
                  Send a Message
                </CardTitle>
                <CardDescription className="group-hover:text-teal-600 transition-colors duration-300">
                  I'd love to hear about your next project
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400 hover:border-emerald-300 transition-colors duration-200"
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
                      className="w-full border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400 hover:border-emerald-300 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full min-h-32 border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400 hover:border-emerald-300 transition-colors duration-200"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg hover:shadow-emerald-200 group/btn"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-200">Send Message</span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="group hover:shadow-2xl transition-all duration-500 border-teal-200 bg-white/90 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl font-semibold text-slate-800 group-hover:text-teal-700 transition-colors duration-300">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 relative z-10">
                  <div className="flex items-center space-x-3 text-slate-600 group-hover:text-slate-700 transition-colors duration-300 hover:translate-x-1">
                    <Mail className="w-5 h-5 text-emerald-500" />
                    <span>productmanager@email.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-600 group-hover:text-slate-700 transition-colors duration-300 hover:translate-x-1">
                    <Phone className="w-5 h-5 text-teal-500" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-600 group-hover:text-slate-700 transition-colors duration-300 hover:translate-x-1">
                    <MapPin className="w-5 h-5 text-cyan-500" />
                    <span>San Francisco, CA</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 border-cyan-200 bg-white/90 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl font-semibold text-slate-800 group-hover:text-cyan-700 transition-colors duration-300">
                    Professional Links
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex space-x-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="hover:scale-105 transition-all duration-300 border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 group/social"
                      onClick={() => window.open('https://www.linkedin.com/in/prakratichaudhary/', '_blank')}
                    >
                      <Linkedin className="w-4 h-4 mr-2 group-hover/social:scale-110 transition-transform duration-200" />
                      <span className="group-hover/social:translate-x-0.5 transition-transform duration-200">LinkedIn</span>
                    </Button>
                    <Button variant="outline" size="sm" className="hover:scale-105 transition-all duration-300 border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 group/social">
                      <Github className="w-4 h-4 mr-2 group-hover/social:scale-110 transition-transform duration-200" />
                      <span className="group-hover/social:translate-x-0.5 transition-transform duration-200">GitHub</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-emerald-200">
                <h3 className="font-semibold text-slate-800 mb-2 text-emerald-700">Ready to collaborate?</h3>
                <p className="text-slate-600 text-sm">
                  I'm always interested in discussing new opportunities, innovative projects, and potential collaborations. Let's build something amazing together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-emerald-200 bg-gradient-to-r from-slate-50 to-emerald-50">
        <div className="max-w-6xl mx-auto text-center text-slate-600">
          <p className="hover:text-emerald-600 transition-colors duration-300">
            &copy; 2024 Product Manager Portfolio. Crafted with passion for great products.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full p-3 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-emerald-200 group"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </Button>
      )}

      <Toaster />
    </div>
  );
};

export default Portfolio;