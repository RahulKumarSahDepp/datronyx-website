"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, X, ArrowRight, ChevronDown, 
  LineChart, Database, BrainCircuit, 
  Building2, Rocket, 
  Cloud, Box, Cpu, Layers, Code2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ==========================================
// 1. TECH STACK DATA & COMPONENT
// ==========================================

const techStack = [
  { name: "Snowflake", color: "text-sky-400", border: "border-sky-500/30", bg: "bg-sky-500/10", icon: Database },
  { name: "Databricks", color: "text-orange-400", border: "border-orange-500/30", bg: "bg-orange-500/10", icon: Layers },
  { name: "AWS", color: "text-yellow-500", border: "border-yellow-500/30", bg: "bg-yellow-500/10", icon: Cloud },
  { name: "Azure", color: "text-blue-500", border: "border-blue-500/30", bg: "bg-blue-500/10", icon: Cloud },
  { name: "GCP", color: "text-red-400", border: "border-red-500/30", bg: "bg-red-500/10", icon: Cloud },
  { name: "dbt", color: "text-orange-600", border: "border-orange-600/30", bg: "bg-orange-600/10", icon: Box },
  { name: "Airflow", color: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/10", icon: Box },
  { name: "Kubernetes", color: "text-blue-400", border: "border-blue-400/30", bg: "bg-blue-400/10", icon: Box },
  { name: "MLflow", color: "text-indigo-400", border: "border-indigo-500/30", bg: "bg-indigo-500/10", icon: Cpu },
  { name: "Terraform", color: "text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/10", icon: Code2 },
  { name: "Python", color: "text-yellow-300", border: "border-yellow-300/30", bg: "bg-yellow-300/10", icon: Code2 },
  { name: "Spark", color: "text-orange-300", border: "border-orange-300/30", bg: "bg-orange-300/10", icon: Database },
];

const TechChip = ({ tech }: { tech: any }) => (
  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${tech.border} ${tech.bg} backdrop-blur-sm transition-all duration-300 hover:scale-105`}>
    <tech.icon className={`w-3.5 h-3.5 ${tech.color}`} />
    <span className={`text-xs font-bold ${tech.color} tracking-wide whitespace-nowrap`}>
      {tech.name}
    </span>
  </div>
);

const TechStackSlide = () => {
  return (
    <div className="w-full relative py-3 overflow-hidden border-t border-white/5 bg-transparent">
      
      {/* CSS Mask for Side Fades */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
            background: 'linear-gradient(to right, #020617 0%, transparent 5%, transparent 95%, #020617 100%)',
        }}
      />
      
      {/* Marquee Logic */}
      <div className="flex w-max">
        <motion.div 
          className="flex gap-4 px-4"
          animate={{ x: "-50%" }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {/* Duplicate list 3 times for seamless loop */}
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <TechChip key={i} tech={tech} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// ==========================================
// 2. NAVBAR DATA & HELPERS
// ==========================================

const navItems = [
  { name: "About Us", href: "/aboutus" },
  { name: "Services", href: "/services", hasMegaMenu: true },
  { name: "Industries", href: "/industries" },
  { name: "Solutions", href: "/solutions", hasMegaMenu: true },
  { name: "Knowledge", href: "/knowledge" },
];

const servicesMenu = [
  {
    category: "Data Analytics",
    icon: LineChart,
    color: "text-blue-400",
    items: [
      { name: "Decision Intelligence", href: "/services/data-analytics", desc: "Turn raw signals into clarity." },
      { name: "BI Dashboards", href: "/services/data-analytics", desc: "Visual command centers." }
    ]
  },
  {
    category: "Data Engineering",
    icon: Database,
    color: "text-indigo-400",
    items: [
      { name: "Pipeline Architecture", href: "/services/data-engineering", desc: "Robust ETL/ELT flows." },
      { name: "Cloud Infrastructure", href: "/services/data-engineering", desc: "Scalable lakehouse setups." }
    ]
  },
  {
    category: "AI & Data Science",
    icon: BrainCircuit,
    color: "text-fuchsia-400",
    items: [
      { name: "Generative AI Agents", href: "/services/ai-data-science#generative", desc: "Automate complex workflows." },
      { name: "Predictive Modeling", href: "/services/ai-data-science#predictive", desc: "Forecast trends & risks." }
    ]
  }
];

const solutionsMenu = [
  {
    category: "By Industry",
    icon: Building2,
    color: "text-emerald-400",
    items: [
      { name: "FinTech & Banking", href: "/solutions/finance", desc: "Fraud detection & risk modeling." },
      { name: "Healthcare & Life Sci", href: "/solutions/healthcare", desc: "Patient outcomes & operational flow." },
      { name: "Retail & E-Commerce", href: "/solutions/retail", desc: "Personalization & inventory engines." },
      { name: "Manufacturing", href: "/solutions/manufacturing", desc: "Predictive maintenance & IoT." }
    ]
  },
  {
    category: "By Function",
    icon: Rocket,
    color: "text-amber-400",
    items: [
      { name: "Sales & Growth", href: "/solutions/sales-growth", desc: "Predictive lead scoring & churn." },
      { name: "Risk & Compliance", href: "/solutions/risk", desc: "Automated governance & audit trails." },
      { name: "HR & Talent", href: "/solutions/hr-analytics", desc: "Retention & performance analytics." },
      { name: "Supply Chain", href: "/solutions/supply-chain", desc: "Demand forecasting & logistics." }
    ]
  }
];

const getMenuData = (name: string) => {
  if (name === "Services") return { 
    data: servicesMenu, 
    title: "Our Expertise", 
    desc: "Comprehensive data solutions engineered for the modern enterprise.",
    link: "/services",
    linkText: "View All Services"
  };
  if (name === "Solutions") return { 
    data: solutionsMenu, 
    title: "Applied Intelligence", 
    desc: "Targeted solutions solving critical challenges across industries and functions.",
    link: "/solutions",
    linkText: "View All Solutions"
  };
  return null;
};

// ==========================================
// 3. MAIN NAVBAR COMPONENT
// ==========================================

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
    setMobileExpandedItem(null);
  }, [pathname]);

  return (
    <nav
      onMouseLeave={() => setActiveMegaMenu(null)}
      className={`fixed w-full top-0 z-50 transition-all duration-500 border-b ${
        scrolled || activeMegaMenu
          ? "bg-[#020617]/90 backdrop-blur-xl border-white/10" // Dark background when scrolled
          : "bg-transparent backdrop-blur-sm border-transparent" // Transparent at top
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative py-3 md:py-4">
        
        {/* --- LOGO --- */}
        <Link href="/" className="relative z-50 flex items-center gap-2 group"> 
          <div className="relative w-[120px] h-[50px] flex items-center justify-start">
             <Image
                src="/images/Datronyxlogo.png"
                alt="Datronyx Icon"
                width={120}
                height={50}
                className="object-contain h-full w-auto transition-transform duration-300 group-hover:scale-105 brightness-110"
                priority
              />
              <span className="text-2xl font-extrabold tracking-tighter text-white transition-colors duration-300 group-hover:text-blue-600 leading-none">
                DATRONYX
              </span>
          </div>
        </Link>

        {/* --- DESKTOP NAV --- */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.hasMegaMenu && pathname.includes(item.href));
            
            if (item.hasMegaMenu) {
              return (
                <div 
                  key={item.name}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setActiveMegaMenu(item.name)}
                >
                  <Link
                    href={item.href}
                    className={`relative text-sm font-medium tracking-wide transition-colors duration-300 flex items-center gap-1 ${
                      isActive || activeMegaMenu === item.name ? "text-blue-500" : "text-slate-300 hover:text-blue-500"
                    }`}
                  >
                    {item.name}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeMegaMenu === item.name ? "rotate-180" : ""}`} />
                  </Link>
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                  isActive ? "text-blue-500 font-semibold" : "text-slate-300 hover:text-blue-500"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* --- CTA & MOBILE TOGGLE --- */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-2 rounded-lg font-bold text-sm 
            border border-white/10 shadow-[0_0_15px_rgba(79,70,229,0.3)]
            transition-all duration-300 
            hover:brightness-110 hover:scale-105 active:scale-95 group"
          >
            Let's Talk
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-blue-500 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- TECH STACK SLIDE (STICKY) --- */}
      <div className="hidden lg:block">
        <TechStackSlide />
      </div>

      {/* --- DESKTOP MEGA MENU OVERLAY --- */}
      <AnimatePresence>
        {activeMegaMenu && getMenuData(activeMegaMenu) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
            onMouseLeave={() => setActiveMegaMenu(null)}
            className="absolute top-full left-0 w-full bg-[#020617]/95 border-b border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden hidden lg:block"
          >
            <div className="max-w-7xl mx-auto px-8 py-8">
              {(() => {
                const menuInfo = getMenuData(activeMegaMenu);
                if (!menuInfo) return null;

                return (
                  <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-3 pr-6 border-r border-white/5">
                      <h3 className="text-lg font-bold text-white mb-2">{menuInfo.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {menuInfo.desc}
                      </p>
                      <Link 
                        href={menuInfo.link}
                        className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
                      >
                        {menuInfo.linkText}
                        <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    <div className={`col-span-9 grid gap-8 ${menuInfo.data.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                      {menuInfo.data.map((section, idx) => (
                        <div key={idx} className="space-y-4">
                          <div className="flex items-center gap-2 mb-4">
                            <section.icon className={`w-5 h-5 ${section.color}`} />
                            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">{section.category}</h4>
                          </div>
                          <div className="space-y-2">
                            {section.items.map((item) => (
                              <Link 
                                key={item.name} 
                                href={item.href}
                                className="group block p-3 rounded-lg hover:bg-white/5 transition-all duration-200"
                              >
                                <div className="font-semibold text-slate-300 group-hover:text-blue-400 transition-colors">
                                  {item.name}
                                </div>
                                <div className="text-xs text-slate-500 group-hover:text-slate-400">
                                  {item.desc}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-[#020617] border-t border-white/10 shadow-none h-screen"
          >
            <div className="px-4 pt-4 pb-20 space-y-1 flex flex-col h-full overflow-y-auto">
              {navItems.map((item) => {
                 const isActive = pathname === item.href;
                 
                 if (item.hasMegaMenu) {
                   const menuInfo = getMenuData(item.name);
                   const isExpanded = mobileExpandedItem === item.name;

                   return (
                     <div key={item.name} className="border-b border-white/5">
                       <button
                         onClick={() => setMobileExpandedItem(isExpanded ? null : item.name)}
                         className={`flex items-center justify-between w-full p-4 font-medium transition-all ${
                           isActive || isExpanded ? "text-blue-500" : "text-slate-300"
                         }`}
                       >
                         {item.name}
                         <ChevronDown size={16} className={`transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                       </button>
                       <AnimatePresence>
                         {isExpanded && menuInfo && (
                           <motion.div
                             initial={{ height: 0, opacity: 0 }}
                             animate={{ height: "auto", opacity: 1 }}
                             exit={{ height: 0, opacity: 0 }}
                             className="overflow-hidden bg-white/5"
                           >
                             <div className="pl-6 pr-4 py-4 space-y-4">
                               {menuInfo.data.map((section, idx) => (
                                 <div key={idx}>
                                   <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${section.color}`}>
                                     {section.category}
                                   </div>
                                   <div className="space-y-2 border-l border-white/10 pl-3">
                                     {section.items.map((subItem) => (
                                       <Link
                                         key={subItem.name}
                                         href={subItem.href}
                                         onClick={() => setMobileMenuOpen(false)}
                                         className="block text-sm text-slate-400 hover:text-white py-1"
                                       >
                                         {subItem.name}
                                       </Link>
                                     ))}
                                   </div>
                                 </div>
                               ))}
                               <Link
                                  href={menuInfo.link}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block text-sm font-bold text-white pt-2 underline underline-offset-4"
                               >
                                  {menuInfo.linkText}
                               </Link>
                             </div>
                           </motion.div>
                         )}
                       </AnimatePresence>
                     </div>
                   );
                 }

                 return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between p-4 font-medium transition-all border-b border-white/5 ${
                        isActive 
                          ? "text-blue-500" 
                          : "text-slate-300 hover:text-blue-500"
                      }`}
                    >
                      {item.name}
                      <ArrowRight size={16} className={isActive ? "text-blue-500" : "text-slate-500 group-hover:text-blue-500"} />
                    </Link>
                 );
              })}

              <div className="pt-6 mt-4 pb-12">
                 <div className="mb-6 opacity-70 scale-90 origin-left">
                     <p className="text-xs text-slate-500 mb-2 uppercase tracking-widest pl-1">Trusted Tech</p>
                     <TechStackSlide />
                 </div>
                 
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex justify-center items-center w-full bg-indigo-600 text-white py-3.5 rounded-lg font-bold shadow-lg hover:bg-indigo-500 transition-all active:scale-95"
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}