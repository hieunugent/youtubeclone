import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar  } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header({darkmodestate}) {
  const [inputSearch, setInputSearch] = useState("");
 

   
  return (
    <div className={`header ${darkmodestate.mode==='dark' && "header__dark"}`}>
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://vignette.wikia.nocookie.net/logopedia/images/9/90/YouTube_logo_2005.svg/revision/latest/scale-to-width-down/340?cb=20160807125041"
            alt="youtubellogo"
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
          className="header__icon"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputBtn" />
        </Link>
      </div>
      <div className="header__icons">
      

        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar alt="Henry" src="/adas/aver/aas.js" />
      </div>
    </div>
  );
}

export default Header;
