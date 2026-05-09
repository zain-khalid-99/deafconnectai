import { getSupabase } from './supabase';

export const signUp = async (email, password, fullName) => {
  const { data, error } = await getSupabase().auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName },
    },
  });
  return { data, error };
};

export const signIn = async (email, password) => {
  const { data, error } = await getSupabase().auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signInWithGoogle = async () => {
    // Note: This requires the callback URL to be set in Supabase for the AI Studio dev host URL.
    // The redirect URL here points to the home page or a desired redirect handle.
    const { data, error } = await getSupabase().auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `${window.location.origin}/dashboard`
        }
    });
    return { data, error };
};

export const signOut = async () => {
  const { error } = await getSupabase().auth.signOut();
  return { error };
};

export const getCurrentUser = async () => {
    const { data: { user } } = await getSupabase().auth.getUser();
    return user;
};
