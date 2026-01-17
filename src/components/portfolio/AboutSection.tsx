export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      {/* Decorative shapes */}
      <div className="absolute top-1/3 left-10 w-64 h-64 rounded-full border border-border/30" />

      <div className="container mx-auto max-w-4xl relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl xl:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
        </div>

        <div className="glass-bright rounded-3xl p-12 xl:p-16 gradient-border-bright">
          <p className="text-lg xl:text-xl text-white leading-relaxed text-center">
            First-year CSE-AI student at KIET Group of Institutions, passionate about Java backend development and algorithmic problem-solving. Solved 172+ problems across platforms, achieved LeetCode 1530 rating. Currently learning Spring Boot and exploring GenAI & Web3. Active in Google Developers Group, DevUp, and Technocrats. Seeking internship opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
