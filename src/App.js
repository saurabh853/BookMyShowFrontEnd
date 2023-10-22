import React from "react";
import "./App.css";
import BookMyShowState from "./Context/BookMyShowState";
import Home from "./Pages/Home";
function App() {
  return (
    <>
      <BookMyShowState>
        <Home />
      </BookMyShowState>
    </>
  )
}

export default App;
