import React from "react";

const SongTrack = () => {
    return (
        <div className="fixed bottom-0 left-72 w-full bg-neutral-900 h-40 flex justify-center items-center">
            <div className="flex justify-between items-center">
                <button className="text-zinc-200 text-xl rounded-full mx-4">Back</button>
                <button className="text-zinc-200 text-xl rounded-full mx-4">Play</button>
                <button className="text-zinc-200 text-xl rounded-full mx-4">Next</button>
            </div>
        </div>
    );
}

export default SongTrack;