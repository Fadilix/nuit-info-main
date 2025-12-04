'use client';

export default function Desktop() {
    return (
        <div className="h-screen w-screen wallpaper relative overflow-hidden">
            {/* Desktop Background */}
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Taskbar */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-black/80 backdrop-blur-sm border-t border-gray-600 flex items-center px-4">
                {/* Start Menu Button */}
                <button className="flex items-center space-x-2 px-3 py-1 rounded hover:bg-white/10 transition-colors">
                    <div className="w-6 h-6 bg-orange-500 rounded-sm flex items-center justify-center">
                        <span className="text-white text-xs font-bold">U</span>
                    </div>
                    <span className="text-white text-sm">Activities</span>
                </button>
                
                {/* Application Icons */}
                <div className="flex space-x-2 ml-4">
                    <button className="w-8 h-8 bg-orange-600 rounded-sm flex items-center justify-center hover:bg-orange-700 transition-colors">
                        <span className="text-white text-xs">🗂</span>
                    </button>
                    <button className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <span className="text-white text-xs">🌐</span>
                    </button>
                    <button className="w-8 h-8 bg-gray-600 rounded-sm flex items-center justify-center hover:bg-gray-700 transition-colors">
                        <span className="text-white text-xs">⚙️</span>
                    </button>
                </div>
                
                {/* System Tray */}
                <div className="flex items-center space-x-3 ml-auto">
                    <span className="text-white text-xs">🔊</span>
                    <span className="text-white text-xs">📶</span>
                    <span className="text-white text-xs">🔋</span>
                    <span className="text-white text-sm">
                        {new Date().toLocaleTimeString('en-US', { 
                            hour12: false, 
                            hour: '2-digit', 
                            minute: '2-digit' 
                        })}
                    </span>
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
                            <p className="mt-2">Click anywhere to get started...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
