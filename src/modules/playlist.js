import React from 'react';
import { Track } from './track';

export function Playlist({playlistInfo})
{
    return (
        <div  className='playlist'>
            {playlistInfo.map((track) => <Track  trackInfo={track}/>)}
        </div>
    )
}