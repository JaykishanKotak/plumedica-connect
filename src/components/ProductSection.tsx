import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Smartphone, 
  Globe, 
  Shield, 
  Cloud,
  Check,
  ArrowRight,
  Cpu,
  Lock,
  BarChart
} from 'lucide-react';

const products = [
  {
    id: 'patient-app',
    icon: Smartphone,
    hoverIcon: Check,
    title: 'Plumedica Patient App',
    description: 'Your personal health companion. Access medical records, book appointments, order medicines, and connect with doctors instantly.',
    features: ['Health Records Management', 'Appointment Scheduling', 'Medicine Ordering', 'Video Consultations', 'Lab Reports'],
    color: 'from-primary to-primary/80',
  },
  {
    id: 'provider-portal',
    icon: Globe,
    hoverIcon: BarChart,
    title: 'Provider Portal',
    description: 'Complete practice management solution for doctors and hospitals. Manage patients, appointments, and medical records efficiently.',
    features: ['Patient Management', 'EMR/EHR System', 'Billing & Invoicing', 'Analytics Dashboard', 'Telemedicine Integration'],
    color: 'from-secondary to-secondary/80',
  },
  {
    id: 'pharmacy-connect',
    icon: Cloud,
    hoverIcon: Lock,
    title: 'Pharmacy Connect',
    description: 'Streamline pharmacy operations with inventory management, prescription processing, and customer engagement tools.',
    features: ['Inventory Management', 'E-Prescription', 'Delivery Management', 'Customer Analytics', 'Drug Database'],
    color: 'from-accent to-accent/80',
  },
  {
    id: 'diagnostic-hub',
    icon: Cpu,
    hoverIcon: Shield,
    title: 'Diagnostic Hub',
    description: 'Digital platform for diagnostic centers to manage tests, reports, and patient data with seamless integration.',
    features: ['Test Scheduling', 'Report Management', 'Home Collection', 'Lab Integration', 'Quality Control'],
    color: 'from-primary to-secondary',
  },
];

const ProductSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="product" className="py-20 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-secondary font-medium text-sm mb-4">
            Our Products
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Powerful <span className="text-gradient">Healthcare</span> Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive suite of products designed to digitize and streamline every aspect of healthcare delivery.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const isHovered = hoveredIndex === index;
            const IconComponent = isHovered ? product.hoverIcon : product.icon;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  isHovered 
                    ? 'bg-gradient-to-br ' + product.color + ' border-transparent shadow-elevated' 
                    : 'bg-card border-border/50 shadow-soft'
                }`}
              >
                {/* Icon */}
                <motion.div 
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                    isHovered 
                      ? 'bg-white/20' 
                      : 'bg-gradient-to-br from-primary/20 to-secondary/20'
                  }`}
                  animate={{ rotate: isHovered ? 5 : 0, scale: isHovered ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent className={`w-8 h-8 transition-colors duration-300 ${
                    isHovered ? 'text-white' : 'text-primary'
                  }`} />
                </motion.div>

                {/* Content */}
                <h3 className={`font-display font-bold text-2xl mb-3 transition-colors duration-300 ${
                  isHovered ? 'text-white' : 'text-foreground'
                }`}>
                  {product.title}
                </h3>
                <p className={`mb-6 transition-colors duration-300 ${
                  isHovered ? 'text-white/90' : 'text-muted-foreground'
                }`}>
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li 
                      key={feature}
                      className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
                        isHovered ? 'text-white/90' : 'text-muted-foreground'
                      }`}
                    >
                      <Check className={`w-4 h-4 transition-colors duration-300 ${
                        isHovered ? 'text-white' : 'text-secondary'
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.div
                  className={`inline-flex items-center gap-2 font-semibold transition-colors duration-300 ${
                    isHovered ? 'text-white' : 'text-primary'
                  }`}
                  whileHover={{ x: 5 }}
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
