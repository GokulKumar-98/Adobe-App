import React from 'react';
import './ContentSection.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ae from './icons/after-effects.png';
import ils from './icons/illustrator.png';
import ps from './icons/photoshop.png';
import pr from './icons/premiere.png';
import ind from './icons/indesign.png';

function ContentSection() {
  return (
    <>
      <div className="content-div">
        <div className="content-title">Installed</div>
        <div className="box-holder">
          <Sectionbox
            value={{ icon: <img src={ps} />, name: 'Photoshop', update: true }}
          ></Sectionbox>
          <Sectionbox
            value={{
              icon: <img src={ils} />,
              name: 'Illustrator',
              update: false,
            }}
          ></Sectionbox>
          <Sectionbox
            value={{
              icon: <img src={ae} />,
              name: 'After Effects',
              update: true,
            }}
          ></Sectionbox>
        </div>
      </div>
      <div className="content-div">
        <div className="content-title">Apps In Your Plan</div>

        <div className="card-wrap">
          <Sectioncard
            value={{
              icon: <img src={pr} />,
              name: 'Premiere Pro',
              text: 'Edit, master and create fully proffesional videos',
            }}
          />
          <Sectioncard
            value={{
              icon: <img src={ind} />,
              name: 'InDesign',
              text: 'Design and publish great projects & mockups',
            }}
          />
          <Sectioncard
            value={{
              icon: <img src={ae} />,
              name: 'After Efects',
              text: 'Industry Standart motion graphics & visual effects',
            }}
          />
        </div>
      </div>
    </>
  );
}

const Sectionbox = ({ value }) => {
  return (
    <div className="content-box">
      <div className="products">
        {value.icon}
        {value.name}
      </div>
      <span className="updates">
        <span
          className={value.update ? 'dot circle-green' : 'dot circle-blue'}
        ></span>
        {value.update ? 'Updated' : 'Update Available'}
      </span>
      <div className="content-button">
        <button className={value.update ? 'btn-cnt' : 'btn-cnt active'}>
          {value.update ? 'Open' : 'Update App'}
        </button>
        <MoreHorizIcon sx={{ color: 'white' }}></MoreHorizIcon>
      </div>
    </div>
  );
};

const Sectioncard = ({ value }) => {
  return (
    <div className="app-card">
      <div className="card-products">
        {value.icon}
        {value.name}
      </div>
      <div className="card-subtext">{value.text}</div>
      <div className="card-btn">
        <button className="btn">Update</button>
        <MoreHorizIcon sx={{ color: 'white' }}></MoreHorizIcon>
      </div>
    </div>
  );
};

export default React.memo(ContentSection);
