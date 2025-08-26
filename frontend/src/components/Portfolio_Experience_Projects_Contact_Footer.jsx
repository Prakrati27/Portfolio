// Experience Section - Dark Theme
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

// Projects Section - Dark Theme
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

// Contact Section - Dark Theme
<section id="contact" className="py-24 px-6 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-to-br from-purple-500/10 to-indigo-500/10 blur-3xl animate-pulse delay-1000"></div>
  </div>
  
  <div className="max-w-4xl mx-auto relative z-10">
    <h2 className="text-5xl font-light text-white mb-16 text-center">
      <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Let's Connect</span>
    </h2>
    
    <div className="grid md:grid-cols-2 gap-12">
      {/* Contact Form */}
      <Card className="group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 border-slate-700 bg-slate-800/90 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <CardHeader className="relative z-10">
          <CardTitle className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
            Send a Message
          </CardTitle>
          <CardDescription className="text-slate-400 group-hover:text-purple-400 transition-colors duration-300">
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
                className="w-full bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20 hover:border-slate-500 transition-colors duration-200"
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
                className="w-full bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20 hover:border-slate-500 transition-colors duration-200"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full min-h-32 bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20 hover:border-slate-500 transition-colors duration-200"
              />
            </div>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg hover:shadow-blue-500/25 group/btn"
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
        <Card className="group hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 border-slate-700 bg-slate-800/90 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardHeader className="relative z-10">
            <CardTitle className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 relative z-10">
            <div className="flex items-center space-x-3 text-slate-300 group-hover:text-slate-200 transition-colors duration-300 hover:translate-x-1">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>prakrati@email.com</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-300 group-hover:text-slate-200 transition-colors duration-300 hover:translate-x-1">
              <Phone className="w-5 h-5 text-purple-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-300 group-hover:text-slate-200 transition-colors duration-300 hover:translate-x-1">
              <MapPin className="w-5 h-5 text-indigo-400" />
              <span>San Francisco, CA</span>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 border-slate-700 bg-slate-800/90 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardHeader className="relative z-10">
            <CardTitle className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors duration-300">
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

        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-700">
          <h3 className="font-semibold text-white mb-2 text-blue-400">Ready to collaborate?</h3>
          <p className="text-slate-300 text-sm">
            I'm always interested in discussing new opportunities, innovative projects, and potential collaborations. Let's build something amazing together!
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

// Footer - Dark Theme
<footer className="py-12 px-6 border-t border-slate-700 bg-gradient-to-r from-slate-900 to-slate-800">
  <div className="max-w-6xl mx-auto text-center text-slate-400">
    <p className="hover:text-blue-400 transition-colors duration-300">
      &copy; 2024 Prakrati Chaudhary Portfolio. Crafted with passion for great products.
    </p>
  </div>
</footer>

// Scroll to Top Button - Dark Theme
{showScrollTop && (
  <Button
    onClick={scrollToTop}
    className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full p-3 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 group"
  >
    <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
  </Button>
)}