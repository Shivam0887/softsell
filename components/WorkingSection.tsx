import Card from "./ui/Card";

const data = [
  {
    position: "01",
    title: "Upload License",
    desc: "Upload your license details using our intuitive dashboard. We support all major software vendors.",
    features: ["Secure and encrypted", "Instant verification"],
  },
  {
    position: "02",
    title: "Get Valuation",
    desc: "Our AI system provides an instant market valuation based on current demand and license details.",
    features: ["AI-powered pricing", "Market-based valuation"],
  },
  {
    position: "03",
    title: "Get Paid",
    desc: "Accept our offer and get paid quickly via your preferred payment method. Fast and secure.",
    features: ["Same-day transfer", "Multiple payment options"],
  },
];

const WorkingSection = () => {
  return (
    <section
      id="how-it-works"
      className="relative reveal py-24 overflow-hidden"
    >
      {/* Background blur effects */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]"></div>
        <div className="absolute top-0 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center flex flex-col items-center gap-8 mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full dark:bg-white/5 bg-neutral-200 shadow backdrop-blur-md border border-white/10 text-sm font-medium mb-2">
            How it Works
          </div>
          <h2 className="text-5xl md:text-7xl font-light tracking-tight text-foreground/90 max-w-3xl mx-auto leading-[4.5rem]">
            <span className="text-primary">3 simple steps</span> — to sell your
            unused software licenses
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-10 md:px-20">
          {data.map((d) => (
            <Card key={d.position} {...d} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingSection;
