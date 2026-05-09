import React, { useState } from 'react';
import { AuthWrapper } from './AuthWrapper';
import { Button } from '../components/ui/Button';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../lib/auth';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const email = e.currentTarget[0].value;
    const password = e.currentTarget[1].value;

    const { error } = await signIn(email, password);
    if (error) {
        setError(error.message);
    } else {
        navigate('/dashboard'); 
    }
    setLoading(false);
  };



  return (
    <AuthWrapper title="Welcome back" subtitle="Enter your credentials to continue to DeafConnect AI">
      <form onSubmit={handleLogin} className="space-y-6">
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <div className="space-y-2">
          <label className="text-xs font-bold text-[var(--color-text-secondary)] uppercase">Email</label>
          <input type="email" required className="w-full p-4 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-primary)] focus:border-brand-blue transition-all" placeholder="name@company.com" disabled={loading} />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <label className="text-xs font-bold text-[var(--color-text-secondary)] uppercase">Password</label>
            <Link to="/forgot-password" className="text-xs text-brand-blue hover:underline">Forgot password?</Link>
          </div>
          <input type="password" required className="w-full p-4 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-primary)] focus:border-brand-blue transition-all" disabled={loading} />
        </div>
        
        <Button variant="primary" className="w-full rounded-[12px] h-14" disabled={loading}>{loading ? 'Signing in...' : 'Sign In'}</Button>
        

      </form>
    </AuthWrapper>
  );
};
