import React from 'react';

import clsx from 'clsx';
import { Grid } from '@mui/material';

import '../index.scss';

const DialogHeader = ({ children, headerStyle }) => {
  return (
    <Grid container className={clsx(headerStyle, 'dialog__header')}>
      <div className='dialog__header__container'>{children}</div>
    </Grid>
  );
};

export default DialogHeader;
