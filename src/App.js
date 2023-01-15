import React from "react";
import NavBar from "./Component/NavBar/NavBar";
import {original,action} from './urls'
import './App.css'
import Banner from "./Component/Banner/Banner";
import RowPost from "./Component/RowPost/RowPost";



function App() {
  

  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={original} title='Netflix Originals'/>
    <RowPost url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
