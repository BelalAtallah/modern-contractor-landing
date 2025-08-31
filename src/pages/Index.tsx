import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Mail, MapPin, Phone, Shield, Zap, Users, Code, Server, Smartphone } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Network Assessment",
      description: "Comprehensive evaluation of your IT infrastructure to identify optimization opportunities."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "IT System Implementation",
      description: "End-to-end implementation of robust IT solutions tailored to your business needs."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Solutions",
      description: "Advanced cybersecurity measures to protect your valuable data and systems."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Enhance system performance and reliability for maximum productivity."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "IT Consulting",
      description: "Strategic guidance to align your technology with business objectives."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Solutions",
      description: "Modern mobile applications and responsive web solutions."
    }
  ];

  const features = [
    "19+ years of IT experience",
    "Multi-level business support",
    "Cost-effective solutions",
    "High-tech service delivery",
    "Comprehensive IT outsourcing",
    "24/7 technical support"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">The Contractor</h1>
                <p className="text-sm text-muted-foreground">IT Solutions</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#why-us" className="text-foreground hover:text-primary transition-colors">Why Us</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-lg">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            Enterprise IT Solutions Since 2005
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Modern IT</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your business with our comprehensive IT outsourcing services. 
            We provide cutting-edge technology solutions for small, mid, and large enterprises 
            with 19+ years of proven experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-xl px-8 py-6 text-lg">
              Start Your Assessment
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-2 hover:bg-primary hover:text-white">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">About The Contractor IT</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                IT Outsource started to be the solution for all firms targeting high-tech service 
                and technology with a fixed reasonable low cost. The Contractor IT brings 19 years 
                of experience in IT outsource and Information Technology field, providing IT services 
                for multi-company levels.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white">
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
              <Card className="p-8 bg-card/80 backdrop-blur-sm border-0 shadow-xl relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Have you ever had an IT Assessment?</h3>
                  <p className="text-muted-foreground mb-6">
                    Get a comprehensive evaluation of your IT environment to identify 
                    optimization opportunities and security vulnerabilities.
                  </p>
                  <Button variant="outline" className="w-full">
                    Schedule Assessment
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IT solutions designed to accelerate your business growth 
              and optimize your technology infrastructure.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Why Choose The Contractor IT?</h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            We deliver exceptional value through proven expertise, innovative solutions, 
            and unwavering commitment to your success.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Expert Team</h3>
              <p className="text-muted-foreground">
                Our certified professionals bring decades of combined experience 
                to solve your most complex IT challenges.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Fast Implementation</h3>
              <p className="text-muted-foreground">
                Rapid deployment and seamless integration to minimize 
                downtime and maximize productivity.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Secure & Reliable</h3>
              <p className="text-muted-foreground">
                Enterprise-grade security and 99.9% uptime guarantee 
                to keep your business running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Ready to Transform Your IT?</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Let's discuss how we can help optimize your technology infrastructure 
            and drive your business forward.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground">info@contractorit.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
              <p className="text-muted-foreground">123 Business Ave, Suite 100</p>
            </div>
          </div>
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-xl px-12 py-6 text-lg">
            Get Your Free Consultation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-foreground text-background">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">The Contractor IT</span>
          </div>
          <p className="text-background/70 mb-4">
            Delivering excellence in IT solutions since 2005
          </p>
          <p className="text-background/50 text-sm">
            © 2024 The Contractor IT. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;