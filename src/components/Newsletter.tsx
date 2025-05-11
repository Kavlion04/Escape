import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import bgimg from "@/assets/IMAGE (6).svg";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing!");
      setEmail("");
    } else {
      toast.error("Please enter a valid email address");
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-cover bg-center relative"
      style={{
        backgroundImage: "../assets/IMAGE(1).SVG",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <img
        src={bgimg}
        alt="Footer background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className={`text-2xl md:text-3xl font-serif text-white mb-8 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Stay in Touch
          </h2>

          <form
            onSubmit={handleSubmit}
            className={`flex flex-col md:flex-row gap-4 md:gap-2 justify-center transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-escape-orange flex-grow max-w-sm"
            />
            <button
              type="submit"
              className="bg-escape-orange hover:bg-opacity-90 text-white px-6 py-3 rounded-md transition-colors duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
