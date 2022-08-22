import React from 'react';
import './ContentHeader.css';
import { useState } from 'react';
function ContentHeader() {
  const [click, setClick] = useState('Desktop');
  const onclick = (e) => {
    e.preventDefault();
    setClick(e.target.text);
  };

  return (
    <div className="main-header">
      <a className="menu-link">All Apps</a>
      <div className="link-holder">
        <a
          className={click === 'Desktop' ? 'clicked' : 'other-link'}
          onClick={onclick}
        >
          Desktop
        </a>
        <a
          className={click === 'Mobile' ? 'clicked' : 'other-link'}
          onClick={onclick}
        >
          Mobile
        </a>
        <a
          className={click === 'Web' ? 'clicked' : 'other-link'}
          onClick={onclick}
        >
          Web
        </a>
      </div>
    </div>
  );
}

export default React.memo(ContentHeader);
