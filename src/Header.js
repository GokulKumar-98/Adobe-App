import './Header.css';
import SearchBar from './components/SearchBar.js';
import Profile from './components/Profile';
import HeaderMenu from './components/HeaderMenu';
import React, { createContext, useState } from 'react';

export let SearchBarFocus = React.createContext();
const Header = () => {
  const [vis, setvis] = useState(0);

  return (
    <div className="header-menu">
      <div className="menu-circle"></div>
      <SearchBarFocus.Provider value={{ vis, setvis }}>
        <HeaderMenu></HeaderMenu>
        <SearchBar></SearchBar>
        <Profile></Profile>
      </SearchBarFocus.Provider>
    </div>
  );
};
export default Header;
