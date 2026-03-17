import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Lawn & Seasonal Care",
    description: "Year-round mowing, edging, and seasonal cleanup to keep your lawn pristine.",
    image: "https://greenthumblawnservices.com/wp-content/uploads/2024/11/istockphoto-154099460-612x612-1.jpg"
  },
  {
    title: "Landscape Design & Installation",
    description: "Custom outdoor designs for a unique, polished look.",
    image: "https://charlestownlandscaping.com/wp-content/uploads/2023/11/Landscape-Design-Project.jpg"
  },
  {
    title: "Mulching & Bed Renovation",
    description: "Fresh mulch and redesigns for healthier plants.",
    image: "https://t4.ftcdn.net/jpg/11/19/45/21/360_F_1119452102_u4C5DuHfoIKleb1c3BoO6dVSif6OvSjT.jpg"
  },
  {
    title: "Hedge & Shrub Trimming",
    description: "Precision trimming to maintain shape and promote growth.",
    image: "https://greenpal-production.s3.amazonaws.com/7ica9gvpy1l15k7sf9srwsap9mle"
  },
  {
    title: "Tree Pruning",
    description: "Safe pruning for aesthetics and tree health (Small–Medium).",
    image: "https://treeworks.info/wp-content/uploads/2025/05/Tree_Pruning_and_Tree_Trimming.jpg"
  },
  {
    title: "Sod Installation & Lawn Repair",
    description: "Lush new sod or targeted repair for a thick, green lawn.",
    image: "https://www.greenbaynorthern.com/wp-content/uploads/2025/03/Sod-Installation-Lawn-Repair.webp"
  },
  {
    title: "Irrigation Repair & Installation",
    description: "Efficient watering systems installed or repaired.",
    image: "https://metrolawncare.com/wp-content/uploads/2020/01/commercialirrigation.jpeg"
  },
  {
    title: "Weed Control & Fertilization",
    description: "Targeted weed elimination and turf nourishment.",
    image: "https://premierlawnandtree.com/wp-content/uploads/2018/03/Premier-Artboard-34@2x-50-e1521587206892.jpg"
  },
];

const serviceAreas = [
  "Mt. Airy", "Chestnut Hill", "Cheltenham", "West Oak Lane", "Germantown", "Roxborough", "Manayunk", "Plymouth Meeting", "Conshohocken"
];

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We proudly serve Mt. Airy, Chestnut Hill, Cheltenham, West Oak Lane, Germantown, Roxborough, Manayunk, Plymouth Meeting, Conshohocken, and surrounding areas."
  },
  {
    question: "How do you determine pricing for landscaping projects?",
    answer: "Pricing is based on the scope of the project, including square footage, materials required, and labor. We provide free, no-obligation on-site quotes to give you an accurate estimate."
  },
  {
    question: "How quickly can you start a project?",
    answer: "For routine maintenance, we can typically start within a few days. For larger design and installation projects, we usually begin within 1-2 weeks after quote approval, depending on the season and weather."
  },
  {
    question: "Do you guarantee your work?",
    answer: "Yes, absolutely. We offer a 100% satisfaction guarantee on all our landscaping and maintenance services. If you're not completely happy with the result, we'll make it right."
  },
  {
    question: "Do you offer both residential and commercial services?",
    answer: "Yes, we provide comprehensive landscaping solutions for both residential homes and commercial properties."
  }
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-forest/10">
      <button
        className="w-full py-6 md:py-8 flex justify-between items-center text-left focus:outline-none group"
        onClick={onClick}
      >
        <h4 className="text-xl md:text-3xl font-serif text-forest pr-8 group-hover:text-accent transition-colors duration-300">{question}</h4>
        <span className="text-accent flex-shrink-0 transition-transform duration-300">
          {isOpen ? <Minus className="w-6 h-6 md:w-8 md:h-8" /> : <Plus className="w-6 h-6 md:w-8 md:h-8" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 md:pb-8 text-forest/70 font-light text-base md:text-lg leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Services() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen bg-cream pt-32"
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 w-full">
        
        {/* Header */}
        <section className="py-12 md:py-24 border-b border-forest/10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-serif text-forest leading-[0.9] tracking-tight mb-6 md:mb-8">
              Comprehensive <br/>
              <span className="italic text-forest/70">Solutions.</span>
            </h1>
            <p className="text-lg md:text-xl text-forest/70 font-light max-w-2xl">
              From routine maintenance to complete redesigns, we have the expertise to make your property shine.
            </p>
          </div>
        </section>

        {/* Services Grid - High End Bento/List Hybrid */}
        <section className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 md:gap-y-24">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.2, duration: 0.8 }}
                className="group relative flex flex-col"
              >
                <div className="aspect-[4/3] w-full overflow-hidden mb-8 rounded-sm relative">
                  <div className="absolute inset-0 bg-forest/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[0.22,1,0.36,1]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="text-sm font-serif text-accent mb-4 border-b border-forest/10 pb-4 flex justify-between items-center">
                  <span>0{i + 1}</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-serif text-forest mb-3 md:mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg text-forest/70 font-light leading-relaxed mb-6 md:mb-8 max-w-md flex-grow group-hover:text-forest transition-colors duration-300">
                  {service.description}
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold text-forest group-hover:text-accent transition-colors mt-auto w-fit"
                >
                  <span className="relative overflow-hidden flex items-center gap-3">
                    Request Quote 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

      </div>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            <div className="lg:w-1/3">
              <h2 className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-6">FAQ</h2>
              <h3 className="text-4xl md:text-6xl font-serif text-forest leading-[0.9] tracking-tight mb-6">
                Common <br/>
                <span className="italic text-forest/70">Questions.</span>
              </h3>
              <p className="text-forest/70 font-light text-lg mb-8">
                Everything you need to know about our services, pricing, and process.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold text-forest hover:text-accent transition-colors"
              >
                <span className="relative overflow-hidden flex items-center gap-3 border-b border-current pb-1">
                  Ask Another Question
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
            <div className="lg:w-2/3">
              <div className="border-t border-forest/10">
                {faqs.map((faq, i) => (
                  <FAQItem
                    key={i}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFaqIndex === i}
                    onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area - Dark Section */}
      <section className="bg-forest text-cream py-20 md:py-32">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-6 md:mb-8">Where We Work</h2>
          <h3 className="text-3xl md:text-6xl font-serif mb-12 md:mb-16 max-w-3xl mx-auto leading-tight">
            Proudly serving the finest neighborhoods & surrounding areas.
          </h3>
          
          <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-2 md:gap-y-4 max-w-5xl mx-auto">
            {serviceAreas.map((area, i) => (
              <span
                key={i}
                className="text-base md:text-2xl font-serif italic text-cream/70 hover:text-accent transition-colors cursor-default"
              >
                {area}
                {i !== serviceAreas.length - 1 && <span className="text-cream/20 ml-4 md:ml-8 not-italic">/</span>}
              </span>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
