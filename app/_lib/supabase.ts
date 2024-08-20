import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
if (!supabaseKey || !supabaseUrl) {
  throw new Error("failed to access .env file");
}
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
