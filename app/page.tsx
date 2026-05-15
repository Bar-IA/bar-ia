export const metadata = {
  title: 'BAR-IA | IA para bares y restaurantes',
  description: 'Convierte las mesas de tu bar en una experiencia inteligente con inteligencia artificial.',
}

export default function BarIA() {
  const features = [
    {
      icon: '🍽️',
      title: 'Recomendaciones inteligentes',
      text: 'Sugiere platos según horario, gustos y número de personas.'
    },
    {
      icon: '🌍',
      title: 'Atención multiidioma',
      text: 'Responde automáticamente en varios idiomas para turistas y clientes internacionales.'
    },
    {
      icon: '⭐',
      title: 'Más reseñas positivas',
      text: 'Detecta clientes satisfechos y los dirige automáticamente a Google Reviews.'
    },
    {
      icon: '📍',
      title: 'Recomendaciones turísticas',
      text: 'Ayuda a descubrir lugares cercanos con enlaces directos a Google Maps.'
    },
    {
      icon: '📈',
      title: 'Aumenta ticket medio',
      text: 'Hace venta cruzada de forma natural y cercana.'
    },
    {
      icon: '⚡',
      title: 'Instalación rápida',
      text: 'Solo necesitas un QR en cada mesa para empezar.'
    }
  ]

  const steps = [
    {
      number: '01',
      title: 'Coloca el QR',
      text: 'Tus clientes escanean el código directamente desde la mesa.'
    },
    {
      number: '02',
      title: 'La IA recomienda',
      text: 'El asistente responde preguntas y recomienda productos.'
    },
    {
      number: '03',
      title: 'Aumenta ventas',
      text: 'Consigue más reseñas, más interacción y más ticket medio.'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full" />
      </div>

      <header className="relative z-20 border-b border-white/10 backdrop-blur-xl bg-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          
<img
  src="/logo_blanco.png"
  alt="BAR-IA"
  className="h-24 lg:h-32 w-auto object-contain"
/>
          <a
            href="https://wa.me/message/WU3DVEAG2LTSE1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 font-semibold shadow-2xl shadow-cyan-500/20 inline-flex items-center justify-center"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </header>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-sm mb-8">
              🤖 IA para hostelería moderna
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight">
              Convierte las mesas de tu bar en una experiencia inteligente.
            </h1>

            <p className="mt-8 text-xl text-neutral-300 leading-relaxed max-w-2xl">
              BAR-IA transforma un simple QR en un camarero digital capaz de recomendar platos, responder en varios idiomas, captar reseñas y mejorar la experiencia de tus clientes.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://wa.me/message/WU3DVEAG2LTSE1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 font-bold text-lg shadow-2xl shadow-cyan-500/30 hover:scale-105 inline-flex items-center justify-center"
              >
                Contactar por WhatsApp
              </a>

              <a
                href="https://chatgpt.com/g/g-6a06e1bf26108191b785ae56333c53f5-bar-progreso-2-0"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center"
              >
                🤖 Probar asistente
              </a>
            </div>

            <div className="flex flex-wrap gap-6 mt-10 text-sm text-neutral-400">
              <span>🌍 Multiidioma</span>
              <span>⭐ Más reseñas</span>
              <span>📈 Más ventas</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />

            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-6 shadow-2xl shadow-cyan-500/10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center text-2xl shadow-xl shadow-cyan-500/30">
                    🤖
                  </div>

                  <div>
                    <p className="font-bold text-lg">BAR-IA</p>
                    <p className="text-sm text-neutral-400">Asistente inteligente</p>
                  </div>
                </div>

                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 rounded-2xl p-4 max-w-[80%] text-sm text-neutral-200">
                  🍕 Somos varios, ¿qué recomiendas para compartir?
                </div>

                <div className="bg-cyan-500 rounded-2xl p-4 max-w-[85%] ml-auto text-sm text-white shadow-xl shadow-cyan-500/20">
                  Si sois varios, os recomendaría unas Patatas Foster Bacon y una Pizza Trufada 🍕🔥
                </div>

                <div className="bg-white/10 rounded-2xl p-4 max-w-[80%] text-sm text-neutral-200">
                  🌍 What can we visit nearby?
                </div>

                <div className="bg-cyan-500 rounded-2xl p-4 max-w-[85%] ml-auto text-sm text-white shadow-xl shadow-cyan-500/20">
                  The Alcázar of Jerez is only 9 minutes walking from here 😊
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-6xl font-black leading-tight">
            Mucho más que una carta digital.
          </h2>

          <p className="mt-6 text-xl text-neutral-400 leading-relaxed">
            BAR-IA ayuda a bares y restaurantes a mejorar experiencia, aumentar ventas y destacar frente a la competencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 hover:border-cyan-400/40 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-300 transition-colors">
                {feature.title}
              </h3>

              <p className="text-neutral-400 leading-relaxed text-lg">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 py-24 border-y border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-6xl font-black">
              ¿Cómo funciona?
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-black/40 border border-white/10 rounded-[2rem] p-10 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="text-7xl font-black text-cyan-400 mb-6">
                  {step.number}
                </div>

                <h3 className="text-3xl font-bold mb-5">
                  {step.title}
                </h3>

                <p className="text-neutral-400 text-lg leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="relative overflow-hidden rounded-[3rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-black p-14 lg:p-20 shadow-2xl shadow-cyan-500/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.25),transparent_40%)]" />

          <div className="relative text-center">
            <h2 className="text-4xl lg:text-6xl font-black leading-tight max-w-4xl mx-auto">
              Haz que tu bar destaque con inteligencia artificial.
            </h2>

            <p className="mt-8 text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto">
              Convierte un simple QR en una experiencia moderna, útil y memorable para tus clientes.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <a
                href="https://wa.me/message/WU3DVEAG2LTSE1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 font-bold text-lg shadow-2xl shadow-cyan-500/30 hover:scale-105 inline-flex items-center justify-center"
              >
                Contactar por WhatsApp
              </a>

              
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-1">
            
<img
  src="/logo_blanco.png"
  alt="BAR-IA"
  className="h-14 lg:h-16 w-auto object-contain"
/>
          <p className="text-neutral-500 text-center lg:text-right">
            IA para bares y restaurantes • Experiencias inteligentes en mesa
          </p>
        </div>
      </footer>
    </div>
  )
}
