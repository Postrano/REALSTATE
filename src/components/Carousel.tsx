'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface CarouselSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

interface CarouselProps {
  slides: CarouselSlide[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const slide = slides && slides.length > 0 ? slides[0] : {
    id: 1,
    title: 'Pahrump Realtor',
    description: 'MARCI METZGER - THE RIDGE REALTY GROUP',
    image: '/images/hero.webp',
    bgColor: ''
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    const currentRef = carouselRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    
    <div ref={carouselRef} className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gray-800">
        <div className="h-full relative bg-gray-800">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/70 to-transparent"></div>
          <div className="absolute left-4 sm:left-8 md:left-12 top-1/2 transform -translate-y-1/2 text-white px-4 max-w-full sm:max-w-xl md:max-w-2xl z-10">
            <h2 
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal mb-4 sm:mb-6 tracking-wide transition-all duration-800 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              {slide.title}
            </h2>
            <p 
              className={`text-sm sm:text-base md:text-lg mb-6 sm:mb-8 font-light leading-relaxed max-w-full sm:max-w-md md:max-w-lg transition-all duration-800 ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              {slide.description}
            </p>
            <button 
              className={`border-2 border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-normal hover:bg-white hover:text-gray-800 transition-opacity duration-800 ${
                isVisible 
                  ? 'opacity-100' 
                  : 'opacity-0'
              }`}
              style={{ 
                transitionDelay: '0.9s',
                transition: 'background-color 0.2s ease, color 0.2s ease, opacity 0.8s ease'
              }}
            >
              CALL NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
