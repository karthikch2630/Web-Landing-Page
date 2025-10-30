import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GooeyNav from "./GooeyNav";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Works", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const navContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const navItem = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* --- Left: Logo --- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <img
            src="https://res.cloudinary.com/diqux3y0a/image/upload/v1752839930/B2T_logo_white_zo4oxt.png"
            alt="Brick2Tech Logo"
            className="w-40 md:w-56 h-auto object-contain"
          />
        </motion.div>

        {/* --- Middle: Gooey Nav (Desktop Only) --- */}
        <motion.div
          className="hidden md:flex flex-1 justify-center"
          variants={navContainer}
          initial="hidden"
          animate="show"
        >
          <GooeyNav
            items={items.map((item) => ({
              ...item,
              motionVariant: navItem,
            }))}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </motion.div>

        {/* --- Right: Let’s Talk Button --- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-block bg-gradient-to-br from-[#0098d4]/30 to-[#142c4c]/40
                       backdrop-blur-md border border-[#0098d4]/50 rounded-full
                       text-white font-semibold px-6 py-2 shadow-lg transition-all
                       hover:from-[#0098d4]/50 hover:to-[#142c4c]/60 hover:border-[#0098d4]/60
                       hover:shadow-[#0098d4]/40 hover:text-[#0098d4]"
          >
            Let’s Talk
          </motion.a>
        </motion.div>

        {/* --- Mobile Menu Toggle --- */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="text-white focus:outline-none"
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* --- Sidebar Overlay --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark overlay background */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* --- Sidebar Menu --- */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="fixed top-0 right-0 h-full w-72 bg-[#142c4c]/95 backdrop-blur-lg border-l border-[#0098d4]/30 z-50 flex flex-col items-center text-center p-6 space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-[#0098d4] transition"
                aria-label="Close Menu"
              >
                <X size={28} />
              </button>

              {/* Logo */}
              <img
                src="https://res.cloudinary.com/diqux3y0a/image/upload/v1752839930/B2T_logo_white_zo4oxt.png"
                alt="Brick2Tech"
                className="w-36 mt-8 mb-6"
              />

              {/* Nav Links */}
              <div className="flex flex-col space-y-4 w-full">
                {items.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.05 }}
                    className="text-white text-lg font-medium hover:text-[#0098d4] transition-all"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              {/* Let’s Talk Button */}
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="mt-auto inline-block bg-gradient-to-br from-[#0098d4]/30 to-[#142c4c]/40
                           border border-[#0098d4]/50 rounded-full text-white font-semibold
                           px-6 py-3 shadow-lg hover:from-[#0098d4]/50 hover:to-[#142c4c]/60
                           hover:border-[#0098d4]/60 hover:text-[#0098d4] transition-all"
              >
                Let’s Talk
              </motion.a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
