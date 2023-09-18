import React from 'react';
import './App.css';

import { SearchBar } from './modules/searchBar';
import { Playlist } from './modules/playlist';

//Hardcodes for testing 
let tracks = 
[
  {title: "I see Fire", artist: "Ed Sheeran", album: "The Hobbit Soundtrack", genre: "Folk", id:1}, 
  {title: "Fearless", artist: "Taylor Swift", album: "Fearless", genre: "Country", id:2}, 
  {title: "Fast Car", artist: "Tracy Chapman", album: "Tracy Chapman", genre: "Folk Rock", id:3}, 
  {title: "A case of you", artist: "Joni Mitchell", album: "Blue", genre: "Folk", id:4}, 
  {title: "Home", artist: "Gabriel Aplin", album: "Home", genre: "folk", id:5}, 
  {title: "", artist: "", album: "", genre: ""}, 
  {title: "", artist: "", album: "", genre: ""}
]

//State Declarations

//App
function App() {
  return (
    <div className="App">
      <Playlist playlistInfo={tracks}/>
      <SearchBar />
    </div>
  );
}

export default App;
