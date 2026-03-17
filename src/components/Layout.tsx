import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Instagram, Facebook, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isDarkHeader = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-cream text-forest font-sans relative">
      <div className="noise-overlay"></div>
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500 border-b",
          isScrolled 
            ? "bg-cream/90 backdrop-blur-md py-4 border-forest/10 shadow-sm" 
            : "bg-transparent py-6 border-transparent",
          !isScrolled && isDarkHeader ? "text-white" : 
          !isScrolled && location.pathname === "/contact" ? "text-white md:text-forest" : "text-forest"
        )}
      >
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group z-50">
            <img 
              src="https://i.imgur.com/NMgV0ZT.png" 
              alt="Fresh Start Landscaping Co." 
              className="h-12 md:h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-xs uppercase tracking-[0.2em] font-medium transition-all hover:opacity-100 relative group",
                  location.pathname === link.path ? "opacity-100" : "opacity-70"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-2 left-0 h-[1px] bg-current transition-all duration-300",
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                )}></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className={cn(
                "px-6 py-3 rounded-full text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-300 border",
                isScrolled || !isDarkHeader
                  ? "bg-forest text-cream border-forest hover:bg-transparent hover:text-forest"
                  : "bg-white text-forest border-white hover:bg-transparent hover:text-white"
              )}
            >
              Free Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isMobileMenuOpen ? "text-forest" : "")} />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-cream flex flex-col justify-center px-6 md:px-12"
          >
            <nav className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-5xl font-serif text-forest hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.2em] font-bold text-forest border-b border-forest pb-2 hover:text-accent hover:border-accent transition-colors"
                >
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow flex flex-col relative z-10 bg-cream shadow-[0_20px_50px_rgba(0,0,0,0.1)] pb-16 md:pb-0">
        <Outlet />
      </main>

      {/* Mobile Sticky Call Button */}
      <div className="md:hidden fixed bottom-6 right-6 z-30">
        <a 
          href="tel:2156511329"
          className="flex items-center justify-center w-14 h-14 bg-accent text-forest rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform"
          aria-label="Call Us"
        >
          <Phone className="w-6 h-6 fill-current" />
        </a>
      </div>

      {/* Premium Footer - Parallax Reveal */}
      <footer className="bg-forest text-cream pt-24 pb-12 overflow-hidden sticky bottom-0 z-0">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-serif mb-6">Ready to elevate your landscape?</h3>
              <p className="text-cream/70 max-w-md mb-8 font-light leading-relaxed">
                Expert lawn care, landscape design, and maintenance to transform your outdoor space into something extraordinary.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.2em] font-bold border-b border-accent pb-2 hover:text-accent transition-colors"
              >
                Start Your Project <ArrowRight className="w-4 h-4 text-accent" />
              </Link>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-cream/50 mb-6 font-semibold">Navigation</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="hover:text-accent transition-colors font-light">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-cream/50 mb-6 font-semibold">Contact</h4>
              <ul className="space-y-4 font-light text-cream/80">
                <li>
                  <a href="tel:2156511329" className="hover:text-accent transition-colors">(215) 651-1329</a>
                </li>
                <li>
                  <a href="mailto:services@freshstartlandscapingco.com" className="hover:text-accent transition-colors">services@freshstartlandscapingco.com</a>
                </li>
                <li className="pt-4 flex gap-4">
                  <a href="#" className="hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
                </li>
              </ul>
            </div>
          </div>

          {/* Massive Footer Typography */}
          <div className="border-t border-cream/10 pt-12 flex flex-col items-center overflow-hidden">
            <motion.h2 
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[12vw] leading-none font-serif font-bold tracking-tighter text-cream/5 select-none text-center w-full"
            >
              FRESH START
            </motion.h2>
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 mt-8 text-xs tracking-wider text-cream/40 uppercase">
              <p>&copy; {new Date().getFullYear()} Fresh Start Landscaping Co.</p>
              <p>Designed for Growth.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
