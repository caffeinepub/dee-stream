import { SiInstagram, SiFacebook } from 'react-icons/si';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <img
              src="/assets/file_00000000cbac71fd922f7862b22c3079.png"
              alt="DEE stream"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm lg:text-base italic">
              Where New Cinema Begins
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm lg:text-base"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm lg:text-base"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm lg:text-base"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('featured')}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm lg:text-base"
                >
                  Featured Films
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('filmmakers')}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm lg:text-base"
                >
                  For Filmmakers
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm lg:text-base"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm lg:text-base"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <a
              href="mailto:dee.streaming.cinema@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm lg:text-base break-all"
            >
              dee.streaming.cinema@gmail.com
            </a>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/dee_stream?igsh=MXFlaDd2cTJtZmdubA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 transform"
                aria-label="Instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61588337463094&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600 transition-all duration-300 hover:scale-110 transform"
                aria-label="Facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} DEE stream. All Rights Reserved.
          </p>
          <p className="text-gray-400 text-sm text-center md:text-right">
            Built with ❤️ using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.hostname : 'deestream'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
