import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <img className="header__logo"
                    src="https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_light.svg?cache=72a5d9c" />
            </div>
            <div className="header__input">
                <input type="text" placeholder="Search" />
                <SearchIcon className="header__searchInputButton"/>
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar alt="Sandesh Mankar" src="https://miro.medium.com/max/3150/2*fQO45CfgZstbBjeHxeSxHA.jpeg"></Avatar>
            </div>

        </div>
    )
}
export default Header