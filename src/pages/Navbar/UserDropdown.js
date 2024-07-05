import React, { useState } from 'react';
import { ClickAwayListener, Grid, Typography, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as OpenNavDrop } from '../../assets/images/openDropdownNav.svg';
import { ReactComponent as CloseNavDrop } from '../../assets/images/closeDropdownNav.svg';

export default function UserDropdown({ tokenData, classes }) {
  const [dropdownOpen, setDropDown] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/signin';
  };
  return (
    <ClickAwayListener
      onClickAway={() => {
        setDropDown(false);
      }}
    >
      <div>
        {dropdownOpen ? (
          <OpenNavDrop
            className={classes.cursor__pointer}
            onClick={() => {
              setDropDown(!dropdownOpen);
            }}
          />
        ) : (
          <CloseNavDrop
            className={classes.cursor__pointer}
            onClick={() => {
              setDropDown(!dropdownOpen);
            }}
          />
        )}
        {dropdownOpen && (
          <Grid className={classes.root__dropdown__main} conatiner>
            <Typography
              className={classes.dropdown__menu__text}
              onClick={() => {
                navigate('/user-profile');
              }}
            >
              <span className={classes.dropdown__menu__text}>
                User Settings
              </span>
            </Typography>
            <Divider />

            <Typography
              className={classes.dropdown__menu__text}
              onClick={handleLogout}
            >
              Sign Out
            </Typography>
          </Grid>
        )}
      </div>
    </ClickAwayListener>
  );
}
