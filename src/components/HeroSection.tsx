import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';
import plumedicalogo from '@/assets/plumedica-logo.png';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/7579962/7579962-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl"
        />
        
        {/* Heartbeat Wave Effect */}
        <svg className="absolute bottom-0 left-0 w-full h-32 opacity-20" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <motion.path
            d="M0,50 L200,50 L220,20 L240,80 L260,30 L280,70 L300,50 L500,50 L520,20 L540,80 L560,30 L580,70 L600,50 L800,50 L820,20 L840,80 L860,30 L880,70 L900,50 L1200,50"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-medium text-sm mb-6"
            >
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              Transforming Healthcare Digitally
            </motion.div>

            <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Your Complete
              <span className="text-gradient block">Healthcare</span>
              Ecosystem
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Connecting patients, doctors, hospitals, pharmacies, and diagnostics 
              in one unified platform. Experience healthcare reimagined for the digital age.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px hsl(210 70% 45% / 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-hero text-primary-foreground rounded-xl font-semibold shadow-elevated"
              >
                Explore Platform
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-card/80 backdrop-blur-sm border border-border text-foreground rounded-xl font-semibold shadow-soft"
              >
                Watch Demo
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Users, value: '50K+', label: 'Active Users' },
                { icon: Shield, value: '100%', label: 'Secure' },
                { icon: Clock, value: '24/7', label: 'Support' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center p-4 bg-card/60 backdrop-blur-sm rounded-xl"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/20 rounded-xl mb-2">
                    <stat.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="font-display font-bold text-2xl text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Central Circle */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-12 rounded-full border-2 border-dashed border-secondary/30"
              />
              
              <motion.div
                className="absolute inset-16 rounded-full bg-white shadow-glow flex items-center justify-center p-8"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <img src={plumedicalogo} alt="Plumedica" className="w-full h-full object-contain" />
              </motion.div>

              {/* Orbiting Icons */}
              {['👨‍⚕️', '🏥', '💊', '🔬', '👤', '💼'].map((emoji, index) => {
                const angle = (index * 60 * Math.PI) / 180;
                const radius = 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="absolute w-16 h-16 bg-card/90 backdrop-blur-sm rounded-2xl shadow-elevated flex items-center justify-center text-2xl"
                    style={{
                      left: `calc(50% + ${x}px - 32px)`,
                      top: `calc(50% + ${y}px - 32px)`,
                    }}
                  >
                    {emoji}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
