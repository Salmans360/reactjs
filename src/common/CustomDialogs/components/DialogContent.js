import React from 'react';

import clsx from 'clsx';
import { Grid } from '@mui/material';

import '../index.scss';

const DialogContent = ({ children, mainStyles, displayCenter }) => {
  return (
    <Grid className={clsx(mainStyles, 'dialog__content')} container>
      <Grid
        item
        xs={12}
        className={clsx(displayCenter, 'dialog__content__inner')}
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default DialogContent;
