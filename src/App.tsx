import { useState } from 'react';
import { Menu, X, Heart, Users, Laptop, Target, Dog, Palette, MessageCircle, Calendar, Activity, Leaf } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F3' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full shadow-sm z-50" style={{ backgroundColor: '#FFFCF7' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img src="/nueva_longevidad_rural(2).png" alt="Nova Lonxevidade Rural" className="h-10 w-auto" />
              <span className="text-xl font-bold text-gray-900">Nova Lonxevidade Rural</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10">
              <button onClick={() => scrollToSection('actividades')} className="text-gray-700 transition font-medium" onMouseEnter={(e) => e.currentTarget.style.color = '#E67747'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Actividades</button>
              <button onClick={() => scrollToSection('inscribete')} className="text-gray-700 transition font-medium" onMouseEnter={(e) => e.currentTarget.style.color = '#E67747'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Participa</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-6 space-y-3">
              <button onClick={() => scrollToSection('actividades')} className="block w-full text-left px-4 py-3 text-gray-700 rounded font-medium transition" onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EBF0E4'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}>Actividades</button>
              <button onClick={() => scrollToSection('inscribete')} className="block w-full text-left px-4 py-3 text-gray-700 rounded font-medium transition" onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EBF0E4'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}>Participa</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-24 px-6 lg:px-12" style={{ backgroundColor: '#FFFCF7' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <img src="/nueva_longevidad_rural(2).png" alt="Nova Lonxevidade Rural" className="h-32 w-auto" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Nova Lonxevidade Rural
            </h1>
            <p className="text-2xl md:text-3xl text-gray-800 mb-6 font-semibold">
              Construíndo futuro desde as nosas raíces
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Un proxecto en Anceu e arredores que constrúe redes de coidados a través de tecnoloxía, creatividade e benestar físico e emocional.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="proxecto" className="py-24 px-6 lg:px-12" style={{ backgroundColor: '#EBF0E4' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">O desafío da nova lonxevidade rural</h2>
            <div className="w-20 h-1" style={{ backgroundColor: '#E67747' }}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Nova Lonxevidade Rural xorde como resposta aos desafíos demográficos que enfrontan as nosas
                aldeas: a perda progresiva de poboación, a fenda dixital que nos afasta da sociedade conectada,
                e o illamento cultural da aldea de <a href="https://www.casadopobo.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline" style={{ color: '#E67747' }}>Anceu</a> e arredores.
              </p>
              <div className="flex items-start space-x-4">
                <Target className="h-8 w-8 flex-shrink-0 mt-1" style={{ color: '#E67747' }} />
                <p className="text-gray-700 leading-relaxed text-lg">
                  Con este proxecto pretendemos mellorar a calidade de vida das persoas a través dunha fusión entre arte, tecnoloxía e desenvolvemento emocional e físico, creando así unha comunidade viva, conectada e sostible.
                </p>
              </div>
              <p className="text-sm font-semibold mt-6" style={{ color: '#E67747' }}>
                <a href="https://www.ruralhackers.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Un proxecto de Rural Hackers</a>
              </p>
            </div>

            <div className="rounded overflow-hidden shadow-lg">
              <img
                src="/prompthero-1767639401434.jpg"
                alt="Mulleres maiores activas usando tecnoloxía"
                className="w-full h-full object-cover"
                style={{ minHeight: '300px', maxHeight: '350px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="actividades" className="py-24 px-6 lg:px-12" style={{ backgroundColor: '#FFF5EB' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Actividades</h2>
            <div className="w-20 h-1" style={{ backgroundColor: '#E67747' }}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* AventuraTech */}
            <div className="p-8 rounded flex flex-col" style={{ backgroundColor: '#FFFCF7', border: '1px solid #E5DDD0' }}>
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#E5A14D' }}>
                  <Activity className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">AventuraTech</h3>
                  <p className="text-base text-gray-700 mb-2">Deporte e tecnoloxía con <a href="https://www.ruralchamps.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline" style={{ color: '#E67747' }}>Rural Champs</a></p>
                  <p className="text-sm font-semibold" style={{ color: '#E67747' }}>De febreiro a xuño • martes de 11.00 a 12.00 • Rural Champs</p>
                </div>
              </div>
              <div className="rounded overflow-hidden mb-4">
                <img
                  src="/prompthero-1767640131506.jpg"
                  alt="Maiores aprendendo tecnoloxía"
                  className="w-full h-64 object-cover object-center"
                  style={{ objectPosition: 'center 35%' }}
                />
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                Cursos que combinan tecnoloxía con actividade física e desenvolvemento emocional.
              </p>
              <a
                href="https://forms.gle/9BMTnfQeaiYc42SY8"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-white text-sm font-semibold rounded transition w-fit max-w-[40%] mx-auto text-center"
                style={{ backgroundColor: '#6B8E5B' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A7A4A'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6B8E5B'}
              >
                Inscríbete
              </a>
            </div>

            {/* CanTech */}
            <div className="p-8 rounded flex flex-col" style={{ backgroundColor: '#FFFCF7', border: '1px solid #E5DDD0' }}>
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#C85A47' }}>
                  <Dog className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">CanTech</h3>
                  <p className="text-base text-gray-700 mb-2">Adestramiento canino con <a href="https://adaintervenciones.weebly.com/iquestqueacute-es-ada.html" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline" style={{ color: '#E67747' }}>Ada Intervenciones</a></p>
                  <p className="text-sm font-semibold" style={{ color: '#E67747' }}>De febreiro a xuño • 2 hora mensuais • Casa do Pobo de Anceu</p>
                </div>
              </div>
              <div className="rounded overflow-hidden mb-4">
                <img
                  src="/prompthero-1767640721484.jpg"
                  alt="Persoas con cans"
                  className="w-full h-64 object-cover"
                />
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                Encontros de aprendizaxe en tecnoloxía e traballo con adestramento de cans abandonados de protectoras locais.
              </p>
              <a
                href="https://forms.gle/9BMTnfQeaiYc42SY8"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-white text-sm font-semibold rounded transition w-fit max-w-[40%] mx-auto text-center"
                style={{ backgroundColor: '#6B8E5B' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A7A4A'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6B8E5B'}
              >
                Inscríbete
              </a>
            </div>

            {/* FemTech */}
            <div className="p-8 rounded flex flex-col" style={{ backgroundColor: '#FFFCF7', border: '1px solid #E5DDD0' }}>
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#E67747' }}>
                  <Palette className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">FemTech</h3>
                  <p className="text-base text-gray-700 mb-2">Encontros de creatividade e tecnoloxía con <a href="https://laimaginaria.es/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline" style={{ color: '#E67747' }}>La Imaginaria</a></p>
                  <p className="text-sm font-semibold" style={{ color: '#E67747' }}>xoves 11 a 12.00 e luns 17.30 a 18.30 - Casa do Pobo Anceu</p>
                </div>
              </div>
              <div className="rounded overflow-hidden mb-4">
                <img
                  src="/prompthero-1767642823984.jpg"
                  alt="Mulleres en actividade creativa"
                  className="w-full h-64 object-cover"
                />
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                Cursos para mulleres utilizando a tecnoloxía, arte e creatividade para desenvolver a intelixencia emocional.
              </p>
              <a
                href="https://forms.gle/9BMTnfQeaiYc42SY8"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-white text-sm font-semibold rounded transition w-fit max-w-[40%] mx-auto text-center"
                style={{ backgroundColor: '#6B8E5B' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A7A4A'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6B8E5B'}
              >
                Inscríbete
              </a>
            </div>

            {/* Fuchiqueiras */}
            <div className="p-8 rounded flex flex-col" style={{ backgroundColor: '#FFFCF7', border: '1px solid #E5DDD0' }}>
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#6B8E5B' }}>
                  <MessageCircle className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Fuchiqueiras</h3>
                  <p className="text-base text-gray-700 mb-2">Encontros de transferencia de coñecemento</p>
                  <p className="text-sm font-semibold" style={{ color: '#E67747' }}>23 febreiro e 17 abril de 18.00 a 21.00 • Casa do pobo de Anceu</p>
                </div>
              </div>
              <div className="rounded overflow-hidden mb-4">
                <img
                  src="/prompthero-1767643252482.jpg"
                  alt="Encontro comunitario"
                  className="w-full h-64 object-cover"
                />
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                Espazos abertos para descubrir saberes tradicionais e de innovación. Tardes de celebración e creatividade na aldea de Anceu.
              </p>
              <a
                href="https://forms.gle/9BMTnfQeaiYc42SY8"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-white text-sm font-semibold rounded transition w-fit max-w-[40%] mx-auto text-center"
                style={{ backgroundColor: '#6B8E5B' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A7A4A'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6B8E5B'}
              >
                Inscríbete
              </a>
            </div>
          </div>

          {/* De Vella a Bella Fest */}
          <div className="p-10 rounded border-2" style={{ backgroundColor: '#FFFCF7', borderColor: '#E67747' }}>
            <div className="flex items-start space-x-5 mb-6">
              <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#E67747' }}>
                <Calendar className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Festival De Vella a Bella</h3>
                <p className="text-base text-gray-900 mb-2">4 dias de encontro para aprender de novas formas de lonxevidade</p>
                <p className="text-sm font-semibold" style={{ color: '#E67747' }}>do 3 a 8 de abril - Anceu Coliving</p>
              </div>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 text-white text-sm font-semibold rounded transition"
              style={{ backgroundColor: '#6B8E5B' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A7A4A'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6B8E5B'}
            >
              Pronto máis información
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="inscribete" className="text-gray-900" style={{ backgroundColor: '#FFD4B8' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center md:justify-start">
              <img
                src="/nueva_longevidad_rural(2).png"
                alt="Nova Lonxevidade Rural"
                className="h-40 md:h-48 w-auto"
              />
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Leaf className="h-8 w-8" style={{ color: '#6B8E5B' }} />
                <h2 className="text-3xl md:text-4xl font-bold">Participa</h2>
                <Leaf className="h-8 w-8" style={{ color: '#6B8E5B', transform: 'scaleX(-1)' }} />
              </div>
              <p className="text-lg mb-8">
                Únete á nosa comunidade de Nova Lonxevidade Rural
              </p>
              <a
                href="https://forms.gle/9BMTnfQeaiYc42SY8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-white text-lg font-semibold rounded transition"
                style={{ backgroundColor: '#6B8E5B' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5A7A4A'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6B8E5B'}
              >
                Inscríbete
              </a>
            </div>
          </div>
        </div>

        <div className="w-full py-10 px-6" style={{ backgroundColor: '#3D4A38' }}>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center md:justify-start">
              <img
                src="/firma_600x135-gal.jpg"
                alt="Entidade Seleccionada 2025 - Convocatorias de Proxectos Sociais Fundación la Caixa Galicia"
                className="h-auto"
                style={{ width: '600px', maxWidth: '100%' }}
              />
            </div>
            <div className="flex flex-col items-center md:items-end justify-center space-y-4">
              <a href="https://www.ruralhackers.com" target="_blank" rel="noopener noreferrer">
                <img
                  src="/logo_rural_hackers.png"
                  alt="Rural Hackers"
                  className="h-16 w-auto hover:opacity-80 transition"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </a>
              <p className="text-white text-sm text-center md:text-right">
                © 2026 Nova Lonxevidade Rural<br />
                <a href="https://www.ruralhackers.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline" style={{ color: '#E67747' }}>Un proxecto de Rural Hackers</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
