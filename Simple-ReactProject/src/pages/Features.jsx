import { Link } from "react-router-dom";

const features = [
  {
    icon: "members",
    title: "Member management",
    description: "Keep member details, renewals, and activity organized in one clear place.",
  },
  {
    icon: "payments",
    title: "Simple payments",
    description: "Make it easier to collect payments and keep track of every booking.",
  },
  {
    icon: "community",
    title: "Community tools",
    description: "Bring people together with tools designed for clubs and associations.",
  },
  {
    icon: "insights",
    title: "Useful insights",
    description: "See how your organization is growing and make informed decisions.",
  },
  {
    icon: "automation",
    title: "Less busywork",
    description: "Automate routine tasks so your team can spend more time with members.",
  },
  {
    icon: "support",
    title: "Help when you need it",
    description: "Find clear guidance and support as your organization gets started.",
  },
];

function FeatureIcon({ name }) {
  const common = "h-7 w-7";
  const paths = {
    members: <><circle cx="9" cy="8" r="3" /><path d="M3.5 19v-1.5a5.5 5.5 0 0 1 11 0V19zM16 5.5a3 3 0 0 1 0 5.8M17 13a5 5 0 0 1 3.5 4.8V19h-3" /></>,
    payments: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h4" /></>,
    community: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM20 8v6M23 11h-6" /></>,
    insights: <><path d="M4 19V5M4 19h17" /><path d="m7 15 4-4 3 2 6-7" /></>,
    automation: <><path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1m11.4 11.4 2.1 2.1M3 12h3m12 0h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /><circle cx="12" cy="12" r="5" /><path d="m10 12 1.3 1.3L14.5 10" /></>,
    support: <><circle cx="12" cy="12" r="9" /><path d="M9.6 9a2.5 2.5 0 1 1 4.3 1.7c-1 .9-1.9 1.3-1.9 2.8M12 17h.01" /></>,
  };

  return <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-600"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={common}>{paths[name]}</svg></span>;
}

function Features() {
  return (
    <div className="text-[#263238]">
      <section className="bg-gray-100 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 sm:px-8 md:grid-cols-[1.15fr_0.85fr] lg:px-10">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-green-600">Features</p>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Everything your community needs, <span className="text-green-600">all in one place.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">Spend less time managing the details and more time helping your members connect, participate, and grow.</p>
            <Link to="/Register" className="mt-8 inline-flex items-center rounded-md bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700">Get started <span aria-hidden="true" className="ml-2">→</span></Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {features.slice(0, 4).map((feature, index) => <div key={feature.title} className={`rounded-2xl bg-white p-5 shadow-sm sm:p-7 ${index % 2 === 1 ? "md:translate-y-8" : ""}`}><FeatureIcon name={feature.icon} /><h2 className="mt-5 text-lg font-semibold sm:text-xl">{feature.title}</h2><p className="mt-2 text-sm leading-6 text-gray-600">{feature.description}</p></div>)}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-600">Made for your team</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">Less admin. More community.</h2>
            <p className="mt-4 leading-7 text-gray-600">The tools you need to keep your organization running smoothly, without making everyday work complicated.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => <article key={feature.title} className="rounded-xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"><FeatureIcon name={feature.icon} /><h3 className="mt-5 text-xl font-semibold">{feature.title}</h3><p className="mt-3 leading-7 text-gray-600">{feature.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-14 sm:py-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center sm:px-8 sm:flex-row sm:text-left lg:px-10">
          <div><h2 className="text-2xl font-bold sm:text-3xl">Ready to bring your community together?</h2><p className="mt-2 text-gray-600">Explore a plan that fits the way your team works.</p></div>
          <Link to="/Pricing" className="inline-flex shrink-0 items-center rounded-md bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700">View pricing <span aria-hidden="true" className="ml-2">→</span></Link>
        </div>
      </section>
    </div>
  );
}

export default Features;

