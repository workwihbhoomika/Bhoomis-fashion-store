
import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const children = heroElement.querySelectorAll(".animate-on-scroll");
    children.forEach((child) => observer.observe(child));
    
    return () => {
      children.forEach((child) => observer.unobserve(child));
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-fashion-light"
    >
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1972&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "brightness(0.9)"
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
      
      <div className="max-w-5xl mx-auto px-6 py-20 text-center relative z-20">
        <h4 className="text-white/80 font-sans text-sm md:text-base tracking-widest uppercase mb-6 opacity-0 translate-y-10 animate-on-scroll transition-all duration-700 delay-300">
          Summer 2025 Collection
        </h4>
        
        <h1 className="editorial-title text-white mb-8 opacity-0 translate-y-10 animate-on-scroll transition-all duration-700 delay-500">
          Crafting Stories Through Fashion
        </h1>
        
        <p className="text-white/80 max-w-xl mx-auto text-base md:text-lg font-light mb-10 opacity-0 translate-y-10 animate-on-scroll transition-all duration-700 delay-700">
          A visual journey of self-expression, where artistry meets wearable design. Each piece tells a story of evolution, experimentation, and boundless creativity.
        </p>
        
        <a 
          href="#collections"
          className="inline-block px-8 py-3 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 opacity-0 translate-y-10 animate-on-scroll transition-all duration-700 delay-900"
        >
          Explore Collections
        </a>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 opacity-0 translate-y-10 animate-on-scroll transition-all duration-700 delay-1000">
        <a 
          href="#collections"
          className="text-white animate-bounce flex flex-col items-center"
        >
          <span className="mb-2 text-sm font-light">Scroll</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
