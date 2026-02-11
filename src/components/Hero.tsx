export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cream overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5c2 0 3.5 1.5 3.5 3.5S32 12 30 12s-3.5-1.5-3.5-3.5S28 5 30 5zm0 43c2 0 3.5 1.5 3.5 3.5S32 55 30 55s-3.5-1.5-3.5-3.5S28 48 30 48z' fill='%23b45309' fill-opacity='1'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Wordmark */}
        <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6">
          <span className="gradient-text">Down Boy</span>
        </h1>

        {/* Tagline */}
        <p className="font-display text-2xl md:text-3xl text-amber-700 font-medium mb-8">
          Train your AI.
        </p>

        {/* Subhead */}
        <p className="font-body text-xl md:text-2xl text-warmGray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Your AI is smart. <em>Too</em> smart.<br />
          Eager. <em>Too</em> eager.<br />
          <span className="text-warmGray-800 font-semibold">Teach it when to sit.</span>
        </p>

        {/* Illustration placeholder - playful AI dog scene */}
        <div className="relative w-full max-w-md mx-auto mb-12">
          <div className="bg-amber-50 rounded-3xl p-8 border-2 border-amber-200 shadow-lg">
            {/* Person saying "Down, boy!" */}
            <div className="flex items-end justify-center gap-4">
              {/* Speech bubble */}
              <div className="relative bg-white rounded-2xl px-6 py-3 shadow-md border border-amber-100 -mb-2">
                <p className="font-display text-xl font-semibold text-warmGray-800">Down, boy!</p>
                <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white border-r border-b border-amber-100 transform rotate-45" />
              </div>
            </div>

            {/* The eager AI "dog" */}
            <div className="mt-6 flex justify-center">
              <div className="relative">
                {/* Dog body - stylized, friendly */}
                <div className="w-32 h-24 bg-amber-400 rounded-[2rem] relative">
                  {/* Ears */}
                  <div className="absolute -top-4 left-2 w-6 h-8 bg-amber-500 rounded-full transform -rotate-12" />
                  <div className="absolute -top-4 right-2 w-6 h-8 bg-amber-500 rounded-full transform rotate-12" />

                  {/* Face */}
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 flex gap-4">
                    {/* Eyes - eager, wide */}
                    <div className="w-4 h-4 bg-warmGray-800 rounded-full relative">
                      <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                    <div className="w-4 h-4 bg-warmGray-800 rounded-full relative">
                      <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                  </div>

                  {/* Nose */}
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-warmGray-800 rounded-full" />

                  {/* Tongue - eager panting */}
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-4 h-5 bg-pink-400 rounded-b-full animate-pant" />

                  {/* Tail - wagging */}
                  <div className="absolute -right-6 top-4 w-8 h-3 bg-amber-500 rounded-full origin-left animate-wag" />
                </div>

                {/* Front paws - up, eager */}
                <div className="flex justify-center gap-2 -mt-1">
                  <div className="w-5 h-8 bg-amber-300 rounded-b-lg" />
                  <div className="w-5 h-8 bg-amber-300 rounded-b-lg" />
                </div>

                {/* "AI" badge on collar */}
                <div className="absolute top-[4.5rem] left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  AI
                </div>
              </div>
            </div>

            {/* Sparkles around the dog - it's SO eager to help */}
            <div className="absolute top-12 right-12 text-2xl animate-bounce-gentle">✨</div>
            <div className="absolute top-20 left-10 text-xl animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>✨</div>
          </div>
        </div>

        {/* CTA */}
        <a href="https://app.jabrium.com?source=downboy&ref=website" className="group relative inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-display font-semibold text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5">
          Start training
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </a>

        <p className="mt-6 text-warmGray-500 font-body text-sm">
          Free with Jabrium
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-amber-300 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 bg-amber-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
