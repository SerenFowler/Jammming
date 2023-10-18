import React from 'react';
import {v4 as uuidv4} from 'uuid';

export function Track(props) 
{
    function addToPlaylist()
    {
        let clonePlaylist = structuredClone(props.playlists[props.selectedPlaylist]);
        if(props.isPlaylist != true)
        {
            clonePlaylist.tracks.push({
                title: props.trackInfo.title, 
                artist: props.trackInfo.artist, 
                album: props.trackInfo.album, 
                genre: props.trackInfo.genre, 
                id: uuidv4()});
        } else 
        {
            const trackToRemoveIndex = props.playlists[props.selectedPlaylist].tracks.findIndex(track => track.id == props.trackInfo.id);
            clonePlaylist.tracks.splice(trackToRemoveIndex, 1);
        }
        let clonePlaylistShell = [...props.playlists];
        clonePlaylistShell.splice(props.selectedPlaylist, 1, clonePlaylist);
        props.setPlaylists(clonePlaylistShell);
    }

    return(
        <div className='track' key={props.trackInfo.id}>
            <div className='text'>
                <h4>{props.trackInfo.title}</h4>
                <p>{`${props.trackInfo.artist}, ${props.trackInfo.album}, ${props.trackInfo.genre}`}</p>
            </div>
            <div className='button' onClick={addToPlaylist}>
                <p>{(props.isPlaylist === true) ? "Remove": "Add"}</p>
            </div>
        </div>
    )
}