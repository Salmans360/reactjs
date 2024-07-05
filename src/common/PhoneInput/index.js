import React from 'react';

import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

import Style from './style';

const Styles = makeStyles((theme) => Style(theme));

export default function index({
  label,
  name,
  onChange,
  value,
  helperText,
  disabled,
}) {
  const classes = Styles();
  return (
    <div
      className={clsx(
        classes.phone__input,
        'd-flex flex-column control-width',
        helperText && classes.error__boundry,
      )}
    >
      <Typography htmlFor={name} variant='labelSmall' color='disabled.light'>
        {label}
      </Typography>
      <PhoneInput
        disabled={disabled}
        country={'us'}
        value={value}
        onChange={onChange}
        autoFormat
        placeholder='+1'
      />
      <Typography
        variant='helperText'
        color='error'
        sx={{ m: '4px 14px 0 14px' }}
      >
        {helperText ? helperText : 'ㅤ'}
      </Typography>
    </div>
  );
}
