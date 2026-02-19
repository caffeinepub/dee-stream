export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmitFilm = () => {
    window.location.href = 'mailto:dee.streaming.cinema@gmail.com?subject=Film Submission Inquiry';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/ott-hero-bg.dim_1920x1080.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/60 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 lg:mb-8 leading-tight animate-fade-in">
            Where New Cinema{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              Begins
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
            Stream Movies, Web Series & Digital Premieres Anytime, Anywhere.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 lg:px-10 py-4 lg:py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-base lg:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform"
            >
              Watch Now
            </button>
            <button
              onClick={handleSubmitFilm}
              className="w-full sm:w-auto px-8 lg:px-10 py-4 lg:py-5 bg-white text-blue-600 text-base lg:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform border-2 border-blue-600"
            >
              Submit Your Film
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
