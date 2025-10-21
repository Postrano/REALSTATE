import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iwvgelffnbnkykbvdibu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3dmdlbGZmbmJua3lrYnZkaWJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NDc5MTYsImV4cCI6MjA3NjEyMzkxNn0.NeSBFqr8sDrvjvYy1ZiLka4d06k8O4e151kTGpGfzOg';

export const supabase = createClient(supabaseUrl, supabaseKey);
