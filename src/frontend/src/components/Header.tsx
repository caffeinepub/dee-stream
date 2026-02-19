import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <img
              src="/assets/file_00000000cbac71fd922f7862b22c3079.png"
              alt="DEE stream"
              className="h-10 sm:h-12 lg:h-14 w-auto transition-all duration-300 hover:scale-105"
            />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-poppins bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent tracking-tight">
              DEE stream
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm lg:text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm lg:text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('featured')}
              className="text-sm lg:text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Featured Films
            </button>
            <button
              onClick={() => scrollToSection('filmmakers')}
              className="text-sm lg:text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              For Filmmakers
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-sm lg:text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm lg:text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
