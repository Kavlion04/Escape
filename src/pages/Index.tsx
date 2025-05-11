import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryNav from "@/components/CategoryNav";
import FeaturedPosts from "@/components/FeaturedPosts";
import RecentPosts from "@/components/RecentPosts";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-escape-orange via-white to-escape-dark">
        <div className="w-12 h-12 border-4 border-escape-orange border-t-transparent rounded-full animate-spin mb-4"></div>
        <div className="text-xl font-serif text-escape-dark">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CategoryNav />
      <FeaturedPosts />
      <RecentPosts />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
