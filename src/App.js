import React, { useEFfect } from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import StarShipData from "./components/StarShipData";
import StarShipList from "./components/StarShipList";
import StarShipListTwo from "./components/StarShipListTwo";

//root api https://swapi.dev/api/
function App() {
  return (
    <div className="App">
      <StarShipListTwo />
    </div>
  );
}

export default App;
