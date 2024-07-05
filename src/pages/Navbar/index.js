import React from 'react';
import { Typography, Stack, Avatar } from '@mui/material';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { makeStyles } from '@mui/styles';

import UserDropdown from './UserDropdown';
import Button from '../../common/Button';
import Style from './style';

import { UseAuth } from '../../components/Auth/Auth';

const Styles = makeStyles((theme) => Style(theme));

export default function index() {
  const auth = UseAuth();
  const classes = Styles();

  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      py={1.2}
      px={1.5}
      sx={{
        boxShadow: 'inset 0 0 0 2000px rgba(31, 6, 62, 0.6)',
        backgroundColor: 'var(--color-grey)',
      }}
    >
      <Typography variant='h4' color='primary.light'>
        Dashboard
      </Typography>

      <Stack direction='row' alignItems='center'>
        <div className={classes.ownerInfo}>
          <Avatar />
          <div className='ownerName'>
            <h5>john Doe</h5>
          </div>
        </div>
        <UserDropdown classes={classes} tokenData='' />
      </Stack>
    </Stack>
  );
}
