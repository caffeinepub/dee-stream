export default function FilmmakersSection() {
  const handleSubmit = () => {
    window.location.href = 'mailto:dee.streaming.cinema@gmail.com?subject=Film Distribution Inquiry';
  };

  return (
    <section id="filmmakers" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 lg:mb-8">
            Release Your Film on{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              DEE stream
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-10 lg:mb-12">
            We provide digital distribution opportunities for independent filmmakers, production houses, 
            and content creators. Partner with us to stream your film worldwide.
          </p>

          <button
            onClick={handleSubmit}
            className="px-8 lg:px-10 py-4 lg:py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-base lg:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform"
          >
            Submit via Email
          </button>
        </div>
      </div>
    </section>
  );
}
