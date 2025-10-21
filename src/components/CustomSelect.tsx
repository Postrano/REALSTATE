'use client';

import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder: string;
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function CustomSelect({ }: CustomSelectProps) {
  // Contact Form States
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Map center coordinates
  const center: [number, number] = [36.18399, -115.95526];

  // Contact Form Functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // If form is submitted, show success message
  if (isSubmitted) {
  return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <div className="mb-4">
          <svg className="mx-auto h-12 w-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Message Sent Successfully!</h3>
        <p className=" text-white mb-4">Thank you for your message. We'll get back to you soon.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Send Another Message
      </button>
      </div>
    );
  }

  return (
    <div className="w-full relative">
      {/* Responsive Layout with Single Background - Full Width */}
      <div className="p-4 sm:p-6 lg:p-8 w-full mx-0 relative z-0" style={{ backgroundColor: '#1E3634' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
          {/* Column 1: Send Message Form */}
          <div className="p-4 sm:p-6 lg:p-8 rounded-xl" style={{ backgroundColor: '#1E3634' }}>
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold  text-white mb-3 sm:mb-4">Send Message</h2>
              <p className="text-slate-300 text-sm sm:text-base">Get in touch with us for any inquiries or questions.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1 sm:mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 bg-slate-50 text-sm sm:text-base ${
                    errors.name ? 'border-red-400 bg-red-50' : 'border-slate-300 hover:border-slate-400'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-red-600 font-medium">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1 sm:mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 bg-slate-50 text-sm sm:text-base ${
                    errors.email ? 'border-red-400 bg-red-50' : 'border-slate-300 hover:border-slate-400'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-red-600 font-medium">{errors.email}</p>
                )}
        </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1 sm:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className={`w-full px-3 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 resize-none bg-slate-50 text-sm sm:text-base ${
                    errors.message ? 'border-red-400 bg-red-50' : 'border-slate-300 hover:border-slate-400'
                  }`}
                  placeholder="Enter your message here..."
                />
                {errors.message && (
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-red-600 font-medium">{errors.message}</p>
                )}
              </div>

              <div className="bg-slate-100 p-3 sm:p-4 rounded-xl border border-slate-200">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="recaptcha"
                    className="mt-1 mr-2 sm:mr-3 w-4 h-4 text-blue-600 border-2 border-slate-300 rounded focus:ring-blue-500"
                    required
                  />
                  <label htmlFor="recaptcha" className="text-xs sm:text-sm text-slate-600">
                    This site is protected by reCAPTCHA and the Google{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      Terms of Service
                    </a>{' '}
                    apply.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 transform ${
                  isSubmitting
                    ? 'bg-slate-400 cursor-not-allowed text-white'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl hover:scale-105'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>

          {/* Column 2: Combined Location Information and Map */}
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg text-black" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Our Location</h2>

            {/* Location Information */}
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-black mb-2 sm:mb-3">Marci Metzger - THE RIDGE REALTY GROUP</h3>
                <p className="text-black text-sm sm:text-base">
                  3190 HW-160, Suite F<br />
                  Pahrump, Nevada 89048, United States
                </p>
              </div>

              <div>
                <p className="font-semibold text-black mb-1 sm:mb-2 text-sm sm:text-base">Phone</p>
                <p className="text-black text-base sm:text-lg font-medium">(206) 919-6886</p>
              </div>

              <div>
                <h4 className="font-semibold text-black mb-2 sm:mb-3 text-sm sm:text-base">Office Hours</h4>
                <div className="space-y-1 sm:space-y-2">
                  <p className="text-green-600 font-semibold text-sm sm:text-base">Open today</p>
                  <p className="text-black text-sm sm:text-base font-medium">08:00 am – 07:00 pm</p>
                  <p className="text-black text-sm sm:text-base font-medium">Open daily 8:00 am - 7:00 pm</p>
                  <p className="text-black text-xs sm:text-sm font-medium">
                    Appointments outside office hours available upon request. Just call!
                  </p>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">Find Us</h3>
              <div className="h-64 sm:h-80 lg:h-96 w-full relative z-10 overflow-hidden rounded-xl border-2 border-white/20">
                <MapContainer center={center} zoom={15} style={{ height: '100%', width: '100%', zIndex: 1, position: 'relative' }}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={center}>
                    <Popup>
                      <strong>Marci Metzger - THE RIDGE REALTY GROUP</strong><br />
                      3190 HW-160, Suite F<br />
                      Pahrump, Nevada 89048, United States<br />
                      <a href="tel:(206) 919-6886" className="text-blue-600">(206) 919-6886</a>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
