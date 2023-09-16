import React from 'react';
import Track from './track';

export function Playlist({playlistInfo})
{
    return (
        <div>
            {playlistInfo.map((track) => <Track  trackInfo={track}/>)}
        </div>
    )
}