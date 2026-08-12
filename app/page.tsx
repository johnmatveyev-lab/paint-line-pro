import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#0A1628] font-sans">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-9 h-9 rounded-xl bg-[#00C2A8] flex items-center justify-center text-white text-sm">
              PL
            </div>
            Paint Line <span className="text-[#00C2A8]">Pro</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link
              href="/quote"
              className="bg-[#00C2A8] text-white px-4 py-2 rounded-xl hover:bg-teal-600 transition-colors"
            >
              Get Instant Quote
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-[#0A1628] to-[#1a2f4a] text-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="inline-block bg-[#00C2A8]/20 text-[#00C2A8] text-sm px-3 py-1 rounded-full mb-4">
            AI-Powered Painting • Southeast US
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-2xl">
            Transform Your Vision Into{" "}
            <span className="text-[#00C2A8]">Reality</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            High-quality interior &amp; exterior painting for apartments, flips,
            renovations &amp; new construction. Partners with Sherwin-Williams
            &amp; Benjamin Moore.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/quote"
              className="bg-[#00C2A8] hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-center transition-colors"
            >
              Get Instant Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <p className="text-sm text-gray-500 mb-4">
          Trusted by 500+ property managers across the Southeast
        </p>
        <div className="flex justify-center gap-12 font-bold text-xl text-gray-800">
          <span>Sherwin-Williams</span>
          <span>Benjamin Moore</span>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Paint Line Pro
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center text-[#00C2A8] font-bold mb-4">
              AI
            </div>
            <h3 className="font-bold text-xl mb-2">AI Visualizer</h3>
            <p className="text-gray-600">
              Upload a photo and instantly see real Sherwin-Williams &amp;
              Benjamin Moore colors.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center text-[#00C2A8] font-bold mb-4">
              ✓
            </div>
            <h3 className="font-bold text-xl mb-2">Premium Partner Paints</h3>
            <p className="text-gray-600">
              Exclusively Sherwin-Williams and Benjamin Moore for durability and
              color accuracy.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center text-[#00C2A8] font-bold mb-4">
              📍
            </div>
            <h3 className="font-bold text-xl mb-2">Local Expert Teams</h3>
            <p className="text-gray-600">
              Local partners in major Southeast cities for apartments, flips,
              renovations, new construction.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0A1628] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to transform your space?
        </h2>
        <p className="text-gray-300 mb-8">
          Get an approximate quote in under 3 minutes.
        </p>
        <Link
          href="/quote"
          className="inline-block bg-[#00C2A8] text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-600 transition-colors"
        >
          Get Instant Quote
        </Link>
      </section>

      <footer className="bg-[#06101c] text-gray-400 py-12 text-center text-sm">
        <p>
          © 2026 Paint Line Pro · Partners with Sherwin-Williams &amp; Benjamin
          Moore · Southeast US
        </p>
        <p className="mt-3 space-x-4">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/quote" className="hover:text-white transition-colors">
            Get Instant Quote
          </Link>
        </p>
      </footer>

      <Link
        href="/quote"
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-[#00C2A8] text-white flex items-center justify-center shadow-2xl text-2xl z-50 hover:bg-teal-600 transition-colors"
        title="Get Instant Quote"
        aria-label="Get Instant Quote"
      >
        🎤
      </Link>
    </div>
  );
}
