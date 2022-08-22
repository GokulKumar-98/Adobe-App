import React from 'react';
import './MaincontentHead.css';
import Stock from './icons/Portf.svg';

function MaincontentHead() {
  return (
    <div className="content-header">
      <div className="main-context">
        <img
          className="img-st"
          src="https://contributor.stock.adobe.com/static/images/stock_logo_redesigned.f7b23c91d75a892eb4e89a6cc2b59bc8.svg"
        />
        <div className="context-text">
          Grab yourself 10 free images from Adobe Stock in a 30-day free trial
          plan and find perfect image, that will help you with your new project.
        </div>
        <button className="btn">Start Free trial</button>
      </div>
      <img
        className="content-wrapper-img"
        src="https://assets.codepen.io/3364143/glass.png"
        alt=""
      ></img>
    </div>
  );
}

export default MaincontentHead;
