import React from 'react';
import { Track } from './track';

export function Playlist({playlistInfo})
{
    return (
        <div  className='playlist'>
            <h3>{playlistInfo.playlistName}</h3>
            {playlistInfo.tracks.map((track) => <Track trackInfo={track} isPlaylist={true} />)}
        </div>
    )
}