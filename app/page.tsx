export default function BarIA() {
  const kpis = [
    {
      icon: "⭐",
      value: "+37%",
      title: "Más reseñas",
      description: "Captación automática de clientes satisfechos.",
    },
    {
      icon: "📈",
      value: "+12%",
      title: "Ticket medio",
      description: "Recomendaciones inteligentes y upselling automático.",
    },
    {
      icon: "🌍",
      value: "+68%",
      title: "Turismo",
      description: "Atención multiidioma para clientes internacionales.",
    },
    {
      icon: "⚡",
      value: "-40%",
      title: "Tiempo decisión",
      description:
        "Tus clientes saben qué pedir antes de que llegue el camarero.",
    },
  ]

  const features = [
    {
      icon: "🍽️",
      title: "Asistente 24/7 en mesa",
      description:
        "Resuelve dudas, recomienda y ayuda a elegir como un camarero experto.",
    },
    {
      icon: "🌍",
      title: "Atención en 30+ idiomas",
      description:
        "Ideal para turistas e internacionales. Comunicación sin barreras.",
    },
    {
      icon: "⭐",
      title: "Reseñas automáticas",
      description:
        "Pide feedback en el momento justo y mejora tu reputación online.",
    },
    {
      icon: "📈",
      title: "Upselling inteligente",
      description:
        "Aumenta el ticket medio con recomendaciones personalizadas.",
    },
    {
      icon: "🧠",
      title: "Recomendaciones inteligentes",
      description:
        "Sugiere platos, bebidas y combinaciones según el cliente y el momento del día.",
    },
    {
      icon: "⚡",
      title: "Fácil de usar",
      description:
        "Sin instalaciones complejas. Enchufar, pegar el QR y listo.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,255,0.18),transparent_40%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#2563FF]/10 blur-[120px] rounded-full" />

      <header className="relative z-20 border-b border-white/10 backdrop-blur-xl bg-black/40 sticky top-0">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/logo_blanco.png"
              alt="BAR-IA"
              className="h-20 lg:h-24 w-auto object-contain"
            />
          </div>

          <a
            href="https://wa.me/message/WU3DVEAG2LTSE1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl bg-[#2563FF] hover:bg-blue-500 transition-all duration-300 font-semibold text-white shadow-xl shadow-blue-500/20"
          >
            Solicitar demo
          </a>
        </div>
      </header>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 border border-[#2563FF]/20 bg-[#2563FF]/10 px-4 py-2 rounded-full text-sm text-[#2563FF] font-semibold mb-8">
            ✦ LA IA QUE VENDE POR TI
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight">
            Convierte cada mesa en más{" "}
            <span className="text-[#2563FF]">ventas</span> y mejores reseñas.
          </h1>

          <p className="mt-8 text-xl text-neutral-400 leading-relaxed max-w-2xl">
            BAR-IA es el asistente inteligente para bares y restaurantes que
            recomienda productos, mejora la experiencia del cliente y automatiza
            las reseñas.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="https://wa.me/message/WU3DVEAG2LTSE1"
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-[#2563FF] hover:bg-blue-500 transition-all duration-300 font-semibold shadow-2xl shadow-blue-500/20"
            >
              Solicitar demo gratuita
            </a>

            <a
              href="https://chatgpt.com/g/g-6a06e1bf26108191b785ae56333c53f5-bar-progreso-2-0"
              target="_blank"
              className="px-8 py-4 rounded-2xl border border-white/10 hover:border-[#2563FF]/40 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 font-semibold"
            >
              Ver ejemplo real
            </a>
          </div>

          <div className="flex flex-wrap gap-6 mt-8 text-neutral-400 text-sm">
            <span>◉ Sin apps</span>
            <span>◉ Sin descargas</span>
            <span>◉ Solo escanear</span>
          </div>
        </div>

        <div className="relative flex justify-center">
          <img
            src="/mockup-baria.png"
            alt="BAR-IA Mockup"
            className="w-full max-w-3xl rounded-[2rem] shadow-2xl shadow-blue-500/10"
          />
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-[#2563FF]">
            RESULTADOS ESTIMADOS
          </p>

          <h2 className="mt-5 text-5xl lg:text-6xl font-black leading-tight text-white">
            Impacto real en tu negocio
          </h2>

          <p className="mt-6 text-xl text-neutral-400 leading-relaxed">
            Automatización orientada a mejorar experiencia, reputación y ventas.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 lg:p-8 hover:border-[#2563FF]/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563FF]/10 blur-3xl rounded-full" />

              <div className="relative z-10 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#2563FF]/10 border border-[#2563FF]/20 flex items-center justify-center text-3xl mb-8 mx-auto">
                  {kpi.icon}
                </div>

                <p className="text-4xl lg:text-6xl font-black tracking-tight text-[#2563FF]">
                  {kpi.value}
                </p>

                <h3 className="mt-5 text-xl lg:text-2xl font-bold text-white">
                  {kpi.title}
                </h3>

                <p className="mt-4 text-sm lg:text-base text-neutral-400 leading-relaxed">
                  {kpi.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-[#2563FF]">
            CÓMO FUNCIONA
          </p>

          <h2 className="mt-5 text-5xl lg:text-6xl font-black leading-tight">
            Así de fácil funciona BAR-IA
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              icon: "📱",
              title: "Escanea el QR",
              description:
                "El cliente accede instantáneamente desde su móvil.",
            },
            {
              icon: "🤖",
              title: "Pregunta al asistente",
              description:
                "BAR-IA recomienda, responde dudas y guía la experiencia.",
            },
            {
              icon: "⭐",
              title: "Más ventas y reseñas",
              description:
                "Automatiza recomendaciones y mejora la reputación del local.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 text-center hover:border-[#2563FF]/30 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-3xl bg-[#2563FF]/10 border border-[#2563FF]/20 flex items-center justify-center text-4xl mx-auto mb-8">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold">{step.title}</h3>

              <p className="mt-4 text-neutral-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-[#2563FF]">
            TODO LO QUE TU NEGOCIO NECESITA
          </p>

          <h2 className="mt-5 text-5xl lg:text-6xl font-black leading-tight">
            Mucho más que una carta digital.
          </h2>

          <p className="mt-6 text-xl text-neutral-400 leading-relaxed">
            Una plataforma creada para bares y restaurantes que quieren destacar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 hover:border-[#2563FF]/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#2563FF]/10 border border-[#2563FF]/20 flex items-center justify-center text-3xl mb-8">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 text-neutral-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-28">
        <div className="rounded-[2.5rem] border border-[#2563FF]/20 bg-gradient-to-r from-[#2563FF]/20 via-[#2563FF]/10 to-transparent p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden relative">
          <div>
            <p className="text-sm tracking-[0.25em] uppercase text-[#2563FF] font-semibold">
              ¿LISTO PARA DAR EL SIGUIENTE PASO?
            </p>

            <h2 className="mt-5 text-4xl lg:text-6xl font-black leading-tight max-w-3xl">
              Convierte tus mesas en una experiencia inteligente.
            </h2>

            <p className="mt-6 text-xl text-neutral-300 max-w-2xl leading-relaxed">
              Solicita tu demo gratuita y descubre cómo BAR-IA puede transformar
              tu local.
            </p>
          </div>

          <a
            href="https://wa.me/message/WU3DVEAG2LTSE1"
            target="_blank"
            className="px-10 py-5 rounded-2xl bg-[#2563FF] hover:bg-blue-500 transition-all duration-300 font-bold text-lg shadow-2xl shadow-blue-500/20 whitespace-nowrap"
          >
            Solicitar demo gratuita
          </a>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 py-12 px-6 bg-black/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <img
            src="/logo_blanco.png"
            alt="BAR-IA"
            className="h-16 w-auto object-contain"
          />

          <p className="text-neutral-500 text-center lg:text-right text-sm">
            IA para bares y restaurantes • Automatización • Sistemas • Resultados
          </p>
        </div>
      </footer>
    </div>
  )
}