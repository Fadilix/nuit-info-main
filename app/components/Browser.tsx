'use client';
import React, { useState, useRef } from 'react';
import DriveApp from './DriveApp';
import InstagramApp from './InstagramApp';

export default function Browser() {
    const [url, setUrl] = useState('');
    const [currentPage, setCurrentPage] = useState<'home' | 'drive' | 'instagram'>('home');
    const [searchSuggestion, setSearchSuggestion] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const searchTerm = url.toLowerCase().trim();

        if (searchTerm === 'drive' || searchTerm.includes('drive')) {
            setCurrentPage('drive');
            setUrl('https://drive.google.com/my-photos');
        } else if (searchTerm === 'instagrom' || searchTerm === 'martin.kil' || searchTerm.includes('instagrom') || searchTerm.includes('martin')) {
            setCurrentPage('instagram');
            setUrl('https://instagrom.com/martin.kil');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUrl(value);

        // Autocompletion
        const lowerValue = value.toLowerCase();
        if (lowerValue && 'drive'.startsWith(lowerValue)) {
            setSearchSuggestion('drive');
        } else if (lowerValue && 'instagrom'.startsWith(lowerValue)) {
            setSearchSuggestion('instagrom');
        } else if (lowerValue && 'martin.kil'.startsWith(lowerValue)) {
            setSearchSuggestion('martin.kil');
        } else {
            setSearchSuggestion('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Tab' && searchSuggestion) {
            e.preventDefault();
            setUrl(searchSuggestion);
            setSearchSuggestion('');
        }
    };

    const goHome = () => {
        setCurrentPage('home');
        setUrl('');
    };

    return (
        <div className="h-full flex flex-col bg-white">
            {/* Browser Header */}
            <div className="bg-gray-100 border-b flex flex-col">
                {/* Tab Bar */}
                <div className="flex items-center px-2 pt-2 bg-gray-200">
                    <div className="bg-white px-4 py-2 rounded-t-lg border border-b-0 flex items-center space-x-2">
                        <span className="text-sm">
                            {currentPage === 'instagram' ? '📷' : '🌐'}
                        </span>
                        <span className="text-sm font-medium">
                            {currentPage === 'drive' ? 'Mon Drive' :
                             currentPage === 'instagram' ? 'martin.kil • Instagrom' :
                             'Nouvel onglet'}
                        </span>
                    </div>
                </div>

                {/* Address Bar */}
                <div className="px-3 py-2 flex items-center space-x-2">
                    {/* Navigation Buttons */}
                    <div className="flex items-center space-x-1">
                        <button
                            onClick={goHome}
                            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                            title="Retour"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </button>
                        <button className="p-2 hover:bg-gray-200 rounded-full transition-colors opacity-50">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                        <button
                            onClick={() => {
                                if (currentPage === 'drive') {
                                    setCurrentPage('drive');
                                    setUrl('https://drive.google.com/my-photos');
                                }
                            }}
                            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </button>
                    </div>

                    {/* URL Bar */}
                    <form onSubmit={handleSearch} className="flex-1 relative">
                        <div className="relative">
                            <input
                                ref={inputRef}
                                type="text"
                                value={url}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                placeholder="Rechercher ou saisir une adresse web"
                                className="w-full px-4 py-2 pr-10 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 bg-white"
                            />
                            {searchSuggestion && url && (
                                <div className="absolute left-4 top-2 pointer-events-none text-gray-400">
                                    <span className="invisible">{url}</span>
                                    <span>{searchSuggestion.slice(url.length)}</span>
                                </div>
                            )}
                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 hover:bg-gray-200 rounded-full"
                            >
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                        {searchSuggestion && url && (
                            <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-lg shadow-lg z-10">
                                <button
                                    onClick={() => {
                                        if (searchSuggestion === 'drive') {
                                            setUrl('https://drive.google.com/my-photos');
                                            setCurrentPage('drive');
                                        } else if (searchSuggestion === 'instagrom' || searchSuggestion === 'martin.kil') {
                                            setUrl('https://instagrom.com/martin.kil');
                                            setCurrentPage('instagram');
                                        }
                                        setSearchSuggestion('');
                                    }}
                                    className="w-full px-4 py-2 hover:bg-gray-100 flex items-center space-x-3 text-left"
                                >
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <span>{searchSuggestion}</span>
                                </button>
                            </div>
                        )}
                    </form>

                    {/* Browser Actions */}
                    <div className="flex items-center space-x-1">
                        <button className="p-2 hover:bg-gray-200 rounded-full">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Browser Content */}
            <div className="flex-1 overflow-hidden">
                {currentPage === 'home' ? (
                    <div className="h-full flex flex-col items-center justify-center bg-white p-8">
                        <div className="text-center max-w-md">
                            <div className="text-6xl mb-6">🌐</div>
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                                Navigateur Web
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Commencez à naviguer en tapant dans la barre de recherche
                            </p>
                            <div className="space-y-3">
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
                                    <p className="font-medium mb-2">💡 Astuce :</p>
                                    <p>Essayez de rechercher &quot;drive&quot; pour accéder à vos fichiers</p>
                                </div>
                                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-sm text-purple-800">
                                    <p className="font-medium mb-2">📷 Nouveau :</p>
                                    <p>Recherchez &quot;instagrom&quot; ou &quot;martin.kil&quot;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : currentPage === 'drive' ? (
                    <DriveApp />
                ) : currentPage === 'instagram' ? (
                    <InstagramApp />
                ) : null}
            </div>
        </div>
    );
}

