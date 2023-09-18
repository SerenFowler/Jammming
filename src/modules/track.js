import React from 'react';

export default function Track({trackInfo}) 
{
    return(
        <div key={trackInfo.id}>
            <h3>{trackInfo.title}</h3>
            <p>{`${trackInfo.artist}, ${trackInfo.album}, ${trackInfo.genre}`}</p>
        </div>
    )
}