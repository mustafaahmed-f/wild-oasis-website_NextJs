import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://btxtvhxbwjxbtxrxceii.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0eHR2aHhid2p4YnR4cnhjZWlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5NzUxOTgsImV4cCI6MjAzODU1MTE5OH0.gpUEP97Vr0JWGJODgksmJH-EvwNr0IAxYsymXnOJ2jA"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
