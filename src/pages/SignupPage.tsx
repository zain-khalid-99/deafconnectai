import React, { useState } from 'react';
import { AuthWrapper } from './AuthWrapper';
import { Button } from '../components/ui/Button';
import { Link, useNavigate } from 'react-router-dom';
import { signUp, signInWithGoogle } from '../lib/auth';

export const SignupPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const fullName = e.currentTarget[0].value;
    const email = e.currentTarget[1].value;
    const password = e.currentTarget[2].value;

    const { error } = await signUp(email, password, fullName);
    if (error) {
        setError(error.message);
    } else {
        navigate('/dashboard'); 
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    await signInWithGoogle();
    setLoading(false);
  };

  return (
    <AuthWrapper title="Create an account" subtitle="Join the future of accessible communication">
      <form onSubmit={handleSignup} className="space-y-6">
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <div className="space-y-2">
          <label className="text-xs font-bold text-[var(--color-text-secondary)] uppercase">Full Name</label>
          <input type="text" required className="w-full p-4 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-primary)] focus:border-brand-blue transition-all" placeholder="John Doe" disabled={loading} />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-[var(--color-text-secondary)] uppercase">Email</label>
          <input type="email" required className="w-full p-4 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-primary)] focus:border-brand-blue transition-all" placeholder="name@company.com" disabled={loading} />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-[var(--color-text-secondary)] uppercase">Password</label>
          <input type="password" required className="w-full p-4 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-primary)] focus:border-brand-blue transition-all" disabled={loading} />
        </div>
        
        <div className="flex items-start gap-3">
            <input type="checkbox" required className="mt-1 accent-brand-blue" />
            <span className="text-xs text-[var(--color-text-secondary)]">I agree to the <Link to="/terms" className="text-brand-blue hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-brand-blue hover:underline">Privacy Policy</Link>.</span>
        </div>

        <Button variant="primary" className="w-full rounded-[12px] h-14" disabled={loading}>{loading ? 'Creating account...' : 'Get Started'}</Button>
        
        <div className="relative text-center text-xs text-[var(--color-text-secondary)]">
          <span className="bg-[var(--color-bg)] px-3 relative z-10">OR CONTINUE WITH</span>
          <div className="absolute top-1/2 left-0 right-0 border-t border-[var(--color-border)]"></div>
        </div>
        
        <button type="button" onClick={handleGoogleLogin} disabled={loading} className="w-full p-4 rounded-[12px] border border-[var(--color-border)] flex items-center justify-center gap-3 hover:bg-[var(--color-text-secondary)]/10 transition-all">
           <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
             <span className="text-[10px] text-black">G</span>
          </div>
          <span>Google</span>
        </button>

        <p className="text-center text-sm text-[var(--color-text-secondary)]">
          Already have an account? <Link to="/login" className="text-brand-blue font-bold hover:underline">Sign in</Link>
        </p>
      </form>
    </AuthWrapper>
  );
};
