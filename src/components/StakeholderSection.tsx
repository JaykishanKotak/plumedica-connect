import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { User, Stethoscope, Building2, Pill, TestTube, Briefcase, Handshake } from 'lucide-react';
import plumedicalogo from '@/assets/plumedica-logo.png';

const stakeholders = [
  {
    id: 'patients',
    icon: User,
    title: 'Patients',
    description: 'Access world-class healthcare from anywhere. Book appointments, view medical records, and consult doctors online.',
    features: ['Online Consultations', 'Medical Records', 'Appointment Booking', 'Health Tracking'],
    color: 'from-primary to-primary/70',
    bgColor: 'bg-primary/10',
  },
  {
    id: 'doctors',
    icon: Stethoscope,
    title: 'Doctors',
    description: 'Streamline your practice with our comprehensive platform. Manage patients, schedules, and consultations efficiently.',
    features: ['Patient Management', 'Digital Prescriptions', 'Schedule Management', 'Telemedicine'],
    color: 'from-secondary to-secondary/70',
    bgColor: 'bg-secondary/10',
  },
  {
    id: 'hospitals',
    icon: Building2,
    title: 'Hospitals',
    description: 'Transform hospital operations with integrated management systems for beds, staff, and resources.',
    features: ['Bed Management', 'Staff Coordination', 'Resource Planning', 'Analytics Dashboard'],
    color: 'from-accent to-accent/70',
    bgColor: 'bg-accent/10',
  },
  {
    id: 'pharmacies',
    icon: Pill,
    title: 'Pharmacies',
    description: 'Connect with patients and healthcare providers. Manage inventory and fulfill prescriptions digitally.',
    features: ['Inventory Management', 'E-Prescriptions', 'Home Delivery', 'Order Tracking'],
    color: 'from-primary to-secondary',
    bgColor: 'bg-primary/10',
  },
  {
    id: 'diagnostics',
    icon: TestTube,
    title: 'Diagnostics',
    description: 'Offer seamless diagnostic services with online booking, sample collection, and digital reports.',
    features: ['Online Booking', 'Home Collection', 'Digital Reports', 'Lab Integration'],
    color: 'from-secondary to-accent',
    bgColor: 'bg-secondary/10',
  },
  {
    id: 'jobs',
    icon: Briefcase,
    title: 'Job Network',
    description: 'Find healthcare opportunities or recruit top talent. Connect professionals with institutions.',
    features: ['Job Listings', 'Talent Search', 'CV Builder', 'Interview Scheduling'],
    color: 'from-accent to-primary',
    bgColor: 'bg-accent/10',
  },
  {
    id: 'partners',
    icon: Handshake,
    title: 'Partners',
    description: 'Join our ecosystem as a partner. Collaborate to deliver innovative healthcare solutions.',
    features: ['API Access', 'Integration Support', 'Revenue Sharing', 'Marketing Tools'],
    color: 'from-primary to-accent',
    bgColor: 'bg-primary/10',
  },
];

const StakeholderSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredFeatureIndex, setHoveredFeatureIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, stakeholders.length - 1]);

  useEffect(() => {
    const unsubscribe = progress.on('change', (value) => {
      setActiveIndex(Math.round(value));
    });
    return () => unsubscribe();
  }, [progress]);

  const currentStakeholder = stakeholders[activeIndex];

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative bg-muted/30"
      style={{ height: `${stakeholders.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Background gradient based on active stakeholder */}
        <motion.div
          className={`absolute inset-0 -z-10 opacity-30 bg-gradient-to-br ${currentStakeholder.color}`}
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 0.5 }}
        />

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[600px]">
            {/* Left - Content */}
            <div className="relative min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStakeholder.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${currentStakeholder.color} text-white font-medium text-sm mb-6`}
                  >
                    <currentStakeholder.icon size={16} />
                    {currentStakeholder.title}
                  </motion.div>

                  <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Empowering <span className="text-gradient">{currentStakeholder.title}</span>
                  </h2>

                  <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                    {currentStakeholder.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {currentStakeholder.features.map((feature, i) => {
                      const isHovered = hoveredFeatureIndex === i;

                      return (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          onMouseEnter={() => setHoveredFeatureIndex(i)}
                          onMouseLeave={() => setHoveredFeatureIndex(null)}
                          className={`flex items-center gap-3 p-4 rounded-xl shadow-soft border transition-all duration-500 cursor-pointer ${isHovered
                              ? `bg-gradient-to-r ${currentStakeholder.color} border-transparent shadow-elevated`
                              : 'bg-card border-border/50'
                            }`}
                        >
                          <div className={`w-3 h-3 rounded-full transition-all duration-500 ${isHovered
                              ? 'bg-white'
                              : `bg-gradient-to-r ${currentStakeholder.color}`
                            }`} />
                          <span className={`font-medium transition-colors duration-300 ${isHovered ? 'text-white' : 'text-foreground'
                            }`}>{feature}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right - Circle Navigation with Icons */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-[500px] h-[500px]">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-border" />

                {/* Progress Ring */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="250"
                    cy="250"
                    r="248"
                    fill="none"
                    stroke="url(#progressGradient)"
                    strokeWidth="4"
                    strokeDasharray={`${(activeIndex + 1) / stakeholders.length * 1558} 1558`}
                    className="transition-all duration-500"
                  />
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(var(--secondary))" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Center with Logo */}
                <motion.div
                  key={activeIndex}
                  className={`absolute inset-20 rounded-full flex items-center justify-center shadow-glow p-6 transition-colors duration-500 ${currentStakeholder.bgColor}`}
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <img src={plumedicalogo} alt="Plumedica" className="rounded-full w-full h-full object-contain" />
                </motion.div>

                {/* Stakeholder Icons around circle */}
                {stakeholders.map((stakeholder, index) => {
                  const angle = (index * (360 / stakeholders.length) - 90) * (Math.PI / 180);
                  const radius = 200;
                  const x = Math.cos(angle) * radius + 250;
                  const y = Math.sin(angle) * radius + 250;
                  const isActive = activeIndex === index;

                  return (
                    <motion.div
                      key={stakeholder.id}
                      className="absolute"
                      style={{
                        left: x - 32,
                        top: y - 32,
                      }}
                    >
                      <motion.div
                        animate={{
                          scale: isActive ? 1.3 : 1,
                          boxShadow: isActive
                            ? '0 0 40px hsl(var(--primary) / 0.5)'
                            : '0 4px 20px -4px hsl(200 25% 15% / 0.1)',
                        }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${isActive
                          ? `bg-gradient-to-br ${stakeholder.color} text-white`
                          : 'bg-card text-muted-foreground border border-border/50'
                          }`}
                      >
                        <stakeholder.icon size={isActive ? 28 : 24} />
                      </motion.div>

                      {/* Active Pulse Ring */}
                      {isActive && (
                        <>
                          <motion.div
                            initial={{ scale: 0.8, opacity: 1 }}
                            animate={{ scale: 2, opacity: 0 }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="absolute inset-0 rounded-2xl bg-primary/20"
                          />
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium text-foreground"
                          >
                            {stakeholder.title}
                          </motion.div>
                        </>
                      )}
                    </motion.div>
                  );
                })}

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {stakeholders.map((_, index) => {
                    const angle = (index * (360 / stakeholders.length) - 90) * (Math.PI / 180);
                    const outerRadius = 200;
                    const innerRadius = 100;
                    const x1 = Math.cos(angle) * innerRadius + 250;
                    const y1 = Math.sin(angle) * innerRadius + 250;
                    const x2 = Math.cos(angle) * (outerRadius - 32) + 250;
                    const y2 = Math.sin(angle) * (outerRadius - 32) + 250;

                    return (
                      <motion.line
                        key={index}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke={activeIndex === index ? 'hsl(var(--primary))' : 'hsl(var(--border))'}
                        strokeWidth={activeIndex === index ? 3 : 1}
                        strokeDasharray={activeIndex === index ? '0' : '4 4'}
                        className="transition-all duration-500"
                      />
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Mobile Progress Indicator */}
            <div className="lg:hidden flex justify-center gap-2 mt-8">
              {stakeholders.map((stakeholder, index) => (
                <motion.div
                  key={stakeholder.id}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-primary w-8' : 'bg-border'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakeholderSection;
