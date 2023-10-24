import React, {useState} from 'react';
import { Track } from './track';

export function Playlist(props)
{
    return (
        <div  className='playlist' key={props.playlistInfo.id}>
            <input value={props.playlistInfo.playlistName} type="text"></input>
            {props.playlistInfo.tracks.map((track) => <Track trackInfo={track} isPlaylist={true} setPlaylists={props.setPlaylists} playlists={props.playlists} selectedPlaylist={props.selectedPlaylist} />)}
        </div>
    )
}