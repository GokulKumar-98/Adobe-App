import React from 'react';
import ReactDOM from 'react-dom';
import { Box } from '@mui/system';
import Header from './Header';
import './index.css';
import SideMenu from './components/SideMenu.js';
import ContentHeader from './components/ContentHeader';
import MaincontentHead from './components/MaincontentHead';
import ContentSection from './components/ContentSection';

const App = () => {
  return (
    <>
      <div className="app">
        <Header></Header>
        <div className="wrapper">
          <SideMenu></SideMenu>
          <div className="main-content">
            <ContentHeader></ContentHeader>
            <div className="content-wrap">
              <MaincontentHead></MaincontentHead>
              <ContentSection></ContentSection>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
