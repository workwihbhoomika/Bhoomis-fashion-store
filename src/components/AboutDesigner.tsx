
import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const AboutDesigner = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      className="py-24 px-6 bg-fashion-light"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto section-reveal">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1612533398686-c7faa9cf8a1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt="Fashion Designer"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 shadow-lg rounded-lg hidden md:block">
                <p className="designer-quote">
                  "Fashion is the armor to survive the reality of everyday life."
                </p>
                <p className="text-right mt-2 text-sm">— Bill Cunningham</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-fashion-muted font-sans text-sm tracking-widest uppercase mb-3">
              The Story Behind
            </h4>
            <h2 className="editorial-title text-fashion-dark mb-6">
              The Designer's Journey
            </h2>
            
            <p className="text-fashion-muted mb-6">
              Style Saga was born from a passion for self-expression and a love for the transformative power of fashion. As a self-taught designer, my journey began with experimentation, curiosity, and an unyielding desire to create pieces that tell stories.
            </p>
            
            <p className="text-fashion-muted mb-6">
              Each collection represents a chapter in my ongoing creative education—embracing different styles, techniques, and inspirations as I evolve. What started as sketches in notebooks has blossomed into a visual narrative that spans various aesthetics and expressions.
            </p>
            
            <p className="text-fashion-muted mb-10">
              My designs are a reflection of this learning process—authentic, evolving, and deeply personal. I believe in fashion that empowers the wearer to embrace their individuality while connecting to something larger than themselves.
            </p>
            
            <a 
              href="#collections"
              className="inline-flex items-center text-fashion-dark hover:text-fashion-accent transition-colors animated-link"
            >
              Explore My Collections <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDesigner;
