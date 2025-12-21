import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  // {
  //   icon: MapPin,
  //   title: 'Visit Us',
  //   details: ['123 Healthcare Avenue', 'Medical District, HC 12345'],
  //   hoverColor: 'from-purple-500 to-violet-600',
  // },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+91 7675860592'],
    hoverColor: 'from-green-500 to-emerald-600',
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@plumedica.com'],
    hoverColor: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Emergency: 24/7 Available'],
    hoverColor: 'from-orange-500 to-amber-600',
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [hoveredContactIndex, setHoveredContactIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
    setShowSuccess(true);

    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-muted/30">
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
            Contact Us
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get <span className="text-gradient">Started</span> Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your healthcare experience? Reach out to us and let's discuss how Plumedica can help you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl shadow-soft border border-border/50 p-8"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  required
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-hero text-primary-foreground font-semibold py-6 shadow-elevated hover:shadow-glow transition-all duration-300"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>

              {/* Success Message */}
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-600 dark:text-green-400"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">Message sent successfully! We'll get back to you within 24 hours.</span>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const isHovered = hoveredContactIndex === index;

              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  onMouseEnter={() => setHoveredContactIndex(index)}
                  onMouseLeave={() => setHoveredContactIndex(null)}
                  className={`flex items-start gap-5 p-5 rounded-xl shadow-soft border transition-all duration-500 cursor-pointer ${isHovered
                    ? 'bg-gradient-to-br ' + info.hoverColor + ' border-transparent shadow-elevated'
                    : 'bg-card border-border/50'
                    }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${isHovered
                    ? 'bg-white/20'
                    : 'bg-gradient-to-br from-primary/20 to-secondary/20'
                    }`}>
                    <info.icon className={`w-6 h-6 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-primary'
                      }`} />
                  </div>
                  <div>
                    <h4 className={`font-display font-bold text-lg mb-1 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-foreground'
                      }`}>{info.title}</h4>
                    {info.details.map((detail, i) => (
                      <p key={i} className={`text-sm transition-colors duration-300 ${isHovered ? 'text-white/90' : 'text-muted-foreground'
                        }`}>{detail}</p>
                    ))}
                  </div>
                </motion.div>
              );
            })}

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-gradient-hero rounded-2xl text-primary-foreground"
            >
              <h4 className="font-display font-bold text-xl mb-2">Join Plumedica Today</h4>
              <p className="text-primary-foreground/90 mb-4">
                Whether you're a patient, doctor, hospital, or pharmacy - we have the right solution for you.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-xl font-semibold shadow-elevated"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
