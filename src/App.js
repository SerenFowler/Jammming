import React from 'react';
import './App.css';

import { SearchBar } from './modules/searchBar';

//Hardcodes for testing 
let tracks = 
[
  {title: "I see Fire", artist: "Ed Sheeran", album: "The Hobbit Soundtrack", genre: "Folk"}, 
  {title: "Fearless", artist: "Taylor Swift", album: "Fearless", genre: "Country"}, 
  {title: "Fast Car", artist: "Tracy Chapman", album: "Tracy Chapman", genre: "Folk Rock"}, 
  {title: "A case of you", artist: "Joni Mitchell", album: "Blue", genre: "Folk"}, 
  {title: "Home", artist: "Gabriel Aplin", album: "Home", genre: "folk"}, 
  {title: "", artist: "", album: "", genre: ""}, 
  {title: "", artist: "", album: "", genre: ""}
]

//State Declarations

//App
function App() {
  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;
