import React, {useState} from 'react';
import { Track } from './track';

export function Playlist(props)
{
    return (
        <div  className='playlist'>
            <h3>{props.playlistInfo.playlistName}</h3>
            {props.playlistInfo.tracks.map((track) => <Track trackInfo={track} isPlaylist={true} setPlaylists={props.setPlaylists} playlists={props.playlists} selectedPlaylist={props.selectedPlaylist} />)}
        </div>
    )
}