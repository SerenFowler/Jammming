import React from 'react';

export function Track({trackInfo}) 
{
    return(
        <div className='track' key={trackInfo.id}>
            <div className='text'>
                <h4>{trackInfo.title}</h4>
                <p>{`${trackInfo.artist}, ${trackInfo.album}, ${trackInfo.genre}`}</p>
            </div>
            <div className='button'>
                <p>Remove</p>
            </div>
        </div>
    )
}