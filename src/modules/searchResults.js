import React from 'react';
import { Track } from './track';

export function SearchResults({searchReturns}) 
{
    return (
        <div>
            {searchReturns.map((track) => <Track  trackInfo={track}/>)}
        </div>
    )
}