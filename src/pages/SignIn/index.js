import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useNavigate, useLocation } from 'react-router-dom';

import {
  Grid,
  Typography,
  InputAdornment,
  IconButton,
  Box,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

import { UseAuth } from '../../components/Auth/Auth';

import Style from './style';
import Button from '../../common/Button';
import TextField from '../../common/TextField';
// import { LogoWhite } from '../../assets/constants';
import { signInApi as signIn } from '../../apis/Auth';
import { Toast } from '../../components/Toast';

const Styles = makeStyles((theme) => Style(theme));

export default function SignIn() {
  const classes = Styles();

  const navigate = useNavigate();
  const location = useLocation();
  const auth = UseAuth();
  const redirectPath = location.state?.path || '/';

  const [fieldVals, setFieldVals] = useState({
    email: '',
    password: '',
    type: 99,
  });
  const [showPassword, setShowPassword] = useState(false);

  const signInLoading = false;

  const signInData = '';

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChanges = (event) => {
    const { name, value } = event?.target;
    setFieldVals({ ...fieldVals, [name]: value?.trimStart() || '' });
  };

  // API - Signin
  const onSignIn = async () => {
    if (fieldVals?.email && fieldVals?.password) {
      try {
        const { data } = await signIn(fieldVals);

        if (data) {
          auth.login(data?.token || 'success');
          navigate(redirectPath, { replace: true });
        }
      } catch (error) {
        Toast('error', error.message);
      }
    }
  };

  return (
    <>
      <Grid
        container
        component='main'
        className={clsx(classes.signin__container, 'h-100')}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          className={clsx(classes.form__container, 'border-square')}
        >
          <Typography variant='h2' color='disabled.black'>
            Sign In
          </Typography>
          <br />
          <br />
          <TextField
            placeholder='Enter Email Address'
            margin='dense'
            label='Email Address'
            variant='outlined'
            name='email'
            value={fieldVals?.email}
            onChange={(e) => handleChanges(e)}
          />
          <br />
          <TextField
            placeholder='Enter Password'
            margin='dense'
            label='Password'
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={() => setShowPassword((show) => !show)}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            value={fieldVals?.password}
            name='password'
            onChange={(e) => handleChanges(e)}
            type={showPassword ? 'text' : 'password'}
            onKeyDown={(e) => e.key === 'Enter' && onSignIn()}
          />
          <br />
          <br />
          <Button
            className='w-100'
            color='secondary'
            title='Sign In'
            variant='contained'
            width='100%'
            height='48px'
            disabled={
              !fieldVals?.email || !fieldVals?.password || signInLoading
            }
            onClick={() => onSignIn()}
            loading={signInLoading}
            loadingColor='primary'
          />
          <br />
          <br />
          <Typography variant='body2' color='copyRight.primary' align='center'>
            <Box className={classes.helper_text}>
              Don’t have an account?{' '}
              <Link className='colorChanger' role='button' to='/register'>
                Register Now!
              </Link>
            </Box>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          className={clsx('space__bw', classes.column__bw)}
        >
          <div>
            {/* <LogoWhite className={classes.logo} /> */}
            <Typography variant='h1' color='primary.light' pt={2}>
              Online Tickting System
            </Typography>

            <div className={classes.py__2}>
              {/* <img src='https://www.pngfind.com/pngs/m/243-2439504_customer-support-icon-technical-support-hd-png-download.png' /> */}
              {/* <img
                alt='logo'
                width='60%'
                src='https://img.icons8.com/pastel-glyph/512/customer-support.png'
              /> */}
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
