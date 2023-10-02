import React from 'react';
import { Track } from './track';

export function SearchResults({searchReturns}) 
{
    return (
        <div className='searchResults'>
            {searchReturns.map((track) => <Track  trackInfo={track}/>)}
        </div>
    )
}