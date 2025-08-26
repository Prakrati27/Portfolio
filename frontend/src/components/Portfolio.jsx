import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, MapPin, ExternalLink, Linkedin, ArrowUp, Loader2, Download, Users, Building, TrendingUp, Rocket, Star, Award, CheckCircle } from 'lucide-react';
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
              onClick={() => window.open('https://customer-assets.emergentagent.com/job_mvp-builder-7/artifacts/azzlbcs1_Prakrati%20Chaudhary_Deepwatch%20Resume.pdf', '_blank')}
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

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">Flagship Projects</h2>
          
          <div className="space-y-12">
            {/* Project 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                    AI-Powered Hire Automation
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors" />
                </div>
                <CardDescription className="text-lg text-gray-600">
                  Intelligent recruitment pipeline automation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <h4 className="font-semibold text-red-800 mb-2">Challenge</h4>
                    <p className="text-red-700">Recruiters faced manual screening bottlenecks and pipeline inefficiency.</p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Action</h4>
                    <p className="text-blue-700">Built AI recruiter assistant (GPT-4, semantic search, automation) → MVP in 12 weeks.</p>
                  </div>
                  <div className="bg-teal-50 border-l-4 border-teal-400 p-4">
                    <h4 className="font-semibold text-teal-800 mb-2">Impact</h4>
                    <ul className="text-teal-700 space-y-1">
                      <li>• +25% recruiter efficiency</li>
                      <li>• Scaled to 10K+ users</li>
                      <li>• 40% reduction in manual screening time</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-teal-100 text-teal-800">AI/ML</Badge>
                    <Badge className="bg-teal-100 text-teal-800">GPT-4</Badge>
                    <Badge className="bg-teal-100 text-teal-800">Semantic Search</Badge>
                    <Badge className="bg-teal-100 text-teal-800">MVP Development</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                    LMS Revamp + Udemy Integration
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors" />
                </div>
                <CardDescription className="text-lg text-gray-600">
                  Complete learning management system overhaul
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <h4 className="font-semibold text-red-800 mb-2">Challenge</h4>
                    <p className="text-red-700">Legacy LMS suffered from low engagement & fragmented discovery.</p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Action</h4>
                    <p className="text-blue-700">End-to-end UX revamp, added ILT, integrated Udemy/LinkedIn Learning, improved analytics & recs.</p>
                  </div>
                  <div className="bg-teal-50 border-l-4 border-teal-400 p-4">
                    <h4 className="font-semibold text-teal-800 mb-2">Impact</h4>
                    <ul className="text-teal-700 space-y-1">
                      <li>• +15% course completion</li>
                      <li>• +20% adoption</li>
                      <li>• +25% engagement</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-teal-100 text-teal-800">UX Design</Badge>
                    <Badge className="bg-teal-100 text-teal-800">API Integration</Badge>
                    <Badge className="bg-teal-100 text-teal-800">Analytics</Badge>
                    <Badge className="bg-teal-100 text-teal-800">Learning Tech</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                    Workforce Planning Module (MPP)
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors" />
                </div>
                <CardDescription className="text-lg text-gray-600">
                  Enterprise manpower planning and forecasting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <h4 className="font-semibold text-red-800 mb-2">Challenge</h4>
                    <p className="text-red-700">HR lacked structured budget/headcount forecasting.</p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Action</h4>
                    <p className="text-blue-700">Designed module using job architecture; placeholders, auto-requisition flows, budget guardrails.</p>
                  </div>
                  <div className="bg-teal-50 border-l-4 border-teal-400 p-4">
                    <h4 className="font-semibold text-teal-800 mb-2">Impact</h4>
                    <ul className="text-teal-700 space-y-1">
                      <li>• Rolled out to 100+ enterprise clients</li>
                      <li>• Supported orgs with 500+ employees</li>
                      <li>• Enabled proactive hiring vs reactive backfills</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-teal-100 text-teal-800">Enterprise Software</Badge>
                    <Badge className="bg-teal-100 text-teal-800">Workforce Analytics</Badge>
                    <Badge className="bg-teal-100 text-teal-800">Budget Planning</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                    Bell Curve Calibration System
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors" />
                </div>
                <CardDescription className="text-lg text-gray-600">
                  Performance review calibration and fairness
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <h4 className="font-semibold text-red-800 mb-2">Challenge</h4>
                    <p className="text-red-700">Inconsistent performance review calibration.</p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Action</h4>
                    <p className="text-blue-700">Configurable bell curve distributions, dashboards, outlier handling, audit trails.</p>
                  </div>
                  <div className="bg-teal-50 border-l-4 border-teal-400 p-4">
                    <h4 className="font-semibold text-teal-800 mb-2">Impact</h4>
                    <ul className="text-teal-700 space-y-1">
                      <li>• Improved fairness + transparency</li>
                      <li>• Scaled calibration across 100+ clients</li>
                      <li>• Strengthened downstream analytics</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-teal-100 text-teal-800">Performance Management</Badge>
                    <Badge className="bg-teal-100 text-teal-800">Data Analytics</Badge>
                    <Badge className="bg-teal-100 text-teal-800">Enterprise HR</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Projects Grid */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Additional Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">Granular delivery controls across email/app.</p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Comms</Badge>
                    <Badge variant="outline" className="text-xs">Preferences</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">Approval Workflow Framework</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">Multi-stage routing + SLA governance.</p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Workflow</Badge>
                    <Badge variant="outline" className="text-xs">Platform</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">Custom Module via JSON</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">Workflows (PIP, disciplinary) as configurable modules.</p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Extensibility</Badge>
                    <Badge variant="outline" className="text-xs">Config</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">Succession & Career Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">Dev paths + future-proof org pipelines.</p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Talent</Badge>
                    <Badge variant="outline" className="text-xs">L&D</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">Manager Transition Flows</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">Seamless ownership shifts with no data loss.</p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">HRIS</Badge>
                    <Badge variant="outline" className="text-xs">Governance</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">Impact at a Glance</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">50K+</div>
              <div className="text-gray-600">Users Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">100+</div>
              <div className="text-gray-600">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">3+</div>
              <div className="text-gray-600">0→1 Launches</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">+15%</div>
              <div className="text-gray-600">Completion</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">+25%</div>
              <div className="text-gray-600">Engagement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">Product Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  SaaS strategy, onboarding/adoption, growth experiments. I help B2B SaaS teams clarify strategy, prioritize high-leverage bets, and ship measurable outcomes.
                </p>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-teal-600 hover:bg-teal-700 text-white"
                >
                  Book a Consult
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">AI Workflow Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Rapid prototyping & automation using n8n, Claude, Emergent. Lightweight automations to connect tools, reduce manual ops, and prototype AI-assisted workflows.
                </p>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-teal-600 hover:bg-teal-700 text-white"
                >
                  Discuss a Workflow
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">Testimonials</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900">Ekta Mishra</CardTitle>
                    <CardDescription>Product Management Leader</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "Prakrati is proactive, quick to learn, and always willing to take on new challenges. She built great things, spoke to clients, and translated user needs into impactful improvements. She'll continue to do amazing things in her career!"
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900">Arun Kumar C.P.</CardTitle>
                    <CardDescription>Senior Product Leader</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "Prakrati scores highly on essential PM qualities — comfortable with ambiguity, influencing without authority, multi-tasking, speedy delivery. She delivered excellent work on talent management features and progressed quickly in her career."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900">Angad Sethi</CardTitle>
                    <CardDescription>Director, CarDekho (ex-McKinsey)</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "Prakrati played a pivotal role in defining the vision/mission of a new solutions function at enParadigm. She aligned internal & external stakeholders, onboarded new team members, and ensured everyone moved toward common goals."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-8 text-center">Let's build the next big product together</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
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
                    <select 
                      name="service" 
                      value={formData.service} 
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      required
                    >
                      <option value="consulting">Product Consulting</option>
                      <option value="ai">AI Workflow Automation</option>
                      <option value="other">Other</option>
                    </select>
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
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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
              <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="w-5 h-5 text-teal-600" />
                    <span>cprakrati27@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-teal-600" />
                    <span>Bangalore, Karnataka, India</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">Professional Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="hover:scale-105 transition-all duration-200"
                      onClick={() => window.open('https://www.linkedin.com/in/prakratichaudhary/', '_blank')}
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="hover:scale-105 transition-all duration-200"
                      onClick={() => window.open('https://customer-assets.emergentagent.com/job_mvp-builder-7/artifacts/azzlbcs1_Prakrati%20Chaudhary_Deepwatch%20Resume.pdf', '_blank')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Resume
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 mb-4 md:mb-0">
            © 2024 Prakrati Chaudhary
          </div>
          <div className="flex space-x-6">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.open('https://www.linkedin.com/in/prakratichaudhary/', '_blank')}
            >
              LinkedIn
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.open('https://customer-assets.emergentagent.com/job_mvp-builder-7/artifacts/azzlbcs1_Prakrati%20Chaudhary_Deepwatch%20Resume.pdf', '_blank')}
            >
              Resume Download
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={scrollToTop}
            >
              Back to top
            </Button>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-teal-600 hover:bg-teal-700 text-white rounded-full p-3 hover:scale-110 transition-all duration-200 shadow-lg"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}

      <Toaster />
    </div>
  );
};

export default Portfolio;