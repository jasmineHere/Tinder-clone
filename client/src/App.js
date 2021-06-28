import React from "react";
import './App.css';
import Header from "./header";
import TinderCards from "./TinderCard";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
