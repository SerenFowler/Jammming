import React, {useState, useEffect} from 'react';
import './App.css';

import { Playlist } from './modules/playlist';
import { SearchBar } from './modules/searchBar';
import { SearchResults } from './modules/searchResults';

//Hardcodes for testing 
let testTracks = 
[
  {title: "I see Fire", artist: "Ed Sheeran", album: "The Hobbit Soundtrack", genre: "Folk", id:1}, 
  {title: "Fearless", artist: "Taylor Swift", album: "Fearless", genre: "Country", id:2}, 
  {title: "Fast Car", artist: "Tracy Chapman", album: "Tracy Chapman", genre: "Folk Rock", id:3}, 
  {title: "A case of you", artist: "Joni Mitchell", album: "Blue", genre: "Folk", id:4}, 
  {title: "Home", artist: "Gabriel Aplin", album: "Home", genre: "folk", id:5}, 
  {title: "", artist: "", album: "", genre: ""}, 
  {title: "", artist: "", album: "", genre: ""}
]

let testPlaylist = 
{
  playlistName: "Nananana",
  tracks: [
    {title: "A case of you", artist: "Joni Mitchell", album: "Blue", genre: "Folk", id:4}, 
    {title: "Home", artist: "Gabriel Aplin", album: "Home", genre: "folk", id:5}
  ]
}

//App
function App() 
{
  //State Declarations
  let [playlists, setPlaylists] = useState([testPlaylist]);
  let [selectedPlaylist, setSelectedPlaylist] = useState(0);

  //Function Declarations
  function addToPlaylist(props, e)
  {
    let clonePlaylist = playlists[selectedPlaylist];
    let track = props.trackInfo;
    clonePlaylist.push(track);
    let clonePlaylistShell = playlists;
    clonePlaylistShell.splice(selectedPlaylist, 1, clonePlaylist);


    setPlaylists();
  }

  return (
    <div className="App">
      <Playlist playlistInfo={playlists[selectedPlaylist]}/>
      <SearchBar />
      <SearchResults searchReturns={testTracks}/>
    </div>
  );
}

export default App;
