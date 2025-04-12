
import { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const fashionStyles = [
  { id: "boho", name: "Boho-chic", image: "https://images.unsplash.com/photo-1611692314849-a5290caee02c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
  { id: "casual", name: "Casual", image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
  { id: "artsy", name: "Artsy", image: "https://images.unsplash.com/photo-1605086998852-18371503f773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" },
  { id: "punk", name: "Punk", image: "https://images.unsplash.com/photo-1606522754091-a3bce70d4e3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
  { id: "vintage", name: "Vintage", image: "https://images.unsplash.com/photo-1617922706483-86fa261a37db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
  { id: "classic", name: "Classic", image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" },
  { id: "streetwear", name: "Streetwear", image: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1235&q=80" },
  { id: "minimalist", name: "Minimalist", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" }
];

const CollectionTabs = () => {
  const [activeTab, setActiveTab] = useState(fashionStyles[0].id);
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
      id="collections" 
      className="py-24 px-6 bg-white"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto section-reveal">
        <div className="text-center mb-16">
          <h4 className="text-fashion-muted font-sans text-sm tracking-widest uppercase mb-3">
            Explore Our
          </h4>
          <h2 className="editorial-title text-fashion-dark mb-6">
            Style Collections
          </h2>
          <p className="max-w-2xl mx-auto text-fashion-muted">
            Discover our diverse range of fashion styles. Each collection represents a unique aesthetic journey, showcasing the versatility of self-expression through design.
          </p>
        </div>
        
        <Tabs defaultValue={fashionStyles[0].id} value={activeTab} onValueChange={setActiveTab}>
          <div className="overflow-x-auto pb-4 mb-8">
            <TabsList className="bg-transparent border-b border-gray-200 w-full justify-start">
              {fashionStyles.map((style) => (
                <TabsTrigger 
                  key={style.id}
                  value={style.id}
                  className={cn(
                    "data-[state=active]:border-b-2 data-[state=active]:border-fashion-accent data-[state=active]:text-fashion-dark data-[state=active]:shadow-none py-3 px-5",
                    "text-fashion-muted hover:text-fashion-dark transition-colors"
                  )}
                >
                  {style.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {fashionStyles.map((style) => (
            <TabsContent 
              key={style.id}
              value={style.id}
              className="mt-6 animate-fade-in"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <FashionCard 
                    key={item}
                    image={style.image}
                    title={`${style.name} Collection ${item}`}
                    description={`Explore our unique take on ${style.name.toLowerCase()} style.`}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

const FashionCard = ({ 
  image, 
  title, 
  description 
}: { 
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <Card className="fashion-card border-none overflow-hidden">
      <div className="relative h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="fashion-card-image"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-medium mb-2">{title}</h3>
        <p className="text-fashion-muted text-sm">{description}</p>
      </div>
    </Card>
  );
};

export default CollectionTabs;
