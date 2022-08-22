import React from 'react';
import './HeaderMenu.css';
import { useState, useEffect, useContext } from 'react';
import { useRef } from 'react';
import { SearchBarFocus } from '../Header.js';

function HeaderMenu() {
  const val1 = useContext(SearchBarFocus);

  const [vis, setvis] = useState(true);
  const [click, setClick] = useState('Apps');
  const onclick = (e) => {
    e.preventDefault();
    setClick(e.target.text);
  };

  return (
    <div className={!val1.vis ? 'menu-links' : 'hide'}>
      <a
        href=""
        onClick={onclick}
        className={click === 'Apps' ? 'entered' : 'left'}
      >
        Apps
      </a>
      <a
        href=""
        onClick={onclick}
        className={click === 'Your Work' ? 'entered' : 'left'}
      >
        Your Work
      </a>
      <a
        href=""
        onClick={onclick}
        className={click === 'Discover' ? 'entered' : 'left'}
        id="last"
      >
        Discover
      </a>
      <a
        href=""
        onClick={onclick}
        className={click === 'Market' ? 'entered' : 'left'}
        id="last"
      >
        Market
      </a>
    </div>
  );
}

export default React.memo(HeaderMenu);
