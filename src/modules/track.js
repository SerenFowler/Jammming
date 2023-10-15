import React from 'react';

export function Track(props) 
{
    function addToPlaylist()
    {
        let clonePlaylist = props.playlists[props.selectedPlaylist];
        console.log(clonePlaylist);
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