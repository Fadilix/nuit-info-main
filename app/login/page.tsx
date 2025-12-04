'use client';
import {useState} from 'react';
import {useRouter} from 'next/navigation';

export default function Login() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Simulate login delay
        setTimeout(() => {
            if (password === '1234') {
                router.push('/desktop');
            } else {
                setError('Incorrect password');
                setPassword('');
            }
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div
            className="wallpaper h-screen w-screen relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-black/30"></div>
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>

            <div className="relative z-10 animate-login-slide-up">
                <div className="w-96 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
                    {/* User Avatar */}
                    <div className="flex flex-col items-center mb-6">
                        <div
                            className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                            <span className="text-white text-2xl font-bold">👤</span>
                        </div>
                        <h2 className="text-white text-xl font-semibold">Welcome Back</h2>
                        <p className="text-white/70 text-sm">Enter your password to continue</p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent backdrop-blur-sm"
                                disabled={isLoading}
                                autoFocus
                            />
                        </div>

                        {error && (
                            <div
                                className="text-red-300 text-sm text-center bg-red-500/20 py-2 px-3 rounded-lg border border-red-500/30">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading || !password}
                            className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor"
                                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Signing in...
                                </span>
                            ) : (
                                'Sign In'
                            )}
                        </button>
                    </form>

                    {/* Bottom Info */}
                    <div className="mt-6 text-center">
                        <p className="text-white/50 text-xs">Ubuntu 22.04 LTS</p>
                        <p className="text-white/50 text-xs mt-1">
                            {new Date().toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom System Info */}
            <div className="absolute bottom-4 left-4 text-white/60 text-sm">
                <p>System ready</p>
            </div>

            <div className="absolute bottom-4 right-4 text-white/60 text-sm">
                <p>{new Date().toLocaleTimeString('en-US', {hour12: false})}</p>
            </div>
        </div>
    );
}
