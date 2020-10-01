import React from "react";
import Header from "./Header";
import SideBar from "./Sidebar";
import "./App.css";
import RecommendedVideos from "./RecommendedVideos";

function App() {
  return (
    <div className="app">
      {/* <h1> Youtube clone </h1> */}
      <Header />
      <div className="app__page">
        <SideBar />
        <RecommendedVideos/>
       
      </div>
    </div>
  );
}

export default App;
