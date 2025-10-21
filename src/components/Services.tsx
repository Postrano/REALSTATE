'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

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

    const currentRef = servicesRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const services = [
    {
      title: "Real Estate Done Right",
      description: "Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
      image: "/images/service1.webp",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
      textColor: "text-indigo-900"
    },
    {
      title: "Commercial & Residential",
      description: "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put your hard-earned dollars.",
      image: "/images/service2.webp",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
      textColor: "text-emerald-900"
    },
    {
      title: "Rely on Expertise",
      description: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
      image: "/images/service3.webp",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-100",
      textColor: "text-violet-900"
    }
  ];

  return (
    <div ref={servicesRef} className="py-16 bg-gradient-to-b from-gray-50 to-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-4xl font-bold text-center mb-12 text-gray-800 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '0.2s' }}>Our Services</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-800 transform hover:-translate-y-2 ${service.bgColor} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${0.4 + index * 0.2}s` }}
            >
              <div className="h-48 overflow-hidden relative">
                <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="p-6">
                <h2 className={`text-xl font-semibold mb-3 ${service.textColor}`}>{service.title}</h2>
                <p className={`text-sm leading-relaxed ${service.textColor} opacity-90`}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
