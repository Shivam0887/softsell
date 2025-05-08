"use client";

import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]"></div>
        <div className="absolute top-0 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center flex flex-col items-center gap-8 mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full dark:bg-white/5 bg-neutral-200 shadow backdrop-blur-md border border-white/10 text-sm font-medium mb-2">
            Testimonials
          </div>
          <h2 className="text-5xl md:text-7xl font-light tracking-tight text-foreground/90 max-w-3xl mx-auto leading-[4.5rem]">
            Our <span className="text-primary">customers</span> love us
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Hear what our customers have to say about their experience with
            SoftSell.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-[1fr] gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="h-full flex flex-col justify-between relative bg-background/40 backdrop-blur-sm border border-foreground/10 rounded-2xl p-6 lg:p-8 transition-all duration-300 group-hover:border-primary/20">
              <div>
                <div className="flex mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg mb-6 text-foreground/90 leading-relaxed">
                  SoftSell made it incredibly easy to sell our excess Adobe
                  licenses after downsizing. The valuation was fair and the
                  payment was processed within 24 hours. Highly recommend!
                </blockquote>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center ring-2 ring-primary/20">
                  <span className="text-primary font-bold">JD</span>
                </div>
                <div>
                  <div className="font-medium">Jennifer Davis</div>
                  <div className="text-sm text-muted-foreground">
                    IT Director, TechPro Solutions
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative flex flex-col justify-between bg-background/40 backdrop-blur-sm border border-foreground/10 rounded-2xl p-6 lg:p-8 transition-all duration-300 group-hover:border-primary/20">
              <div>
                <div className="flex mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg mb-6 text-foreground/90 leading-relaxed">
                  After our company pivoted, we had 15 Microsoft licenses we no
                  longer needed. SoftSell offered 30% more than any competitor.
                  The process was smooth and their customer service was
                  excellent.
                </blockquote>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center ring-2 ring-primary/20">
                  <span className="text-primary font-bold">MJ</span>
                </div>
                <div>
                  <div className="font-medium">Michael Johnson</div>
                  <div className="text-sm text-muted-foreground">
                    CFO, Innovate Inc.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
