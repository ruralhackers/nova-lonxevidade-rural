import { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Home from './pages/Home';
import Festival from './pages/Festival';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const closeMenu = () => setIsMenuOpen(false);

  const navLinkClass = 'text-gray-700 transition font-medium hover:opacity-80';
  const navLinkStyle = (e: { currentTarget: HTMLElement }) => {
    e.currentTarget.style.color = '#E67747';
  };
  const navLinkStyleReset = (e: { currentTarget: HTMLElement }) => {
    e.currentTarget.style.color = '';
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F3' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full shadow-sm z-50" style={{ backgroundColor: '#FFFCF7' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
              <img src="/nueva_longevidad_rural(2).png" alt="Nova Lonxevidade Rural" className="h-10 w-auto" />
              <span className="text-xl font-bold text-gray-900">Nova Lonxevidade Rural</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10">
              {isHome ? (
                <>
                  <button onClick={() => scrollToSection('actividades')} className={navLinkClass} onMouseEnter={navLinkStyle} onMouseLeave={navLinkStyleReset}>Actividades</button>
                  <Link to="/festival" className={navLinkClass} onMouseEnter={navLinkStyle} onMouseLeave={navLinkStyleReset}>Festival</Link>
                  <button onClick={() => scrollToSection('inscribete')} className={navLinkClass} onMouseEnter={navLinkStyle} onMouseLeave={navLinkStyleReset}>Participa</button>
                </>
              ) : (
                <>
                  <Link to="/#actividades" className={navLinkClass} onMouseEnter={navLinkStyle} onMouseLeave={navLinkStyleReset}>Actividades</Link>
                  <Link to="/festival" className={navLinkClass} onMouseEnter={navLinkStyle} onMouseLeave={navLinkStyleReset}>Festival</Link>
                  <Link to="/#inscribete" className={navLinkClass} onMouseEnter={navLinkStyle} onMouseLeave={navLinkStyleReset}>Participa</Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-6 space-y-3">
              {isHome ? (
                <>
                  <button onClick={() => scrollToSection('actividades')} className="block w-full text-left px-4 py-3 text-gray-700 rounded font-medium transition hover:bg-[#EBF0E4]">Actividades</button>
                  <Link to="/festival" onClick={closeMenu} className="block w-full text-left px-4 py-3 text-gray-700 rounded font-medium transition hover:bg-[#EBF0E4]">Festival</Link>
                  <button onClick={() => scrollToSection('inscribete')} className="block w-full text-left px-4 py-3 text-gray-700 rounded font-medium transition hover:bg-[#EBF0E4]">Participa</button>
                </>
              ) : (
                <>
                  <Link to="/#actividades" onClick={closeMenu} className="block w-full text-left px-4 py-3 text-gray-700 rounded font-medium transition hover:bg-[#EBF0E4]">Actividades</Link>
                  <Link to="/festival" onClick={closeMenu} className="block w-full text-left px-4 py-3 text-gray-700 rounded font-medium transition hover:bg-[#EBF0E4]">Festival</Link>
                  <Link to="/#inscribete" onClick={closeMenu} className="block w-full text-left px-4 py-3 text-gray-700 rounded font-medium transition hover:bg-[#EBF0E4]">Participa</Link>
                </>
              )}
            </div>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/festival" element={<Festival />} />
      </Routes>
    </div>
  );
}

export default App;
