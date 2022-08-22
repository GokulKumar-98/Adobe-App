import React from 'react';
import './SideWrapper.css';

function SideWrapper({ value }) {
  const data = value.data.map((d, index) => (
    <a key={index} className={'title-links'}>
      {d.icon}
      {d.text}
    </a>
  ));

  return (
    <div className="title-wrap">
      <div className="title">{value.title}</div>
      {data}
    </div>
  );
}

export default React.memo(SideWrapper);
