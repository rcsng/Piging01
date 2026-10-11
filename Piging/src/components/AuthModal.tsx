import React, { useState } from 'react';
import {
  X,
  User,
  Mail,
  Lock,
  LogOut,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import {
  auth,
  googleProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInAnonymously,
} from '../firebase/config';
import { User as FirebaseUser } from 'firebase/auth';

interface AuthModalProps {
  currentUser: FirebaseUser | null;
  isOpen: boolean;
  onClose: () => void;
  syncedFavoritesCount?: number;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  currentUser,
  isOpen,
  onClose,
  syncedFavoritesCount,
}) => {
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setErrorMessage('');
      await signInWithPopup(auth, googleProvider);
      onClose();
    } catch (err: unknown) {
      console.error('Google Sign In error:', err);
      setErrorMessage(
        err instanceof Error ? err.message : 'Google Sign-in failed. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }
    try {
      setLoading(true);
      setErrorMessage('');
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      onClose();
    } catch (err: unknown) {
      console.error('Email Auth error:', err);
      setErrorMessage(
        err instanceof Error ? err.message : 'Authentication failed.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleAnonymousSignIn = async () => {
    try {
      setLoading(true);
      setErrorMessage('');
      await signInAnonymously(auth);
      onClose();
    } catch (err: unknown) {
      console.error('Guest Auth error:', err);
      setErrorMessage('Guest sign-in failed.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      onClose();
    } catch (err: unknown) {
      console.error('Sign Out error:', err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-[#2D180C] border-2 border-[#E8A238] p-6 text-[#FFF5CC] shadow-2xl animate-fadeIn">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-[#FFF5CC]/70 hover:text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {currentUser ? (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#E8A238]/20 border-2 border-[#E8A238] mx-auto flex items-center justify-center">
              <User className="w-8 h-8 text-[#FFD24C]" />
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFD24C]">
                Signed In · Piging Account
              </span>
              <h3 className="font-woodblock font-bold text-xl text-white mt-1">
                {currentUser.displayName || currentUser.email || 'Guest Explorer'}
              </h3>
              <p className="text-xs text-[#FFF5CC]/75 mt-0.5">
                {currentUser.email || 'Anonymous Session (Local + Cloud Sync)'}
              </p>
            </div>

            <div className="rounded-xl bg-[#1E110B] border border-[#8C5832] p-3 text-xs text-left space-y-1">
              <p className="text-[#86EFAC] flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                Cross-Device Cloud Sync Active
              </p>
              <p className="text-[#FFF5CC]/80 text-[11px]">
                Your Paborito saved dishes, recipes, and reflections are securely saved to your account.
              </p>
            </div>

            <button
              type="button"
              onClick={handleSignOut}
              className="w-full py-2.5 rounded-xl bg-[#8B1122] hover:bg-[#A3162A] text-white text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        ) : (
          <div>
            <div className="text-center mb-5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFD24C]">
                Authentication &amp; Cloud Sync
              </span>
              <h2 className="font-woodblock font-bold text-2xl text-white mt-1">
                {isRegistering ? 'Create Piging Account' : 'Welcome to Piging'}
              </h2>
              <p className="text-xs text-[#FFF5CC]/80 mt-1">
                Sign in to sync your favorite dishes, reviews, and cultural reflections across devices.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 rounded-xl bg-red-950/80 border border-red-500/50 p-2.5 text-xs text-red-200 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Google One-Tap Sign In */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-semibold text-xs flex items-center justify-center gap-2.5 shadow-md cursor-pointer transition-colors disabled:opacity-50"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

            <div className="relative my-4 flex items-center justify-center">
              <div className="w-full border-t border-[#8C5832]/50" />
              <span className="absolute bg-[#2D180C] px-3 text-[10px] uppercase font-bold text-[#FFF5CC]/60">
                Or with Email
              </span>
            </div>

            {/* Email / Password Form */}
            <form onSubmit={handleEmailAuth} className="space-y-3">
              <div>
                <label className="block text-[11px] font-semibold text-[#FFF5CC]/90 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-2.5 text-[#FFF5CC]/50" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    required
                    className="w-full rounded-xl bg-[#1E110B] border border-[#8C5832] pl-9 pr-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#FFD24C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#FFF5CC]/90 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3 top-2.5 text-[#FFF5CC]/50" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    minLength={6}
                    className="w-full rounded-xl bg-[#1E110B] border border-[#8C5832] pl-9 pr-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#FFD24C]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-xl bg-[#E8A238] hover:bg-[#F5B727] text-[#23140D] font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors disabled:opacity-50"
              >
                {loading
                  ? 'Please wait...'
                  : isRegistering
                  ? 'Register Account'
                  : 'Sign In'}
              </button>
            </form>

            <div className="mt-3.5 flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={() => {
                  setIsRegistering(!isRegistering);
                  setErrorMessage('');
                }}
                className="text-[#FFD24C] hover:underline cursor-pointer"
              >
                {isRegistering
                  ? 'Already have an account? Sign In'
                  : "Don't have an account? Register"}
              </button>

              <button
                type="button"
                onClick={handleAnonymousSignIn}
                className="text-[#FFF5CC]/70 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Guest Mode</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
