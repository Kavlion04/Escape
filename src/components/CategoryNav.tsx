
import { useState, useEffect } from 'react';

const CategoryNav = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Delay visibility for animation purposes
    setTimeout(() => setVisible(true), 300);
  }, []);

  const categories = [
    'Nature',
    'Photography',
    'Relaxation',
    'Vacation',
    'Travel',
    'Adventure'
    
  ];

  return (
    <nav className={`bg-white py-4 border-b border-gray-200 sticky top-0 z-30 transition-all duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4 md:px-6 overflow-x-auto">
        <ul className="flex space-x-8 md:space-x-12 md:justify-center whitespace-nowrap">
          {categories.map((category, index) => (
            <li key={index} className="flex-shrink-0">
              <button
                onClick={() => setActiveCategory(category)}
                className={`font-medium text-sm transition-colors duration-200 pb-1 ${
                  activeCategory === category
                    ? 'text-escape-orange border-b-2 border-escape-orange'
                    : 'text-escape-dark hover:text-escape-orange'
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CategoryNav;
