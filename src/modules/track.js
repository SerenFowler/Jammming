import React from 'react';

export function Track({trackInfo}) 
{
    return(
        <div>
            <h3>{trackInfo.title}</h3>
            <p>{trackInfo.artist}</p>
            <p>{trackInfo.genre}</p>
        </div>
    )
}