import React from "react";

function Sidebar() {
    return (
        <div className="w-72 h-screen bg-zinc-950 p-6">
            <div className="mt-4">
                <img src={'/Spotifyicon.png'} alt="Ícone do Spotify" className="w-56 " />
            </div>
            <nav className="space-y-10 mt-10 ml-6">
                <a href="" className="flex items-center gap-3 text-3xl font-semibold text-zinc-200">
                    Home
                </a>
                <a href="" className="flex items-center gap-3 text-3xl font-semibold text-zinc-200">
                    Search
                </a>
                <a href="" className="flex items-center gap-3 text-3xl font-semibold text-zinc-200">
                    Your Library
                </a>
            </nav>
        </div>
    );
}

export default Sidebar;