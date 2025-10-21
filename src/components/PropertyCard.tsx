'use client';

import { useEffect, useRef, useState } from 'react';

export default function PropertyCard() {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const sections = [
    {
      title: "Top Residential Sales Last 5 Years",
      content: "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.",
      image: "/images/info1.webp",
      alt: "Top Residential Sales",
      reverse: false
    },
    {
      title: "Don't Just List it...",
      content: "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
      image: "/images/info2.webp",
      alt: "Get It Sold",
      reverse: true
    },
    {
      title: "Guide to Buyers",
      content: "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
      image: "/images/info3.webp",
      alt: "Guide to Buyers",
      reverse: false
    }
  ];

  return (
    <div ref={cardRef} className="py-20 bg-gradient-to-b from-white via-gray-50 to-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-5xl font-bold text-center mb-16 text-gray-800 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '0.2s' }}>GET IT SOLD</h1>

        <div className="space-y-20">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${0.4 + index * 0.3}s` }}
            >
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <img
                    src={section.image}
                    alt={section.alt}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 leading-tight transition-colors duration-500 hover:text-blue-600">{section.title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed transition-colors duration-500 hover:text-gray-900">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
