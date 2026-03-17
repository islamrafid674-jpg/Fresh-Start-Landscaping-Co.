import { motion } from "motion/react";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen bg-cream pt-32"
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 w-full">
        
        {/* Editorial Header */}
        <section className="py-12 md:py-24 border-b border-forest/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-serif text-forest leading-[0.85] tracking-tight">
                Rooted in <br/>
                <span className="italic text-forest/70">Family.</span>
              </h1>
            </div>
            <div className="lg:col-span-4 pb-4">
              <p className="text-lg md:text-xl font-serif text-forest/80 italic">
                "I get paid to make art out of grass, and honestly, it doesn't even feel like work."
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Large Image */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-5 relative group"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src="https://www.greenlawnfertilizing.com/hubfs/Imported_Blog_Media/garden-landscape-540x540_jpg-Dec-06-2023-05-30-36-4772-PM.webp"
                  alt="Landscaper working"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[0.22,1,0.36,1]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              {/* Floating Stat */}
              <motion.div 
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute -bottom-6 md:-bottom-12 -right-4 md:-right-12 bg-forest text-cream p-6 md:p-12 rounded-sm shadow-2xl max-w-[200px] md:max-w-[250px] z-10"
              >
                <div className="text-4xl md:text-6xl font-serif mb-2 text-accent">20+</div>
                <div className="text-xs md:text-sm uppercase tracking-[0.2em] font-semibold opacity-80">Years of Experience</div>
              </motion.div>
            </motion.div>

            {/* Typography / Copy */}
            <div className="lg:col-span-6 lg:col-start-7 pt-16 lg:pt-24 space-y-8 md:space-y-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-2xl md:text-5xl font-serif text-forest leading-tight"
              >
                My journey started as a kid helping my grandfather tend to his yard.
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8 text-lg text-forest/70 font-light leading-relaxed"
              >
                <p>
                  What began as weekend chores quickly became a craft I fell in love with. Over the past two decades, I've honed my skills and developed an eye for detail that turns every lawn into a work of art.
                </p>
                <p>
                  This isn't just a job for me — it's a peace of mind. There's nothing quite like stepping back and seeing a freshly sculpted landscape knowing you created that. That love and dedication is the foundation of Fresh Start Landscaping Co.
                </p>
              </motion.div>

              {/* Credentials List */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-12 border-t border-forest/10"
              >
                <h3 className="text-xs uppercase tracking-[0.2em] text-forest/50 font-semibold mb-8">Our Credentials</h3>
                <ul className="space-y-6">
                  {[
                    "20+ years of hands-on experience",
                    "Licensed & insured professionals",
                    "Free on-site consultations",
                    "Satisfaction guaranteed on every job"
                  ].map((item, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                      className="flex items-center gap-4 text-forest font-medium group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform duration-300"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

          </div>
        </section>

      </div>
    </motion.div>
  );
}
