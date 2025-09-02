import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <Link
              to="/"
              className="text-2xl font-extrabold text-white tracking-tight mb-4"
            >
              MyLogo
            </Link>
            <p className="text-amber-100 text-sm text-center md:text-left">
              Empowering your future with innovative solutions and seamless experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <Link
              to="/"
              className="text-amber-100 hover:text-amber-200 transition-colors duration-300 mb-2"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-amber-100 hover:text-amber-200 transition-colors duration-300 mb-2"
            >
              About
            </Link>
            <Link
              to="/github"
              className="text-amber-100 hover:text-amber-200 transition-colors duration-300 mb-2"
            >
              Github
            </Link>
          </div>

          {/* Social Media and Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <Link
                to="/twitter"
                className="text-amber-100 hover:text-amber-200 transition-colors duration-300"
              >
                Twitter
              </Link>
              <Link
                to="/linkedin"
                className="text-amber-100 hover:text-amber-200 transition-colors duration-300"
              >
                LinkedIn
              </Link>
              <Link
                to="/github"
                className="text-amber-100 hover:text-amber-200 transition-colors duration-300"
              >
                GitHub
              </Link>
            </div>
            <a
              href="mailto:contact@mywebsite.com"
              className="text-amber-100 hover:text-amber-200 transition-colors duration-300"
            >
              contact@mywebsite.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-amber-400 text-center">
          <p className="text-amber-100 text-sm">
            &copy; {new Date().getFullYear()} MyLogo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}