import React, {useState} from 'react';
import { Track } from './track';

export function Playlist(props)
{
    const handleChange = (e) => {
        //e.preventDefault();  //found to be not inherently nessicary
        let clonePlaylist = structuredClone(props.playlists[props.selectedPlaylist]);
        clonePlaylist.playlistName = e.target.value;
        let clonePlaylistShell = [...props.playlists];
        clonePlaylistShell.splice(props.selectedPlaylist, 1, clonePlaylist);
        props.setPlaylists(clonePlaylistShell);
    }

    return (
        <div  className='playlist' key={props.playlistInfo.id}>
            <input value={props.playlistInfo.playlistName} type="text" onChange={handleChange}></input>
            {props.playlistInfo.tracks.map((track) => <Track trackInfo={track} isPlaylist={true} setPlaylists={props.setPlaylists} playlists={props.playlists} selectedPlaylist={props.selectedPlaylist} />)}
        </div>
    )
}