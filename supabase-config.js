const SUPABASE_URL = 'https://ojmefplmlwwkysiuvdpx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qbWVmcGxtbHd3a3lzaXV2ZHB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMzMDcyMDcsImV4cCI6MjEwODg4MzIwN30.goDqsUvN3EcR-GTgGUe3Hnj6OuKokwFKFmMcocOeRmk';

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);