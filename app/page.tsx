'use client';
import Image from "next/image";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {useAudio} from "./context/AudioContext";

export default function Home() {
    const router = useRouter();
    const {playStartupSound, enableAudio, isAudioEnabled} = useAudio();
    const [showStartPrompt, setShowStartPrompt] = useState(true);
    const [startAnimation, setStartAnimation] = useState(false);
    const [audioStatus, setAudioStatus] = useState('waiting');

    const handleResetScenario = (e: React.MouseEvent) => {
        e.stopPropagation();
        // Clear all localStorage keys related to the scenario
        localStorage.removeItem('hasSeenNotification');
        localStorage.removeItem('hasCompletedCycle');
        localStorage.removeItem('bitcoinCountdown');

        // Show confirmation
        alert('✅ Scénario réinitialisé ! La page va se recharger.');

        // Reload the page to restart from scratch
        window.location.reload();
    };

    const handleStart = async () => {
        try {
            setAudioStatus('enabling...');
            console.log('Starting audio enablement...');

            // Enable audio first and wait for it to complete
            await enableAudio();
            console.log('Audio enabled, starting animation');
            setAudioStatus('enabled');

            // Hide the prompt
            setShowStartPrompt(false);
            // Start the animation
            setStartAnimation(true);

            // Play the startup sound immediately after enabling audio
            setAudioStatus('playing...');
            setTimeout(async () => {
                await playStartupSound();
                setAudioStatus('playing');
            }, 50); // Very small delay to ensure state updates
        } catch (error) {
            console.log('Error in handleStart:', error);
            setAudioStatus('failed');
            // Still proceed with animation even if audio fails
            setShowStartPrompt(false);
            setStartAnimation(true);
        }
    };

    useEffect(() => {
        if (startAnimation) {
            // Redirect to login page after animation completes (2 seconds)
            const timer = setTimeout(() => {
                router.push('/login');
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [startAnimation, router]);

    return (
        <div className="h-screen w-screen flex items-center justify-center overflow-hidden relative">
            {/* Reset Button - Fixed at top right */}
            <button
                onClick={handleResetScenario}
                className="fixed top-4 right-4 z-50 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 transition-colors"
                title="Réinitialiser le scénario"
            >
                <span>🔄</span>
                <span className="font-semibold">Reset Scénario</span>
            </button>

            {showStartPrompt ? (
                // Start prompt screen
                <div
                    className="flex flex-col items-center justify-center cursor-pointer text-center p-8"
                    onClickCapture={handleStart}
                    onTouchStart={handleStart}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleStart();
                        }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label="Touch anywhere to start"
                >
                    <div className="mb-8">
                        <Image
                            height={300}
                            width={450}
                            src="/mockup.png"
                            alt="Laptop"
                            className="max-w-full h-auto opacity-80"
                        />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                            Welcome
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600">
                            Touch anywhere to start
                        </p>
                        <div className="mt-4 text-sm text-gray-500">
                            🔊 Audio will play during startup
                        </div>
                        <div className="mt-2 text-xs text-gray-400">
                            Audio status: {audioStatus} | Enabled: {isAudioEnabled ? 'Yes' : 'No'}
                        </div>
                        {/*{process.env.NODE_ENV === 'development' && (*/}
                        {/*    <button*/}
                        {/*        onClick={async (e) => {*/}
                        {/*            e.stopPropagation();*/}
                        {/*            console.log('Test button clicked');*/}
                        {/*            await enableAudio();*/}
                        {/*            await playStartupSound();*/}
                        {/*        }}*/}
                        {/*        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"*/}
                        {/*    >*/}
                        {/*        Test Audio*/}
                        {/*    </button>*/}
                        {/*)}*/}
                    </div>
                </div>
            ) : (
                // Animation screen
                <Image
                    height={400}
                    width={600}
                    src="/mockup.png"
                    alt="Laptop"
                    className={`max-w-full h-auto ${startAnimation ? 'animate-zoom-in' : ''}`}
                />
            )}
        </div>
    );
}
