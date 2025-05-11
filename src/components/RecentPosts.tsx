
import { useState, useEffect, useRef } from 'react';
import bgimg from '@/assets/IMAGE (8).svg';
import bgimg2 from '@/assets/IMAGE (7).svg';
import bgimg3 from '@/assets/IMAGE (9).svg';
import bgimg4 from '@/assets/IMAGE (10).svg';
import bgimg5 from '@/assets/IMAGE (11).svg';
import bgimg6 from '@/assets/IMAGE (12).svg';
import userimg from '@/assets/IMAGE (2).svg';
import userimg2 from '@/assets/IMAGE (3).svg';

interface PostCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  authorImageUrl: string;
  date: string;
  index: number;
}

const PostCard = ({ title, excerpt, imageUrl, author, authorImageUrl, date, index }: PostCardProps) => {
  const [inView, setInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setInView(true);
          }, index * 100); 
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className={`bg-white rounded-lg overflow-hidden transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-serif text-xl mb-2">{title}</h3>
        <p className="text-sm text-escape-gray mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between text-xs text-escape-gray">
          <div className="flex items-center">
            <img 
              src={authorImageUrl} 
              alt={author} 
              className="w-6 h-6 rounded-full mr-2 object-cover"
            />
            <span>{author}</span>
          </div>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

const RecentPosts = () => {
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
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const recentPosts = [
    {
      title: "Still Standing Tall",
      excerpt: "Life begins at the end of your comfort zone.",
      imageUrl: bgimg,
      author: "William Wong",
      authorImageUrl: userimg,
      date: "9/25/2023"
    },
    {
      title: "Sunny Side Up",
      excerpt: "No place is ever as bad as they tell you it's going to be.",
      imageUrl: bgimg3,
      author: "Mat Vogels",
      authorImageUrl: userimg2,
      date: "9/25/2023"
    },
    {
      title: "Water Falls",
      excerpt: "We travel not to escape life, but for life not to escape us.",
      imageUrl: bgimg2,
      author: "Mat Vogels",
      authorImageUrl: userimg2,
      date: "9/25/2023"
    },
    {
      title: "Through the Mist",
      excerpt: "Travel makes you see what a tiny place you occupy in the world.",
      imageUrl: bgimg4,
      author: "William Wong",
      authorImageUrl: userimg,
      date: "9/25/2023"
    },
    {
      title: "Awaken Early",
      excerpt: "Not all those who wander are lost.",
      imageUrl: bgimg5,
      author: "Mat Vogels",
      authorImageUrl: userimg2,
      date: "9/25/2023"
    },
    {
      title: "Try it Always",
      excerpt: "The world is a book, and those who do not travel read only one page.",
      imageUrl: bgimg6,
      author: "Mat Vogels",
      authorImageUrl: userimg2,
      date: "9/25/2023"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-escape-light">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className={`text-2xl md:text-3xl font-serif text-center mb-12 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Most Recent
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <PostCard
              key={index}
              {...post}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
