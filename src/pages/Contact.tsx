import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { ArrowRight } from "lucide-react";

const services = [
  "Lawn & Seasonal Care",
  "Landscape Design & Installation",
  "Mulching & Bed Renovation",
  "Hedge & Shrub Trimming",
  "Tree Pruning (Small–Medium)",
  "Sod Installation & Lawn Repair",
  "Irrigation Repair & Installation",
  "Weed Control & Fertilization",
];

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Thank you for your request! We will get back to you shortly.");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen bg-cream"
    >
      {/* Split Layout */}
      <div className="flex-grow flex flex-col lg:flex-row">
        
        {/* Left Side - Dark & Editorial */}
        <div className="lg:w-5/12 bg-forest text-cream pt-24 md:pt-32 pb-12 md:pb-16 px-6 md:px-12 flex flex-col justify-between min-h-[40vh] md:min-h-[50vh] lg:min-h-screen lg:fixed lg:top-0 lg:bottom-0 lg:left-0">
          <div>
            <h1 className="text-4xl md:text-7xl font-serif leading-[0.9] tracking-tight mb-6 md:mb-8">
              Let's <br/>
              <span className="italic text-cream/70">Connect.</span>
            </h1>
            <p className="text-base md:text-lg text-cream/60 font-light max-w-sm mb-12 md:mb-16">
              Reach out for a free on-site consultation. We're ready to bring your vision to life.
            </p>

            <div className="space-y-8 md:space-y-12">
              <div>
                <h3 className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-2 md:mb-4">Call Us</h3>
                <a href="tel:2156511329" className="text-xl md:text-2xl font-serif hover:text-accent transition-colors">(215) 651-1329</a>
              </div>
              <div>
                <h3 className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-2 md:mb-4">Email Us</h3>
                <a href="mailto:services@freshstartlandscapingco.com" className="text-lg md:text-xl font-serif hover:text-accent transition-colors break-all">services@freshstartlandscapingco.com</a>
              </div>
              <div>
                <h3 className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-2 md:mb-4">Service Area</h3>
                <p className="text-sm md:text-base text-cream/70 font-light max-w-xs leading-relaxed">
                  Mt. Airy, Chestnut Hill, Cheltenham, West Oak Lane, Germantown, Roxborough, Manayunk, Plymouth Meeting, Conshohocken & surrounding areas
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-7/12 lg:ml-auto pt-12 lg:pt-40 pb-20 md:pb-24 px-6 md:px-16 xl:px-24 bg-cream">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-serif text-forest mb-12">Request a Free Quote</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10"
              >
                <div className="relative">
                  <input
                    type="text"
                    {...register("firstName", { required: true })}
                    className="w-full bg-transparent border-b border-forest/20 py-3 text-forest focus:outline-none focus:border-accent transition-colors peer placeholder-transparent"
                    placeholder="First Name"
                    id="firstName"
                  />
                  <label htmlFor="firstName" className="absolute left-0 -top-3.5 text-xs text-forest/50 uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-forest/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-accent">First Name *</label>
                  {errors.firstName && <span className="text-red-500 text-xs absolute -bottom-5 left-0">Required</span>}
                </div>
                
                <div className="relative">
                  <input
                    type="text"
                    {...register("lastName")}
                    className="w-full bg-transparent border-b border-forest/20 py-3 text-forest focus:outline-none focus:border-accent transition-colors peer placeholder-transparent"
                    placeholder="Last Name"
                    id="lastName"
                  />
                  <label htmlFor="lastName" className="absolute left-0 -top-3.5 text-xs text-forest/50 uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-forest/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-accent">Last Name</label>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10"
              >
                <div className="relative">
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className="w-full bg-transparent border-b border-forest/20 py-3 text-forest focus:outline-none focus:border-accent transition-colors peer placeholder-transparent"
                    placeholder="Email"
                    id="email"
                  />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-forest/50 uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-forest/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-accent">Email Address *</label>
                  {errors.email && <span className="text-red-500 text-xs absolute -bottom-5 left-0">Required</span>}
                </div>
                
                <div className="relative">
                  <input
                    type="tel"
                    {...register("phone")}
                    className="w-full bg-transparent border-b border-forest/20 py-3 text-forest focus:outline-none focus:border-accent transition-colors peer placeholder-transparent"
                    placeholder="Phone"
                    id="phone"
                  />
                  <label htmlFor="phone" className="absolute left-0 -top-3.5 text-xs text-forest/50 uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-forest/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-accent">Phone Number</label>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10"
              >
                <div className="relative">
                  <select
                    {...register("service")}
                    className="w-full bg-transparent border-b border-forest/20 py-3 text-forest focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-forest/50">Select a Service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-cream text-forest">{service}</option>
                    ))}
                  </select>
                </div>
                
                <div className="relative">
                  <input
                    type="text"
                    {...register("location")}
                    className="w-full bg-transparent border-b border-forest/20 py-3 text-forest focus:outline-none focus:border-accent transition-colors peer placeholder-transparent"
                    placeholder="Zip Code"
                    id="location"
                  />
                  <label htmlFor="location" className="absolute left-0 -top-3.5 text-xs text-forest/50 uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-forest/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-accent">Zip Code / Location</label>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative pt-4"
              >
                <textarea
                  {...register("projectDetails", { required: true })}
                  rows={4}
                  className="w-full bg-transparent border-b border-forest/20 py-3 text-forest focus:outline-none focus:border-accent transition-colors peer placeholder-transparent resize-none"
                  placeholder="Project Details"
                  id="projectDetails"
                ></textarea>
                <label htmlFor="projectDetails" className="absolute left-0 -top-0 text-xs text-forest/50 uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-forest/50 peer-placeholder-shown:top-6 peer-focus:-top-0 peer-focus:text-xs peer-focus:text-accent">Tell us about your project *</label>
                {errors.projectDetails && <span className="text-red-500 text-xs absolute -bottom-5 left-0">Required</span>}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="pt-4"
              >
                <label className="block text-xs uppercase tracking-wider text-forest/50 mb-4">Upload Photos (Optional)</label>
                <div className="border border-dashed border-forest/20 rounded-sm p-8 text-center hover:bg-forest/5 hover:border-forest/40 transition-colors cursor-pointer">
                  <input type="file" multiple accept="image/*" className="hidden" id="file-upload" />
                  <label htmlFor="file-upload" className="cursor-pointer text-sm font-medium text-forest">
                    Click to upload <span className="text-forest/50 font-light">or drag and drop</span>
                    <p className="text-xs text-forest/40 mt-2">JPG, PNG up to 10MB (max 5)</p>
                  </label>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="pt-8"
              >
                <button
                  type="submit"
                  className="group inline-flex items-center gap-4 bg-forest text-cream px-10 py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-accent transition-colors w-full sm:w-auto justify-center"
                >
                  Send Request <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </form>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
