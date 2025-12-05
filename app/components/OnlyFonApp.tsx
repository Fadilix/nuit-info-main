'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface Profile {
    username: string;
    displayName: string;
    bio: string;
    profileImage: string;
    coverImage: string;
    postCount: number;
    subscribers: string;
}

interface Post {
    id: number;
    imageUrl: string;
    likes: number;
    timestamp: string;
}

const profile: Profile = {
    username: '@emily.rose_exclusive',
    displayName: 'Emily Rose 🌹',
    bio: 'Contenu exclusif ✨ Photos professionnelles 📸 DM sur insta pour collaborations',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&auto=format&fit=crop&q=80',
    postCount: 234,
    subscribers: '12.5K'
};

const posts: Post[] = [
    {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=80',
        likes: 1284,
        timestamp: 'Il y a 2 heures'
    },
    {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=80',
        likes: 2156,
        timestamp: 'Il y a 5 heures'
    },
    {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&auto=format&fit=crop&q=80',
        likes: 1892,
        timestamp: 'Il y a 1 jour'
    },
    {
        id: 4,
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80',
        likes: 2341,
        timestamp: 'Il y a 2 jours'
    },
    {
        id: 5,
        imageUrl: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=600&auto=format&fit=crop&q=80',
        likes: 1567,
        timestamp: 'Il y a 3 jours'
    },
    {
        id: 6,
        imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80',
        likes: 1978,
        timestamp: 'Il y a 4 jours'
    }
];

export default function OnlyFonApp() {
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    return (
        <div className="h-full bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 overflow-auto">
            {/* Header */}
            <div className="bg-black/30 backdrop-blur-sm border-b border-white/10 px-6 py-4 sticky top-0 z-10">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-white">
                        OnlyFon 💎
                    </h1>
                    <div className="flex items-center space-x-4">
                        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition-colors">
                            S&apos;abonner
                        </button>
                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto pb-8">
                {/* Cover Image */}
                <div className="relative h-64 bg-gradient-to-r from-purple-600 to-pink-600">
                    <Image
                        src={profile.coverImage}
                        alt="Cover"
                        fill
                        className="object-cover opacity-70 blur-2xl"
                        unoptimized
                    />
                </div>

                {/* Profile Section */}
                <div className="px-6 -mt-20 relative z-10">
                    <div className="flex items-end space-x-6 mb-6">
                        <div className="relative w-40 h-40 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white">
                            <Image
                                src={profile.profileImage}
                                alt={profile.displayName}
                                fill
                                className="object-cover blur-xl"
                                unoptimized
                            />
                        </div>
                        <div className="flex-1 pb-4">
                            <h2 className="text-3xl font-bold text-white mb-2">{profile.displayName}</h2>
                            <p className="text-lg text-blue-300 mb-2">{profile.username}</p>
                            <div className="flex items-center space-x-6 text-white">
                                <div>
                                    <span className="font-bold text-xl">{profile.postCount}</span>
                                    <span className="text-gray-300 ml-2">Publications</span>
                                </div>
                                <div>
                                    <span className="font-bold text-xl">{profile.subscribers}</span>
                                    <span className="text-gray-300 ml-2">Abonnés</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                        <p className="text-white text-lg">{profile.bio}</p>
                    </div>

                    {/* Stats Bar */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-8 flex items-center justify-around">
                        <div className="text-center">
                            <p className="text-2xl font-bold text-white">98%</p>
                            <p className="text-sm text-gray-300">Taux d&apos;engagement</p>
                        </div>
                        <div className="w-px h-12 bg-white/20"></div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-white">4.9⭐</p>
                            <p className="text-sm text-gray-300">Note moyenne</p>
                        </div>
                        <div className="w-px h-12 bg-white/20"></div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-white">24/7</p>
                            <p className="text-sm text-gray-300">Contenu actif</p>
                        </div>
                    </div>

                    {/* Posts Grid */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Publications 📸</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {posts.map((post) => (
                                <button
                                    key={post.id}
                                    onClick={() => setSelectedPost(post)}
                                    className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer transform transition-transform hover:scale-105"
                                >
                                    <Image
                                        src={post.imageUrl}
                                        alt={`Post ${post.id}`}
                                        fill
                                        className="object-cover blur-2xl"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                        <div className="text-white">
                                            <div className="flex items-center space-x-2">
                                                <span className="text-lg">❤️</span>
                                                <span className="font-semibold">{post.likes.toLocaleString()}</span>
                                            </div>
                                            <p className="text-sm text-gray-200">{post.timestamp}</p>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for selected post */}
            {selectedPost && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedPost(null)}
                >
                    <div className="relative max-w-4xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setSelectedPost(null)}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                            <Image
                                src={selectedPost.imageUrl}
                                alt="Selected post"
                                fill
                                className="object-cover blur-2xl"
                                unoptimized
                            />
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm mt-4 p-4 rounded-lg">
                            <div className="flex items-center justify-between text-white">
                                <div className="flex items-center space-x-2">
                                    <span className="text-2xl">❤️</span>
                                    <span className="font-bold text-xl">{selectedPost.likes.toLocaleString()}</span>
                                </div>
                                <span className="text-gray-300">{selectedPost.timestamp}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

