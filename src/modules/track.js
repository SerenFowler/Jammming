import React from 'react';

export function Track(props) 
{
    function addToPlaylist()
    {
        if(props.isPlaylist != true)
        {
            let clonePlaylist = structuredClone(props.playlists[props.selectedPlaylist]);
            clonePlaylist.tracks.push(props.trackInfo);
            let clonePlaylistShell = [...props.playlists];
            console.log(clonePlaylistShell);
            //console.log(props.playlists)
            clonePlaylistShell.splice(props.selectedPlaylist, 1, clonePlaylist);

            //console.log(clonePlaylistShell);
            //console.log(props.playlists);
            props.setPlaylists(clonePlaylistShell);
            //console.log(props.playlists);
        }
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