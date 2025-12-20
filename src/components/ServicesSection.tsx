import { motion } from 'framer-motion';
import { 
  Video, 
  Building2, 
  Pill, 
  User, 
  Briefcase,
  Heart,
  Activity,
  Ambulance,
  FileText
} from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Virtual Doctor Consultation',
    description: 'Connect with certified doctors through HD video calls. Get diagnoses, prescriptions, and follow-ups from the comfort of your home.',
    category: 'Telemedicine',
  },
  {
    icon: Building2,
    title: 'Find Best Hospital Near Me',
    description: 'Locate top-rated hospitals in your area with real-time availability, specialties, and patient reviews.',
    category: 'Hospitals',
  },
  {
    icon: Pill,
    title: 'Find Best Pharmacy for Drugs',
    description: 'Search and compare pharmacies near you. Check medicine availability, prices, and get home delivery options.',
    category: 'Pharmacies',
  },
  {
    icon: User,
    title: 'Patient Health Portal',
    description: 'Complete access to medical health records, fitness tracking, wellness programs, and personalized health insights.',
    category: 'Patients',
    subFeatures: ['Medical Records', 'Fitness Tracking', 'Wellness Programs'],
  },
  {
    icon: Ambulance,
    title: 'Medical Emergency Services',
    description: '24/7 emergency assistance with real-time ambulance tracking, hospital coordination, and critical care support.',
    category: 'Emergency',
  },
  {
    icon: Briefcase,
    title: 'Healthcare Job Postings',
    description: 'Find healthcare career opportunities. Browse job listings for doctors, nurses, technicians, and administrative roles.',
    category: 'Jobs',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background">
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            Our Services
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Healthcare <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for complete healthcare management, from virtual consultations 
            to emergency services, all in one integrated platform.
          </p>
        </motion.div>

        {/* Services Grid - Square Boxes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 25px 50px -12px hsl(var(--primary) / 0.15)' }}
              className="group relative aspect-square p-8 bg-card rounded-2xl shadow-soft border border-border/50 transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary group-hover:to-secondary transition-all duration-500"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Sub-features if exists */}
                {service.subFeatures && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.subFeatures.map((feature) => (
                      <span 
                        key={feature}
                        className="text-xs px-2 py-1 bg-secondary/10 text-secondary rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                )}

                {/* Category Badge */}
                <div className="mt-auto pt-4">
                  <span className="text-xs font-semibold text-primary/80 bg-primary/10 px-3 py-1.5 rounded-full">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Hover Overlay Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rotate-45 group-hover:from-primary/20 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-hero text-primary-foreground rounded-xl font-semibold shadow-elevated"
          >
            Explore All Services
            <span>→</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
