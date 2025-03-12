"use client";
import React, { useState, useEffect, JSX } from "react";
import Link from "next/link";
import LoginButton from "@/app/components/Buttons/LoginButton";

interface NavLink {
  href: string;
  text: string;
}

const debounce = <T extends (...args: unknown[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: number;
  return (...args: Parameters<T>) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => func(...args), delay);
  };
};

const Navbar: React.FC = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };

    const handleResize = debounce(checkMobile, 100);

    checkMobile(); // Immediate check for initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);

  const navLinks: NavLink[] = [
    { href: "/", text: "Home" },
    { href: "/brands", text: "Brands" },
    { href: "/influencers", text: "Influencers" },
    { href: "/pricing", text: "Pricing" },
    { href: "/blogs", text: "Blogs" },
    { href: "/about", text: "About" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-black to-[#0a0a2e] text-white shadow-lg border-b border-white/10 py-5">
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-[#00b4d8] to-[#0077b6] bg-clip-text text-transparent">
          NetwortyIdeas
        </Link>

        {isClient && !isMobile ? (
          <div className="flex gap-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-gray-300 text-lg font-medium transition-all duration-300 hover:text-[#00b4d8] hover:-translate-y-1"
              >
                {link.text}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00b4d8] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link href="https://app.networtyideas.com" target="_blank" rel="noopener noreferrer">
              <LoginButton>Get Started</LoginButton>
            </Link>
          </div>
        ) : (
          <button
            onClick={toggleMenu}
            className="text-white text-2xl cursor-pointer p-2 transition-opacity duration-300 hover:opacity-80"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? "×" : "☰"}
          </button>
        )}
      </div>

      {isClient && isMobile && isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gradient-to-r from-black to-[#0a0a2e] py-5 px-10 flex flex-col gap-5 animate-slide-down">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 text-lg transition-all duration-300 hover:text-[#00b4d8]"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.text}
            </Link>
          ))}
          <Link href="https://app.networtyideas.com" target="_blank" rel="noopener noreferrer">
            <button className="w-full bg-gradient-to-r from-[#0077b6] to-[#00b4d8] text-white py-3 rounded-full font-semibold transition-transform duration-300 hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
