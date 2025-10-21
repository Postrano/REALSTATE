-- Create the properties table
CREATE TABLE IF NOT EXISTS properties (
  id BIGINT PRIMARY KEY,
  title TEXT,
  price TEXT,
  location TEXT,
  bedrooms INTEGER,
  bathrooms INTEGER,
  area TEXT,
  image TEXT
);

-- Create the carousel_slides table
CREATE TABLE IF NOT EXISTS carousel_slides (
  id BIGINT PRIMARY KEY,
  title TEXT,
  description TEXT,
  image TEXT,
  bg_color TEXT
);

-- Create the content_settings table
CREATE TABLE IF NOT EXISTS content_settings (
  id INTEGER PRIMARY KEY DEFAULT 1,
  hero_title TEXT,
  hero_subtitle TEXT,
  featured_title TEXT,
  featured_subtitle TEXT,
  cta_title TEXT,
  cta_subtitle TEXT,
  cta_button_text TEXT
);

-- Insert default content settings
INSERT INTO content_settings (id, hero_title, hero_subtitle, featured_title, featured_subtitle, cta_title, cta_subtitle, cta_button_text)
VALUES (1, 'Find Your Dream Home', 'Discover amazing properties in your area', 'Featured Properties', 'Discover our handpicked selection of premium properties', 'Ready to Find Your Dream Home?', 'Join thousands of satisfied customers who found their perfect property with us.', 'Get Started Today')
ON CONFLICT (id) DO NOTHING;

-- Insert sample properties
INSERT INTO properties (id, title, price, location, bedrooms, bathrooms, area, image)
VALUES
  (1, 'Modern Downtown Apartment', '$450,000', 'Downtown, City', 2, 2, '1,200', '/next.svg'),
  (2, 'Spacious Family Home', '$650,000', 'Suburb, City', 4, 3, '2,500', '/vercel.svg'),
  (3, 'Luxury Condo', '$750,000', 'Uptown, City', 3, 2, '1,800', '/globe.svg')
ON CONFLICT (id) DO NOTHING;

-- Insert sample carousel slides
INSERT INTO carousel_slides (id, title, description, image, bg_color)
VALUES
  (1, 'Find Your Dream Home', 'Discover amazing properties in your area', '/next.svg', 'from-blue-600 to-purple-600'),
  (2, 'Expert Real Estate Services', 'Professional guidance for buying and selling', '/vercel.svg', 'from-green-600 to-teal-600'),
  (3, 'Investment Opportunities', 'Grow your wealth with smart property investments', '/globe.svg', 'from-red-600 to-pink-600')
ON CONFLICT (id) DO NOTHING;

-- Create the images bucket for storing uploaded images
INSERT INTO storage.buckets (id, name, public)
VALUES ('images', 'images', true)
ON CONFLICT (id) DO NOTHING;

-- Allow anonymous users to upload images to the images bucket
CREATE POLICY "Allow anon to upload images" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'images' AND auth.role() = 'anon');

-- Allow public access to view images in the images bucket
CREATE POLICY "Allow public access to images" ON storage.objects
FOR SELECT USING (bucket_id = 'images');

-- Enable RLS on tables (if not already enabled)
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE carousel_slides ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_settings ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users full access to properties table
CREATE POLICY "Allow anon full access to properties" ON properties
FOR ALL USING (true) WITH CHECK (true);

-- Allow anonymous users full access to carousel_slides table
CREATE POLICY "Allow anon full access to carousel_slides" ON carousel_slides
FOR ALL USING (true) WITH CHECK (true);

-- Allow anonymous users full access to content_settings table
CREATE POLICY "Allow anon full access to content_settings" ON content_settings
FOR ALL USING (true) WITH CHECK (true);
