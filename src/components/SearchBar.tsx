'use client';

import { useState } from 'react';

export default function SearchBar() {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [baths, setBaths] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', { location, propertyType, sortBy, bedrooms, baths, minPrice, maxPrice });
  };

  return (
    
    <div className="bg-white shadow-2xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 -mt-12 sm:-mt-16 md:-mt-20 relative z-10 max-w-7xl mx-4 sm:mx-6 lg:mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-black mb-4 sm:mb-6 md:mb-8 tracking-wide" style={{ color: '#000000' }}>
        Search Listings
      </h2>
      
      <form onSubmit={handleSearch} className="space-y-4 sm:space-y-6">
        {/* First Row - Location, Type, Sort By */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2" style={{ color: '#374151' }}>
              Location
            </label>
            <div className="relative">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-8 sm:pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent appearance-none bg-white text-sm sm:text-base text-gray-700 cursor-pointer transition-all duration-300 hover:border-gray-400 hover:shadow-md focus:shadow-lg"
              >
                <option value="">Select Location</option>
                <option value="pahrump">Pahrump</option>
                <option value="las-vegas">Las Vegas</option>
                <option value="henderson">Henderson</option>
                <option value="north-las-vegas">North Las Vegas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 sm:px-3 text-gray-500 transition-transform duration-300 group-focus-within:rotate-180">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2" style={{ color: '#374151' }}>
              Type
            </label>
            <div className="relative group">
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-8 sm:pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent appearance-none bg-white text-sm sm:text-base text-gray-700 cursor-pointer transition-all duration-300 hover:border-gray-400 hover:shadow-md focus:shadow-lg"
              >
                <option value="">Property Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
                <option value="land">Land</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 sm:px-3 text-gray-500 transition-transform duration-300 group-focus-within:rotate-180">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2" style={{ color: '#374151' }}>
              Sort By
            </label>
            <div className="relative group">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-8 sm:pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent appearance-none bg-white text-sm sm:text-base text-gray-700 cursor-pointer transition-all duration-300 hover:border-gray-400 hover:shadow-md focus:shadow-lg"
              >
                <option value="">Sort By</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 sm:px-3 text-gray-500 transition-transform duration-300 group-focus-within:rotate-180">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - Bedrooms, Baths, Prices */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2" style={{ color: '#374151' }}>
              Bedrooms
            </label>
            <div className="relative group">
              <select
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="w-full px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 pr-7 sm:pr-8 md:pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent appearance-none bg-white text-xs sm:text-sm md:text-base text-gray-700 cursor-pointer transition-all duration-300 hover:border-gray-400 hover:shadow-md focus:shadow-lg"
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1.5 sm:px-2 md:px-3 text-gray-500 transition-transform duration-300 group-focus-within:rotate-180">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2" style={{ color: '#374151' }}>
              Baths
            </label>
            <div className="relative group">
              <select
                value={baths}
                onChange={(e) => setBaths(e.target.value)}
                className="w-full px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 pr-7 sm:pr-8 md:pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent appearance-none bg-white text-xs sm:text-sm md:text-base text-gray-700 cursor-pointer transition-all duration-300 hover:border-gray-400 hover:shadow-md focus:shadow-lg"
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1.5 sm:px-2 md:px-3 text-gray-500 transition-transform duration-300 group-focus-within:rotate-180">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2" style={{ color: '#374151' }}>
              Min Price
            </label>
              <input
                type="text"
                placeholder="$0"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent text-xs sm:text-sm md:text-base text-gray-700 transition-all duration-300 hover:border-gray-400 hover:shadow-md focus:shadow-lg"
                style={{ color: '#000000', backgroundColor: '#ffffff' }}
              />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2" style={{ color: '#374151' }}>
              Max Price
            </label>
            <input
              type="text"
              placeholder="Any"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent text-xs sm:text-sm md:text-base text-gray-700 transition-all duration-300 hover:border-gray-400 hover:shadow-md focus:shadow-lg"
              style={{ color: '#000000', backgroundColor: '#ffffff' }}
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="flex justify-center sm:justify-end pt-2 sm:pt-4">
          <button
            type="submit"
            className="w-full sm:w-auto px-8 sm:px-10 md:px-12 py-2.5 sm:py-3 bg-gray-800 text-white rounded-lg text-sm sm:text-base font-medium hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            style={{ backgroundColor: '#1f2937', color: '#ffffff' }}
          >
            SEARCH NOW
          </button>
        </div>
      </form>
    </div>
  );
}
