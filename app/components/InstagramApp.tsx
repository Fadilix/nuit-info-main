'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface Post {
    id: number;
    username: string;
    imageUrl: string;
    likes: string;
    comments: Array<{ username: string; text: string; isWarning?: boolean }>;
}

const posts: Post[] = [
    {
        id: 1,
        username: 'emily.rose',
        imageUrl: 'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=600&auto=format&fit=crop&q=60',
        likes: '3,842 likes',
        comments: [
            { username: 'zoey.dev', text: 'EMILY 😳😳 tu brilles là !!' },
            { username: 'ken.photo', text: 'On dirait un film 🔥🔥🔥' },
            { username: 'mila.art', text: 'Mais W T F c\'est trop beau 😭💗' },
            { username: 'emily.rose', text: 'stopppp vous êtes adorables 😭💞' },
            { username: 'anonymous.5842', text: 'Attention, fr...' },
        ]
    },
    {
        id: 2,
        username: 'emily.rose',
        imageUrl: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1474&auto=format&fit=crop',
        likes: '1,932 likes',
        comments: [
            { username: 'alex', text: 'Comment même ta TABLE est esthétique ??? 😭' },
            { username: 'zoey.dev', text: 'Je refuse de croire que c\'est juste une table 😭' },
            { username: 'emily.rose', text: 'LMAO arrêtez 💀💀💀' },
        ]
    },
    {
        id: 3,
        username: 'zoey.dev',
        imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&auto=format&fit=crop',
        likes: '5,104 likes',
        comments: [
            { username: 'mila.art', text: 'ZOEYYY arrête d\'être trop ICONIQUE 😭🔥' },
            { username: 'ken.photo', text: 'Je hurle c\'est trop propre 🤯' },
            { username: 'emily.rose', text: 'ok queen 👑✨' },
        ]
    },
    {
        id: 4,
        username: 'ken.photo',
        imageUrl: 'https://images.unsplash.com/photo-1526040652367-ac003a0475fe?w=600&auto=format&fit=crop',
        likes: '2,847 likes',
        comments: [
            { username: 'zoey.dev', text: 'KENNNN c\'est trop stylé ça 🔥🔥🔥' },
            { username: 'emily.rose', text: 'Bro calme-toi tu vas casser Insta 💀' },
            { username: 'alex', text: 'Ça tape, vraiment 😳' },
            { username: 'anonymous.5842', text: 'Si j\'étais toi, je m\'afficherais pas sur les réseaux', isWarning: true },
        ]
    },
];

export default function InstagramApp() {
    const [selectedWarning, setSelectedWarning] = useState<string | null>(null);

    const handleWarningClick = (username: string) => {
        if (username === 'anonymous.5842') {
            setSelectedWarning('warning');
        }
    };

    if (selectedWarning === 'warning') {
        return (
            <div className="h-full bg-white flex flex-col items-center justify-center p-8">
                <div className="max-w-md text-center">
                    <div className="text-6xl mb-6">⚠️</div>
                    <h2 className="text-2xl font-bold text-red-600 mb-4">ATTENTION</h2>
                    <p className="text-gray-700 mb-6">
                        Ce profil a été signalé pour comportement suspect et harcèlement en ligne.
                    </p>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                        <p className="text-sm text-red-800">
                            <strong>anonymous.5842</strong> a été identifié comme harceleur potentiel.
                            Plusieurs utilisateurs ont signalé des messages menaçants.
                        </p>
                    </div>
                    <button
                        onClick={() => setSelectedWarning(null)}
                        className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                    >
                        Retour au fil
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="h-full bg-gradient-to-b from-purple-400 to-pink-400 overflow-auto">
            {/* Instagram Header */}
            <div className="bg-white border-b px-4 py-3 sticky top-0 z-10 shadow-sm">
                <div className="flex items-center justify-between max-w-xl mx-auto">
                    <h1 className="text-2xl font-bold" style={{ fontFamily: 'cursive', color: '#262626' }}>
                        Instagrom
                    </h1>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Feed */}
            <div className="py-5">
                <div className="max-w-xl mx-auto space-y-6">
                    {posts.map((post) => (
                        <div key={post.id} className="bg-white rounded-md shadow-md overflow-hidden">
                            {/* Post Header */}
                            <div className="flex items-center p-3">
                                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                                <span className="font-semibold text-sm">{post.username}</span>
                            </div>

                            {/* Post Image */}
                            <div className="relative w-full" style={{ height: '300px' }}>
                                <Image
                                    src={post.imageUrl}
                                    alt={`Post by ${post.username}`}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>

                            {/* Post Actions */}
                            <div className="p-3 text-2xl flex items-center space-x-4">
                                <span className="cursor-pointer hover:opacity-70">❤️</span>
                                <span className="cursor-pointer hover:opacity-70">💬</span>
                                <span className="cursor-pointer hover:opacity-70">➤</span>
                            </div>

                            {/* Post Info */}
                            <div className="px-3 pb-3">
                                <div className="font-semibold text-sm mb-2">{post.likes}</div>
                                <div className="space-y-1">
                                    {post.comments.map((comment, idx) => (
                                        <div key={idx} className="text-sm">
                                            <button
                                                onClick={() => handleWarningClick(comment.username)}
                                                className={`font-semibold mr-2 ${
                                                    comment.isWarning 
                                                        ? 'text-red-600 hover:underline cursor-pointer' 
                                                        : 'text-black'
                                                }`}
                                            >
                                                {comment.username}
                                            </button>
                                            <span className={comment.isWarning ? 'text-red-600' : 'text-gray-800'}>
                                                {comment.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

