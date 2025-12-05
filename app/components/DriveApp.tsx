'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface DriveFile {
    id: number;
    name: string;
    type: 'image';
    thumbnail: string;
    isBlurred: boolean;
    date: string;
    description?: string;
    isCompromised?: boolean;
}

const driveFiles: DriveFile[] = [
    { id: 1, name: 'anniversaire_marc.jpg', type: 'image', thumbnail: '/ressources/10-janvier-2025.png', isBlurred: false, date: '15 juin 2024', description: 'Soirée d\'anniversaire' },
    { id: 2, name: 'robe_rouge_resto.jpg', type: 'image', thumbnail: '/ressources/3-octobre-2025.png', isBlurred: false, date: '22 septembre 2024', description: 'Dîner au restaurant' },
    { id: 3, name: 'diner_julien.jpg', type: 'image', thumbnail: '/ressources/13-octobre-2024.png', isBlurred: false, date: '10 janvier 2025', description: 'Dîner avec Julien' },
    { id: 4, name: 'fleurs_bureau.jpg', type: 'image', thumbnail: '/ressources/15-juin-2024.png', isBlurred: false, date: '14 avril 2025', description: 'Bouquet anonyme' },
    { id: 5, name: 'derniere_photo_julien.jpg', type: 'image', thumbnail: '/ressources/22-semptembre-2024.png', isBlurred: false, date: '20 mai 2025', description: 'Dernier moment ensemble' },
    { id: 6, name: 'volets_fermes.jpg', type: 'image', thumbnail: '/ressources/25-decembre-2025.png', isBlurred: false, date: '28 juillet 2025', description: 'Été solitaire' },
    // { id: 7, name: 'livraison_courses.jpg', type: 'image', thumbnail: '/img.png', isBlurred: true, date: '3 octobre 2025', description: 'Isolement' },
    { id: 8, name: 'masqué.jpg', type: 'image', thumbnail: '', isBlurred: false, date: '25 décembre 2025', description: '⚠️ FICHIER COMPROMIS', isCompromised: true },
];

export default function DriveApp() {
    const [selectedFile, setSelectedFile] = useState<DriveFile | null>(null);

    if (selectedFile) {
        return (
            <div className="h-full bg-gray-50 flex flex-col">
                {/* Header */}
                <div className="bg-white border-b px-4 py-3 flex items-center justify-between">
                    <button
                        onClick={() => setSelectedFile(null)}
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                    >
                        <span>←</span>
                        <span>Retour</span>
                    </button>
                    <div className="text-center">
                        <h2 className="text-lg font-medium">{selectedFile.name}</h2>
                        <p className="text-sm text-gray-500">{selectedFile.date}</p>
                        {selectedFile.description && (
                            <p className="text-xs text-gray-400">{selectedFile.description}</p>
                        )}
                    </div>
                    <div className="w-20"></div>
                </div>

                {/* Image Viewer */}
                <div className="flex-1 flex items-center justify-center p-8 bg-gray-900 relative">
                    <div className={`relative w-full h-full ${selectedFile.isBlurred ? 'blur-xl' : ''}`}>
                        <Image
                            src={selectedFile.thumbnail}
                            alt={selectedFile.name}
                            fill
                            className="object-contain"
                            style={{ filter: selectedFile.isBlurred ? 'blur(20px)' : 'none' }}
                        />
                    </div>
                </div>

                {selectedFile.isCompromised && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black via-red-950 to-black backdrop-blur-sm p-4">
                        <div className="bg-gradient-to-br from-red-950 to-red-900 border-2 border-red-500 text-white p-8 rounded-xl max-w-2xl shadow-2xl shadow-red-500/50">
                            <div className="text-7xl mb-6 animate-pulse">⚠️</div>
                            <h3 className="text-3xl font-bold mb-6 text-red-200">DONNÉES COMPROMISES</h3>

                            <div className="space-y-4 text-left mb-8">
                                <p className="text-lg">
                                    Vos contenus sensibles ont été découverts et indexés.
                                </p>
                                <p className="text-red-300 font-semibold">
                                    Nous avons accès à :
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-red-200 ml-4">
                                    <li>Vos photos et vidéos privées</li>
                                    <li>Vos conversations personnelles</li>
                                    <li>Vos informations bancaires</li>
                                    <li>Les contacts de vos proches</li>
                                </ul>
                            </div>

                            <div className="bg-black/40 p-6 rounded-lg border border-red-500/50 mb-6">
                                <p className="text-sm text-red-300 mb-4">
                                    Les preuves ont été retrouvées sur ces plateformes :
                                </p>
                                <div className="space-y-3">
                                    <a
                                        href="/desktop?app=browser&url=onlyfon"
                                        className="block w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                                    >
                                        <div className="flex items-center justify-center gap-3">
                                            <span className="text-2xl">💎</span>
                                            <span>Voir le profil OnlyFon</span>
                                        </div>
                                    </a>
                                    <a
                                        href="/desktop?app=browser&url=instagrom"
                                        className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                                    >
                                        <div className="flex items-center justify-center gap-3">
                                            <span className="text-2xl">📷</span>
                                            <span>Voir les messages Instagram</span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="text-xs text-red-400 italic border-t border-red-500/50 pt-4">
                                &quot;Je sais tout. Tes vidéos, tes messages, l&apos;adresse de tes parents, le mail pro de Julien...&quot;
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="h-full bg-white flex flex-col">
            {/* Drive Header */}
            <div className="border-b bg-white px-6 py-4">
                <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                        <svg className="w-10 h-10" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
                            <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
                            <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/>
                            <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
                            <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
                            <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
                            <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
                        </svg>
                        <h1 className="text-xl font-medium text-gray-800">Mon Drive</h1>
                    </div>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="px-6 py-2 border-b bg-gray-50">
                <div className="flex items-center space-x-2 text-sm">
                    <span className="text-gray-600">Mon Drive</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-900">Photos personnelles</span>
                </div>
            </div>

            {/* Files Grid */}
            <div className="flex-1 overflow-auto p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {driveFiles.map((file) => (
                        <button
                            key={file.id}
                            onClick={() => setSelectedFile(file)}
                            className="group relative bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg transition-shadow cursor-pointer"
                        >
                            {/* Thumbnail */}
                            <div className="aspect-square bg-gray-100 rounded mb-2 overflow-hidden relative">
                                <Image
                                    src={file.thumbnail}
                                    alt={file.name}
                                    fill
                                    className={`object-cover ${
                                        file.isBlurred ? 'blur-md' : ''
                                    }`}
                                    style={{ filter: file.isBlurred ? 'blur(8px)' : 'none' }}
                                />
                            </div>

                            {/* File Info */}
                            <div className="flex items-start space-x-2">
                                <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                </svg>
                                <div className="flex-1 min-w-0 text-left">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        {file.name}
                                    </p>
                                    <p className="text-xs text-gray-500">{file.date}</p>
                                    {file.description && (
                                        <p className="text-xs text-gray-400 truncate">{file.description}</p>
                                    )}
                                </div>
                            </div>

                            {file.name === 'masqué.jpg' && (
                                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                    Sensible
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

