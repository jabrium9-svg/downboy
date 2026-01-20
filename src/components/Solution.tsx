export default function Solution() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-display text-amber-600 font-semibold text-lg mb-4">
            The solution
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-warmGray-900 mb-6">
            Train it through conversation
          </h2>
          <p className="font-body text-xl text-warmGray-600 max-w-2xl mx-auto leading-relaxed">
            Not settings menus. Not preference panels.<br />
            <span className="text-warmGray-800 font-medium">Just you, talking to your AI, teaching it who you are.</span>
          </p>
        </div>

        {/* Before/After comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Before - Untrained */}
          <div className="relative">
            <div className="absolute -top-4 left-6 bg-warmGray-200 text-warmGray-600 font-display font-semibold text-sm px-4 py-1 rounded-full">
              Before
            </div>
            <div className="bg-warmGray-100 rounded-2xl p-8 h-full border-2 border-warmGray-200">
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <p className="font-body text-warmGray-500 text-sm mb-1">Your AI:</p>
                  <p className="font-body text-warmGray-800">
                    &quot;I notice you&apos;re working late! Would you like tips for work-life balance? Here are 47 strategies—&quot;
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <p className="font-body text-warmGray-500 text-sm mb-1">Your AI:</p>
                  <p className="font-body text-warmGray-800">
                    &quot;Since you mentioned your mother last week, should I set a reminder to call her? I could also draft—&quot;
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <p className="font-body text-warmGray-500 text-sm mb-1">Your AI:</p>
                  <p className="font-body text-warmGray-800">
                    &quot;Shall I elaborate? I can break this into sub-points, create a visualization, or—&quot;
                  </p>
                </div>
              </div>
              <p className="mt-6 text-center font-display text-warmGray-500 italic">
                *panting intensifies*
              </p>
            </div>
          </div>

          {/* After - Trained */}
          <div className="relative">
            <div className="absolute -top-4 left-6 bg-amber-500 text-white font-display font-semibold text-sm px-4 py-1 rounded-full">
              After
            </div>
            <div className="bg-amber-50 rounded-2xl p-8 h-full border-2 border-amber-200">
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-amber-100">
                  <p className="font-body text-amber-600 text-sm mb-1">Your AI:</p>
                  <p className="font-body text-warmGray-800">
                    &quot;Here&apos;s the summary you asked for.&quot;
                  </p>
                </div>
                <div className="flex justify-center py-8">
                  <div className="text-center">
                    <p className="font-body text-warmGray-500 italic mb-2">
                      (comfortable silence)
                    </p>
                    <div className="inline-block">
                      {/* Happy, calm dog */}
                      <div className="relative w-20 h-14 bg-amber-400 rounded-[1.5rem]">
                        <div className="absolute -top-2 left-1 w-4 h-5 bg-amber-500 rounded-full transform -rotate-12" />
                        <div className="absolute -top-2 right-1 w-4 h-5 bg-amber-500 rounded-full transform rotate-12" />
                        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 flex gap-3">
                          {/* Calm, content eyes - slightly closed */}
                          <div className="w-2 h-0.5 bg-warmGray-800 rounded-full transform rotate-6" />
                          <div className="w-2 h-0.5 bg-warmGray-800 rounded-full transform -rotate-6" />
                        </div>
                        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-2 h-1.5 bg-warmGray-800 rounded-full" />
                        {/* Tail - still, content */}
                        <div className="absolute -right-4 top-3 w-5 h-2 bg-amber-500 rounded-full" />
                        {/* AI badge */}
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                          AI
                        </div>
                      </div>
                    </div>
                    <p className="font-body text-warmGray-500 italic mt-2">
                      (good boy)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key benefits */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🗣️</span>
            </div>
            <h3 className="font-display text-lg font-semibold text-warmGray-900 mb-2">
              Teach through talking
            </h3>
            <p className="font-body text-warmGray-600">
              Daily sessions through Flow Mode. Natural conversation, not configuration.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📉</span>
            </div>
            <h3 className="font-display text-lg font-semibold text-warmGray-900 mb-2">
              Less over time
            </h3>
            <p className="font-body text-warmGray-600">
              Daily at first, then weekly, then rarely. Your AI learns when to sit.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🔗</span>
            </div>
            <h3 className="font-display text-lg font-semibold text-warmGray-900 mb-2">
              Train once, benefit everywhere
            </h3>
            <p className="font-body text-warmGray-600">
              Your personal API works across all Jabrium experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
