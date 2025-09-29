import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />

      <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50 shadow-2xl sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Brand */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-lg shadow-lg">
                <i className="fas fa-film text-white text-xl"></i>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  CineStream
                </span>
                <span className="text-xs text-slate-400 -mt-1">Watch Movies Online</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="flex items-center space-x-2 px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all font-medium">
                <i className="fas fa-home"></i>
                <span>Home</span>
              </a>
              <a href="#" className="flex items-center space-x-2 px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all font-medium">
                <i className="fas fa-film"></i>
                <span>Movies</span>
              </a>
              <a href="#" className="flex items-center space-x-2 px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all font-medium">
                <i className="fas fa-fire"></i>
                <span>Trending</span>
              </a>
              <a href="#" className="flex items-center space-x-2 px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all font-medium">
                <i className="fas fa-star"></i>
                <span>Top Rated</span>
              </a>
              <a href="#" className="flex items-center space-x-2 px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all font-medium">
                <i className="fas fa-heart"></i>
                <span>Watchlist</span>
              </a>
            </div>

            {/* Right Side Icons */}
            <div className="hidden md:flex items-center space-x-3">
              <button className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-all">
                <i className="fas fa-search text-lg"></i>
              </button>
              <button className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-all">
                <i className="fas fa-user text-lg"></i>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-all"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2 border-t border-slate-700/50">
              <a href="#" className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-all font-medium py-3 px-4 rounded-lg">
                <i className="fas fa-home w-5"></i>
                <span>Home</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-all font-medium py-3 px-4 rounded-lg">
                <i className="fas fa-film w-5"></i>
                <span>Movies</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-all font-medium py-3 px-4 rounded-lg">
                <i className="fas fa-fire w-5"></i>
                <span>Trending</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-all font-medium py-3 px-4 rounded-lg">
                <i className="fas fa-star w-5"></i>
                <span>Top Rated</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-all font-medium py-3 px-4 rounded-lg">
                <i className="fas fa-heart w-5"></i>
                <span>Watchlist</span>
              </a>
              <div className="flex space-x-2 pt-3 border-t border-slate-700/50">
                <button className="flex-1 py-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-all flex items-center justify-center space-x-2">
                  <i className="fas fa-search"></i>
                  <span>Search</span>
                </button>
                <button className="flex-1 py-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-all flex items-center justify-center space-x-2">
                  <i className="fas fa-user"></i>
                  <span>Profile</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;