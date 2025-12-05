'use client';
import React, { useState } from 'react';

interface WarningPageProps {
    onCorrectAnswer: () => void;
}

export default function WarningPage({ onCorrectAnswer }: WarningPageProps) {
    const [activated, setActivated] = useState(false);
    const [answer, setAnswer] = useState('');

    const triggerWarning = () => {
        if (!activated) {
            setActivated(true);
        }
    };

    const checkAnswer = () => {
        const value = answer.trim();

        if (value === '01102022') {
            onCorrectAnswer();
        } else {
            alert('Mauvaise réponse. Indice : c\'est une date.');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    };

    return (
        <div
            onClick={triggerWarning}
            className="h-full w-full flex flex-col justify-center items-center font-sans text-white transition-all duration-500 cursor-pointer"
            style={{
                background: activated ? '#dc0a2e' : '#000'
            }}
        >
            {/* Lock Icon */}
            <div
                className="text-[120px] mb-5 transition-opacity duration-500"
                style={{
                    opacity: activated ? 0 : 1
                }}
            >
                🔒
            </div>

            {/* Secret Text */}
            <div
                className="text-[22px] transition-all duration-400"
                style={{
                    color: activated ? 'transparent' : '#fff',
                    opacity: activated ? 0 : 1
                }}
            >
                Tu aurais dû ignorer ça…
            </div>

            {/* Question Box */}
            {activated && (
                <div
                    className="flex flex-col items-center mt-5 text-center animate-fadeIn"
                    style={{
                        animation: 'fadeIn 0.6s forwards'
                    }}
                >
                    <div className="text-xl mb-4">
                        plus beaux moments de ma vie
                    </div>
                    <input
                        type="text"
                        placeholder="Écris ta réponse ici…"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        onKeyDown={handleKeyPress}
                        className="p-2.5 border-2 border-white bg-transparent text-white w-[230px] rounded text-center text-base mb-2.5 focus:outline-none focus:border-gray-300"
                        autoFocus
                    />
                    <button
                        onClick={checkAnswer}
                        className="px-5 py-2.5 border-none bg-[#ff4b4b] text-white text-base rounded cursor-pointer transition-all duration-300 hover:bg-[#cc0000]"
                    >
                        Continuer
                    </button>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}

