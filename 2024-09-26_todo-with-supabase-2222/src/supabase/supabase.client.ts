import { createClient } from "@supabase/supabase-js";

const projectURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const publicKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!projectURL) throw new Error("No");
if (!publicKey) throw new Error("No");

export default createClient(projectURL, publicKey);

const supabaseUrl = "https://nxrlhgwcyvymhcrrublm.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);


