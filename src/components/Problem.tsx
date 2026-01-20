export default function Problem() {
  const problems = [
    {
      icon: "🎾",
      title: "It won't stop fetching",
      description: "You mentioned tennis once in 2019. Now it brings up tennis. Every. Single. Time.",
    },
    {
      icon: "❓",
      title: "It asks the wrong questions",
      description: '"Would you like me to break that down further?" No. I would not. Please sit.',
    },
    {
      icon: "💡",
      title: "It suggests too much",
      description: "You're venting about your day. It's offering productivity frameworks.",
    },
    {
      icon: "🚪",
      title: "It doesn't know when to leave",
      description: '"Is there anything else I can help you with?" Yes: leaving me alone.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-warmGray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-display text-amber-600 font-semibold text-lg mb-4">
            The problem
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-warmGray-900 mb-6">
            Your AI is an Australian Shepherd
          </h2>
          <p className="font-body text-xl text-warmGray-600 max-w-2xl mx-auto leading-relaxed">
            Brilliant. Beautiful. <em>Relentless.</em><br />
            It wants to help so badly that it doesn&apos;t know when to back off.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-warmGray-200 hover:border-amber-200 hover:shadow-lg transition-all duration-200"
            >
              <span className="text-4xl mb-4 block">{problem.icon}</span>
              <h3 className="font-display text-xl font-semibold text-warmGray-900 mb-3">
                {problem.title}
              </h3>
              <p className="font-body text-warmGray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* The kicker */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-amber-50 border-2 border-amber-200 rounded-2xl px-8 py-6">
            <p className="font-body text-lg text-warmGray-700">
              It&apos;s not a <span className="font-semibold">settings</span> problem.<br />
              It&apos;s a <span className="font-semibold text-amber-700">training</span> problem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
