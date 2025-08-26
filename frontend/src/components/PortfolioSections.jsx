import React from 'react';
import { ExternalLink, Mail, Linkedin, Award, Star, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

// Projects Section
export const ProjectsSection = () => (
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
                <h4 className="font-semibont text-teal-800 mb-2">Impact</h4>
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
);

// Services Section
export const ServicesSection = () => (
  <section id="services" className="py-24 px-6 bg-gray-50">
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
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
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
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
              Discuss a Workflow
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

// Testimonials Section
export const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 px-6">
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
);

// Impact Section
export const ImpactSection = () => (
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
);