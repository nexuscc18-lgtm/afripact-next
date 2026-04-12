'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { UserPlus, Loader, AlertCircle, CheckCircle2, X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export default function SignUpContent() {
  const { signUp } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const getPasswordStrength = (pwd: string) => {
    if (pwd.length === 0) return { strength: 0, label: '', color: '' };
    if (pwd.length < 6) return { strength: 1, label: 'Weak', color: 'bg-red-500' };
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++;
    if (/\d/.test(pwd)) strength++;
    if (/[^a-zA-Z0-9]/.test(pwd)) strength++;
    if (strength <= 1) return { strength: 2, label: 'Fair', color: 'bg-orange-500' };
    if (strength <= 2) return { strength: 3, label: 'Good', color: 'bg-yellow-500' };
    return { strength: 4, label: 'Strong', color: 'bg-green-500' };
  };

  const passwordStrength = getPasswordStrength(password);
  const passwordsMatch = password === confirmPassword && password.length > 0;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (password !== confirmPassword) { setError('Passwords do not match'); setIsSubmitting(false); return; }
    if (password.length < 6) { setError('Password must be at least 6 characters long'); setIsSubmitting(false); return; }
    if (!acceptTerms) { setError('You must accept the terms and conditions'); setIsSubmitting(false); return; }

    const { error: signUpError } = await signUp(email, password);
    if (signUpError) {
      setError(signUpError.message);
      setIsSubmitting(false);
    } else {
      setSuccess(true);
      setIsSubmitting(false);
      setTimeout(() => router.push('/login'), 2000);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Account Created!</h1>
            <p className="text-gray-600 text-lg mb-6">Your admin account has been successfully created. You can now sign in to access the dashboard.</p>
            <p className="text-sm text-gray-500">Redirecting to login...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <img src="/AfriPact.png" alt="Afripact Civils" className="h-24 w-auto mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Admin Account</h1>
            <p className="text-gray-600">Set up your dashboard access</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-800 text-sm font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <input type="email" id="email" required value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="admin@afripact.net" disabled={isSubmitting} />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2">Password</label>
              <input type="password" id="password" required value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="Create a strong password" disabled={isSubmitting} />
              {password.length > 0 && (
                <div className="mt-2">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className={`h-full ${passwordStrength.color} transition-all`}
                        style={{ width: `${(passwordStrength.strength / 4) * 100}%` }} />
                    </div>
                    <span className="text-xs font-semibold text-gray-600">{passwordStrength.label}</span>
                  </div>
                  <p className="text-xs text-gray-500">Use 8+ characters with uppercase, lowercase, numbers & symbols</p>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-bold text-gray-700 mb-2">Confirm Password</label>
              <div className="relative">
                <input type="password" id="confirmPassword" required value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="Re-enter your password" disabled={isSubmitting} />
                {confirmPassword.length > 0 && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    {passwordsMatch ? <CheckCircle2 className="w-5 h-5 text-green-600" /> : <X className="w-5 h-5 text-red-600" />}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input type="checkbox" id="acceptTerms" checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                disabled={isSubmitting} />
              <label htmlFor="acceptTerms" className="text-sm text-gray-700">
                I accept the terms and conditions and agree to use this admin account responsibly
              </label>
            </div>

            <button type="submit" disabled={isSubmitting || !acceptTerms || !passwordsMatch || password.length < 6}
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold py-4 px-6 rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-orange-500/50 flex items-center justify-center gap-2 text-lg">
              {isSubmitting ? (
                <><Loader className="w-5 h-5 animate-spin" />Creating Account...</>
              ) : (
                <><UserPlus className="w-5 h-5" />Create Account</>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-4">Already have an account?</p>
            <Link href="/login" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-4 py-2">
              Sign In
            </Link>
          </div>
          <div className="mt-6 text-center">
            <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 rounded px-3 py-1">
              Back to Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
