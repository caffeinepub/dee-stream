export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 lg:mb-8">
            About{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              DEE stream
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            DEE stream is an emerging OTT streaming platform dedicated to digital movie releases, 
            independent cinema, regional storytelling, and original web series. Our mission is to 
            create a global platform where new filmmakers and fresh stories can reach audiences worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
