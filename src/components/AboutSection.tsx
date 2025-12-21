import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Shield, Zap } from 'lucide-react';
import { useState } from 'react';

const values = [
  {
    icon: Heart,
    title: 'Patient-Centric Care',
    description: 'Putting patients at the center of everything we do, ensuring accessible and quality healthcare for all.',
    hoverColor: 'from-rose-500 to-pink-600',
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'Maintaining highest standards of data security and privacy to protect sensitive medical information.',
    hoverColor: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Continuously innovating to bring the latest healthcare technology solutions to our ecosystem.',
    hoverColor: 'from-amber-500 to-orange-600',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Building strong partnerships between patients, providers, and healthcare institutions.',
    hoverColor: 'from-emerald-500 to-teal-600',
  },
];

const AboutSection = () => {
  const [hoveredMission, setHoveredMission] = useState(false);
  const [hoveredVision, setHoveredVision] = useState(false);
  const [hoveredValueIndex, setHoveredValueIndex] = useState<number | null>(null);
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            About Us
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Revolutionizing <span className="text-gradient">Healthcare</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Plumedica is a comprehensive healthcare ecosystem designed to connect all stakeholders
            in the healthcare industry - from patients to providers, pharmacies to diagnostics.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => setHoveredMission(true)}
            onMouseLeave={() => setHoveredMission(false)}
            className={`p-8 rounded-2xl shadow-soft border transition-all duration-500 cursor-pointer ${hoveredMission
              ? 'bg-gradient-to-br from-primary to-primary/80 border-transparent shadow-elevated'
              : 'bg-card border-border/50'
              }`}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${hoveredMission
              ? 'bg-white/20'
              : 'bg-gradient-to-br from-primary/20 to-primary/10'
              }`}>
              <Target className={`w-7 h-7 transition-colors duration-300 ${hoveredMission ? 'text-white' : 'text-primary'
                }`} />
            </div>
            <h3 className={`font-display text-2xl font-bold mb-4 transition-colors duration-300 ${hoveredMission ? 'text-white' : 'text-foreground'
              }`}>Our Mission</h3>
            <p className={`leading-relaxed transition-colors duration-300 ${hoveredMission ? 'text-white/90' : 'text-muted-foreground'
              }`}>
              To democratize healthcare access by creating a unified digital platform that seamlessly
              connects patients with healthcare providers, hospitals, pharmacies, and diagnostic centers.
              We strive to make quality healthcare accessible, affordable, and convenient for everyone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => setHoveredVision(true)}
            onMouseLeave={() => setHoveredVision(false)}
            className={`p-8 rounded-2xl shadow-soft border transition-all duration-500 cursor-pointer ${hoveredVision
              ? 'bg-gradient-to-br from-secondary to-secondary/80 border-transparent shadow-elevated'
              : 'bg-card border-border/50'
              }`}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${hoveredVision
              ? 'bg-white/20'
              : 'bg-gradient-to-br from-secondary/20 to-secondary/10'
              }`}>
              <Eye className={`w-7 h-7 transition-colors duration-300 ${hoveredVision ? 'text-white' : 'text-secondary'
                }`} />
            </div>
            <h3 className={`font-display text-2xl font-bold mb-4 transition-colors duration-300 ${hoveredVision ? 'text-white' : 'text-foreground'
              }`}>Our Vision</h3>
            <p className={`leading-relaxed transition-colors duration-300 ${hoveredVision ? 'text-white/90' : 'text-muted-foreground'
              }`}>
              To become the world's most trusted healthcare ecosystem, where every individual has
              instant access to quality medical care. We envision a future where technology bridges
              the gap between patients and healthcare providers, ensuring no one is left behind.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="font-display text-2xl font-bold text-foreground">Our Core Values</h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const isHovered = hoveredValueIndex === index;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onMouseEnter={() => setHoveredValueIndex(index)}
                onMouseLeave={() => setHoveredValueIndex(null)}
                className={`p-6 rounded-xl shadow-soft border text-center transition-all duration-500 cursor-pointer ${isHovered
                  ? 'bg-gradient-to-br ' + value.hoverColor + ' border-transparent shadow-elevated'
                  : 'bg-card border-border/50'
                  }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-500 ${isHovered
                  ? 'bg-white/20'
                  : 'bg-gradient-to-br from-primary/20 to-secondary/20'
                  }`}>
                  <value.icon className={`w-6 h-6 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-primary'
                    }`} />
                </div>
                <h4 className={`font-display font-bold text-lg mb-2 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-foreground'
                  }`}>{value.title}</h4>
                <p className={`text-sm transition-colors duration-300 ${isHovered ? 'text-white/90' : 'text-muted-foreground'
                  }`}>{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
