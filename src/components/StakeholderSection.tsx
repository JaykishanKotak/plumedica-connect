import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { User, Stethoscope, Building2, Pill, TestTube, Briefcase, Handshake } from 'lucide-react';

const stakeholders = [
  {
    id: 'patients',
    icon: User,
    title: 'Patients',
    description: 'Access world-class healthcare from anywhere. Book appointments, view medical records, and consult doctors online.',
    features: ['Online Consultations', 'Medical Records', 'Appointment Booking', 'Health Tracking'],
    color: 'from-teal-500 to-cyan-500',
  },
  {
    id: 'doctors',
    icon: Stethoscope,
    title: 'Doctors',
    description: 'Streamline your practice with our comprehensive platform. Manage patients, schedules, and consultations efficiently.',
    features: ['Patient Management', 'Digital Prescriptions', 'Schedule Management', 'Telemedicine'],
    color: 'from-blue-500 to-indigo-500',
  },
  {
    id: 'hospitals',
    icon: Building2,
    title: 'Hospitals',
    description: 'Transform hospital operations with integrated management systems for beds, staff, and resources.',
    features: ['Bed Management', 'Staff Coordination', 'Resource Planning', 'Analytics Dashboard'],
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 'pharmacies',
    icon: Pill,
    title: 'Pharmacies',
    description: 'Connect with patients and healthcare providers. Manage inventory and fulfill prescriptions digitally.',
    features: ['Inventory Management', 'E-Prescriptions', 'Home Delivery', 'Order Tracking'],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'diagnostics',
    icon: TestTube,
    title: 'Diagnostics',
    description: 'Offer seamless diagnostic services with online booking, sample collection, and digital reports.',
    features: ['Online Booking', 'Home Collection', 'Digital Reports', 'Lab Integration'],
    color: 'from-emerald-500 to-green-500',
  },
  {
    id: 'jobs',
    icon: Briefcase,
    title: 'Job Network',
    description: 'Find healthcare opportunities or recruit top talent. Connect professionals with institutions.',
    features: ['Job Listings', 'Talent Search', 'CV Builder', 'Interview Scheduling'],
    color: 'from-amber-500 to-yellow-500',
  },
  {
    id: 'partners',
    icon: Handshake,
    title: 'Partners',
    description: 'Join our ecosystem as a partner. Collaborate to deliver innovative healthcare solutions.',
    features: ['API Access', 'Integration Support', 'Revenue Sharing', 'Marketing Tools'],
    color: 'from-pink-500 to-rose-500',
  },
];

const StakeholderSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
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

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative"
      style={{ height: `${stakeholders.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="relative">
              {stakeholders.map((stakeholder, index) => (
                <motion.div
                  key={stakeholder.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    y: activeIndex === index ? 0 : 50,
                    pointerEvents: activeIndex === index ? 'auto' : 'none',
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${stakeholder.color} text-white font-medium text-sm mb-6`}>
                    <stakeholder.icon size={16} />
                    {stakeholder.title}
                  </div>

                  <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Empowering <span className="text-gradient">{stakeholder.title}</span>
                  </h2>

                  <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                    {stakeholder.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {stakeholder.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-soft"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${stakeholder.color}`} />
                        <span className="font-medium text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right - Circle Navigation */}
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
                    stroke="hsl(var(--primary))"
                    strokeWidth="4"
                    strokeDasharray={`${(activeIndex + 1) / stakeholders.length * 1558} 1558`}
                    className="transition-all duration-500"
                  />
                </svg>

                {/* Center */}
                <div className="absolute inset-16 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow">
                  <span className="text-primary-foreground font-display font-bold text-4xl">P</span>
                </div>

                {/* Stakeholder Dots */}
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
                          scale: isActive ? 1.2 : 1,
                          boxShadow: isActive ? '0 0 30px hsl(174 72% 40% / 0.4)' : '0 4px 20px -4px hsl(200 25% 15% / 0.1)',
                        }}
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors ${
                          isActive ? 'bg-gradient-hero text-primary-foreground' : 'bg-card text-muted-foreground'
                        }`}
                      >
                        <stakeholder.icon size={24} />
                      </motion.div>
                      
                      {/* Pulse Ring */}
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 1 }}
                          animate={{ scale: 1.5, opacity: 0 }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="absolute inset-0 rounded-2xl bg-primary/30"
                        />
                      )}
                    </motion.div>
                  );
                })}

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {stakeholders.map((_, index) => {
                    const angle = (index * (360 / stakeholders.length) - 90) * (Math.PI / 180);
                    const outerRadius = 200;
                    const innerRadius = 85;
                    const x1 = Math.cos(angle) * innerRadius + 250;
                    const y1 = Math.sin(angle) * innerRadius + 250;
                    const x2 = Math.cos(angle) * (outerRadius - 32) + 250;
                    const y2 = Math.sin(angle) * (outerRadius - 32) + 250;

                    return (
                      <line
                        key={index}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke={activeIndex === index ? 'hsl(174 72% 40%)' : 'hsl(var(--border))'}
                        strokeWidth={activeIndex === index ? 2 : 1}
                        strokeDasharray={activeIndex === index ? '0' : '4 4'}
                        className="transition-all duration-300"
                      />
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakeholderSection;
