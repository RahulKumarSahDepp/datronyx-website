// components/TechStackSection.tsx
import { motion, useInView, Variants } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

// --- DATA ---
const techStack = [
  { name: "Microsoft Fabric", logo: "/images/tech/fabric-logo.png", description: "Unified data platform." },
  { name: "Microsoft Power Platform", logo: "/images/tech/power-platform-logo.png", description: "Low-code solutions." },
  { name: "Microsoft Purview", logo: "/images/tech/purview-logo.png", description: "Unified data governance." },
  { name: "Power BI", logo: "/images/tech/powerbi-logo.png", description: "Interactive visualization." },
  { name: "Azure Data Factory", logo: "/images/tech/data-factory-logo.png", description: "Cloud ETL service." },
  { name: "Azure Databricks", logo: "/images/tech/databricks-logo.png", description: "Spark-based analytics." },
  { name: "Microsoft Copilot & OpenAI", logo: "/images/tech/copilot-openai-logo.png", description: "LLMs for advanced AI." },
  { name: "Python", logo: "/images/tech/python-logo.png", description: "Core ML language." },
  { name: "Azure Cognitive Services", logo: "/images/tech/cognitive-services-logo.png", description: "AI services for media." },
  { name: "Scikit-Learn", logo: "/images/tech/sklearn.png", description: "Classic ML algorithms." },
  { name: "Tensorflow", logo: "/images/tech/tensorflow.png", description: "Deep learning framework." },
  { name: "Apache Spark", logo: "/images/tech/apache-spark.png", description: "Large-scale data processing." },
];

// --- ANIMATION VARIANTS ---

// Fixed: Added ': Variants' type to prevent TypeScript errors
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Fixed: Added ': Variants' type here as well
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  },
};

// --- STAR COMPONENT ---
const Star = ({ top, left, delay }: { top: string, left: string, delay: string }) => (
  <div 
    className="absolute w-[2px] h-[2px] bg-white rounded-full animate-pulse"
    style={{ top, left, animationDelay: delay, opacity: 0.6 }}
  />
);

export default function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Static stars data
  const stars = [
    { top: "10%", left: "15%", delay: "0s" },
    { top: "20%", left: "85%", delay: "1s" },
    { top: "35%", left: "45%", delay: "2s" },
    { top: "60%", left: "10%", delay: "0.5s" },
    { top: "75%", left: "80%", delay: "1.5s" },
    { top: "90%", left: "30%", delay: "2.5s" },
    { top: "15%", left: "60%", delay: "0.8s" },
    { top: "80%", left: "5%", delay: "1.2s" },
  ];

  return (
    <section 
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden bg-slate-950 isolate"
    >
      
      {/* --- BACKGROUND LAYERS --- */}
      
      {/* 1. Base Grid Layer */}
      <div className="absolute inset-0 -z-50 h-full w-full bg-slate-950">
        <div className="absolute h-full w-full bg-[linear-gradient(to_right,#4f46e515_1px,transparent_1px),linear-gradient(to_bottom,#4f46e515_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      {/* 2. Saturated Indigo Glow Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-40 w-[600px] h-[600px] bg-gradient-to-r from-indigo-600 to-violet-600 mix-blend-screen blur-[120px] rounded-full opacity-25 pointer-events-none" />

      {/* 3. Shining Stars */}
      <div className="absolute inset-0 -z-30 overflow-hidden">
         {stars.map((star, i) => (
           <Star key={i} top={star.top} left={star.left} delay={star.delay} />
         ))}
      </div>

      {/* 4. Vintage Noise Texture */}
      <div className="absolute inset-0 -z-20 opacity-[0.02] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* 5. Low Vignette */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_20%,#020617_130%)] pointer-events-none" />


      {/* --- MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-widest text-indigo-300 uppercase bg-indigo-950/50 rounded-full border border-indigo-500/30 shadow-[0_0_10px_rgba(79,70,229,0.2)]">
              Leading-Edge Tools
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
              Data Science <span className="font-extrabold text-blue-500">Technology Stack</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We leverage best-in-class technologies across the Microsoft ecosystem and open-source landscape to build scalable, enterprise-ready solutions.
            </p>
          </motion.div>
        </div>

        {/* Grid Section */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative h-48 md:h-56 perspective-1000"
            >
              {/* Card Container */}
              <div className="relative w-full h-full p-4 flex flex-col items-center justify-center 
                            bg-slate-900/60 backdrop-blur-md border border-white/5 rounded-2xl 
                            shadow-lg transition-all duration-500 overflow-hidden
                            hover:bg-slate-800/80 hover:border-indigo-500/50 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.4)]
                            hover:-translate-y-2"
              >
                
                {/* Internal Card Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Logo Container */}
                <div className="relative w-14 h-14 md:w-16 md:h-16 mb-4 p-3 bg-white/95 rounded-full shadow-inner flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  <Image 
                    src={tech.logo} 
                    alt={`${tech.name} Logo`} 
                    fill
                    className="object-contain p-1" 
                  />
                </div>

                {/* Text Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <h3 className="text-blue-500 group-hover:text-indigo-300 transition-colors duration-300">
                    {tech.name}
                  </h3>
                  
                  {/* Animated Description */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out w-full">
                    <div className="overflow-hidden">
                       <p className="text-xs text-slate-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}