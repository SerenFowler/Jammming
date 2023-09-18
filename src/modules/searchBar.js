import React from 'react';

export function SearchBar() {
    return (
        <form>
            <input type="text" placeholder="Search for a song, artist, or album."></input>
            <input type="submit" value="Search"></input>
        </form>
    )
}