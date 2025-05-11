
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300 ease-in-out",
      scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-serif font-bold text-white ">
            Escape.
          </a>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {[
            { name: 'Home', href: '#' },
            { name: 'Categories', href: '#' },
            { name: 'About', href: '#' },
            { name: 'Contact', href: '#' }
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "font-medium text-sm hover:text-escape-orange transition-colors duration-200",
                scrolled ? "text-escape-dark" : "text-white"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>
        
        
      </div>
    </header>
  );
};

export default Header;
