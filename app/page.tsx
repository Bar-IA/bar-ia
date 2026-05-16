"use client"

import { useEffect, useState } from "react"

export default function BarIA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
        "Sugiere platos y bebidas según gustos y momento del día.",
    },
    {
      icon: "⚡",
      title: "Sin apps",
      description:
        "Solo escanear y preguntar. Sin descargas ni instalaciones.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,255,0.16),transparent_40%)]" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#2563FF]/10 blur-[140px] rounded-full" />

      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-black/20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img
            src="/logo_blanco.png"
            alt="BAR-IA"
            className="h-14 lg:h-16 w-auto object-contain"
          />

          <a
            href="https://wa.me/message/WU3DVEAG2LTSE1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl bg-[#2563FF] hover:bg-blue-500 transition-all duration-300 font-semibold shadow-2xl shadow-blue-500/20 hover:scale-105"
          >
            Solicitar demo
          </a>
        </div>
      </header>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24 lg:pb-32 grid lg:grid-cols-2 gap-20 items-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 border border-[#2563FF]/20 bg-[#2563FF]/10 px-4 py-2 rounded-full text-sm text-[#2563FF] font-semibold mb-8">
            ✦ IA CONVERSACIONAL PARA HOSTELERÍA
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-[0.92] tracking-tight">
            Convierte cada mesa en una{" "}
            <span className="text-[#2563FF]">
              experiencia inteligente.
            </span>
          </h1>

          <p className="mt-8 text-xl text-neutral-400 leading-relaxed max-w-xl">
            IA para bares y restaurantes que recomienda, responde y aumenta el
            ticket medio de cada mesa.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="https://wa.me/message/WU3DVEAG2LTSE1"
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-[#2563FF] hover:bg-blue-500 transition-all duration-300 font-semibold shadow-2xl shadow-blue-500/20 hover:scale-105"
            >
              Solicitar demo
            </a>

            <a
              href="https://chatgpt.com/g/g-6a06e1bf26108191b785ae56333c53f5-bar-progreso-2-0"
              target="_blank"
              className="px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#2563FF]/40 hover:bg-white/[0.06] transition-all duration-300 font-semibold"
            >
              Ver ejemplo real
            </a>
          </div>

          <div className="flex flex-wrap gap-6 mt-10 text-neutral-500 text-sm">
            <span>◉ Sin apps</span>
            <span>◉ Sin descargas</span>
            <span>◉ Solo escanear</span>
          </div>
        </div>

        <div
          className={`relative transition-all duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="absolute inset-0 bg-[#2563FF]/20 blur-[100px] rounded-full" />

          <img
            src="/mockup-baria.png"
            alt="BAR-IA"
            className="relative z-10 w-full rounded-[2.5rem] shadow-[0_0_120px_rgba(37,99,255,0.18)] animate-[float_6s_ease-in-out_infinite]"
          />
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-[#2563FF]">
            RESULTADOS ESTIMADOS
          </p>

          <h2 className="mt-5 text-5xl lg:text-6xl font-black leading-tight">
            Impacto real en tu negocio
          </h2>

          <p className="mt-6 text-xl text-neutral-400 leading-relaxed">
            Automatización enfocada en ventas, experiencia y reputación.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 lg:p-8 hover:border-[#2563FF]/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563FF]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="relative z-10 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#2563FF]/10 border border-[#2563FF]/20 flex items-center justify-center text-3xl mb-8 mx-auto">
                  {kpi.icon}
                </div>

                <p className="text-4xl lg:text-6xl font-black tracking-tight text-[#2563FF]">
                  {kpi.value}
                </p>

                <h3 className="mt-5 text-xl lg:text-2xl font-bold">
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
            Así de fácil funciona
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              icon: "📱",
              title: "Escanea el QR",
              description:
                "El cliente accede instantáneamente desde la mesa.",
            },
            {
              icon: "🤖",
              title: "Pregunta al asistente",
              description:
                "BAR-IA recomienda, responde y guía la experiencia.",
            },
            {
              icon: "⭐",
              title: "Más ventas y reseñas",
              description:
                "Mejora la experiencia y aumenta el ticket medio.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 text-center hover:border-[#2563FF]/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-20 h-20 rounded-3xl bg-[#2563FF]/10 border border-[#2563FF]/20 flex items-center justify-center text-4xl mx-auto mb-8 group-hover:scale-110 transition-all duration-300">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {step.title}
              </h3>

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
            Mucho más que una carta digital
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-[#2563FF]/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#2563FF]/10 border border-[#2563FF]/20 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 text-neutral-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-32">
        <div className="relative overflow-hidden rounded-[3rem] border border-[#2563FF]/20 bg-gradient-to-r from-[#2563FF]/20 via-[#2563FF]/10 to-transparent p-14 lg:p-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563FF]/20 blur-[140px] rounded-full" />

          <div className="relative z-10 max-w-4xl">
            <p className="text-sm tracking-[0.25em] uppercase text-[#2563FF] font-semibold">
              ¿LISTO PARA EMPEZAR?
            </p>

            <h2 className="mt-6 text-5xl lg:text-7xl font-black leading-[0.95]">
              Convierte tus mesas en una experiencia inteligente.
            </h2>

            <p className="mt-8 text-xl text-neutral-300 max-w-2xl leading-relaxed">
              Solicita una demo y descubre cómo BAR-IA puede transformar la
              experiencia de tus clientes.
            </p>

            <a
              href="https://wa.me/message/WU3DVEAG2LTSE1"
              target="_blank"
              className="inline-flex mt-10 px-10 py-5 rounded-2xl bg-[#2563FF] hover:bg-blue-500 transition-all duration-300 font-bold text-lg shadow-2xl shadow-blue-500/20 hover:scale-105"
            >
              Solicitar demo gratuita
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 py-12 px-6 bg-black/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <img
            src="/logo_blanco.png"
            alt="BAR-IA"
            className="h-14 w-auto object-contain"
          />

          <div className="text-center lg:text-right">
            

            <p className="text-neutral-600 text-sm mt-2">
              IA para bares y restaurantes
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  )
}