"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

interface NavbarProps {
  currentPage?: string;
  onPageChange?: (page: string) => void;
}

export default function Navbar({
  currentPage = "home",
  onPageChange,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const handleClick = (
    page: string,
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    e.preventDefault();
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        backgroundColor: isScrolled
          ? "rgba(0, 0, 0, 0.95)"
          : "rgba(0, 0, 0, 1)",
        backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
      }}
      transition={{ duration: 0.2 }}
      className="py-4 sticky top-0 z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#"
          onClick={(e) => handleClick("home", e)}
          className="text-white text-2xl font-bold cursor-pointer"
        >
          Princeton <span className="text-princeton-orange">Game Theory</span>
        </motion.a>
        <ul className="flex gap-8 list-none">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "events", label: "Events" },
            { id: "our-work", label: "Our Work" },
            { id: "resources", label: "Resources" },
            { id: "contact", label: "Contact" },
          ].map(({ id, label }) => (
            <li key={id}>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                href="#"
                onClick={(e) => handleClick(id, e)}
                className={`transition-colors ${
                  currentPage === id
                    ? "text-princeton-orange"
                    : "text-white hover:text-princeton-orange"
                }`}
              >
                {label}
              </motion.a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
