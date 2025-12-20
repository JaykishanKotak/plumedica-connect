import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Video, 
  Building2, 
  Pill, 
  User, 
  Briefcase,
  Ambulance,
  Heart,
  Stethoscope,
  MapPin,
  Search,
  FileText,
  Activity
} from 'lucide-react';

const services = [
  {
    icon: Video,
    hoverIcon: Stethoscope,
    title: 'Virtual Doctor Consultation',
    description: 'Connect with certified doctors through HD video calls. Get diagnoses, prescriptions, and follow-ups from the comfort of your home.',
    category: 'Telemedicine',
    hoverColor: 'from-primary to-primary/80',
  },
  {
    icon: Building2,
    hoverIcon: MapPin,
    title: 'Find Best Hospital Near Me',
    description: 'Locate top-rated hospitals in your area with real-time availability, specialties, and patient reviews.',
    category: 'Hospitals',
    hoverColor: 'from-secondary to-secondary/80',
  },
  {
    icon: Pill,
    hoverIcon: Search,
    title: 'Find Best Pharmacy for Drugs',
    description: 'Search and compare pharmacies near you. Check medicine availability, prices, and get home delivery options.',
    category: 'Pharmacies',
    hoverColor: 'from-accent to-accent/80',
  },
  {
    icon: User,
    hoverIcon: FileText,
    title: 'Patient Health Portal',
    description: 'Complete access to medical health records, fitness tracking, wellness programs, and personalized health insights.',
    category: 'Patients',
    subFeatures: ['Medical Records', 'Fitness Tracking', 'Medical Emergency'],
    hoverColor: 'from-primary to-secondary',
  },
  {
    icon: Ambulance,
    hoverIcon: Heart,
    title: 'Medical Emergency Services',
    description: '24/7 emergency assistance with real-time ambulance tracking, hospital coordination, and critical care support.',
    category: 'Emergency',
    hoverColor: 'from-destructive to-destructive/80',
  },
  {
    icon: Briefcase,
    hoverIcon: Activity,
    title: 'Healthcare Job Postings',
    description: 'Find healthcare career opportunities. Browse job listings for doctors, nurses, technicians, and administrative roles.',
    category: 'Jobs',
    hoverColor: 'from-secondary to-primary',
  },
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            Our Services
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Healthcare <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for complete healthcare management, from virtual consultations 
            to emergency services, all in one integrated platform.
          </p>
        </motion.div>

        {/* Services Grid - Square Boxes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;
            const IconComponent = isHovered ? service.hoverIcon : service.icon;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative aspect-square p-6 rounded-2xl shadow-soft border transition-all duration-500 flex flex-col cursor-pointer ${
                  isHovered 
                    ? 'bg-gradient-to-br ' + service.hoverColor + ' border-transparent shadow-elevated' 
                    : 'bg-card border-border/50'
                }`}
              >
                {/* Icon */}
                <div className="relative mb-4">
                  <motion.div 
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      isHovered 
                        ? 'bg-white/20' 
                        : 'bg-gradient-to-br from-primary/20 to-secondary/20'
                    }`}
                    animate={{ rotate: isHovered ? 5 : 0, scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className={`w-7 h-7 transition-colors duration-300 ${
                      isHovered ? 'text-white' : 'text-primary'
                    }`} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className={`font-display font-bold text-lg mb-2 transition-colors duration-300 ${
                    isHovered ? 'text-white' : 'text-foreground'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed flex-1 transition-colors duration-300 ${
                    isHovered ? 'text-white/90' : 'text-muted-foreground'
                  }`}>
                    {service.description}
                  </p>

                  {/* Sub-features if exists */}
                  {service.subFeatures && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {service.subFeatures.map((feature) => (
                        <span 
                          key={feature}
                          className={`text-xs px-2 py-1 rounded-full transition-colors duration-300 ${
                            isHovered 
                              ? 'bg-white/20 text-white' 
                              : 'bg-secondary/10 text-secondary'
                          }`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="mt-auto pt-3">
                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors duration-300 ${
                      isHovered 
                        ? 'bg-white/20 text-white' 
                        : 'text-primary/80 bg-primary/10'
                    }`}>
                      {service.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
