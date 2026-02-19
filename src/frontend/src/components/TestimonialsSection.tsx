import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Independent Filmmaker',
      quote: 'DEE stream gave my independent film the platform it deserved. The reach and engagement have been phenomenal. Finally, a platform that truly understands regional cinema.',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Web Series Creator',
      quote: 'As a first-time creator, I was nervous about distribution. DEE stream made the entire process seamless and their support team was incredible. My series reached audiences I never imagined.',
    },
    {
      id: 3,
      name: 'Arjun Mehta',
      role: 'Documentary Director',
      quote: 'The best decision I made was partnering with DEE stream. They respect the art of filmmaking and provide creators with the tools and audience they need to succeed in the digital age.',
    },
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center mb-4">
            <Quote className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              What Filmmakers Say
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from the creators who trust DEE stream with their stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-blue-100"
            >
              <div className="absolute top-6 left-6 text-blue-600/20 group-hover:text-blue-600/30 transition-colors duration-300">
                <Quote className="w-12 h-12" />
              </div>
              
              <div className="relative z-10 pt-8">
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="border-t border-blue-200 pt-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-blue-600 font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
