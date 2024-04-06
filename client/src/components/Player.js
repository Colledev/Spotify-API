import React, { useEffect, useState } from 'react';
import { GetCurrentlyPlayingTrack, getRecentlyPlayedTracks } from '../api/spotifyApi';
import { getTokenFromLocalStorage } from '../utils/utils';

const Player = () => {
    const [playbackState, setPlaybackState] = useState(null);
    const [recentlyPlayedTracks, setRecentlyPlayedTracks] = useState([]);
    const { accessToken } = getTokenFromLocalStorage();

    useEffect(() => {
        if (accessToken) {
            const fetchCurrentlyPlayingTrack = async () => {
                try {
                    const data = await GetCurrentlyPlayingTrack(accessToken);
                    setPlaybackState(data);
                } catch (error) {
                    console.error('Error fetching currently playing track:', error);
                }
            };

            const fetchRecentlyPlayedTracksData = async () => {
                try {
                    const data = await getRecentlyPlayedTracks(accessToken);
                    setRecentlyPlayedTracks(data.items);
                } catch (error) {
                    console.error('Error fetching recently played tracks:', error);
                }
            };

            fetchCurrentlyPlayingTrack();
            fetchRecentlyPlayedTracksData();
            const intervalId = setInterval(() => {
                fetchCurrentlyPlayingTrack();
                fetchRecentlyPlayedTracksData();
            }, 2000);
            return () => clearInterval(intervalId);
        }
    }, [accessToken]);



    return (
        <div className="flex items-center fixed bottom-0 left-72 w-full bg-neutral-900 h-40">
            <div className='ml-8'>
                <img src={'/player/up.png'} alt="Ícone do Spotify" className="w-14" />
            </div>
            <div className="flex flex-col items-center justify-center">
                {playbackState ? (
                    <div className="flex items-center justify-between w-full">
                        {playbackState.item && playbackState.item.album && playbackState.item.album.images && playbackState.item.album.images.length > 0 && (
                            <img src={playbackState.item.album.images[0].url} alt="Album cover" className="w-32 h-32 ml-8" />
                        )}
                        <div className="flex flex-col ml-8">
                            <span className="text-zinc-200 font-semibold">{playbackState.item ? playbackState.item.name : 'Unknown'}</span>
                            <span className="text-zinc-400">{playbackState.item && playbackState.item.artists && playbackState.item.artists.length > 0 ? playbackState.item.artists[0].name : 'Unknown Artist'}</span>
                        </div>
                    </div>
                ) : (
                    recentlyPlayedTracks.length > 0 ? (
                        <div className="flex items-center justify-between w-full">
                            {recentlyPlayedTracks[0].track && recentlyPlayedTracks[0].track.album && recentlyPlayedTracks[0].track.album.images && recentlyPlayedTracks[0].track.album.images.length > 0 && (
                                <img src={recentlyPlayedTracks[0].track.album.images[0].url} alt="Album cover" className="w-32 h-32 ml-8" />
                            )}
                            <div className="flex flex-col ml-8">
                                <span className="text-zinc-200 font-semibold">{recentlyPlayedTracks[0].track ? recentlyPlayedTracks[0].track.name : 'Unknown'}</span>
                                <span className="text-zinc-400">{recentlyPlayedTracks[0].track && recentlyPlayedTracks[0].track.artists && recentlyPlayedTracks[0].track.artists.length > 0 ? recentlyPlayedTracks[0].track.artists[0].name : 'Unknown Artist'}</span>
                            </div>
                        </div>
                    ) : (
                        <span className="text-zinc-200 text-2xl ml-8">No music playing</span>
                    )
                )}
            </div>
            <div className='fixed flex content-between right-72'>
                <img src={'/player/heart.png'} alt="Ícone do Spotify" className="w-10 h-10" />
                <img src={'/player/plus.png'} alt="Ícone do Spotify" className="w-10 h-10 ml-12" />
                <img src={'/player/upload.png'} alt="Ícone do Spotify" className="w-10 h-10 ml-12" />
            </div>
        </div>
    );
}

export default Player;
