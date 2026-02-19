export default function ServicesSection() {
  const services = [
    {
      title: 'Digital Movie Premieres',
      icon: '/assets/generated/icon-digital-premieres.dim_128x128.png',
    },
    {
      title: 'Independent Film Distribution',
      icon: '/assets/generated/icon-independent-films.dim_128x128.png',
    },
    {
      title: 'Regional Cinema Streaming',
      icon: '/assets/generated/icon-regional-cinema.dim_128x128.png',
    },
    {
      title: 'Web Series & Originals',
      icon: '/assets/generated/icon-web-series.dim_128x128.png',
    },
    {
      title: 'OTT Release Platform for Filmmakers',
      icon: '/assets/generated/icon-ott-platform.dim_128x128.png',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What We{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-50 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-12 h-12 lg:w-14 lg:h-14 object-contain"
                  />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 leading-snug">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
