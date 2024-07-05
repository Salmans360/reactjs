import React from 'react';
import { makeStyles } from '@mui/styles';

import Style from './style';
import UserListing from '../../components/UserListing/UserListing';

import Navbar from '../Navbar';

const Styles = makeStyles((theme) => Style(theme));

const Dashboard = () => {
  const classes = Styles();
  return (
    <>
      <Navbar />

      <div className={classes.dashboard__container}>
        <UserListing />
      </div>
    </>
  );
};
export default Dashboard;
