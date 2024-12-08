import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(0);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
      setScrollOpacity(Math.min(scrollPosition / 300, 1)); // Adjust opacity as you scroll down
    };

    // Check user's motion preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "backdrop-blur-md border-b" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundColor: `rgba(252, 229, 231, ${0.8 - scrollOpacity * 0.5})`, // Dynamic opacity blending
      }}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between" role="navigation" aria-label="Main navigation">
        <motion.a
          href="/"
          className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Flora home"
        >
          <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-teal-600">
            Flora
          </span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Simple Button Component */}
          <button
            className="px-4 py-2 border-2 border-gray-500 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
            aria-label="Login with Google"
          >
            Login with Google
          </button>
        </motion.div>
      </nav>
    </motion.header>
  );
}
