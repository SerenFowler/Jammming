import React, {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import './App.css';

import { Playlist } from './modules/playlist';
import { SearchBar } from './modules/searchBar';
import { SearchResults } from './modules/searchResults';

//Get API key from spotify
const clientId = '66d9d5b9c29b4215bfd7adc0f269236c';
const clientSecret = 'f0ac6e1b071d4ac286745020e2d8b4b4';

//Hardcodes for testing 
let testTracks = 
[
  {title: "I see Fire", artist: "Ed Sheeran", album: "The Hobbit Soundtrack", genre: "Folk", id: uuidv4(), uri: ""}, 
  {title: "Fearless", artist: "Taylor Swift", album: "Fearless", genre: "Country", id: uuidv4(), uri: ""}, 
  {title: "Fast Car", artist: "Tracy Chapman", album: "Tracy Chapman", genre: "Folk Rock", id: uuidv4(), uri: ""}, 
  {title: "A case of you", artist: "Joni Mitchell", album: "Blue", genre: "Folk", id: uuidv4(), uri: ""}, 
  {title: "Home", artist: "Gabriel Aplin", album: "Home", genre: "folk", id: uuidv4(), uri: ""}, 
  {title: "", artist: "", album: "", genre: "", id: uuidv4(), uri: ""}, 
  {title: "", artist: "", album: "", genre: "", id: uuidv4(), uri: ""}
]

let testPlaylist = 
{
  id: uuidv4(),
  playlistName: "Nananana",
  tracks: [
    {title: "A case of you", artist: "Joni Mitchell", album: "Blue", genre: "Folk", id: uuidv4(), uri: "spotify:track:1YOWFIWuYJFX62Ufuh1KlN"}, 
    {title: "Home", artist: "Gabriel Aplin", album: "Home", genre: "folk", id: uuidv4(), uri: "spotify:track:0OwoAzOM3ULaLoiYpC5axn"}
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
