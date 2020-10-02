import React, { useEffect, useState } from "react";
import Header from "./Header";
import SideBar from "./Sidebar";
import "./App.css";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchPage from "./SearchPage";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { FormControlLabel } from "@material-ui/core";
import Optionmode from "@material-ui/core/Switch";
import storage from "local-storage-fallback";

const GlobalStyle = createGlobalStyle`
body{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#111" : "#FFF"};
  color: ${(props) => (props.theme.mode === "dark" ? "#FFF" : "#111")};
}`;


function getInitialTheme(){
  const savedTheme = storage.getItem('theme');
  return savedTheme ? JSON.parse(savedTheme) :{mode:'light'};
}
function App() {
  const [darkmodestate, setDarkmode] = useState(getInitialTheme);
 useEffect(() => {
   storage.setItem("theme", JSON.stringify(darkmodestate));
 }, [darkmodestate]);
  return (
    <ThemeProvider theme={darkmodestate}>
      <>
        <GlobalStyle />
        <div className="app">
          <Router>
            <Header darkmodestate={darkmodestate} />
            <Switch>
              <Route path="/search/:searchTerm">
                <div className="app__page">
                  <SideBar />
                  <SearchPage />
                </div>
              </Route>
              <Route path="/">
                <div className="app__page">
                  <SideBar />
                  <RecommendedVideos />
                </div>
              </Route>
            </Switch>
          </Router>
          {/* <h1> Youtube clone </h1> */}
          <FormControlLabel
            className="app__thememode"
            control={
              <Optionmode
                
                onChange={(e) =>
                  setDarkmode(
                    darkmodestate.mode === "dark"
                      ? { mode: "light" }
                      : { mode: "dark" }
                  )
                }
                name="darkmode"
                color="default"
              />
            }
            label="Dark-mode"
          />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
