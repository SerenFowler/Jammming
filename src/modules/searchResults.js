import React from 'react';
import { Track } from './track';

export function SearchResults(props) 
{
    return (
        <div className='searchResults'>
            {props.searchReturns.map((track) => <Track  trackInfo={track} setPlaylists={props.setPlaylists} playlists={props.playlists} selectedPlaylist={props.selectedPlaylist}/>)}
        </div>
    )
}