import React from 'react';

export function SearchBar() 
{
    function handleSubmit(e){
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className='searchBar' type="text" placeholder="Search for a song, artist, or album."></input>
            <input type="submit" value="Search"></input>
        </form>
    )
}