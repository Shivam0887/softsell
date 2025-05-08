"use client";

import { BadgeCheck, DollarSign, Lock, Zap } from "lucide-react";

const featuresData = [
  {
    title: "Secure Transactions",
    desc: "Our platform uses bank-level encryption and secure transferprotocols to protect your information and financial transactions.",
    icon: Lock,
  },
  {
    title: "Best Market Rates",
    desc: `Our AI-driven valuation ensures you get the highest possible
                price for your software licenses with competitive market
                analysis.`,
    icon: DollarSign,
  },
  {
    title: "Fast Processing",
    desc: `Get valuations instantly and receive payment within 24-48 hours
                after accepting our offer.`,
    icon: Zap,
  },
  {
    title: "Industry Expertise",
    desc: `Our team has over 10 years of experience in software license
                management and valuation, with expertise across all major
                software vendors.`,
    icon: BadgeCheck,
  },
];

const Features = () => {
  return (
    <section
      id="why-choose-us"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background blur effects */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block px-4 py-1.5 bg-foreground/5 border border-foreground/10 rounded-full text-sm font-medium backdrop-blur-sm">
            Why Choose Us
          </div>

          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-foreground/90 max-w-2xl mx-auto leading-tight">
            <span className="text-primary">Trusted by thousands</span> of
            software license traders
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map(({ desc, icon: Icon, title }, i) => (
            <div
              key={`feature-${i + 1}`}
              className="reveal h-full card-hover cursor-pointer"
              style={{ transitionDelay: `0.${i}s` }}
            >
              <div className="bg-background/90 shadow-xl rounded-2xl backdrop-blur-2xl h-full flex flex-col p-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Icon className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-light mb-3 text-foreground/90">
                  {title}
                </h3>
                <p className="text-foreground/70 text-sm flex-grow">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
