import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "01",
    title: "Lawn & Seasonal Care",
    description: "Year-round mowing, edging, and seasonal cleanup to keep your lawn pristine.",
  },
  {
    id: "02",
    title: "Landscape Design",
    description: "Custom designs that bring your dream outdoor space to life.",
  },
  {
    id: "03",
    title: "Mulching & Bed Renovation",
    description: "Fresh mulch and redesigned beds for a polished, healthy landscape.",
  },
  {
    id: "04",
    title: "Tree & Shrub Care",
    description: "Safe, expert pruning and trimming to improve health and curb appeal.",
  },
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen"
    >
      {/* Hero Section - Full Screen, Editorial */}
      <section className="relative h-screen min-h-[600px] md:min-h-[700px] flex items-end pb-20 md:pb-24 px-6 md:px-12 overflow-hidden bg-forest">
        {/* Background Image with Parallax feel */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://grand-viewlandscape.com/wp-content/uploads/2023/02/Landscape-Maintenance-Vancouver-WA.jpg"
            alt="Luxury manicured lawn and home"
            className="w-full h-full object-cover object-center opacity-70"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent" />
        </motion.div>

        <div className="relative z-10 w-full max-w-[90rem] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] text-cream font-serif leading-[0.9] tracking-tight text-balance">
              <motion.span 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
                className="block"
              >
                Your Yard
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
                className="block italic text-cream/80 font-light"
              >
                Deserves a
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}
                className="block"
              >
                Fresh Start.
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="max-w-sm text-cream/80 lg:pb-4 relative"
          >
            <p className="mb-8 font-light leading-relaxed text-lg">
              Expert lawn care, landscape design, and maintenance to transform your outdoor space into something extraordinary.
            </p>
            <Link 
              to="/contact" 
              className="group flex items-center gap-4 text-cream uppercase tracking-[0.2em] text-xs font-bold"
            >
              <span className="w-12 h-[1px] bg-accent group-hover:w-24 transition-all duration-500 ease-out"></span>
              Get a Free Quote
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-6 md:left-12 flex items-center gap-4 text-cream/50 uppercase tracking-[0.2em] text-[10px] font-bold"
        >
          <div className="w-[1px] h-12 bg-cream/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute inset-0 bg-accent"
            />
          </div>
          Scroll to explore
        </motion.div>
      </section>

      {/* Philosophy / Intro Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-cream">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-xs uppercase tracking-[0.2em] text-forest/50 font-semibold mb-4 md:mb-6">Our Philosophy</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-forest leading-tight text-balance">
              We don't just cut grass. We sculpt landscapes that breathe life into your property.
            </h3>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 text-lg text-forest/70 font-light leading-relaxed space-y-6">
            <p>
              For over 20 years, we've treated every lawn as a canvas. What started as a family tradition has evolved into a premier landscaping service dedicated to precision, health, and aesthetic perfection.
            </p>
            <p>
              From the exact height of the cut to the precise edge of the bed, our attention to detail ensures your outdoor space isn't just maintained—it's elevated.
            </p>
            <div className="pt-8">
              <Link to="/about" className="inline-flex items-center gap-2 text-forest font-medium border-b border-forest pb-1 hover:text-accent hover:border-accent transition-colors">
                Read Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Services List */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-forest text-cream">
        <div className="max-w-[90rem] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6 md:gap-8">
            <h2 className="text-4xl md:text-7xl font-serif leading-none">Our <br/><span className="italic text-cream/70">Expertise</span></h2>
            <Link 
              to="/services" 
              className="group flex items-center gap-4 uppercase tracking-[0.2em] text-xs font-bold"
            >
              View All Services
              <span className="w-12 h-[1px] bg-accent group-hover:w-24 transition-all duration-500 ease-out"></span>
            </Link>
          </div>

          <div className="border-t border-cream/20">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 md:py-12 border-b border-cream/20 hover:bg-cream/5 transition-colors duration-500 cursor-pointer px-4 -mx-4 rounded-xl relative overflow-hidden"
              >
                <div className="flex items-start gap-6 md:gap-16 mb-4 md:mb-0 relative z-10 w-full md:w-auto">
                  <span className="text-lg md:text-xl font-serif text-accent">{service.id}</span>
                  <h3 className="text-2xl md:text-5xl font-serif group-hover:translate-x-4 transition-transform duration-500 ease-out flex items-center gap-4 md:gap-6">
                    {service.title}
                    <ArrowRight className="w-6 h-6 md:w-8 md:h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-accent" />
                  </h3>
                </div>
                <p className="max-w-sm text-sm md:text-base text-cream/60 font-light md:text-right group-hover:text-cream/90 transition-colors duration-500 relative z-10 pl-10 md:pl-0">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break / Parallax */}
      <section className="h-[50vh] md:h-[60vh] min-h-[400px] md:min-h-[500px] relative overflow-hidden">
        <div className="absolute inset-0 bg-forest">
          <img
            src="https://cdn.hibuwebsites.com/149ce9983db24aad972c592cec15c9cd/dms3rep/multi/RSshutterstock_386429833.jpg"
            alt="Detail of landscaping"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h2 className="text-3xl md:text-6xl font-serif text-cream mb-6 md:mb-8 text-balance">
              Artistry in every blade of grass.
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-accent text-cream px-10 py-4 rounded-full text-sm uppercase tracking-[0.15em] font-bold hover:bg-white hover:text-forest transition-all duration-300"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
