import React from 'react';

import clsx from 'clsx';
import { Grid } from '@mui/material';

import '../index.scss';

const DialogActions = ({ children, right }) => {
  return (
    <Grid className='dialog__actions' container>
      <div
        className={clsx(
          right
            ? 'dialog__actions__container__right'
            : 'dialog__actions__container',
        )}
      >
        {children}
      </div>
    </Grid>
  );
};

export default DialogActions;
