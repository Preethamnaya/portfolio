import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Menu, X, User, ChevronRight, GraduationCap, Sparkles, Terminal } from "lucide-react";
import { useState, useEffect } from "react";
import { personalInfo, skills, projects, stats } from "./data";
import avatar from "./assets/avatar.jpg";
import "./App.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass py-3 bg-black/40" : "py-6 bg-transparent"}`}>
      <div className="container flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter"
        >
          PREETHAM<span className="text-accent-color">.</span>
        </motion.div>

        <div className="hidden md:flex gap-10">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold uppercase tracking-widest hover:text-accent-color transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-color transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button className="md:hidden glass p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5 bg-black/90 p-6 flex flex-col gap-4 text-center overflow-hidden"
          >
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="font-bold uppercase tracking-widest py-2">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
    {/* Background Decorative Elements */}
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-color/10 blur-[120px] rounded-full animate-pulse"></div>
    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full animate-pulse delay-700"></div>

    <div className="container grid md:grid-cols-12 gap-16 items-center z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="md:col-span-7"
      >
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
          <Sparkles size={14} className="text-accent-color" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{personalInfo.college}</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter">
          Engineering <br />
          <span className="gradient-text">Future Systems.</span>
        </h1>
        
        <p className="text-xl text-text-secondary mb-10 max-w-xl leading-relaxed">
          I'm <span className="text-white font-bold">{personalInfo.name}</span>, a CSE student focused on building clean, high-performance software at industrial standards.
        </p>

        <div className="flex flex-wrap gap-6 items-center">
          <a href="#projects" className="btn-primary flex items-center gap-3 group">
            Explore Projects <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <div className="flex gap-6 items-center">
            <a href={personalInfo.github} className="hover:text-accent-color transition-all hover:scale-110"><Github size={24} /></a>
            <a href={personalInfo.linkedin} className="hover:text-accent-color transition-all hover:scale-110"><Linkedin size={24} /></a>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="md:col-span-5 relative"
      >
        <div className="relative z-10 aspect-square rounded-3xl overflow-hidden glass p-3 border-accent-color/20 group">
           <div className="w-full h-full rounded-2xl overflow-hidden relative">
             <img 
               src={avatar} 
               alt={personalInfo.name} 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
               }}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
             <div className="absolute bottom-6 left-6">
                <p className="text-xs font-mono text-accent-color">{"<preetham.dev />"}</p>
             </div>
           </div>
        </div>
        
        {/* Floating Stats or Badges */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-6 -right-6 glass p-4 rounded-2xl z-20 hidden md:block"
        >
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-accent-color/20 rounded-full flex items-center justify-center text-accent-color">
                <Terminal size={20} />
             </div>
             <div>
                <p className="text-[10px] uppercase font-bold text-text-secondary">Coding Experience</p>
                <p className="text-sm font-bold">3+ Years</p>
             </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const BentoDashboard = () => (
  <section id="about" className="container py-32">
    <div className="text-center mb-20">
      <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-accent-color mb-4">Dashboard</h2>
      <h3 className="text-4xl md:text-6xl font-black tracking-tight">Professional <span className="gradient-text">Overview.</span></h3>
    </div>

    <div className="grid md:grid-cols-12 gap-6 auto-rows-[200px]">
      {/* Bio Card */}
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        className="md:col-span-8 md:row-span-2 glass p-10 flex flex-col justify-center"
      >
        <User className="text-accent-color mb-6" size={32} />
        <h4 className="text-3xl font-bold mb-6 tracking-tight">System Architect & Developer</h4>
        <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
          {personalInfo.about}
        </p>
      </motion.div>

      {/* Stats Cards */}
      {stats.map((stat, i) => (
        <motion.div 
          key={stat.label}
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ delay: i * 0.1 }}
          className="md:col-span-2 glass p-6 flex flex-col items-center justify-center text-center group hover:border-accent-color/50 transition-all"
        >
          <h5 className="text-3xl font-black text-accent-color group-hover:scale-110 transition-transform">{stat.value}</h5>
          <p className="text-[10px] uppercase font-bold text-text-secondary mt-2 tracking-widest">{stat.label}</p>
        </motion.div>
      ))}

      {/* Contact Quick Link */}
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 20 }}
        className="md:col-span-4 glass p-8 flex items-center justify-between group cursor-pointer"
      >
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-accent-color transition-colors">
              <Mail size={24} />
           </div>
           <div>
              <p className="text-sm font-bold">Let's Connect</p>
              <p className="text-xs text-text-secondary">{personalInfo.email}</p>
           </div>
        </div>
        <ExternalLink size={18} className="text-text-secondary group-hover:text-white" />
      </motion.div>

      {/* Education Card */}
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        className="md:col-span-4 glass p-8 flex flex-col justify-between"
      >
        <GraduationCap className="text-accent-color" size={28} />
        <div>
           <h5 className="font-bold mb-1">Education</h5>
           <p className="text-sm text-text-secondary">{personalInfo.college}</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const SkillsMarquee = () => (
  <section id="skills" className="py-20 bg-white/[0.02] border-y border-white/5 overflow-hidden">
    <div className="container mb-12">
       <h3 className="text-3xl font-black tracking-tight mb-2">Technical <span className="gradient-text">Arsenal.</span></h3>
       <p className="text-text-secondary text-sm">Industrial tools & frameworks I use daily.</p>
    </div>
    
    <div className="flex overflow-hidden group select-none">
       <div className="flex gap-8 py-4 animate-marquee group-hover:pause">
          {[...skills, ...skills].map((skill, i) => (
            <div key={i} className="flex items-center gap-3 glass py-3 px-6 rounded-xl border-white/5 hover:border-accent-color/30 transition-all cursor-default min-w-max">
               <div className="w-2 h-2 rounded-full bg-accent-color shadow-[0_0_8px_var(--accent-glow)]"></div>
               <span className="font-bold text-sm">{skill.name}</span>
               <span className="text-[10px] text-text-secondary uppercase font-black">{skill.category}</span>
            </div>
          ))}
       </div>
    </div>
  </section>
);

const ProjectCard = ({ project, i }: { project: any, i: number }) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 40 }}
    transition={{ delay: i * 0.1 }}
    className="group relative"
  >
    <div className="glass overflow-hidden rounded-3xl border-white/5 group-hover:border-accent-color/30 transition-all duration-500">
      <div className="aspect-video overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
           <a href={project.link} className="p-4 bg-white text-black rounded-full hover:scale-110 transition-transform"><ExternalLink size={20} /></a>
           <a href="#" className="p-4 bg-black/50 text-white rounded-full hover:scale-110 transition-transform"><Github size={20} /></a>
        </div>
      </div>
      <div className="p-10">
        <div className="flex flex-wrap gap-2 mb-4">
           {project.tech.map((t: string) => (
             <span key={t} className="text-[9px] font-black uppercase tracking-widest bg-accent-color/10 text-accent-color px-3 py-1 rounded-full border border-accent-color/10">{t}</span>
           ))}
        </div>
        <h3 className="text-3xl font-bold mb-4 tracking-tight">{project.title}</h3>
        <p className="text-text-secondary leading-relaxed mb-6">{project.description}</p>
        <div className="flex items-center gap-2 text-accent-color font-bold text-sm group/link">
           Case Study <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  </motion.div>
);

const Footer = () => (
  <footer className="py-20 border-t border-white/5 bg-black/40">
    <div className="container">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-2">
           <h2 className="text-2xl font-black mb-6 tracking-tighter">PREETHAM<span className="text-accent-color">.</span></h2>
           <p className="text-text-secondary max-w-sm mb-8 leading-relaxed">
             Building high-impact digital experiences through clean code and modern architecture.
           </p>
           <div className="flex gap-4">
              <a href={personalInfo.github} className="glass p-3 hover:text-accent-color"><Github size={20} /></a>
              <a href={personalInfo.linkedin} className="glass p-3 hover:text-accent-color"><Linkedin size={20} /></a>
              <a href={`mailto:${personalInfo.email}`} className="glass p-3 hover:text-accent-color"><Mail size={20} /></a>
           </div>
        </div>
        <div>
           <h4 className="font-bold mb-6 uppercase tracking-[0.2em] text-xs">Sitemap</h4>
           <div className="flex flex-col gap-4 text-sm text-text-secondary">
              {["About", "Skills", "Projects", "Contact"].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors">{link}</a>
              ))}
           </div>
        </div>
        <div>
           <h4 className="font-bold mb-6 uppercase tracking-[0.2em] text-xs">Services</h4>
           <div className="flex flex-col gap-4 text-sm text-text-secondary">
              <p>Full Stack Dev</p>
              <p>UI/UX Implementation</p>
              <p>API Architecture</p>
              <p>System Design</p>
           </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-4 pt-10 border-t border-white/5">
        <p className="text-text-secondary text-[10px] font-bold uppercase tracking-[0.2em]">© 2026 PREETHAM DEV. ALL RIGHTS RESERVED.</p>
        <p className="text-text-secondary text-[10px] font-bold uppercase tracking-[0.2em]">DESIGNED BY AI</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="app selection:bg-accent-color selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <BentoDashboard />
        <SkillsMarquee />
        
        <section id="projects" className="container py-32">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-accent-color mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tight">Recent <span className="gradient-text">Work.</span></h3>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((p, i) => <ProjectCard key={i} project={p} i={i} />)}
          </div>
        </section>

        <section id="contact" className="container py-32">
           <div className="glass p-16 md:p-32 rounded-[3rem] relative overflow-hidden bg-accent-color/5 border-accent-color/20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent-color/10 blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
              <div className="max-w-2xl">
                 <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
                    Ready to start a <br /><span className="gradient-text">Revolution?</span>
                 </h2>
                 <p className="text-xl text-text-secondary mb-12 leading-relaxed">
                    I'm currently accepting new projects and internship opportunities. Let's build something that matters.
                 </p>
                 <a href={`mailto:${personalInfo.email}`} className="btn-primary px-10 py-5 text-lg inline-flex items-center gap-4 group">
                    Start a Conversation <Mail className="transition-transform group-hover:scale-110" />
                 </a>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
