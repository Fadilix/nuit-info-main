'use client';
import React, {useState} from 'react';
import Image from 'next/image';

interface DriveFile {
    id: number;
    name: string;
    type: 'image' | 'folder' | 'link';
    thumbnail: string;
    isBlurred: boolean;
    date: string;
    description?: string;
    isCompromised?: boolean;
    children?: DriveFile[];
    linkUrl?: string;
    linkIcon?: string;
}

const driveFiles: DriveFile[] = [
    {
        id: 1,
        name: 'anniversaire_marc.jpg',
        type: 'image',
        thumbnail: '/ressources/10-janvier-2025.png',
        isBlurred: false,
        date: '15 juin 2024',
        description: 'Soirée d\'anniversaire'
    },
    {
        id: 2,
        name: 'robe_rouge_resto.jpg',
        type: 'image',
        thumbnail: '/ressources/3-octobre-2025.png',
        isBlurred: false,
        date: '22 septembre 2024',
        description: 'Dîner au restaurant'
    },
    {
        id: 3,
        name: 'diner_julien.jpg',
        type: 'image',
        thumbnail: '/ressources/13-octobre-2024.png',
        isBlurred: false,
        date: '10 janvier 2025',
        description: 'Dîner avec Julien'
    },
    {
        id: 4,
        name: 'fleurs_bureau.jpg',
        type: 'image',
        thumbnail: '/ressources/15-juin-2024.png',
        isBlurred: false,
        date: '14 avril 2025',
        description: 'Bouquet anonyme'
    },
    {
        id: 5,
        name: 'derniere_photo_julien.jpg',
        type: 'image',
        thumbnail: '/ressources/22-semptembre-2024.png',
        isBlurred: false,
        date: '20 mai 2025',
        description: 'Dernier moment ensemble'
    },
    {
        id: 6,
        name: 'volets_fermes.jpg',
        type: 'image',
        thumbnail: '/ressources/25-decembre-2025.png',
        isBlurred: false,
        date: '28 juillet 2025',
        description: 'Été solitaire'
    },
    // { id: 7, name: 'livraison_courses.jpg', type: 'image', thumbnail: '/img.png', isBlurred: true, date: '3 octobre 2025', description: 'Isolement' },
    {
        id: 8,
        name: 'Données Compromises',
        type: 'folder',
        thumbnail: '',
        isBlurred: false,
        date: '25 décembre 2025',
        description: '⚠️ DOSSIER SENSIBLE',
        isCompromised: true,
        children: [
            {
                id: 81,
                name: 'OnlyFon - emily.rose_exclusive',
                type: 'link',
                thumbnail: '',
                isBlurred: false,
                date: '25 décembre 2025',
                description: '🔗 Profil compromis',
                linkUrl: '/desktop?app=browser&url=onlyfon',
                linkIcon: '💎'
            },
            // {
            //     id: 82,
            //     name: 'Instagram - Messages privés',
            //     type: 'link',
            //     thumbnail: '',
            //     isBlurred: false,
            //     date: '25 décembre 2025',
            //     description: '🔗 Conversations exposées',
            //     linkUrl: '/desktop?app=browser&url=instagrom',
            //     linkIcon: '📷'
            // }
        ]
    },
];

export default function DriveApp() {
    const [selectedFile, setSelectedFile] = useState<DriveFile | null>(null);
    const [currentFolder, setCurrentFolder] = useState<DriveFile | null>(null);
    const [breadcrumb, setBreadcrumb] = useState<string[]>(['Mon Drive', 'Photos personnelles']);

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
                            style={{filter: selectedFile.isBlurred ? 'blur(20px)' : 'none'}}
                        />
                    </div>
                </div>
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
                            <path
                                d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
                                fill="#0066da"/>
                            <path
                                d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
                                fill="#00ac47"/>
                            <path
                                d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
                                fill="#ea4335"/>
                            <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
                                  fill="#00832d"/>
                            <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
                                  fill="#2684fc"/>
                            <path
                                d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
                                fill="#ffba00"/>
                        </svg>
                        <h1 className="text-xl font-medium text-gray-800">Mon Drive</h1>
                    </div>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="px-6 py-2 border-b bg-gray-50">
                <div className="flex items-center space-x-2 text-sm">
                    {breadcrumb.map((crumb, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && <span className="text-gray-400">/</span>}
                            <button
                                onClick={() => {
                                    if (index < breadcrumb.length - 1) {
                                        setBreadcrumb(breadcrumb.slice(0, index + 1));
                                        setCurrentFolder(null);
                                    }
                                }}
                                className={`${
                                    index === breadcrumb.length - 1
                                        ? 'text-gray-900 font-medium'
                                        : 'text-blue-600 hover:underline cursor-pointer'
                                }`}
                            >
                                {crumb}
                            </button>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Files Grid */}
            <div className="flex-1 overflow-auto p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {(currentFolder ? currentFolder.children || [] : driveFiles).map((file) => {
                        const handleFileClick = () => {
                            if (file.type === 'folder') {
                                setCurrentFolder(file);
                                setBreadcrumb([...breadcrumb, file.name]);
                            } else if (file.type === 'link') {
                                // Navigate to link URL
                                window.location.href = file.linkUrl || '#';
                            } else {
                                setSelectedFile(file);
                            }
                        };

                        if (file.type === 'link') {
                            return (
                                <a
                                    key={file.id}
                                    href={file.linkUrl}
                                    className="group relative bg-gradient-to-br border-2 rounded-lg p-3 hover:shadow-lg transition-all cursor-pointer transform hover:scale-105"
                                >
                                    {/* Link Icon */}
                                    <div
                                        className="aspect-square rounded mb-2 overflow-hidden relative flex items-center justify-center border">
                                        <span className="text-6xl">{file.linkIcon}</span>
                                    </div>

                                    {/* File Info */}
                                    <div className="flex items-start space-x-2">
                                        <svg className="w-5 h-5 text-black flex-shrink-0 mt-0.5" fill="currentColor"
                                             viewBox="0 0 20 20">
                                            <path
                                                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"/>
                                        </svg>
                                        <div className="flex-1 min-w-0 text-left">
                                            <p className="text-sm font-medium truncate">
                                                {file.name}
                                            </p>
                                            <p className="text-xs text--400">{file.date}</p>
                                            {file.description && (
                                                <p className="text-xs truncate">{file.description}</p>
                                            )}
                                        </div>
                                    </div>
                                </a>
                            );
                        }

                        return (
                            <button
                                key={file.id}
                                onClick={handleFileClick}
                                className={`group relative rounded-lg p-3 hover:shadow-lg transition-all cursor-pointer bg-white border border-gray-200`}
                            >
                                {/* Thumbnail or Folder Icon */}
                                <div
                                    className="aspect-square bg-gray-100 rounded mb-2 overflow-hidden relative flex items-center justify-center">
                                    {file.type === 'folder' ? (
                                        <span className="text-6xl">
                                            {file.isCompromised ? '📁' : '📁'}
                                        </span>
                                    ) : (
                                        <Image
                                            src={file.thumbnail}
                                            alt={file.name}
                                            fill
                                            className={`object-cover ${
                                                file.isBlurred ? 'blur-md' : ''
                                            }`}
                                            style={{filter: file.isBlurred ? 'blur(8px)' : 'none'}}
                                        />
                                    )}
                                </div>

                                {/* File Info */}
                                <div className="flex items-start space-x-2">
                                    <svg
                                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                            file.type === 'folder' && file.isCompromised
                                                ? ''
                                                : 'text-blue-500'
                                        }`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        {file.type === 'folder' ? (
                                            <path
                                                d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                                        ) : (
                                            <path fillRule="evenodd"
                                                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                  clipRule="evenodd"/>
                                        )}
                                    </svg>
                                    <div className="flex-1 min-w-0 text-left">
                                        <p className={`text-sm font-medium truncate text-gray-900`}>
                                            {file.name}
                                        </p>
                                        <p className={`text-xs ${
                                            file.type === 'folder' && "text-black"
                                        }`}>
                                            {file.date}
                                        </p>
                                        {file.description && (
                                            <p className={`text-xs truncate`}>
                                                {file.description}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/*{file.isCompromised && (*/}
                                {/*    <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded animate-pulse">*/}
                                {/*        DANGER*/}
                                {/*    </div>*/}
                                {/*)}*/}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

