import React from 'react';
import './SideMenu.css';
import SideWrapper from './SideWrapper';
import AppsIcon from '@mui/icons-material/Apps';
import UpdateIcon from '@mui/icons-material/Update';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CategoryIcon from '@mui/icons-material/Category';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import BrushIcon from '@mui/icons-material/Brush';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import { Icon } from '@mui/material';
import port from './icons/Portf.svg';
import behance from './icons/behance.svg';
import stock from './icons/stock1.svg';
import SchoolIcon from '@mui/icons-material/School';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function SideMenu() {
  return (
    <div className="leftside">
      <SideWrapper
        value={{
          title: 'Apps',
          data: [
            { text: 'All Apps', icon: <AppsIcon className={'logo'} /> },
            { text: 'Updates', icon: <UpdateIcon className={'logo'} /> },
          ],
        }}
      />
      <SideWrapper
        value={{
          title: 'Categories',
          data: [
            {
              text: 'Photography',
              icon: <PhotoCameraIcon className={'logo'} />,
            },
            {
              text: 'Graphic Design',
              icon: <CategoryIcon className={'logo'} />,
            },
            { text: 'Video', icon: <SubscriptionsIcon className={'logo'} /> },
            { text: 'Illustrations', icon: <BrushIcon className={'logo'} /> },
            { text: 'UI/UX', icon: <DisplaySettingsIcon className={'logo'} /> },
            { text: '3D/AR', icon: <ViewInArIcon className={'logo'} /> },
          ],
        }}
      />
      <SideWrapper
        value={{
          title: 'Fonts',
          data: [
            {
              text: 'Manage Fonts',
              icon: <TextFieldsIcon className={'logo'} />,
            },
          ],
        }}
      />
      <SideWrapper
        value={{
          title: 'Resource Links',
          data: [
            { text: 'Stock', icon: <img src={stock} className={'logo'} /> },
            { text: 'Tutorials', icon: <SchoolIcon className={'logo'} /> },
            { text: 'Portfolio', icon: <img src={port} className={'logo'} /> },
            { text: 'Behance', icon: <img src={behance} className={'logo'} /> },
            {
              text: 'Social Forum',
              icon: <QuestionAnswerIcon className={'logo'} />,
            },
            {
              text: 'Contact Us',
              icon: <ContactMailIcon className={'logo'} />,
            },
          ],
        }}
      />
    </div>
  );
}

export default SideMenu;
