import { Mail, Phone, MapPin } from 'lucide-react';
import plumedicalogo from '@/assets/plumedica-logo.png';

const Footer = () => {
  const footerLinks = {
    Company: ['About Us', 'Careers', 'Press', 'Blog'],
    Services: ['Virtual Consultation', 'Lab Tests', 'Medicine Delivery', 'Health Records'],
    Support: ['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'],
    Connect: ['For Doctors', 'For Hospitals', 'For Pharmacies', 'Partners'],
  };

  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={plumedicalogo} alt="Plumedica Logo" className="h-16 w-auto" />
            </div>
            <p className="text-background/70 mb-6 max-w-sm">
              Your complete healthcare ecosystem connecting patients, doctors, hospitals, 
              and pharmacies for a healthier tomorrow.
            </p>
            <div className="space-y-3">
              <a href="mailto:contact@plumedica.com" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                <Mail size={18} />
                info@plumedica.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                <Phone size={18} />
                +91 7675860592
              </a>
              <div className="flex items-center gap-3 text-background/70">
                <MapPin size={18} />
                Healthcare Innovation Hub
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-lg mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-background/70 hover:text-background transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2026 Plumedica. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-background/50 hover:text-background text-sm transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
