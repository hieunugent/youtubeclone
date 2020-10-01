import React from 'react'
import "./Header.css"
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from '@material-ui/core';
function Header() {
    return (
      <div className="header">
        <div className="header__left">
          <MenuIcon />
          <img
            className="header__logo"
            src="https://vignette.wikia.nocookie.net/logopedia/images/9/90/YouTube_logo_2005.svg/revision/latest/scale-to-width-down/340?cb=20160807125041"
            alt="youtubellogo"
          />
        </div>
        <div className="header__input">
          <input placeholder="Search" type="text" className="header__icon" />
          <SearchIcon className="header__inputBtn" />
        </div>
        <div className="header__icons">
          <VideoCallIcon className="header__icon"/>
          <AppsIcon className="header__icon"/>
          <NotificationsIcon className="header__icon"/>
          <Avatar alt="Henry" src="/adas/aver/aas.js" />
        </div>
      </div>
    );
    
}

export default Header
