import { useEffect, useState } from "react";
import bgimg from "@/assets/IMAGE (6).svg";
import Newsletter from "./Newsletter";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  return (
    <footer
      className={`bg-escape-dark  text-white py-8 transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="/" className="text-2xl font-serif font-bold">
              Escape.
            </a>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm mb-6 md:mb-0">
            {[
              { name: "Home", href: "#" },
              { name: "Categories", href: "#" },
              { name: "About", href: "#" },
              { name: "Contact", href: "#" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-escape-orange transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
