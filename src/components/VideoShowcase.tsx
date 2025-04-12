
import { useRef, useEffect, useState } from "react";
import { Instagram, Youtube, ExternalLink } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Spring Collection 2025",
    platform: "youtube",
    embedId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
  },
  {
    id: 2,
    title: "Behind The Scenes",
    platform: "instagram",
    embedId: "CWgWZQA8GGA",
    thumbnail: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    title: "Boho Style Lookbook",
    platform: "youtube",
    embedId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1611692314849-a5290caee02c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 4,
    title: "Quick Style Tips",
    platform: "instagram",
    embedId: "CWgWZQA8GGA",
    thumbnail: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
  }
];

const VideoShowcase = () => {
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
      id="reels" 
      className="py-24 px-6 bg-fashion-dark"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto section-reveal">
        <div className="text-center mb-16">
          <h4 className="text-fashion-muted font-sans text-sm tracking-widest uppercase mb-3">
            Watch Our Latest
          </h4>
          <h2 className="editorial-title text-white mb-6">
            Fashion Reels & Videos
          </h2>
          <p className="max-w-2xl mx-auto text-fashion-muted">
            Get an inside look at our creative process, styling tips, and latest designs through our curated collection of videos and social media content.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              thumbnail={video.thumbnail}
              title={video.title}
              platform={video.platform}
              embedId={video.embedId}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center space-x-8">
            <SocialLink 
              href="https://instagram.com" 
              icon={<Instagram size={24} />}
              platform="Instagram"
            />
            <SocialLink 
              href="https://youtube.com" 
              icon={<Youtube size={24} />}
              platform="YouTube"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const VideoCard = ({ 
  thumbnail, 
  title, 
  platform,
  embedId
}: {
  thumbnail: string;
  title: string;
  platform: "youtube" | "instagram";
  embedId: string;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <div className="fashion-card bg-gray-900 text-white overflow-hidden">
      {isPlaying ? (
        <div className="aspect-video">
          {platform === "youtube" ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <iframe
              className="w-full h-full"
              src={`https://www.instagram.com/p/${embedId}/embed`}
              title={title}
              allowFullScreen
            ></iframe>
          )}
        </div>
      ) : (
        <div 
          className="relative aspect-video cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="w-16 h-16 bg-fashion-accent rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="font-serif text-lg font-medium">{title}</h3>
            <div className="flex items-center mt-2">
              {platform === "youtube" ? (
                <Youtube size={16} className="mr-2 text-red-500" />
              ) : (
                <Instagram size={16} className="mr-2 text-pink-500" />
              )}
              <span className="text-sm text-white/70">{platform === "youtube" ? "YouTube" : "Instagram"}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SocialLink = ({ 
  href, 
  icon, 
  platform 
}: { 
  href: string; 
  icon: React.ReactNode;
  platform: string;
}) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center text-white/80 hover:text-fashion-accent transition-colors"
  >
    <span className="mr-2">{icon}</span>
    <span className="font-medium">{platform}</span>
    <ExternalLink size={14} className="ml-1" />
  </a>
);

export default VideoShowcase;
