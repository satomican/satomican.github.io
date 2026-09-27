/* ============================================================
   techrenew — site settings (the ONLY file that differs per environment)

   Demo  (GitHub Pages): the values below.
   Production (techrenew.com): replace SUPABASE_URL / SUPABASE_ANON_KEY with the
   production Supabase project's values and set DEMO to false.

   The anon key is public by design — Row Level Security in 01_schema_v2.sql is
   what protects the data. NEVER put the service_role key in this file.
   ============================================================ */
window.TR_CONFIG = {
  SUPABASE_URL: "https://izkuvdkhaywqqajxmmjv.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6a3V2ZGtoYXl3cXFhanhtbWp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA0NzkyMjgsImV4cCI6MjEwNjA1NTIyOH0._b-15rd3oLK6193V-VEsZ6crMRmyuY_b4aOsDrVIU9A",
  DEMO: true   // true = show the "Demo — not a real store" banner on every page
};
