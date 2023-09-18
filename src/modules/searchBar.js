import React from 'react';

export function SearchBar() {
    return (
        <form>
            <input type="text" placeholder="Search for a song."></input>
            <input type="submit" value="Search"></input>
        </form>
    )
}