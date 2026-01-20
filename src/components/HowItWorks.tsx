export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Talk to your AI",
      description: "Daily at first, through Flow Mode. Just speak naturally — no menus, no forms, no toggles.",
      detail: "\"Hey, when I'm venting, I don't want solutions. Just listen.\"",
    },
    {
      number: "2",
      title: "Teach it your boundaries",
      description: "Tell it what not to ask. What not to bring up. When to back off. What you don't need help with.",
      detail: "\"Stop asking about my sister. I'll bring her up if I want to.\"",
    },
    {
      number: "3",
      title: "Watch it learn",
      description: "Over time, your AI asks less. Not because it cares less — because it understands more.",
      detail: "(Your AI, sitting calmly, not asking if you want tips)",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-warmGray-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-display text-amber-400 font-semibold text-lg mb-4">
            How it works
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Three steps to a well-trained AI
          </h2>
          <p className="font-body text-xl text-warmGray-400 max-w-xl mx-auto">
            No treats required. Just honest conversation.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line - desktop only */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-warmGray-700" />
              )}

              <div className="relative z-10 text-center">
                {/* Step number */}
                <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/20">
                  <span className="font-display text-3xl font-bold text-white">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-warmGray-400 mb-4 leading-relaxed">
                  {step.description}
                </p>

                {/* Example quote */}
                <div className="inline-block bg-warmGray-800 rounded-xl px-5 py-3 border border-warmGray-700">
                  <p className="font-body text-amber-200 text-sm italic">
                    {step.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline visual */}
        <div className="mt-20 bg-warmGray-800 rounded-2xl p-8 border border-warmGray-700">
          <p className="font-display text-center text-lg font-semibold text-warmGray-300 mb-6">
            Training frequency over time
          </p>
          <div className="flex items-end justify-between gap-2 h-32 max-w-lg mx-auto">
            {/* Week 1 - daily */}
            <div className="flex-1 text-center">
              <div className="bg-amber-500 rounded-t-lg mx-1" style={{ height: '100%' }} />
              <p className="font-body text-xs text-warmGray-500 mt-2">Week 1</p>
              <p className="font-body text-xs text-warmGray-400">Daily</p>
            </div>
            {/* Week 2-3 */}
            <div className="flex-1 text-center">
              <div className="bg-amber-500 rounded-t-lg mx-1" style={{ height: '70%' }} />
              <p className="font-body text-xs text-warmGray-500 mt-2">Week 2-3</p>
              <p className="font-body text-xs text-warmGray-400">Most days</p>
            </div>
            {/* Month 2 */}
            <div className="flex-1 text-center">
              <div className="bg-amber-500 rounded-t-lg mx-1" style={{ height: '40%' }} />
              <p className="font-body text-xs text-warmGray-500 mt-2">Month 2</p>
              <p className="font-body text-xs text-warmGray-400">Weekly</p>
            </div>
            {/* Month 3+ */}
            <div className="flex-1 text-center">
              <div className="bg-amber-500 rounded-t-lg mx-1" style={{ height: '20%' }} />
              <p className="font-body text-xs text-warmGray-500 mt-2">Month 3+</p>
              <p className="font-body text-xs text-warmGray-400">As needed</p>
            </div>
            {/* Eventually */}
            <div className="flex-1 text-center">
              <div className="bg-amber-400 rounded-t-lg mx-1" style={{ height: '10%' }} />
              <p className="font-body text-xs text-warmGray-500 mt-2">Eventually</p>
              <p className="font-body text-xs text-amber-400">Rarely</p>
            </div>
          </div>
          <p className="text-center font-body text-warmGray-500 mt-6 text-sm">
            Less asking. More understanding.
          </p>
        </div>
      </div>
    </section>
  );
}
