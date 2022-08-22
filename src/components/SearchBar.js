import React, { useContext } from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import { SearchBarFocus } from '../Header.js';

const divstyles = {};

export default React.memo(function SearchBar() {
  let { vis, setvis } = useContext(SearchBarFocus);

  const inputClick = () => {
    setvis(1);
  };

  const clickOut = () => {
    setvis(0);
  };

  return (
    <div style={divstyles} className={!vis ? 'inputBar' : 'wide'}>
      <SearchIcon className="sIcon"></SearchIcon>
      <input
        className={'inp'}
        placeholder="Search"
        onFocus={inputClick}
        onBlur={clickOut}
        type="text"
      ></input>
      <span className="focus-border"></span>
    </div>
  );
});
