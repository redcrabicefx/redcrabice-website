export default function RedCrabIceWebsite() {
  const services = [
    {
      title: 'Signal Group',
      description: 'Live trades, market outlooks, SL/TP levels and disciplined execution.',
      link: '#signals',
    },
    {
      title: 'Mentorship',
      description: 'Learn structure, psychology, risk management and trading discipline.',
      link: '#mentorship',
    },
    {
      title: 'Automation & Bots',
      description: 'Trading tools and automation systems built for efficiency.',
      link: '#bots',
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
      <nav className="flex items-center justify-between px-6 py-5 border-b border-white/10 backdrop-blur-md sticky top-0 bg-black/50 z-50">
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
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
        <p className="uppercase tracking-[0.4em] text-red-500 mb-4 text-sm">
          Precision • Patience • Execution
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl">
          Trade With <span className="text-red-600">Structure</span>.
        </h1>

        <p className="mt-6 max-w-2xl text-zinc-400 text-lg">
          Transparent trading, disciplined execution and premium trading services built for serious traders.
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
          <h2 className="text-4xl font-bold mb-8">About REDCRABICE</h2>

          <p className="text-zinc-400 text-lg leading-8">
            REDCRABICE focuses on transparency, precision and disciplined trading.
            No fake lifestyle. No overhyped promises. Just structured execution,
            risk management and consistency.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Services</h2>
            <p className="text-zinc-500 mt-4">
              Choose the service that fits your trading journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group border border-white/10 bg-white/5 rounded-3xl p-8 hover:border-red-700 hover:bg-red-950/20 transition duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 group-hover:text-red-500 transition">
                  {service.title}
                </h3>

                <p className="text-zinc-400 leading-7 mb-8">
                  {service.description}
                </p>

                <button className="w-full bg-black border border-red-700 rounded-xl py-3 hover:bg-red-700 transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signal Group */}
      <section id="signals" className="px-6 py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-red-500 uppercase tracking-[0.3em] mb-4 text-sm">
              Telegram Signal Group
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Structured Trades. Real Execution.
            </h2>

            <ul className="space-y-4 text-zinc-400">
              <li>• Live trade alerts</li>
              <li>• SL / TP levels</li>
              <li>• Daily market outlooks</li>
              <li>• RR-focused setups</li>
              <li>• Transparent execution</li>
            </ul>

            <button className="mt-10 bg-red-700 hover:bg-red-600 transition px-6 py-3 rounded-2xl font-semibold">
              Join Telegram
            </button>
          </div>

          <div className="border border-dashed border-red-700 rounded-3xl h-[400px] flex items-center justify-center text-zinc-500 bg-white/5">
            Telegram Screenshots Placeholder
          </div>
        </div>
      </section>

      {/* Payments */}
      <section id="payments" className="px-6 py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Payment Methods</h2>
            <p className="text-zinc-500 mt-4">
              Secure payment options with QR placeholders ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {payments.map((payment) => (
              <div
                key={payment.title}
                className="border border-white/10 rounded-3xl p-8 bg-white/5 hover:border-red-700 transition"
              >
                <h3 className="text-2xl font-bold mb-4 text-red-500">
                  {payment.title}
                </h3>

                <p className="text-zinc-400 mb-8 leading-7">
                  {payment.description}
                </p>

                <div className="aspect-square border border-dashed border-red-700 rounded-2xl flex items-center justify-center text-zinc-500">
                  QR CODE
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6 text-center text-zinc-500">
        <p>© 2026 REDCRABICE — All Rights Reserved</p>
      </footer>
    </div>
  )
}
