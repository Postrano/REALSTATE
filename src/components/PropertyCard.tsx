'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function PropertyCard() {
  const [visibleSections, setVisibleSections] = useState([true, true, true]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((_, index) => {
      return new IntersectionObserver(
        ([entry]) => {
          setVisibleSections(prev => {
            const newVisible = [...prev];
            newVisible[index] = entry.isIntersecting;
            return newVisible;
          });
        },
        {
          threshold: 0.2,
          rootMargin: '0px'
        }
      );
    });

    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        observers[index].observe(ref);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const sections = [
    {
      title: "Top Residential Sales Last 5 Years",
      content: "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.",
      image: "/images/info1.webp",
      alt: "Top Residential Sales"
    },
    {
      title: "Don't Just List it...",
      content: "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
      image: "/images/info2.webp",
      alt: "Get It Sold"
    },
    {
      title: "Guide to Buyers",
      content: "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
      image: "/images/info3.webp",
      alt: "Guide to Buyers"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 animate-bg-shift  shadow-2xl mx-4 relative overflow-hidden" style={{ fontFamily: 'Arial, Helvetica, sans-serif', backgroundImage: 'url(/images/hero.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-100/20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-600/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-white">GET IT SOLD</h1>

        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {sections.map((section, index) => (
            <div
              key={index}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
            >
              {/* Full-width background */}
              <div
                className={`transition-all duration-1000 ${
                  visibleSections[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  backgroundColor: index === 0 ? 'rgba(245, 245, 220, 0.9)' : index === 1 ? 'rgba(240, 255, 240, 0.9)' : 'rgba(255, 240, 245, 0.9)'
                }}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 rounded-2xl">
                  <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    <div className={`md:w-1/2 transition-all duration-1000 ${
                      visibleSections[index] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-50px]'
                    }`} style={{ transitionDelay: '0.2s' }}>
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                        <Image
                          src={section.image}
                          alt={section.alt}
                          width={400}
                          height={320}
                          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110 filter-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        {/* Unique decorative elements for each image */}
                        {index === 0 && (
                          <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center opacity-90 shadow-lg transform rotate-45 transition-all duration-500 hover:scale-110 hover:rotate-[225deg] animate-pulse">
                            <span className="text-white font-bold text-lg transform -rotate-45 transition-transform duration-500 hover:scale-125">★</span>
                          </div>
                        )}
                        {index === 1 && (
                          <div className="absolute top-4 right-4 w-16 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center opacity-90 shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-xl animate-bounce">
                            <span className="text-white font-bold text-sm transition-transform duration-500 hover:scale-125">✓</span>
                          </div>
                        )}
                        {index === 2 && (
                          <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-600 rounded-full flex items-center justify-center opacity-90 shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-xl animate-pulse">
                            <span className="text-white font-bold text-lg transition-transform duration-500 hover:scale-125">👥</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={`md:w-1/2 text-center md:text-left transition-all duration-1000 ${
                      visibleSections[index] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[50px]'
                    }`} style={{ transitionDelay: '0.4s' }}>
                      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 leading-tight" style={{
                        color: index === 0 ? '#B8860B' : index === 1 ? '#006400' : '#C71585'
                      }}>{section.title}</h2>
                      <p className="text-base sm:text-lg leading-relaxed" style={{
                        color: index === 0 ? '#DAA520' : index === 1 ? '#228B22' : '#DC143C'
                      }}>{section.content}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Divider between sections */}
              {index < sections.length - 1 && (
                <div className="flex justify-center my-8 sm:my-12 md:my-16">
                  <div className={`w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 rounded-full transition-all duration-1000 ${
                    visibleSections[index] ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                  }`} style={{ transitionDelay: '0.6s' }}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
