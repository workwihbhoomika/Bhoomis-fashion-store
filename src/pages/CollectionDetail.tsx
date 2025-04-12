
import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingBag } from "lucide-react";

// Extended collection data with more information
const collectionData = {
  boho: {
    name: "Boho-chic",
    description: "Bohemian style is a fashion approach that draws inspiration from the free-spirited, nomadic lifestyle. It combines natural elements, vintage pieces, and artisanal crafts for a relaxed yet artistic aesthetic.",
    mainImage: "https://images.unsplash.com/photo-1611692314849-a5290caee02c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    detailImages: [
      "https://images.unsplash.com/photo-1531247358492-067045d738ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1636121178763-642813d319d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1553224700-19c183987a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    ],
    designer: "Matilda Rose",
    year: "2025",
    colors: ["Earthy tones", "Natural whites", "Warm browns"],
    materials: ["Cotton", "Linen", "Natural fibers"]
  },
  casual: {
    name: "Casual",
    description: "Casual style embraces comfort and simplicity with a relaxed approach to everyday dressing. This style favors practicality without sacrificing personal expression.",
    mainImage: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    detailImages: [
      "https://images.unsplash.com/photo-1542837831-98427685c8a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1578535073490-36b8738cef65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1574780146180-faa8181a1a38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    ],
    designer: "Jasper Klein",
    year: "2025",
    colors: ["Blues", "Grays", "Whites"],
    materials: ["Denim", "Cotton", "Jersey"]
  },
  artsy: {
    name: "Artsy",
    description: "Artsy style celebrates creative expression through unconventional silhouettes, bold patterns, and artistic details. It's a style for those who view fashion as a canvas for self-expression.",
    mainImage: "https://images.unsplash.com/photo-1605086998852-18371503f773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    detailImages: [
      "https://images.unsplash.com/photo-1561342468-0335fc9c5176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1547887538-44ed5a1a9146?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    ],
    designer: "Lena Mori",
    year: "2025",
    colors: ["Bold colors", "Artistic patterns", "Vibrant hues"],
    materials: ["Mixed media", "Sustainable fabrics", "Repurposed materials"]
  },
  punk: {
    name: "Punk",
    description: "Punk fashion challenges convention through rebellious elements, distressed fabrics, and edgy details. It's an anti-establishment style that makes a bold statement about individuality and defiance.",
    mainImage: "https://images.unsplash.com/photo-1606522754091-a3bce70d4e3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    detailImages: [
      "https://images.unsplash.com/photo-1597895237193-7f7e15fec187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1585251358652-2e22da233e3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1549232356-10f1d21985ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    ],
    designer: "Axel Riot",
    year: "2025",
    colors: ["Black", "Red", "Metal tones"],
    materials: ["Leather", "Denim", "Metal accents"]
  },
  vintage: {
    name: "Vintage",
    description: "Vintage style draws inspiration from past eras, bringing nostalgic design elements into modern wardrobes. It celebrates the craftsmanship and unique aesthetic of bygone fashion periods.",
    mainImage: "https://images.unsplash.com/photo-1617922706483-86fa261a37db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    detailImages: [
      "https://images.unsplash.com/photo-1582730147924-d92f4da00252?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1578996953841-b187dbe4bc8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    ],
    designer: "Eliza Vintage",
    year: "2025",
    colors: ["Muted tones", "Pastels", "Faded brights"],
    materials: ["Antique fabrics", "Lace", "Aged denims"]
  },
  classic: {
    name: "Classic",
    description: "Classic style embraces timeless design with clean lines and enduring appeal. It focuses on quality staples that transcend seasonal trends for an elegant, sophisticated wardrobe.",
    mainImage: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    detailImages: [
      "https://images.unsplash.com/photo-1580651315530-69c8e0026377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1589902860314-e910697dea18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1537346439163-eafb59bdc268?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    ],
    designer: "Claire Hampton",
    year: "2025",
    colors: ["Navy", "Camel", "Ivory"],
    materials: ["Wool", "Silk", "Cotton"]
  },
  streetwear: {
    name: "Streetwear",
    description: "Streetwear blends urban culture with sportswear elements for a casual, trend-forward style. It emerged from skate and hip-hop communities and has evolved into a global fashion movement.",
    mainImage: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1235&q=80",
    detailImages: [
      "https://images.unsplash.com/photo-1523398002386-81e549884370?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1600442715214-5763eb8b7640?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1622760807810-add1b597e5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    ],
    designer: "Urban Collective",
    year: "2025",
    colors: ["Bold contrasts", "Neons", "Monochrome"],
    materials: ["Technical fabrics", "Jersey", "Canvas"]
  },
  minimalist: {
    name: "Minimalist",
    description: "Minimalist fashion embraces simplicity through clean silhouettes, neutral palettes, and thoughtful design. It values quality over quantity, focusing on essential pieces with lasting appeal.",
    mainImage: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    detailImages: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    ],
    designer: "Mira Lin",
    year: "2025",
    colors: ["White", "Black", "Neutrals"],
    materials: ["Organic cotton", "Linen", "Wool"]
  },
  indian: {
    name: "Indian",
    description: "Indian fashion celebrates rich cultural heritage through intricate embroidery, vibrant colors, and traditional silhouettes. It seamlessly blends centuries-old craftsmanship with contemporary design.",
    mainImage: "https://images.unsplash.com/photo-1625758476104-f2ed6f0353a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    detailImages: [
      "https://images.unsplash.com/photo-1610030131800-bd538785849c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1658604004683-5eee87fcf1e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1655540543427-697c796ba22c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    ],
    designer: "Anya Sharma",
    year: "2025",
    colors: ["Gold", "Rich jewel tones", "Vibrant reds"],
    materials: ["Silk", "Cotton", "Handwoven textiles"]
  },
  western: {
    name: "Western",
    description: "Western fashion draws inspiration from cowboy culture with rugged materials, practical designs, and distinctive details. It balances functionality with iconic style elements for a timeless aesthetic.",
    mainImage: "https://images.unsplash.com/photo-1614093302611-8efc4de62aa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    detailImages: [
      "https://images.unsplash.com/photo-1598808542283-e94b06d44cb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1606726608558-7028b147c464?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    ],
    designer: "Wyatt Reed",
    year: "2025",
    colors: ["Earth tones", "Leather browns", "Faded denim"],
    materials: ["Leather", "Denim", "Suede"]
  },
  chinese: {
    name: "Chinese",
    description: "Chinese fashion honors a legacy of artistic expression through symbolic motifs, delicate embroidery, and traditional silhouettes. It brings ancient cultural elements into contemporary design.",
    mainImage: "https://images.unsplash.com/photo-1614098097306-cac6a9c45209?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    detailImages: [
      "https://images.unsplash.com/photo-1616649056085-5e4d0f3fefac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1591980896142-4a130c6ae3fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1620809512195-5e3b1b37449a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    ],
    designer: "Mei Zhang",
    year: "2025",
    colors: ["Red", "Gold", "Jade green"],
    materials: ["Silk", "Brocade", "Embroidered fabrics"]
  }
};

const CollectionDetail = () => {
  const { id } = useParams<{ id: string }>();
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
  
  // Default to boho if no id is found or id doesn't exist in our data
  const collection = id && collectionData[id as keyof typeof collectionData] 
    ? collectionData[id as keyof typeof collectionData] 
    : collectionData.boho;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 pb-20 px-6" ref={sectionRef}>
        <div className="max-w-7xl mx-auto section-reveal">
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-fashion-muted hover:text-fashion-accent transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to collections
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h1 className="editorial-title">{collection.name} Collection</h1>
              
              <p className="text-lg text-fashion-muted">
                {collection.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="font-serif text-lg font-medium mb-2">Designer</h3>
                  <p className="text-fashion-muted">{collection.designer}</p>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium mb-2">Year</h3>
                  <p className="text-fashion-muted">{collection.year}</p>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium mb-2">Colors</h3>
                  <ul className="text-fashion-muted">
                    {collection.colors.map((color, index) => (
                      <li key={index}>{color}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium mb-2">Materials</h3>
                  <ul className="text-fashion-muted">
                    {collection.materials.map((material, index) => (
                      <li key={index}>{material}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-10">
                <Button className="bg-fashion-accent hover:bg-fashion-accent/90">
                  <ShoppingBag className="mr-2" />
                  Shop this collection
                </Button>
              </div>
            </div>
            
            <div>
              <div className="aspect-[3/4] overflow-hidden rounded-md mb-6">
                <img 
                  src={collection.mainImage} 
                  alt={`${collection.name} collection main image`}
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="font-serif text-3xl font-medium mb-10 text-center">Collection Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {collection.detailImages.map((image, index) => (
                <Card key={index} className="fashion-card overflow-hidden group">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${collection.name} detail ${index + 1}`}
                      className="fashion-card-image" 
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="font-serif text-3xl font-medium mb-6 text-center">Designer's Note</h2>
            <div className="max-w-3xl mx-auto">
              <p className="designer-quote text-center">
                "The {collection.name} collection represents my vision of how style evolves while honoring its roots. 
                Each piece tells a story of craftsmanship and artistic expression, where traditional elements meet contemporary design."
              </p>
              <p className="text-right mt-4 text-fashion-muted">— {collection.designer}</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CollectionDetail;
