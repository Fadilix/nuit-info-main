'use client';
import {useState, useEffect} from 'react';
import { useSearchParams } from 'next/navigation';
import JumpScare from "@/app/components/screenhack";
import WhatsAppNotification from "@/app/components/WhatsAppNotification";
import TerminalAnimation from "@/app/components/TerminalAnimation";
import Window from "@/app/components/Window";
import DiaryApp from "@/app/components/DiaryApp";
import Browser from "@/app/components/Browser";
import { useCountdown } from "@/app/context/CountdownContext";

export default function Desktop() {
    const [showNotification, setShowNotification] = useState(false);
    const [showTerminal, setShowTerminal] = useState(false);
    const [showJumpscare, setShowJumpscare] = useState(false);
    const [showDiary, setShowDiary] = useState(false);
    const [showBrowser, setShowBrowser] = useState(false);
    const [initialBrowserUrl, setInitialBrowserUrl] = useState<string>('');
    const { hours, seconds } = useCountdown();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Check URL parameters
        const app = searchParams.get('app');
        const url = searchParams.get('url');

        // Check if user has already seen the notification
        const hasSeenNotification = localStorage.getItem('hasSeenNotification');
        const hasCompletedCycle = localStorage.getItem('hasCompletedCycle');

        // Use setTimeout to avoid ESLint warning about synchronous setState in effect
        setTimeout(() => {
            // Handle URL parameters first
            if (app === 'browser') {
                setShowBrowser(true);
                if (url) {
                    setInitialBrowserUrl(url);
                }
            } else if (!hasSeenNotification) {
                // First time ever - show notification
                setShowNotification(true);
            } else if (!hasCompletedCycle) {
                // Seen notification but hasn't completed the full cycle yet - show terminal
                setShowTerminal(true);
            }
            // If hasCompletedCycle is true, stay on desktop (don't show anything)
        }, 0);
    }, [searchParams]);

    const handleNotificationClick = () => {
        // Mark notification as seen
        localStorage.setItem('hasSeenNotification', 'true');
        setShowNotification(false);
        setShowTerminal(true);
    };

    const handleTerminalComplete = () => {
        setShowTerminal(false);
        setShowJumpscare(true);
    };

    if (showJumpscare) {
        return (
            <div>
                <JumpScare triggerAnimation={showJumpscare} />
            </div>
        );
    }

    // Check if user has completed the cycle to show the warning
    const hasCompletedCycle = typeof window !== 'undefined' && localStorage.getItem('hasCompletedCycle') === 'true';

    return (
        <div className="h-screen w-screen wall_back relative overflow-hidden">
            {/* WhatsApp Notification */}
            {showNotification && <WhatsAppNotification onNotificationClick={handleNotificationClick} />}

            {/* Terminal Animation */}
            {showTerminal && <TerminalAnimation onComplete={handleTerminalComplete} />}

            {/* Desktop Background */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Countdown Warning Banner - Only show after completing the workflow */}
            {hasCompletedCycle && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="bg-black/90 backdrop-blur-md border-4 border-red-600 rounded-lg p-8 shadow-2xl">
                        <div className="flex flex-col items-center space-y-4">
                            <span className="text-6xl">⚠️</span>
                            <h2 className="text-red-500 text-3xl font-bold">SYSTÈME COMPROMIS</h2>
                            <p className="text-white text-xl text-center">
                                Vos données ont été chiffrées
                            </p>
                            <div className="text-white text-lg text-center">
                                <p>Envoyer 0.2 BTC à cette adresse:</p>
                                <code className="bg-gray-800 px-4 py-2 rounded mt-2 block">
                                    1HckjUpRGcrrRAtFaaCAUaGjsPx9oYmLaZ
                                </code>
                            </div>
                            <div className="text-red-500 text-4xl font-bold mt-4">
                                {hours}h {seconds}s restantes
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Taskbar */}
            <div
                className="absolute bottom-0 left-0 right-0 h-12 bg-black/80 backdrop-blur-sm border-t border-gray-600 flex items-center px-4">
                {/* Start Menu Button */}
                <button className="flex items-center space-x-2 px-3 py-1 rounded hover:bg-white/10 transition-colors">
                    <div className="w-6 h-6 bg-orange-500 rounded-sm flex items-center justify-center">
                        <span className="text-white text-xs font-bold">U</span>
                    </div>
                    <span className="text-white text-sm">Activities</span>
                </button>

                {/* Application Icons */}
                <div className="flex space-x-2 ml-4">
                    <button
                        className="w-8 h-8 bg-orange-600 rounded-sm flex items-center justify-center hover:bg-orange-700 transition-colors">
                        <span className="text-white text-xs">🗂</span>
                    </button>
                    <button
                        className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <span className="text-white text-xs">🌐</span>
                    </button>
                    <button
                        className="w-8 h-8 bg-gray-600 rounded-sm flex items-center justify-center hover:bg-gray-700 transition-colors">
                        <span className="text-white text-xs">⚙️</span>
                    </button>
                </div>

                {/* System Tray */}
                <div className="flex items-center space-x-3 ml-auto">
                    <span className="text-white text-xs">🔊</span>
                    <span className="text-white text-xs">📶</span>
                    <span className="text-white text-xs">🔋</span>
                    <div className="flex flex-col items-end">
                        <span className="text-white text-sm">
                            {new Date().toLocaleTimeString('en-US', {
                                hour12: false,
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </span>
                        {/* Only show countdown after completing the cycle */}
                        {hasCompletedCycle && (
                            <span className="text-red-500 text-xs font-bold">
                                ⏰ {hours}h {seconds}s
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Desktop Icons */}
            <div className="absolute top-4 left-4 space-y-4">
                <div className="flex flex-col items-center space-y-1 cursor-pointer hover:bg-white/10 p-2 rounded">
                    <div className="w-12 h-12 bg-yellow-600 rounded-sm flex items-center justify-center">
                        <span className="text-white text-lg">📁</span>
                    </div>
                    <span className="text-white text-xs text-center">Documents</span>
                </div>

                <div className="flex flex-col items-center space-y-1 cursor-pointer hover:bg-white/10 p-2 rounded">
                    <div className="w-12 h-12 bg-green-600 rounded-sm flex items-center justify-center">
                        <span className="text-white text-lg">🖼️</span>
                    </div>
                    <span className="text-white text-xs text-center">Pictures</span>
                </div>

                <div className="flex flex-col items-center space-y-1 cursor-pointer hover:bg-white/10 p-2 rounded">
                    <div className="w-12 h-12 bg-red-600 rounded-sm flex items-center justify-center">
                        <span className="text-white text-lg">🗑️</span>
                    </div>
                    <span className="text-white text-xs text-center">Trash</span>
                </div>
                <div
                    className="flex flex-col items-center space-y-1 cursor-pointer hover:bg-white/10 p-2 rounded"
                    onClick={() => setShowDiary(true)}
                    onDoubleClick={() => setShowDiary(true)}
                >
                    <div className="w-12 h-12 bg-purple-600 rounded-sm flex items-center justify-center">
                        <span className="text-white text-lg">📔</span>
                    </div>
                    <span className="text-white text-xs text-center">Journal</span>
                </div>

                <div
                    className="flex flex-col items-center space-y-1 cursor-pointer hover:bg-white/10 p-2 rounded"
                    onClick={() => setShowBrowser(true)}
                    onDoubleClick={() => setShowBrowser(true)}
                >
                    <div className="w-12 h-12 bg-blue-600 rounded-sm flex items-center justify-center">
                        <span className="text-white text-lg">🌐</span>
                    </div>
                    <span className="text-white text-xs text-center">Navigateur</span>
                </div>
            </div>

            {/* Window Animation */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="animate-desktop-fade-in">
                    <div className="w-96 h-64 bg-white/95 backdrop-blur rounded-lg shadow-2xl p-4">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-gray-800 font-semibold">Welcome to Ubuntu</h3>
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                            </div>
                        </div>
                        <div className="text-gray-600 text-sm">
                            <p>System ready</p>
                            <p className="mt-2">Welcome to your desktop...</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Diary Window */}
            {showDiary && (
                <Window
                    title="Journal Intime"
                    onClose={() => setShowDiary(false)}
                    width={900}
                    height={700}
                    initialX={200}
                    initialY={50}
                >
                    <DiaryApp />
                </Window>
            )}

            {/* Browser Window */}
            {showBrowser && (
                <Window
                    title="Navigateur Web"
                    onClose={() => setShowBrowser(false)}
                    width={1100}
                    height={750}
                    initialX={100}
                    initialY={40}
                >
                    <Browser initialUrl={initialBrowserUrl} />
                </Window>
            )}
        </div>
    );
}
