import { motion } from 'framer-motion';
import { 
  Video, 
  Calendar, 
  FileText, 
  Pill, 
  TestTube, 
  Ambulance, 
  Heart, 
  Shield, 
  Clock,
  MapPin,
  CreditCard,
  Brain
} from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Virtual Doctor Consultation',
    description: 'Connect with certified doctors through HD video calls. Get diagnoses, prescriptions, and follow-ups from home.',
    category: 'Patients',
  },
  {
    icon: Calendar,
    title: 'Appointment Booking',
    description: 'Schedule appointments with doctors, specialists, and hospitals. Get reminders and manage your health calendar.',
    category: 'Patients',
  },
  {
    icon: FileText,
    title: 'Digital Health Records',
    description: 'Access and share your complete medical history securely. Store prescriptions, reports, and treatment plans.',
    category: 'Patients',
  },
  {
    icon: Pill,
    title: 'Medicine Delivery',
    description: 'Order prescribed medicines with home delivery. Track orders and set up auto-refill for chronic medications.',
    category: 'Pharmacies',
  },
  {
    icon: TestTube,
    title: 'Lab Test Booking',
    description: 'Book diagnostic tests with home sample collection. Get digital reports directly in your health profile.',
    category: 'Diagnostics',
  },
  {
    icon: Ambulance,
    title: 'Emergency Services',
    description: '24/7 emergency assistance with ambulance tracking. Direct hospital coordination for critical care.',
    category: 'Hospitals',
  },
  {
    icon: Heart,
    title: 'Health Monitoring',
    description: 'Track vital signs, fitness metrics, and health goals. Integration with wearables for continuous monitoring.',
    category: 'Patients',
  },
  {
    icon: Shield,
    title: 'Insurance Management',
    description: 'Manage health insurance policies, claims, and pre-approvals. Seamless cashless hospitalization.',
    category: 'Partners',
  },
  {
    icon: Clock,
    title: 'Second Opinion',
    description: 'Get expert second opinions from specialists. Upload reports and receive detailed assessments.',
    category: 'Doctors',
  },
  {
    icon: MapPin,
    title: 'Nearby Healthcare',
    description: 'Find hospitals, clinics, pharmacies, and diagnostic centers near you with real-time availability.',
    category: 'All',
  },
  {
    icon: CreditCard,
    title: 'Health Wallet',
    description: 'Manage healthcare payments, subscriptions, and family health expenses in one secure wallet.',
    category: 'All',
  },
  {
    icon: Brain,
    title: 'Mental Health Support',
    description: 'Access counselors, therapists, and mental wellness programs. Confidential sessions and self-help resources.',
    category: 'Patients',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px -15px hsl(200 25% 15% / 0.15)' }}
              className="group relative p-6 bg-card rounded-2xl shadow-soft border border-border/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="relative mb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-gradient-hero transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="absolute -inset-2 rounded-2xl bg-primary/5 -z-10"
                />
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Category Badge */}
              <div className="mt-4 pt-4 border-t border-border/50">
                <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  {service.category}
                </span>
              </div>

              {/* Hover Arrow */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute top-6 right-6 text-primary"
              >
                →
              </motion.div>
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
