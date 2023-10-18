import React, {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import './App.css';

import { Playlist } from './modules/playlist';
import { SearchBar } from './modules/searchBar';
import { SearchResults } from './modules/searchResults';

//Generate unique ID's for playlista and tracks

//Hardcodes for testing 
let testTracks = 
[
  {title: "I see Fire", artist: "Ed Sheeran", album: "The Hobbit Soundtrack", genre: "Folk", id: uuidv4()}, 
  {title: "Fearless", artist: "Taylor Swift", album: "Fearless", genre: "Country", id: uuidv4()}, 
  {title: "Fast Car", artist: "Tracy Chapman", album: "Tracy Chapman", genre: "Folk Rock", id: uuidv4()}, 
  {title: "A case of you", artist: "Joni Mitchell", album: "Blue", genre: "Folk", id: uuidv4()}, 
  {title: "Home", artist: "Gabriel Aplin", album: "Home", genre: "folk", id: uuidv4()}, 
  {title: "", artist: "", album: "", genre: "", id: uuidv4()}, 
  {title: "", artist: "", album: "", genre: "", id: uuidv4()}
]

let testPlaylist = 
{
  id: uuidv4(),
  playlistName: "Nananana",
  tracks: [
    {title: "A case of you", artist: "Joni Mitchell", album: "Blue", genre: "Folk", id: uuidv4()}, 
    {title: "Home", artist: "Gabriel Aplin", album: "Home", genre: "folk", id: uuidv4()}
  ]
}



//App
function App() 
{
  //State Declarations
  let [playlists, setPlaylists] = useState([testPlaylist]);
  let [selectedPlaylist, setSelectedPlaylist] = useState(0);

  //Function Declarations
  //console.log(testPlaylist.ID)

  return (
    <div className="App">
      <Playlist playlistInfo={playlists[selectedPlaylist]} setPlaylists={setPlaylists} playlists={playlists} selectedPlaylist={selectedPlaylist}/>
      <SearchBar />
      <SearchResults searchReturns={testTracks} setPlaylists={setPlaylists} playlists={playlists} selectedPlaylist={selectedPlaylist}/>
    </div>
  );
}

export default App;
