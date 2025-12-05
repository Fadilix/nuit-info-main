'use client';
import React, { useState, useEffect } from 'react';

interface CreditScreen {
    role: string;
    name?: string;
    color?: string;
}

const credits: CreditScreen[] = [
    {
        role: '📝 Scripter',
        name: 'TIMEO CANTO-RINGELSTEIN',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        role: '💻 Developer',
        name: 'Fadilou MOROU - Nidhal SOUMRI',
        color: 'from-purple-500 to-pink-500'
    },
    {
        role: '🤝 Help',
        name: 'ZAIER WASSEF - JAWEL BRIKI - YOUNES TSOULI',
        color: 'from-green-500 to-emerald-500'
    },
    {
        role: '🎓 Promotion',
        name: 'SI3 POLYTECH NICE SOPHIA',
        color: 'from-orange-500 to-red-500'
    },
    {
        role: '🎬 TO BE CONTINUED ...',
        color: 'from-yellow-500 to-amber-500'
    }
];

export default function Credits() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showRole, setShowRole] = useState(false);
    const [showName, setShowName] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (currentIndex >= credits.length) {
            const completeTimer = setTimeout(() => {
                setIsComplete(true);
            }, 0);
            return () => clearTimeout(completeTimer);
        }

        // Show role immediately
        const roleTimer = setTimeout(() => {
            setShowRole(true);
            setShowName(false);
        }, 0);

        // Show name after 1.5s if it exists
        const nameTimer = setTimeout(() => {
            if (credits[currentIndex].name) {
                setShowName(true);
            }
        }, 1500);

        // Move to next screen after 3.5s
        const nextTimer = setTimeout(() => {
            setShowRole(false);
            setShowName(false);

            setTimeout(() => {
                setCurrentIndex(prev => prev + 1);
            }, 1000);
        }, 3500);

        return () => {
            clearTimeout(roleTimer);
            clearTimeout(nameTimer);
            clearTimeout(nextTimer);
        };
    }, [currentIndex]);

    if (isComplete) {
        return (
            <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden z-50">
                <div
                    className="text-center animate-pulse"
                    style={{
                        animation: 'fadeIn 2s ease-in-out'
                    }}
                >
                    <div className="text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
                        Merci
                    </div>
                    <div className="text-3xl text-white/80 mt-[20px]">
                        d&apos;avoir joué 🎮
                    </div>
                </div>
            </div>
        );
    }

    if (currentIndex >= credits.length) {
        return null;
    }

    const currentCredit = credits[currentIndex];

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden z-50">
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden mb-[20px]">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
                     style={{ animationDuration: '4s' }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
                     style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
            </div>

            {/* Content */}
            <div className="text-center relative z-10 px-8 mt-[30px]">
                {/* Role */}
                <div
                    className={`text-7xl font-bold mb-10 transition-all duration-1000 ease-out ${
                        showRole 
                            ? 'opacity-100 translate-y-0 scale-100' 
                            : 'opacity-0 translate-y-8 scale-95'
                    }`}
                >
                    <span className={`bg-gradient-to-r ${currentCredit.color} bg-clip-text text-transparent drop-shadow-2xl`}>
                        {currentCredit.role}
                    </span>
                </div>

                {/* Name */}
                {currentCredit.name && (
                    <div
                        className={`text-5xl text-white/90 font-light tracking-wide transition-all duration-1000 ease-out ${
                            showName 
                                ? 'opacity-100 translate-y-0 blur-0' 
                                : 'opacity-0 translate-y-8 blur-sm'
                        }`}
                    >
                        {currentCredit.name}
                    </div>
                )}

                {/* Progress indicator */}
                {/*<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">*/}
                {/*    {credits.map((_, index) => (*/}
                {/*        <div*/}
                {/*            key={index}*/}
                {/*            className={`h-1 rounded-full transition-all duration-300 ${*/}
                {/*                index === currentIndex */}
                {/*                    ? 'w-12 bg-white' */}
                {/*                    : index < currentIndex */}
                {/*                    ? 'w-8 bg-white/50' */}
                {/*                    : 'w-8 bg-white/20'*/}
                {/*            }`}*/}
                {/*        />*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

