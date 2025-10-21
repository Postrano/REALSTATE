'use client';

// import { useState, useEffect } from 'react';
import TopNavigation from '@/components/TopNavigation';
import Carousel from '@/components/Carousel';
import SearchBar from '@/components/SearchBar';
import PhotoGallery from '@/components/PhotoGallery';
import PropertyCard from '@/components/PropertyCard';
import Services from '@/components/Services';
import CustomSelect from '@/components/CustomSelect';
import Footer from '@/components/Footer';
// import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
}

interface CarouselSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

// Local data instead of database
const localProperties: Property[] = [
  {
    id: 1,
    title: 'Modern Villa',
    price: '$850,000',
    location: 'Beverly Hills, CA',
    bedrooms: 4,
    bathrooms: 3,
    area: '3,200 sq ft',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80'
  },
  {
    id: 2,
    title: 'Luxury Apartment',
    price: '$650,000',
    location: 'Manhattan, NY',
    bedrooms: 3,
    bathrooms: 2,
    area: '2,100 sq ft',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80'
  },
  {
    id: 3,
    title: 'Beach House',
    price: '$1,200,000',
    location: 'Malibu, CA',
    bedrooms: 5,
    bathrooms: 4,
    area: '4,500 sq ft',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80'
  }
];

const localCarouselSlides: CarouselSlide[] = [
  {
    id: 1,
    title: 'Pahrump Realtor',
    description: 'MARCI METZGER - THE RIDGE REALTY GROUP',
    image: '/images/hero.webp',
    bgColor: 'from-blue-500 to-purple-600'
  }
];

const contentData = {
  heroTitle: 'Find Your Dream Home',
  heroSubtitle: 'Discover amazing properties in your area',
  featuredTitle: 'Featured Properties',
  featuredSubtitle: 'Discover our handpicked selection of premium properties',
  ctaTitle: 'Ready to Find Your Dream Home?',
  ctaSubtitle: 'Join thousands of satisfied customers who found their perfect property with us.',
  ctaButtonText: 'Get Started Today',
  properties: localProperties,
  carouselSlides: localCarouselSlides,
};


export default function Home() {
  // Commented out database loading code
  // const [contentData, setContentData] = useState<ContentData>({
  //   heroTitle: 'Find Your Dream Home',
  //   heroSubtitle: 'Discover amazing properties in your area',
  //   featuredTitle: 'Featured Properties',
  //   featuredSubtitle: 'Discover our handpicked selection of premium properties',
  //   ctaTitle: 'Ready to Find Your Dream Home?',
  //   ctaSubtitle: 'Join thousands of satisfied customers who found their perfect property with us.',
  //   ctaButtonText: 'Get Started Today',
  //   properties: [],
  //   carouselSlides: [],
  // });

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   loadContentData();
  // }, []);

  // const loadContentData = async () => {
  //   try {
  //     // Load properties
  //     const { data: properties, error: propertiesError } = await supabase
  //       .from('properties')
  //       .select('*')
  //       .order('id');

  //     if (propertiesError) throw propertiesError;

  //     // Load carousel slides
  //     const { data: carouselSlides, error: carouselError } = await supabase
  //       .from('carousel_slides')
  //       .select('*')
  //       .order('id');

  //     if (carouselError) throw carouselError;

  //     // Load content settings
  //     const { data: settings, error: settingsError } = await supabase
  //       .from('content_settings')
  //       .select('*')
  //       .single();

  //     if (settingsError && settingsError.code !== 'PGRST116') throw settingsError;

  //     setContentData({
  //       heroTitle: settings?.hero_title || 'Find Your Dream Home',
  //       heroSubtitle: settings?.hero_subtitle || 'Discover amazing properties in your area',
  //       featuredTitle: settings?.featured_title || 'Featured Properties',
  //       featuredSubtitle: settings?.featured_subtitle || 'Discover our handpicked selection of premium properties',
  //       ctaTitle: settings?.cta_title || 'Ready to Find Your Dream Home?',
  //       ctaSubtitle: settings?.cta_subtitle || 'Join thousands of satisfied customers who found their perfect property with us.',
  //       ctaButtonText: settings?.cta_button_text || 'Get Started Today',
  //       properties: properties || [],
  //       carouselSlides: carouselSlides || [],
  //     });
  //   } catch (error) {
  //     console.error('Error loading content data:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // if (loading) {
  //   return (
  //     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
  //       <div className="text-xl">Loading...</div>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-[#1E3634]">
      <TopNavigation />
      <Carousel slides={contentData.carouselSlides} />
      <SearchBar />
      <PhotoGallery />

      <PropertyCard />

      <Services />

      <div className="w-full">
        <CustomSelect
          value=""
          onChange={() => {}}
          options={[]}
          placeholder=""
          className=""
        />
      </div>

      <Footer />
    </div>
  );
}
