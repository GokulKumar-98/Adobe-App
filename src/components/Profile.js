import React, { useContext } from 'react';
import './Profile.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CloudIcon from '@mui/icons-material/Cloud';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { SearchBarFocus } from '../Header';

function Profile() {
  const value = useContext(SearchBarFocus);

  return (
    <div className={!value.vis ? 'pfholder' : 'hide'}>
      <div className="llc trn">
        <NotificationsIcon className="not-icon"></NotificationsIcon>
        <span className="span-num">3</span>
      </div>
      <CloudIcon className="cld-icon trn"></CloudIcon>
      <AccountBoxIcon className="acc-icon trn"></AccountBoxIcon>
    </div>
  );
}

export default React.memo(Profile);
