
import { Instagram, Youtube, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-fashion-dark text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-serif text-2xl mb-4">STYLE SAGA</h3>
            <p className="text-white/70 max-w-xs">
              A visual journey of self-expression, where artistry meets wearable design through continual learning and evolution.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <a href="#collections" className="text-white/70 hover:text-white transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#reels" className="text-white/70 hover:text-white transition-colors">
                  Reels & Videos
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">
                  About the Designer
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-fashion-accent transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-fashion-accent transition-colors"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="mailto:contact@stylesaga.com" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-fashion-accent transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="text-white/70 text-sm">
              For collaborations and inquiries:<br />
              <a href="mailto:contact@stylesaga.com" className="text-fashion-accent hover:underline">
                contact@stylesaga.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Style Saga. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center text-white/70 hover:text-white transition-colors"
          >
            Back to Top <ArrowUp size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
