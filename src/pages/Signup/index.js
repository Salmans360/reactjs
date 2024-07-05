import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import {
  Grid,
  Typography,
  Link,
  InputAdornment,
  IconButton,
  LinearProgress,
  FormControlLabel,
  Checkbox,
  Avatar,
  AvatarGroup,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Style from './style';
import Button from '../../common/Button';
// import { signUp } from '../../actions/Auth';
import TextField from '../../common/TextField';
import PhoneInput from '../../common/PhoneInput';
// import { LogoWhite } from '../../assets/constants';
import validateField from '../../utils/formValidation';
import background from '../../assets/images/SignupBg.png';
import passwordValidation from '../../utils/passwordValidation';

const Styles = makeStyles((theme) => Style(theme));

export default function Signup() {
  const classes = Styles();
  const navigate = useNavigate();
  const userToken = localStorage.getItem('user-token');

  const [progress, setProgress] = React.useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [fieldVals, setFieldVals] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });
  const [checked, setCheck] = useState(false);

  useEffect(() => {
    // if token exist then user will not go to signIn page
    if (userToken && userToken?.userId) {
      navigate('/pos');
    }
  }, [userToken]);

  // Password HandleChange
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // password progress
  const calculatingProgress = (errors) => {
    let progress = 0;
    if (errors?.passMin) {
      progress += 25;
    }
    if (errors?.passDigit) {
      progress += 25;
    }
    if (errors?.passCaps) {
      progress += 25;
    }
    if (errors?.passSymbol) {
      progress += 25;
    }
    setProgress(progress);
  };

  const handleChanges = (event) => {
    const { name, value } = event?.target;

    if (name === 'password') {
      // just for progress calculations
      const errors = passwordValidation(value);
      calculatingProgress(errors);
    }

    setFieldVals({ ...fieldVals, [name]: value });
  };

  const handleChangeCheckBox = (e) => {
    const check = e.target.checked;
    setCheck(check);
  };

  const onCreateAcc = () => {
    const errors = validateField(fieldVals);
    setFieldErrors({ ...fieldErrors, ...errors });
    if (
      !errors?.firstName &&
      !errors?.lastName &&
      !errors?.phone &&
      !errors?.password
    ) {
      // signUp(fieldVals);
    }
  };

  return (
    <>
      <Grid
        container
        component='main'
        className={clsx(classes.signin__container, 'h-100')}
        // style={{ backgroundImage: `url(${background})` }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          className={clsx(classes.form__container, 'border-square')}
        >
          <Typography variant='h2' color='disabled.black'>
            Sign Up
          </Typography>
          <Typography variant='mainLabel' className='d-flex' pt={2} pb={4}>
            Already have a account?
            <Link
              href='/signin'
              underline='none'
              color='secondary'
              sx={{ ml: 1 }}
            >
              Sign In
            </Link>
          </Typography>
          <div className={clsx('space__bw w-100', classes.fields__space)}>
            <TextField
              placeholder='Enter First Name'
              margin='dense'
              label='First Name'
              variant='outlined'
              name='firstName'
              helperText={fieldErrors?.firstName}
              value={fieldVals?.firstName}
              autoComplete={false}
              onChange={(e) => handleChanges(e)}
            />
            <TextField
              placeholder='Enter Last Name'
              margin='dense'
              label='Last Name'
              variant='outlined'
              name='lastName'
              helperText={fieldErrors?.lastName}
              value={fieldVals?.lastName}
              autoComplete={false}
              onChange={(e) => handleChanges(e)}
            />
          </div>
          <br />
          <div className={clsx('space__bw w-100', classes.fields__space)}>
            <TextField
              placeholder='Enter Email Address'
              margin='dense'
              label='Email Address*'
              variant='outlined'
              name='email'
              helperText={fieldErrors?.email}
              autoComplete={false}
              value={fieldVals?.email}
              onChange={(e) => handleChanges(e)}
            />
            <PhoneInput
              label='Phone Number*'
              name='phone'
              value={fieldVals?.phone}
              helperText={fieldErrors?.phone}
              onChange={(value, data, event, formattedValue) =>
                handleChanges({
                  target: {
                    name: 'phone',
                    value: formattedValue,
                  },
                })
              }
            />
          </div>
          <br />
          <TextField
            placeholder='Enter Password'
            margin='dense'
            label='Password*'
            autoComplete={false}
            helperText={fieldErrors?.password}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            type={showPassword ? 'text' : 'password'}
            name='password'
            value={fieldVals?.password}
            onChange={(e) => handleChanges(e)}
          />
          <div
            className={clsx(
              classes.linear__progress,
              progress === 50
                ? classes.linear__progress__orange
                : progress === 75
                ? classes.linear__progress__green
                : progress === 100
                ? classes.linear__progress__success
                : classes.linear__progress,
            )}
          >
            <LinearProgress variant='determinate' value={progress} />
            <Typography variant='labelSmall' color='disabled.light'>
              {progress === 100
                ? 'Strong Password'
                : progress === 75
                ? 'Good Password'
                : progress === 50
                ? 'Normal Password'
                : 'Weak Password'}
            </Typography>
          </div>
          <br />
          <FormControlLabel
            className={classes.checkbox}
            control={
              <Checkbox
                defaultChecked
                checked={checked}
                color='success'
                onChange={handleChangeCheckBox}
              />
            }
            label='By creating an account, I agree that I have read and accepted the Terms of Use and Privacy Policy.'
          />
          <br />
          <br />
          <Button
            className='w-100'
            color='secondary'
            title='Create Account'
            variant='contained'
            width='100%'
            height='48px'
            disabled={!checked}
            onClick={onCreateAcc}
          />
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

            <div className={classes.py__2}></div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
