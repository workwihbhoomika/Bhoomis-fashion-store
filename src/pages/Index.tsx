
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CollectionTabs from "@/components/CollectionTabs";
import VideoShowcase from "@/components/VideoShowcase";
import AboutDesigner from "@/components/AboutDesigner";
import Footer from "@/components/Footer";

const Index = () => {
  // Add scroll animation revealing
  useEffect(() => {
    const handleScroll = () => {
      const revealElements = document.querySelectorAll(".section-reveal");
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("revealed");
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <CollectionTabs />
      <VideoShowcase />
      <AboutDesigner />
      <Footer />
    </div>
  );
};

export default Index;
