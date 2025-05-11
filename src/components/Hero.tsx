
import { useEffect, useState } from 'react';
import headerimage from '@/assets/IMAGE (1).svg';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={headerimage}
          alt="Mountains landscape"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl text-white font-serif mb-6 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Let's do it together.
          </h1>
          <p 
            className={`text-lg md:text-xl text-[#FFFFFFA1] mb-8 mx-auto max-w-xl transition-all duration-700 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            We travel the world in search of stories. Come along for the ride.
          </p>
          <button 
            className={`bg-[#DD783F] hover:bg-opacity-90 text-white px-8 py-3 rounded transition-all duration-700 delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            View Latest Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
