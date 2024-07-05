import React, { memo, useState, useEffect } from 'react';
import ReactDom from 'react-dom';

import clsx from 'clsx';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import './index.scss';
import Style from './style';

const Styles = makeStyles((theme) => Style(theme));

const SingleDialog = ({ toggle, children, styles }) => {
  const classes = Styles();
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  }, []);

  useEffect(() => {
    if (toggle) {
      document.body.classList.add('portal');
    } else {
      document.body.classList.remove('portal');
    }
  }, [toggle]);

  return domReady
    ? ReactDom.createPortal(
        <Grid
          xs={12}
          className={clsx(
            classes.left__dialog,
            toggle && classes.toggleDisplay,
          )}
        >
          <Grid
            container
            item
            xs={12}
            className={clsx(classes.dialog__box__container, styles)}
          >
            <Grid className={classes.dialog__box}>{children}</Grid>
          </Grid>
        </Grid>,
        document.getElementById('portal'),
      )
    : null;
};
export default memo(SingleDialog);
