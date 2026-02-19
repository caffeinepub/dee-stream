import { Film } from 'lucide-react';

export default function FeaturedFilmsSection() {
  const featuredFilms = [
    {
      id: 1,
      title: 'Midnight Chronicles',
      genre: 'Drama • Thriller',
      image: '/assets/generated/featured-film-1.dim_400x600.png',
    },
    {
      id: 2,
      title: 'Urban Legends',
      genre: 'Mystery • Horror',
      image: '/assets/generated/featured-film-2.dim_400x600.png',
    },
    {
      id: 3,
      title: 'Beyond Horizons',
      genre: 'Sci-Fi • Adventure',
      image: '/assets/generated/featured-film-3.dim_400x600.png',
    },
    {
      id: 4,
      title: 'Silent Echoes',
      genre: 'Romance • Drama',
      image: '/assets/generated/featured-film-4.dim_400x600.png',
    },
  ];

  return (
    <section id="featured" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center mb-4">
            <Film className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Featured Films
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of exceptional cinema
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredFilms.map((film) => (
            <div
              key={film.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white"
            >
              <div className="aspect-[2/3] overflow-hidden">
                <img
                  src={film.image}
                  alt={film.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {film.title}
                </h3>
                <p className="text-sm text-gray-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {film.genre}
                </p>
              </div>

              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                  {film.title}
                </h3>
                <p className="text-sm text-gray-600">{film.genre}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
