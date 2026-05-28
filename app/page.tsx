"use client"

import { useState } from "react"

export default function RedCrabIceWebsite() {
  
  const [openImage, setOpenImage] = useState(false)

const services = [
  {
    title: "Signal Group",
    description:
      "Live trades, market outlooks, SL/TP levels and disciplined execution. for 99$ / month.",
    link: "#signals",
    button: "Learn More",
  },

  {
    title: "Mentorship, I do not provide",
    description:
      "you can learn from FX.SPEEDRUNNER and other traders, I do not provide mentorship.",
    link: "https://www.instagram.com/fx.speedrunner/",
    button: "Open Instagram",
  },

  {
    title: "Automation & Bots",
    description:
      "Trading tools and automation systems built for efficiency investing longterm, coming soon.",
    link: "#",
    button: "Coming Soon",
  },
]

  const payments = [
    {
      title: 'Stripe / Revolut',
      description: 'Insert your payment links or QR codes here.',
    },
    {
      title: 'Bitcoin (BTC)',
      description: 'Insert BTC wallet address + QR code.',
    },
    {
      title: 'USDT',
      description: 'Insert USDT wallet address + QR code.',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-900/20 blur-3xl" />
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 md:px-6 py-4 md:py-5 border-b border-white/10 backdrop-blur-md sticky top-0 bg-black/50 z-50">
        <div>
          <h1 className="text-2xl font-bold tracking-[0.25em]">REDCRABICE</h1>
        </div>

        <a
          href="https://instagram.com/redcrabice"
          target="_blank"
          className="border border-red-700 px-4 py-2 rounded-xl hover:bg-red-900/40 transition"
        >
          @redcrabice
        </a>
      </nav>

      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 -mt-8">
          
         
         <div className="relative w-72 md:w-[500px] mb-8 animate-float">
  <img
    src="/logo-symbol.png"
    alt="Structure"
    className="w-full opacity-80"
  />

  <div className="absolute inset-0 pointer-events-none">
    <div className="moving-dot"></div>
  </div>
</div>
         
        <p className="uppercase tracking-[0.4em] text-red-500 mb-4 text-sm">
          Disciplined • Patience • Execution
        </p>

        <h1 className="text-3xl md:text-7xl font-black leading-tight max-w-5xl">
          Trade With <span className="text-red-600">Structure</span>.
        </h1>

        <p className="mt-6 max-w-2xl text-zinc-400 text-base md:text-lg">
          Transparent trading, disciplined execution and premium trading services built for <span className="text-red-600">serious traders.</span>
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href="#services"
            className="bg-red-700 hover:bg-red-600 transition px-6 py-3 rounded-2xl font-semibold"
          >
            View Services
          </a>

          <a
            href="#payments"
            className="border border-white/20 hover:border-red-600 transition px-6 py-3 rounded-2xl"
          >
            Payment Methods
          </a>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About REDCRABICE</h2>

          <p className="text-zinc-400 text-base md:text-lg leading-8">
            Hi, I'm <span className="text-red-600">Atus</span> , I have been trading seriously for about 2 years along <span className="text-red-600">Fx.speedrunners</span> traders.
            I want to show the <span className="text-red-600">Beauty of trading</span> so...No fake flashy lifestyle. No overhyped promises.
          </p>
          <p className="text-zinc-400 text-base md:text-lg leading-8">
             Just transparency, precision, discipline, structured execution,
            risk management and consistency.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Services</h2>
            <p className="text-zinc-500 mt-4">
              Choose the service that fits your trading journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group border border-white/10 bg-white/5 rounded-3xl p-4 md:p-8 hover:border-red-700 hover:bg-red-950/20 transition duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 group-hover:text-red-500 transition">
                  {service.title}
                </h3>

                <p className="text-zinc-400 leading-7 mb-8">
                  {service.description}
                </p>

                <a
  href={service.link}
  target={service.link.startsWith("http") ? "_blank" : "_self"}
  rel="noopener noreferrer"
>
  <button
    className={`mt-8 w-full py-4 rounded-2xl border transition ${
      service.button === "Coming Soon"
        ? "border-zinc-700 text-zinc-500 cursor-not-allowed"
        : "border-red-700 hover:bg-red-700"
    }`}
    disabled={service.button === "Coming Soon"}
  >
    {service.button}
  </button>
</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signal Group */}


              



      <section id="signals" className="px-6 py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div>
            <p className="text-red-500 uppercase tracking-[0.3em] mb-4 text-sm">
              Telegram Signal Group
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Structured Trades. Real Execution. Market Outlooks.
            </h2>

            <ul className="space-y-4 text-zinc-400">
              <li>• Live trade alerts</li>
              <li>• SL / TP levels</li>
              <li>• Daily market outlooks</li>
              <li>• RR-focused setups</li>
              <li>• Transparent execution</li>
            </ul>

            <a
  href="https://ig.me/m/redcrabice"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="mt-10 bg-red-700 hover:bg-red-600 hover:scale-105 transition duration-300 px-6 py-3 rounded-2xl font-semibold">
    Join Telegram 99$ / Month - DM @redcrabice
  </button>
</a>
          </div>

          <div
  className="border border-dashed border-red-700 rounded-3xl h-[250px] md:h-[400px] overflow-hidden bg-white/5 cursor-pointer"
  onClick={() => setOpenImage(true)}
>
  <img
    src="/telegram-proof.jpg"
    alt="Telegram Proof"
    className="w-full h-full object-cover hover:scale-105 transition duration-500"
  />
</div>

{openImage && (
  <div
    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
    onClick={() => setOpenImage(false)}
  >
    <img
      src="/telegram-proof.jpg"
      alt="Expanded"
      className="max-w-full max-h-full rounded-2xl"
    />
  </div>)}
        </div>

<section className="px-6 py-20 border-t border-white/10">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl md:text-5xl font-black text-center mb-12">
      This Month We Netted <span className="text-red-600">26R</span>
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      {/* Account Size */}
      <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
        <p className="text-zinc-500 text-sm mb-3 uppercase tracking-[0.2em]">
          Account Size
        </p>

        <div className="flex items-center justify-between">
          <span className="text-zinc-500 text-2xl">$</span>

          <h3 className="text-4xl font-black">
            100,000
          </h3>
        </div>
      </div>

      {/* Risk Per Trade */}
      <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
        <p className="text-zinc-500 text-sm mb-3 uppercase tracking-[0.2em]">
          Risk Per Trade (R)
        </p>

        <div className="flex items-center justify-between">
          <span className="text-zinc-500 text-2xl">
            %
          </span>
          <h3 className="text-4xl font-black">
            1
          </h3>

          
        </div>
      </div>

      {/* Final Account */}
      <div className="bg-red-950/20 border border-red-700/30 rounded-2xl p-6">
  <p className="text-red-400 text-sm mb-3 uppercase tracking-[0.2em]">
    Final Account Size
  </p>

  <div className="flex items-center justify-between">
    <span className="text-red-500 text-2xl font-bold">$</span>

    <h3 className="text-4xl font-black text-red-500">
      126,000
    </h3>
  </div>
</div>

    </div>

    <p className="text-zinc-600 text-sm text-center mt-8">
      Transparent execution. Past performance does not guarantee future results.
    </p>

  </div>
</section>


        
      </section>

      {/* Payments */}
      <section id="payments" className="px-6 py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Payment Methods to join the <span className="text-cyan-600">Telegram</span> Group</h2>
            <p className="text-zinc-500 mt-4">
              Please DM <span className="text-red-600">@redcrabice</span> on Instagram after payment with the screenshot of your payment and the service you want to purchase, thank you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

  {/* Stripe */}
  <div className="
border border-white/10
rounded-3xl
p-4 md:p-8
bg-white/5
hover:border-red-600
hover:-translate-y-2
hover:shadow-red-500/20
hover:shadow-2xl
transition-all
duration-300
">
    <h3 className="text-2xl font-bold mb-4 text-red-500">
      <span className="text-purple-600">Stripe</span> / Revolut
    </h3>

    <p className="text-zinc-400 mb-8">
      for <span className="text-purple-600">stripe</span> link please click on the revolut image
    </p>

    <a
  href="https://buy.stripe.com/cNi14m67jcjd1TceK90VO00"
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="aspect-square border border-dashed border-red-700 rounded-2xl overflow-hidden">
    <img
      src="/stripe-qr.jpg"
      alt="Stripe QR"
      className="w-full h-full object-contain p-4 hover:scale-105 transition duration-300"
    />
  </div>
</a>
  </div>

  {/* BTC */}
  <div className="
border border-white/10
rounded-3xl
p-8
bg-white/5
hover:border-red-600
hover:-translate-y-2
hover:shadow-red-500/20
hover:shadow-2xl
transition-all
duration-300
">
    <h3 className="text-2xl font-bold mb-4 text-red-500">
      Bitcoin (BTC network.)
    </h3>

    <p className="text-zinc-400 mb-8">
      <span className="text-yellow-600">147aA</span>z69CvCSedd7rSxGnzte8vnM<span className="text-yellow-600">N6D242</span>
    </p>

    <div className="aspect-square border border-dashed border-red-700 rounded-2xl overflow-hidden">
      <img
        src="/BTC-QR.jpg"
        alt="BTC QR"
        className="w-full h-full object-contain p-4"
      />
    </div>
  </div>

  {/* USDT */}
  <div className="
border border-white/10
rounded-3xl
p-8
bg-white/5
hover:border-red-600
hover:-translate-y-2
hover:shadow-red-500/20
hover:shadow-2xl
transition-all
duration-300
">
    <h3 className="text-2xl font-bold mb-4 text-red-500">
      USDT - BEP20 network.
    </h3>

    <p className="text-zinc-400 mb-8">
      <span className="text-green-600">0x1668a</span>f9ed86385d1eb617a620f75232579<span className="text-green-600">fcb39b</span>
    </p>

    <div className="aspect-square border border-dashed border-red-700 rounded-2xl overflow-hidden">
      <img
        src="/USDT-QR.jpg"
        alt="USDT QR"
        className="w-full h-full object-contain p-4"
      />
    </div>
  </div>

</div>
        </div>
      </section>
<a
  href="https://instagram.com/redcrabice"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-500 text-white px-5 py-3 rounded-full shadow-[0_0_25px_rgba(255,0,0,0.5)] transition duration-300 hover:scale-105"
>
  Contact Me
</a>

{/* Legal */}
<section className="px-6 py-16 border-t border-white/10">
  <div className="max-w-4xl mx-auto text-center text-zinc-500 text-sm leading-7">

    <p className="mb-6">
      What you are paying for is access to the private Telegram group where I share
      my personal trades, market outlooks and execution ideas.
      This is <span className="text-red-500">not financial advice.</span>
    </p>

    <p className="mb-6">
      Trading involves risk. Past performance does not guarantee future results.
      You are fully responsible for your own decisions and risk management.
    </p>

    <p className="mb-6">
      Due to the digital nature of the service, all payments are final and
      non-refundable once access has been delivered.
    </p>

    <p>
      By joining the group, you agree that REDCRABICE is not liable for any
      financial losses, damages or trading decisions made by users.
    </p>

  </div>
</section>


      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6 text-center text-zinc-500">
        <p>© 2026 REDCRABICE — All Rights Reserved</p>
      </footer>
    </div>
  )
}
