'use client';
import React from 'react';
import {useRouter} from "next/navigation";

export default function IdentityPage() {
    const router = useRouter()

    const handleReportProfile = () => {
        router.push("/credits");
        console.log("Profile reported for review.");
    }

    return (
        <div className="h-full w-full bg-gradient-to-br from-gray-900 via-red-900 to-black flex flex-col justify-center items-center p-8 text-white overflow-auto">
            <div className="max-w-2xl w-full bg-black/50 backdrop-blur-sm rounded-lg border-2 border-red-600 p-8 shadow-2xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="text-6xl mb-4">👤</div>
                    <h1 className="text-4xl font-bold text-red-500 mb-2">IDENTITÉ RÉVÉLÉE</h1>
                    <p className="text-gray-300">Profil du harceleur</p>
                </div>

                {/* Identity Card */}
                <div className="space-y-6 border-t border-red-900 pt-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-gray-400 text-sm">Pseudo</p>
                            <p className="text-white font-semibold text-lg">anonymous.5842</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Nom réel</p>
                            <p className="text-white font-semibold text-lg">Martin Killer</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-gray-400 text-sm">Username Instagrom</p>
                            <p className="text-white font-semibold">martin.kil</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Statut</p>
                            <p className="text-red-500 font-semibold">⚠️ HARCELEUR IDENTIFIÉ</p>
                        </div>
                    </div>

                    <div className="border-t border-red-900 pt-4">
                        <p className="text-gray-400 text-sm mb-2">Activités suspectes</p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>Messages menaçants envoyés à plusieurs utilisateurs</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>Harcèlement en ligne répété</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>Tentatives d&apos;intimidation via commentaires</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>Profil créé dans le but de nuire</span>
                            </li>
                        </ul>
                    </div>

                    <div className="border-t border-red-900 pt-4">
                        <p className="text-gray-400 text-sm mb-2">Date clé</p>
                        <p className="text-white">
                            <span className="font-semibold">1/10/2022</span> - Date du début du harcèlement
                        </p>
                    </div>
                </div>

                {/* Warning Message */}
                <div className="mt-8 bg-red-900/30 border border-red-600 rounded-lg p-4">
                    <div className="flex items-start">
                        <span className="text-2xl mr-3">⚠️</span>
                        <div>
                            <h3 className="font-bold text-red-400 mb-2">Alerte de sécurité</h3>
                            <p className="text-sm text-gray-300">
                                Ce profil a été signalé pour harcèlement en ligne.
                                Si vous êtes victime de harcèlement, contactez immédiatement les autorités
                                et bloquez ce compte.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex gap-3">
                    <button onClick={handleReportProfile} className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors">
                        Signaler le profil
                    </button>
                    <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition-colors">
                        Bloquer l&apos;utilisateur
                    </button>
                </div>
            </div>
        </div>
    );
}

