import React from 'react';
import ReactDOM from 'react-dom';
import { Box } from '@mui/system';
import Header from './Header';
import './index.css';
import SideMenu from './components/SideMenu.js';
import ContentHeader from './components/ContentHeader';
import MaincontentHead from './components/MaincontentHead';
import ContentSection from './components/ContentSection';
import bgvideo from './components/video/bgvideo.mp4';
import bgimg from './components/video/bg-img.jpg';

const App = () => {
  return (
    <>
      <div className="video-bg">
        <img src={bgimg}></img>
      </div>
      <div className="MainBox">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            m: 'auto',
            borderRadius: '14px',
            width: '1250px',
            height: '860px',
            bgcolor: 'rgba(16 18 27 / 40%)',
          }}
          className="muibox"
        >
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
        </Box>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
