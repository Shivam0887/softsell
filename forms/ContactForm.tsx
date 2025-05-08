"use client";

import { useState } from "react";
import { motion } from "motion/react";

const licenseTypes = [
  "Adobe Creative Cloud",
  "Microsoft Office",
  "Autodesk",
  "VMware",
  "Oracle",
  "Other",
];

interface FormData {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  licenseType?: string;
}

const initialData: FormData = {
  name: "",
  email: "",
  company: "",
  licenseType: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }

    if (!formData.licenseType) {
      newErrors.licenseType = "Please select a license type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitSuccess(true);
    setIsSubmitting(false);
    setFormData(initialData);

    setTimeout(() => {
      setSubmitSuccess(false);
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]"></div>
        <div className="absolute top-0 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center flex flex-col items-center gap-8 mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full dark:bg-white/5 bg-neutral-200 shadow backdrop-blur-md border border-white/10 text-sm font-medium mb-2">
            Get Started
          </div>
          <h2 className="text-5xl md:text-7xl font-light tracking-tight text-foreground/90 max-w-3xl mx-auto leading-[4.5rem]">
            Get your <span className="text-primary">free valuation</span> today
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Fill out the form below and we&apos;ll provide a free valuation of
            your software licenses.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="relative mx-auto max-w-3xl"
        >
          <div className="relative bg-gradient-to-b from-primary/20 to-background p-1 rounded-2xl border border-border">
            <div className="grid grid-cols-3 items-center bg-muted rounded-t-xl h-12">
              {/* dots */}
              <div className="flex gap-1 pl-4">
                <div className="rounded-full bg-red-500 size-2" />
                <div className="rounded-full bg-yellow-500 size-2" />
                <div className="rounded-full bg-green-500 size-2" />
              </div>
            </div>

            <div className="bg-background p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      errors.name
                        ? "border-destructive bg-destructive/5"
                        : "border-foreground/10 hover:border-primary/50 bg-muted/50"
                    }`}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive mt-1.5 font-medium">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      errors.email
                        ? "border-destructive bg-destructive/5"
                        : "border-foreground/10 hover:border-primary/50 bg-muted/50"
                    }`}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive mt-1.5 font-medium">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      errors.company
                        ? "border-destructive bg-destructive/5"
                        : "border-foreground/10 hover:border-primary/50 bg-muted/50"
                    }`}
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Adobe"
                  />
                  {errors.company && (
                    <p className="text-xs text-destructive mt-1.5 font-medium">
                      {errors.company}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="license" className="text-sm font-medium">
                    License Type <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="license"
                    name="licenseType"
                    className={`w-full px-4 py-2.5 bg-background rounded-xl text-sm border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer ${
                      errors.licenseType
                        ? "border-destructive bg-destructive/5"
                        : "border-foreground/10 hover:border-primary/50 bg-muted/50"
                    }`}
                    value={formData.licenseType}
                    onChange={handleChange}
                  >
                    <option value="">Select a license type</option>
                    {licenseTypes.map((type, i) => (
                      <option key={`type-${i + 1}`} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.licenseType && (
                    <p className="text-xs text-destructive mt-1.5 font-medium">
                      {errors.licenseType}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2.5 rounded-xl text-sm border-2 border-foreground/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 hover:border-primary/50 bg-muted/50 min-h-[100px] resize-y"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Additional details about your licenses..."
                />
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-sm px-8 py-3 bg-primary/70 font-bold rounded-3xl cursor-pointer transition-all duration-300 hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Get Valuation"
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.form>
      </div>

      {submitSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 bg-primary text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 backdrop-blur-sm"
        >
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <span className="text-sm font-medium">
            Form submitted successfully! We&apos;ll get back to you soon.
          </span>
        </motion.div>
      )}
    </section>
  );
};

export default ContactForm;
