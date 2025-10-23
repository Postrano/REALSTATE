'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Services() {
  const [visibleElements, setVisibleElements] = useState({
    header: true,
    divider: true,
    services: Array(3).fill(true)
  });
  const headerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        setVisibleElements(prev => ({ ...prev, header: entry.isIntersecting }));
      },
      { threshold: 0.2, rootMargin: '0px' }
    );

    const dividerObserver = new IntersectionObserver(
      ([entry]) => {
        setVisibleElements(prev => ({ ...prev, divider: entry.isIntersecting }));
      },
      { threshold: 0.2, rootMargin: '0px' }
    );

    const serviceObservers = serviceRefs.current.map((_, index) => {
      return new IntersectionObserver(
        ([entry]) => {
          setVisibleElements(prev => {
            const newServices = [...prev.services];
            newServices[index] = entry.isIntersecting;
            return { ...prev, services: newServices };
          });
        },
        { threshold: 0.2, rootMargin: '0px' }
      );
    });

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (dividerRef.current) dividerObserver.observe(dividerRef.current);
    serviceRefs.current.forEach((ref, index) => {
      if (ref) serviceObservers[index].observe(ref);
    });

    return () => {
      headerObserver.disconnect();
      dividerObserver.disconnect();
      serviceObservers.forEach(observer => observer.disconnect());
    };
  }, []);

  const services = [
    {
      title: "Real Estate Done Right",
      description: "Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
      image: "/images/service1.webp",
      bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
      textColor: "text-gray-900"
    },
    {
      title: "Commercial & Residential",
      description: "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put your hard-earned dollars.",
      image: "/images/service2.webp",
      bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
      textColor: "text-gray-900"
    },
    {
      title: "Rely on Expertise",
      description: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
      image: "/images/service3.webp",
      bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
      textColor: "text-gray-900"
    }
  ];

  return (
    <div className="py-16 mt-8 mx-4 bg-gradient-to-r from-blue-50 via-white to-blue-50 animate-bg-shift relative overflow-hidden" style={{ fontFamily: 'Arial, Helvetica, sans-serif', backgroundImage: 'url(/images/hero.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', borderRadius: '1.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-100/20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-600/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 ref={headerRef} className={`text-4xl font-bold text-center mb-12 text-white transition-all duration-800 ${
          visibleElements.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '0.2s', color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Our Services</h1>

        {/* Decorative divider */}
        <div className="flex justify-center mb-16">
          <div ref={dividerRef} className={`w-32 h-1 bg-gradient-to-r from-white to-gray-300 rounded-full transition-all duration-1000 ${
            visibleElements.divider ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} style={{ transitionDelay: '0.2s' }}></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                serviceRefs.current[index] = el;
              }}
              className={`rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-800 transform hover:-translate-y-3 border border-white/50 backdrop-blur-sm bg-white/90 ${
                visibleElements.services[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="h-48 overflow-hidden relative">
                <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-300 hover:scale-105" />
                {/* Unique service badges */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  {index === 0 && <span className="text-xl font-bold text-gray-700">1</span>}
                  {index === 1 && <span className="text-xl font-bold text-gray-700">2</span>}
                  {index === 2 && <span className="text-xl font-bold text-gray-700">3</span>}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 relative">
                <h2 className={`text-xl font-semibold mb-3 ${service.textColor} flex items-center gap-2`}>
                  {index === 0 && <span className="text-gray-600">●</span>}
                  {index === 1 && <span className="text-gray-600">●</span>}
                  {index === 2 && <span className="text-gray-600">●</span>}
                  {service.title}
                </h2>
                <p className={`text-sm leading-relaxed ${service.textColor} opacity-90`}>{service.description}</p>
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-400 to-gray-600"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
