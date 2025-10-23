'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
}

export default function PhotoGallery() {
  const [visibleElements, setVisibleElements] = useState({
    header: false,
    images: Array(7).fill(false),
    showMore: false
  });
  const [showAll, setShowAll] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tappedIndex, setTappedIndex] = useState<number | null>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const showMoreRef = useRef<HTMLDivElement>(null);
  const images: GalleryImage[] = [
    {
      id: 1,
      url: '/images/photo1.webp',
      title: 'Luxury Desert Villa'
    },
    {
      id: 2,
      url: '/images/photo2.webp',
      title: 'Modern Family Home'
    },
    {
      id: 3,
      url: '/images/photo3.webp',
      title: 'Spacious Ranch Estate'
    },
    {
      id: 4,
      url: '/images/photo4.webp',
      title: 'Contemporary Residence'
    },
    {
      id: 5,
      url: '/images/photo5.webp',
      title: 'Desert Oasis Property'
    },
    {
      id: 6,
      url: '/images/photo6.webp',
      title: 'Sport Area'
    },
    {
      id: 7,
      url: '/images/photo7.webp',
      title: 'Elegant Estate'
    }
  ];

  const displayedImages = showAll ? images : images.slice(0, 5);
  const remainingCount = images.length - 5;

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        setVisibleElements(prev => ({ ...prev, header: entry.isIntersecting }));
      },
      { threshold: 0.2, rootMargin: '0px' }
    );

    const imageObservers = displayedImages.map((_, index) => {
      return new IntersectionObserver(
        ([entry]) => {
          setVisibleElements(prev => {
            const newImages = [...prev.images];
            newImages[index] = entry.isIntersecting;
            return { ...prev, images: newImages };
          });
        },
        { threshold: 0.2, rootMargin: '0px' }
      );
    });

    const showMoreObserver = new IntersectionObserver(
      ([entry]) => {
        setVisibleElements(prev => ({ ...prev, showMore: entry.isIntersecting }));
      },
      { threshold: 0.2, rootMargin: '0px' }
    );

    if (headerRef.current) headerObserver.observe(headerRef.current);
    displayedImages.forEach((_, index) => {
      const ref = imageRefs.current[index];
      if (ref) imageObservers[index].observe(ref);
    });
    if (showMoreRef.current) showMoreObserver.observe(showMoreRef.current);

    return () => {
      headerObserver.disconnect();
      imageObservers.forEach(observer => observer.disconnect());
      showMoreObserver.disconnect();
    };
  }, [displayedImages]);

  return (
   <div className="bg-[#1E3634] p-4 sm:p-6 lg:p-8 w-full mx-0 text-gray-800" >
    <section ref={galleryRef} className="py-8 sm:py-12 md:py-16 lg:py-20 " >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-gray-800">
        <div ref={headerRef} className=" text-center text-gray-800 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 transition-all duration-800 ${
              visibleElements.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Photo Gallery
          </h2>
          <p
            className={`text-sm sm:text-base md:text-lg text-white transition-all duration-800 px-4 ${
              visibleElements.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            Explore our stunning collection of properties
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 perspective-1000">
          {displayedImages.map((image, index) => (
            <div
              key={image.id}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              className={`relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer transition-all duration-800 transform-gpu ${
                visibleElements.images[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: '0.2s',
                transformStyle: 'preserve-3d'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onTouchStart={() => setTappedIndex(index)}
              onTouchEnd={() => setTimeout(() => setTappedIndex(null), 1500)}
            >
              <div 
                className="aspect-[4/3] relative transition-transform duration-700 ease-out"
                style={{
                  transform: (hoveredIndex === index || tappedIndex === index)
                    ? 'rotateY(5deg) rotateX(-5deg) scale(1.05)'
                    : 'rotateY(0deg) rotateX(0deg) scale(1)',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.7s ease-out'
                }}
              >
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover transition-all duration-700"
                  style={{
                    filter: (hoveredIndex === index || tappedIndex === index) ? 'brightness(1.1) contrast(1.1)' : 'brightness(1) contrast(1)'
                  }}
                />
                
                
                {/* Shine effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                    backgroundSize: '200% 200%',
                    animation: hoveredIndex === index ? 'shine 1.5s ease-in-out' : 'none'
                  }}
                ></div>
                
                {/* Content overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 ${tappedIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  <div className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 transform transition-transform duration-500 ${tappedIndex === index ? 'translate-y-0' : 'translate-y-8 group-hover:translate-y-0'}`}>
                    <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 drop-shadow-lg">
                      {image.title}
                    </h3>
                    <div className={`w-12 sm:w-16 h-1 bg-white rounded-full transform transition-transform duration-500 delay-100 ${tappedIndex === index ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
                  </div>
                </div>
                
                {/* 3D border effect */}
                <div
                  className={`absolute inset-0 border-2 sm:border-4 border-white/20 rounded-2xl transition-opacity duration-500 ${tappedIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                  style={{
                    transform: 'translateZ(20px)'
                  }}
                ></div>
              </div>
            </div>
          ))}
          
          {!showAll ? (
            <div
              ref={showMoreRef}
              className={`relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer transition-all duration-800 transform-gpu ${
                visibleElements.showMore ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: '0.2s',
                transformStyle: 'preserve-3d'
              }}
              onClick={() => setShowAll(true)}
              onMouseEnter={() => setHoveredIndex(5)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className="aspect-[4/3] relative flex items-center justify-center transition-all duration-700"
                style={{
                  transform: hoveredIndex === 5 
                    ? 'rotateY(5deg) rotateX(-5deg) scale(1.05)' 
                    : 'rotateY(0deg) rotateX(0deg) scale(1)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Background Image */}
                <Image
                  src={images[5].url}
                  alt="Show More"
                  fill
                  className="object-cover transition-all duration-700"
                  style={{
                    filter: hoveredIndex === 5 ? 'brightness(0.8) contrast(1.1)' : 'brightness(0.7) contrast(1)'
                  }}
                />
                
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/60"></div>
                
                <div className="text-center text-white relative z-10 transform transition-transform duration-500 hover:scale-110 px-4">
                  <div className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2 sm:mb-3 animate-pulse drop-shadow-2xl">+{remainingCount}</div>
                  <div className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide drop-shadow-lg">Show More</div>
                  <div className="mt-3 sm:mt-4 w-10 h-10 sm:w-12 sm:h-12 mx-auto border-3 sm:border-4 border-white rounded-full flex items-center justify-center animate-bounce">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                {/* Shine effect for show more */}
                <div 
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)',
                    backgroundSize: '200% 200%',
                    animation: hoveredIndex === 5 ? 'shine 1.5s ease-in-out' : 'none'
                  }}
                ></div>
              </div>
            </div>
          ) : (
            <div
              ref={showMoreRef}
              className={`relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer transition-all duration-800 transform-gpu ${
                visibleElements.showMore ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: '0.2s',
                transformStyle: 'preserve-3d'
              }}
              onClick={() => setShowAll(false)}
              onMouseEnter={() => setHoveredIndex(displayedImages.length)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className="aspect-[4/3] relative flex items-center justify-center transition-all duration-700"
                style={{
                  transform: hoveredIndex === displayedImages.length
                    ? 'rotateY(5deg) rotateX(-5deg) scale(1.05)' 
                    : 'rotateY(0deg) rotateX(0deg) scale(1)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Background Image - using last image */}
                <Image
                  src={images[6].url}
                  alt="Show Less"
                  fill
                  className="object-cover transition-all duration-700"
                  style={{
                    filter: hoveredIndex === displayedImages.length ? 'brightness(0.8) contrast(1.1)' : 'brightness(0.7) contrast(1)'
                  }}
                />
                
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/60"></div>
                
                <div className="text-center text-white relative z-10 transform transition-transform duration-500 hover:scale-110 px-4">
                  <div className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide drop-shadow-lg mb-3 sm:mb-4">Show Less</div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto border-3 sm:border-4 border-white rounded-full flex items-center justify-center animate-bounce">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                </div>
                
                {/* Shine effect */}
                <div 
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)',
                    backgroundSize: '200% 200%',
                    animation: hoveredIndex === displayedImages.length ? 'shine 1.5s ease-in-out' : 'none'
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
    </div>
  );
}
