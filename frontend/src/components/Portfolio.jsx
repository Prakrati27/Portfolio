import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, MapPin, ExternalLink, Linkedin, ArrowUp, Loader2, Download, Users, Building, TrendingUp, Rocket } from 'lucide-react';
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
    message: '',
    service: 'consulting'
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
        setFormData({ name: '', email: '', message: '', service: 'consulting' });
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-900">Prakrati Chaudhary</div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-teal-600 transition-colors duration-200 hover:-translate-y-0.5 transform"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-600 hover:text-teal-600 transition-colors duration-200 hover:-translate-y-0.5 transform"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-gray-600 hover:text-teal-600 transition-colors duration-200 hover:-translate-y-0.5 transform"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-600 hover:text-teal-600 transition-colors duration-200 hover:-translate-y-0.5 transform"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-600 hover:text-teal-600 transition-colors duration-200 hover:-translate-y-0.5 transform"
              >
                Testimonials
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-teal-600 hover:bg-teal-700 text-white hover:scale-105 transition-all duration-200"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <div className="w-32 h-32 mx-auto mb-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-teal-200"></div>
              <div className="absolute inset-1 rounded-full overflow-hidden">
                <img 
                  src="https://customer-assets.emergentagent.com/job_mvp-builder-7/artifacts/mffcfezq_689d5dfa351ec49d8df646d2-HeadshotPro.png" 
                  alt="Prakrati Chaudhary - Senior Product Manager"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Prakrati Chaudhary
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
            Senior Product Manager — SaaS & AI Innovation
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            Product leader with 6+ years building 0→1 and scaled SaaS platforms for <strong className="text-teal-600">50K+ users across 100+ global enterprises</strong>. Driving adoption, retention, and engagement with <strong className="text-teal-600">AI-driven innovation</strong> and customer-first product design.
          </p>

          {/* Impact Tiles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center mb-2">
                <Rocket className="w-6 h-6 text-teal-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">3+</div>
              <div className="text-sm text-gray-600">0→1 launches</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-teal-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">50K+</div>
              <div className="text-sm text-gray-600">users impacted</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center mb-2">
                <Building className="w-6 h-6 text-teal-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">100+</div>
              <div className="text-sm text-gray-600">enterprise customers</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-teal-600" />
              </div>
              <div className="text-lg font-bold text-gray-900">+15-25%</div>
              <div className="text-sm text-gray-600">growth metrics</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 hover:scale-105 transition-all duration-200"
            >
              View Flagship Projects
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 hover:scale-105 transition-all duration-200"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="border-teal-300 text-teal-700 hover:bg-teal-50 px-8 py-3 hover:scale-105 transition-all duration-200"
            >
              Get In Touch
            </Button>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400 mx-auto cursor-pointer hover:text-teal-600 transition-colors duration-300" onClick={() => scrollToSection('about')} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">About Me</h2>
          <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed space-y-6">
            <p className="text-xl">
              I am a <strong className="text-teal-600">Product Manager and AI generalist</strong> with 6+ years of experience building and scaling SaaS platforms across HRTech, learning ecosystems, and enterprise workforce planning.
            </p>
            
            <p>
              At <strong>peopleHum</strong> and <strong>Engagedly</strong>, I launched AI recruiter assistants, workforce planning modules, and LMS integrations — products that scaled across 50K+ users and 100+ enterprise clients, consistently driving adoption (+20%), engagement (+25%), and completion (+15%).
            </p>
            
            <p>
              I stay hands-on with <strong className="text-teal-600">AI & emerging tools</strong> — building workflows in <strong>n8n</strong>, experimenting with <strong>Claude, Higgsfield, Coder, and Emergent</strong> — to translate cutting-edge AI capabilities into usable product experiences.
            </p>
            
            <p>
              My foundation was built at <strong>Byju's</strong> (customer empathy through 100+ customer calls with sales/product teams) and <strong>enParadigm</strong> (consulting Fortune 500s like Google & ABG with behavioral + business simulations). This gave me a rare blend of <strong className="text-teal-600">customer obsession, enterprise credibility, and SaaS scale execution</strong>.
            </p>
            
            <p>
              Recognized with <strong>leadership impact awards</strong>, I thrive at the intersection of <strong>customer needs, technical feasibility, and business strategy</strong> — where great products are born.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Product Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Lifecycle Management · Product Strategy · Roadmap Prioritization · Data-Driven Decision-Making
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">AI & Emerging Tech</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  AI Workflow Automation (n8n) · Generative AI platforms (Claude, Higgsfield, Coder, Emergent) · Semantic Search · AI Governance
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Collaboration & Discovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Cross-Functional Leadership · Customer Discovery · GTM Planning · Stakeholder Management
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Technical Proficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  APIs & Webhooks · SQL · Scoring Engines · Jira · Grafana · Metabase · Postman
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">Experience</h2>
          
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-semibold text-gray-900">Senior Product Manager</CardTitle>
                    <CardDescription className="text-lg text-gray-600 mt-1">peopleHum (Avniro Group)</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-sm">Jan 2024 – Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Launched <strong className="text-teal-600">AI recruiter assistant</strong> → boosted recruiter efficiency by 25%, scaled to 10K+ users</li>
                  <li>• Shipped <strong className="text-teal-600">Udemy/LinkedIn Learning integrations</strong> → +15% completion, +20% adoption, +25% engagement</li>
                  <li>• Built <strong>notification preferences & approval workflow framework</strong> → reduced noise, improved governance</li>
                  <li>• Recognized with <strong>spot awards</strong> for leadership impact</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-semibold text-gray-900">Product Manager</CardTitle>
                    <CardDescription className="text-lg text-gray-600 mt-1">peopleHum (Avniro Group)</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-sm">Jan 2022 – Jan 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Drove <strong>bell curve calibration & succession planning</strong> → fairer performance reviews, transparent decisions</li>
                  <li>• Conducted <strong>market feasibility & GTM research</strong> → scaled adoption across 100+ enterprise clients</li>
                  <li>• Integrated <strong className="text-teal-600">GPT-4 candidate screening</strong> → improved recruiter productivity & semantic search accuracy</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-semibold text-gray-900">Product Consultant</CardTitle>
                    <CardDescription className="text-lg text-gray-600 mt-1">Engagedly</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-sm">Jun 2021 – Jan 2022</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Scoped and delivered <strong>customizable SaaS features for performance & IDPs</strong> → +5% retention across 3,000+ employees</li>
                  <li>• Conducted <strong>competitive analysis + client workshops</strong> → informed roadmap and GTM positioning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-semibold text-gray-900">Solutions Manager</CardTitle>
                    <CardDescription className="text-lg text-gray-600 mt-1">enParadigm</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-sm">Jan 2017 – Mar 2021</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Designed <strong>business & behavioral simulation platforms</strong> for sales/leadership enablement</li>
                  <li>• Partnered with <strong className="text-teal-600">Google, Aditya Birla Group, Airtel, UltraTech, Hero Fin</strong> on enterprise simulation rollouts</li>
                  <li>• Closed <strong>$20–30M in Fortune 500 deals</strong>, delivering measurable client impact</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-semibold text-gray-900">Business Consultant</CardTitle>
                    <CardDescription className="text-lg text-gray-600 mt-1">Byju's</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-sm">Jan 2016 – Jan 2017</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Partnered with sales + product teams; joined <strong>100+ customer calls</strong> to refine product demos & positioning</li>
                  <li>• Built strong foundation in <strong className="text-teal-600">customer empathy & storytelling</strong></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Toaster />
    </div>
  );
};

export default Portfolio;