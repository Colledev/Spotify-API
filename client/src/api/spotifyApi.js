import axios from 'axios';

const SPOTIFY_BASE_URL = 'https://api.spotify.com/v1';

const spotifyApi = axios.create({
    baseURL: SPOTIFY_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export async function getRecentlyPlayedTracks(accessToken) {
    try {
        const response = await spotifyApi.get('/me/player/recently-played', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to get recently played tracks from Spotify API.');
    }
}

export async function GetCurrentlyPlayingTrack(accessToken) {
    try {
        const response = await spotifyApi.get('/me/player/currently-playing', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to get currently playing track from Spotify API.');
    }
}