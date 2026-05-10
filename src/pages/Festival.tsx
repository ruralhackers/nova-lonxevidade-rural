import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users } from 'lucide-react';

export default function Festival() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F3' }}>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-12" style={{ backgroundColor: '#FFF5EB' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg font-semibold mb-2" style={{ color: '#E67747' }}>✨ Encontro de nova lonxevidade</p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            De Vella a Bella Fest
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 mb-8">
            Seis días para vivir, compartir e tecer redes. Non é un congreso: é un <strong>encounter</strong> con persoas que creen noutra forma de envellecer — activa, conectada e chea de vida.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-4 rounded-2xl" style={{ backgroundColor: '#FFFCF7', border: '2px solid #E67747' }}>
            <span className="flex items-center gap-2 text-gray-800 font-semibold">
              <Calendar className="h-5 w-5" style={{ color: '#E67747' }} />
              2 out – 7 out 2026
            </span>
            <span className="flex items-center gap-2 text-gray-800 font-semibold">
              <MapPin className="h-5 w-5" style={{ color: '#E67747' }} />
              Anceu Coliving · Ponte Caldelas
            </span>
            <span className="flex items-center gap-2 text-gray-800 font-semibold">
              <Users className="h-5 w-5" style={{ color: '#E67747' }} />
              12 persoas
            </span>
          </div>
        </div>
      </section>

      {/* Qué é */}
      <section className="py-16 px-6 lg:px-12" style={{ backgroundColor: '#EBF0E4' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Que é isto? 💬
          </h2>
          <div className="rounded-2xl p-8 md:p-10 shadow-lg" style={{ backgroundColor: '#FFFCF7', border: '2px solid #E5DDD0' }}>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Imaxina un lugar onde convives seis días con xente que, como ti, traballa por cambiar a historia do envellecemento: menos soledad, máis comunidade, máis dereito a seguir crecendo. <strong>Anceu Coliving</strong> é ese lugar — un espazo de <a href="https://www.ruralhackers.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline" style={{ color: '#E67747' }}>Rural Hackers</a> nunha aldea de Galicia onde a vida cotiá, o territorio e as conversas forman parte do programa.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Non venimos a "asistir a ponencias". Venimos a coñecernos, a compartir o que funciona, a celebrar e a saír con amizades e alianzas reais. 🔥
            </p>
          </div>
        </div>
      </section>

      {/* Obxectivos en caixas */}
      <section className="py-16 px-6 lg:px-12" style={{ backgroundColor: '#FFFCF7' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Para que estamos aquí?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Queremos tecer rede, aprender xuntos e que o que pase en Anceu resoe máis alá.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: '🤝', title: 'Conectar', text: 'Xente do ecosistema de nova lonxevidade nun mesmo teito. Confianza e convivencia real.' },
              { emoji: '💡', title: 'Compartir', text: 'Boas prácticas, proxectos que funcionan e ideas para envellecemento activo e coidados comunitarios.' },
              { emoji: '🌈', title: 'Aprender', text: 'Edadeísmo, políticas interxeracionais, accesibilidade, saúde e traballo en todas as idades.' },
              { emoji: '🌾', title: 'Innovar', text: 'Nova lonxevidade no rural: comunidade, territorio e novas formas de vivir.' },
              { emoji: '❤️', title: 'Quedar ligados', text: 'Amizades e compromisos de rede para seguir colaborando despois do festival.' },
              { emoji: '📢', title: 'Visibilizar', text: 'Que o mundo vexa que outra lonxevidade é posible — en medios, redes e no ecosistema.' },
            ].map((box) => (
              <div
                key={box.title}
                className="rounded-2xl p-6 flex flex-col transition hover:shadow-md"
                style={{ backgroundColor: '#FFF5EB', border: '2px solid #E5DDD0' }}
              >
                <span className="text-4xl mb-3">{box.emoji}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{box.title}</h3>
                <p className="text-gray-700 leading-relaxed flex-grow">{box.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programa día a día */}
      <section className="py-16 px-6 lg:px-12" style={{ backgroundColor: '#EBF0E4' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Os seis días — que imos vivir
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Traballo, paseos, música, memoria e festa. Cada día ten o seu sabor.
          </p>
          <div className="space-y-6">
            {[
              { day: '2 out (venres)', emoji: '🔥', title: 'Chegada · Fogueira creativa', desc: 'Primeiro contacto en Anceu. A noite: fogueira, presentacións, música e as primeiras conversas arredor do lume.' },
              { day: '3 out (sábado)', emoji: '🎤', title: 'Pegadas do Recordo · Camiños de Arte', desc: 'Memoria viva coa xente da aldea, gravacións con FemTech, percorrido polas intervencións artísticas de Anceu e recitais baseados na memoria local.' },
              { day: '4 out (domingo)', emoji: '🚐', title: 'Visita ao territorio', desc: 'Saída a Muimenta Viva (coliving público), Termas de Prexigueiro e Casa Colectiva de Carballeda de Avia. Parada para unha cata de viños da zona de Ourense (ou dunha adega próxima da comarca).' },
              { day: '5 out (luns)', emoji: '🎵', title: 'Paseo creativo · Transmisión de saberes · Concierto', desc: 'Paseo con Cartas Itinaya (Sara Donoso e Alba Santa), sesión de saberes entre xeracións e concierto de peche na Casa do Pobo: Caamaño e Ameixeiras, Coro Fornelés e pandereteiras.' },
              { day: '6 out (martes)', emoji: '🍄', title: 'Espazo de Tía Nie · Gastronomía e vermú', desc: 'Cogomelos no monte con guía, taller de cociña colectiva e vermú creativo con música — celebración do tempo compartido.' },
              { day: '7 out (mércores)', emoji: '🌿', title: 'Peche · Compromisos de rede · Saída', desc: 'Mañá de peche: aprendizaxes, oportunidades de colaboración e compromisos para seguir en contacto. Despedida e volta.' },
            ].map((item) => (
              <div
                key={item.day}
                className="rounded-2xl p-6 flex flex-col sm:flex-row sm:items-start gap-4"
                style={{ backgroundColor: '#FFFCF7', border: '2px solid #E67747' }}
              >
                <div className="flex-shrink-0 flex items-center gap-3">
                  <span className="text-3xl">{item.emoji}</span>
                  <span className="font-bold text-gray-900">{item.day}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 px-6 lg:px-12" style={{ backgroundColor: '#FFF5EB' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl text-gray-800 mb-6">
            Organizado por <a href="https://www.ruralhackers.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline" style={{ color: '#E67747' }}>Rural Hackers</a> · 12 persoas · Anceu Coliving
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition"
            style={{ backgroundColor: '#6B8E5B' }}
          >
            Volver á portada
          </Link>
        </div>
      </section>
    </div>
  );
}
