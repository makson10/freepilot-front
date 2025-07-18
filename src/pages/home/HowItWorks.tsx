const steps = [
  {
    icon: "📝",
    title: "Post a Project",
    desc: "Describe your needs and publish your project for free.",
  },
  {
    icon: "👩‍💻",
    title: "Get Proposals",
    desc: "Receive offers from talented freelancers worldwide.",
  },
  {
    icon: "🤝",
    title: "Hire & Collaborate",
    desc: "Choose the best fit, work together, and track progress.",
  },
  {
    icon: "💸",
    title: "Pay Securely",
    desc: "Pay only when you’re satisfied with the work delivered.",
  },
];

const HowItWorks = () => (
  <section
    id="howitworks"
    className="w-full py-16 bg-[var(--background-color)] flex flex-col items-center my-12"
  >
    <h2 className="text-3xl font-bold text-[var(--main-color)] mb-10">
      How It Works
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-5xl">
      {steps.map((step) => (
        <div
          key={step.title}
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
        >
          <span className="text-4xl mb-4">{step.icon}</span>
          <h3 className="text-xl font-semibold text-[var(--main-color)] mb-2">
            {step.title}
          </h3>
          <p className="text-gray-700 text-center">{step.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
