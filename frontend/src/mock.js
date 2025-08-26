// Mock data for portfolio website
export const mockPortfolioData = {
  personalInfo: {
    name: "Product Manager",
    title: "Senior Product Manager",
    email: "productmanager@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    tagline: "6+ years building SaaS products from 0→1",
    subtitle: "Specializing in MVP development & rapid go-to-market execution"
  },

  about: {
    intro: "I'm a Product Manager with 6+ years of experience in SaaS, passionate about transforming ideas into products that users love. I specialize in 0→1 product launches, MVP development, and rapid go-to-market execution.",
    experience: "My journey has been defined by collaborating with entrepreneurs, designers, and developers to translate vision into functional products. I'm skilled in Agile methodologies, stakeholder alignment, and data-driven decision-making, with a proven record of improving adoption and retention by 15–25%.",
    philosophy: "What drives me most is the intersection of customer needs, technical feasibility, and business value. I believe great products come from deep customer understanding, rigorous experimentation, and seamless cross-functional collaboration."
  },

  skills: {
    productManagement: [
      "Roadmap & Strategy",
      "Adoption & Retention Growth", 
      "Pricing & Packaging",
      "GTM Planning",
      "Feature Prioritization"
    ],
    customerCentric: [
      "Customer Discovery",
      "Voice of Customer",
      "Competitive Analysis", 
      "Stakeholder Enablement"
    ],
    technicalData: [
      "SQL",
      "REST APIs & Webhooks",
      "Postman",
      "Grafana", 
      "A/B Testing",
      "Conversion Analytics"
    ]
  },

  experience: {
    company: "peopleHum (Avniro Group)",
    role: "Product Manager", 
    duration: "6+ Years",
    impact: {
      conversionIncrease: "15%",
      retentionIncrease: "25%",
      productivityGain: "20-30%"
    },
    achievements: [
      "Analyzed funnel drop-offs using SQL and Grafana to inform product roadmap",
      "Drove strategic integrations to expand ecosystem capabilities", 
      "Owned high-impact feature launches (bell-curve calibration, AI-powered automation)",
      "Built AI-powered recruiter assistant from concept to MVP in 12 weeks"
    ],
    collaboration: [
      "Mentored junior PMs and collaborated with UX & Engineering",
      "Partnered with Marketing & Content teams on learning integrations",
      "Supported enterprise deal cycles with product demos",
      "Received spot award for leadership impact"
    ]
  },

  projects: [
    {
      id: 1,
      title: "AI-Powered Hire Automation",
      description: "Intelligent recruitment pipeline automation",
      longDescription: "Built an AI-powered recruiter assistant from concept to MVP in under 12 weeks, integrating GPT-4-powered candidate screening and semantic search.",
      technologies: ["AI/ML", "GPT-4", "API Integration", "MVP Development"],
      impact: "25% efficiency gain, scaled to 10K+ users",
      impactType: "blue"
    },
    {
      id: 2, 
      title: "Bell Curve Calibration System",
      description: "Performance management enhancement",
      longDescription: "Designed and launched bell-curve calibration feature for performance cycles, improving data completeness and downstream analytics capabilities.",
      technologies: ["Performance Management", "Data Analytics", "Enterprise SaaS"],
      impact: "20-30% improvement in HR productivity", 
      impactType: "green"
    },
    {
      id: 3,
      title: "Learning Platform Integration", 
      description: "Udemy & LinkedIn Learning integration",
      longDescription: "Partnered with Marketing & Content teams to launch learning integrations, creating new acquisition hooks and improving user engagement.",
      technologies: ["API Integration", "Third-party Integration", "GTM Strategy"],
      impact: "25% boost in engagement, new acquisition channels",
      impactType: "purple"
    },
    {
      id: 4,
      title: "Workforce Planning Module",
      description: "Enterprise manpower planning solution", 
      longDescription: "Conducted market feasibility studies and delivered customizable enterprise features for performance planning and individual development plans (IDPs).",
      technologies: ["Enterprise SaaS", "Market Research", "Workforce Analytics"],
      impact: "Scaled across 100+ enterprise clients (50K+ users)",
      impactType: "orange"
    }
  ],

  contactForm: {
    fields: {
      name: "",
      email: "", 
      message: ""
    },
    successMessage: "Message sent successfully! Thank you for reaching out. I'll get back to you soon."
  },

  socialLinks: {
    linkedin: "https://linkedin.com/in/productmanager",
    github: "https://github.com/productmanager"
  }
};

// Mock API functions for future backend integration
export const mockAPI = {
  // Contact form submission
  submitContactForm: async (formData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: mockPortfolioData.contactForm.successMessage
        });
      }, 1000);
    });
  },

  // Get portfolio data
  getPortfolioData: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockPortfolioData);
      }, 500);
    });
  },

  // Update portfolio data (for future admin features)
  updatePortfolioData: async (updatedData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: { ...mockPortfolioData, ...updatedData }
        });
      }, 1000);
    });
  }
};