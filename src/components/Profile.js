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
      <div className="llc">
        <span className="span-num">3</span>
        <NotificationsIcon
          sx={{ m: 0 }}
          className="not-icon"
        ></NotificationsIcon>
      </div>
      <CloudIcon className="cld-icon"></CloudIcon>
      <AccountBoxIcon className="acc-icon"></AccountBoxIcon>
    </div>
  );
}

export default React.memo(Profile);
