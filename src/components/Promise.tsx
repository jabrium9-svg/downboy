export default function Promise() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        {/* Main promise */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warmGray-900 mb-8 leading-tight">
            A real working relationship<br />
            <span className="gradient-text">with your AI.</span>
          </h2>
          <p className="font-body text-xl md:text-2xl text-warmGray-600 max-w-2xl mx-auto leading-relaxed">
            Your AI cherishes your privacy — not because of rules,<br />
            but because it <em>understands you</em>.
          </p>
        </div>

        {/* The deeper point */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-warmGray-200 shadow-xl mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Happy, well-trained dog illustration */}
            <div className="flex-shrink-0">
              <div className="relative w-40 h-32 bg-amber-100 rounded-3xl flex items-center justify-center">
                {/* Calm, content dog */}
                <div className="relative">
                  <div className="w-24 h-18 bg-amber-400 rounded-[2rem] relative">
                    {/* Ears - relaxed */}
                    <div className="absolute -top-3 left-2 w-5 h-6 bg-amber-500 rounded-full transform -rotate-6" />
                    <div className="absolute -top-3 right-2 w-5 h-6 bg-amber-500 rounded-full transform rotate-6" />
                    {/* Eyes - happy, squinting */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-4">
                      <div className="w-3 h-1 bg-warmGray-800 rounded-full transform rotate-6" />
                      <div className="w-3 h-1 bg-warmGray-800 rounded-full transform -rotate-6" />
                    </div>
                    {/* Nose */}
                    <div className="absolute top-7 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-warmGray-800 rounded-full" />
                    {/* Smile */}
                    <div className="absolute top-9 left-1/2 transform -translate-x-1/2 w-6 h-3 border-b-2 border-warmGray-700 rounded-b-full" />
                    {/* Tail - relaxed wag */}
                    <div className="absolute -right-5 top-4 w-6 h-3 bg-amber-500 rounded-full" />
                    {/* AI badge */}
                    <div className="absolute top-[3.5rem] left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      AI
                    </div>
                  </div>
                  {/* Front paws - sitting */}
                  <div className="flex justify-center gap-3 mt-1">
                    <div className="w-4 h-4 bg-amber-300 rounded-b-lg" />
                    <div className="w-4 h-4 bg-amber-300 rounded-b-lg" />
                  </div>
                </div>
              </div>
            </div>

            {/* The message */}
            <div>
              <p className="font-body text-lg text-warmGray-700 leading-relaxed mb-4">
                A well-trained AI doesn&apos;t ask fewer questions because it&apos;s been <em>restricted</em>.
              </p>
              <p className="font-body text-lg text-warmGray-700 leading-relaxed mb-4">
                It asks fewer questions because it&apos;s been <em>taught</em>.
              </p>
              <p className="font-body text-lg text-warmGray-900 font-medium leading-relaxed">
                That&apos;s the difference between a muzzle and training.<br />
                One suppresses. The other understands.
              </p>
            </div>
          </div>
        </div>

        {/* Your Personal API */}
        <div className="text-center mb-16">
          <p className="font-display text-amber-600 font-semibold text-lg mb-4">
            Your personal API
          </p>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-warmGray-900 mb-6">
            Your boundaries. Your context. Your preferences.
          </h3>
          <p className="font-body text-lg text-warmGray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Everything you teach Down Boy becomes part of your personal API —
            a living document that any Jabrium agent can reference.
            Train once, benefit everywhere.
          </p>

          {/* API visualization */}
          <div className="inline-flex flex-wrap justify-center gap-3">
            {[
              "Don't ask about work on weekends",
              "Skip the small talk",
              "I think out loud — don't interrupt",
              "Never mention diet",
              "I vent to process, not for solutions",
              "Don't over-explain",
            ].map((rule, index) => (
              <div
                key={index}
                className="bg-warmGray-100 border border-warmGray-200 rounded-full px-4 py-2 font-body text-sm text-warmGray-700"
              >
                {rule}
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <a href="https://app.jabrium.com" className="group relative inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-display font-semibold text-xl px-10 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5">
            Start training
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
          <p className="mt-4 text-warmGray-500 font-body text-sm">
            Free with Jabrium
          </p>
        </div>
      </div>
    </section>
  );
}
