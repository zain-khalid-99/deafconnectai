import { createClient } from '@supabase/supabase-js';

let supabaseClient = null;

export const getSupabase = () => {
  if (!supabaseClient) {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('SUPABASE_URL and SUPABASE_ANON_KEY environment variables are required. Mocking Supabase client to prevent app crash.');
      // Return a mock client to prevent the app from crashing when env variables are missing
      return {
        auth: {
          onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
          getUser: async () => ({ data: { user: null } }),
          signInWithPassword: async () => ({ error: { message: "Supabase not configured. Add env variables." } }),
          signUp: async () => ({ error: { message: "Supabase not configured. Add env variables." } }),
          signInWithOAuth: async () => { alert("Supabase not configured. Add env variables to enable Google Login."); return { data: null, error: null }; },
          signOut: async () => ({ error: null })
        }
      };
    }

    supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
  }
  return supabaseClient;
};
