import { SiInstagram, SiFacebook } from 'react-icons/si';

export default function SocialMediaSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-10 lg:mb-12">
            Connect{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              With Us
            </span>
          </h2>

          <div className="flex items-center justify-center gap-6 lg:gap-8">
            <a
              href="https://www.instagram.com/dee_stream?igsh=MXFlaDd2cTJtZmdubA=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 transform"
              aria-label="Instagram"
            >
              <SiInstagram className="w-8 h-8 lg:w-10 lg:h-10" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61588337463094&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 transform"
              aria-label="Facebook"
            >
              <SiFacebook className="w-8 h-8 lg:w-10 lg:h-10" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
