import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import FeaturedFilmsSection from './components/FeaturedFilmsSection';
import FilmmakersSection from './components/FilmmakersSection';
import TestimonialsSection from './components/TestimonialsSection';
import SocialMediaSection from './components/SocialMediaSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FeaturedFilmsSection />
        <FilmmakersSection />
        <TestimonialsSection />
        <SocialMediaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
