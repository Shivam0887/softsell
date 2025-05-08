"use client";

import { useTheme } from "@/providers/theme-provider";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const revealRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    });

    const element = revealRef.current;

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  });

  return (
    <section className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 py-28 md:py-32">
      <div className="max-w-xl flex flex-col items-center md:items-stretch gap-6">
        {/* Heading and sub-headings */}
        <div className="max-w-fit capitalize text-xs sm:text-sm text-primary rounded-3xl px-4 py-2 bg-primary/10">
          software license marketplace
        </div>
        <h1 className="text-center md:text-left text-3xl sm:text-4xl md:text-6xl font-bold">
          Unlock The Value of Your{" "}
          <span
            className={theme === "light" ? "text-primary" : "gradient-text"}
          >
            Unused Software
          </span>{" "}
          Licenses
        </h1>
        <p className="text-center md:text-left sm:text-lg text-muted-foreground leading-relaxed">
          Convert your idle software licenses into cash quickly and securely.
          Get the best market value with out AI-powered valuation system.
        </p>

        {/* CTA */}
        <div className="space-x-4">
          <button
            type="button"
            className="text-sm sm:text-base px-8 py-3 bg-primary/70 font-bold rounded-3xl cursor-pointer"
          >
            Get a Quote
          </button>
          <button
            type="button"
            className="text-sm sm:text-base px-8 py-3 border border-muted-foreground cursor-pointer font-medium text-foreground rounded-3xl"
          >
            Sell My Licenses
          </button>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground mt-5">
          Trusted by 500+ companies worldwide
        </p>
      </div>

      <div ref={revealRef} className="reveal relative flex justify-center">
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/30 rounded-full blur-2xl" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/30 rounded-full blur-2xl" />

        <div className="relative z-10 w-[22rem] h-80 bg-gradient-to-b from-primary/20 to-background p-1 rounded-2xl border border-border">
          <div className="grid grid-cols-3 items-center bg-muted rounded-t-xl h-1/5">
            {/* dots */}
            <div className="flex gap-1 pl-4">
              <div className="rounded-full bg-red-500 size-2" />
              <div className="rounded-full bg-yellow-500 size-2" />
              <div className="rounded-full bg-green-500 size-2" />
            </div>

            <span className="bg-background rounded-2xl px-3 py-1 text-foreground text-[10px]">
              License Valuation
            </span>
          </div>

          <div className="bg-background h-4/5 p-4 space-y-4">
            <p>Adobe Creative Cloud License</p>
            <div className="text-primary bg-primary/10 rounded-lg p-2 font-medium">
              Estimated Value: $750 - $850
            </div>

            <div className="flex text-xs justify-between">
              <span>Original price:</span>
              <span>$999.0</span>
            </div>
            <div className="flex text-xs justify-between">
              <span>Validity:</span>
              <span>8 months</span>
            </div>
            <div className="flex text-xs justify-between">
              <span>License Type:</span>
              <span>Enterprise</span>
            </div>

            <div className="text-xs bg-muted rounded-lg p-2">
              <p className="text-muted-foreground">
                You could get up to{" "}
                <span className="text-primary font-medium">85%</span> of the
                original value!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
