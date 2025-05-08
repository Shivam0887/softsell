"use client";

import Link from "next/link";
import ToggleTheme from "./ui/ToggleTheme";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`h-14 sticky z-50 top-4 transition-all backdrop-blur-sm md:px-4 px-6 max-w-5xl w-full mx-auto rounded-2xl ${
        isScrolled ? "bg-muted/80 shadow-xl" : "transparent"
      }`}
    >
      <div className="w-full flex justify-between h-full items-center mx-auto">
        <Link href="/">
          <h2 className="flex items-center gap-2">
            <span className="font-bold sm:text-lg rounded-lg bg-primary text-white px-3 py-1">
              S
            </span>{" "}
            <span className="font-bold sm:text-xl">SoftSell</span>
          </h2>
        </Link>
        <nav className="flex gap-4">
          <ul className="hidden md:flex gap-4 items-center">
            <Link href="#how-it-works">
              <li className="capitalize hover:text-primary transition-colors text-sm font-medium">
                how it works
              </li>
            </Link>
            <Link href="#why-choose-us">
              <li className="capitalize hover:text-primary transition-colors text-sm font-medium">
                why choose us
              </li>
            </Link>
            <Link href="#testimonials">
              <li className="capitalize hover:text-primary transition-colors text-sm font-medium">
                testimonials
              </li>
            </Link>
            <Link href="#contact">
              <li className="capitalize hover:text-primary transition-colors text-sm font-medium">
                contact
              </li>
            </Link>
          </ul>
          <ToggleTheme />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
