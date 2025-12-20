import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StakeholderSection from '@/components/StakeholderSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProductSection from '@/components/ProductSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StakeholderSection />
      <AboutSection />
      <ServicesSection />
      <ProductSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
