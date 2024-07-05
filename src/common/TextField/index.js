import React from 'react';

import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { TextField, Typography } from '@mui/material';

import Style from './style';

const Styles = makeStyles((theme) => Style(theme));

export default function index({
  name,
  type,
  label,
  value,
  disabled,
  margin,
  height,
  variant,
  maxRows,
  onChange,
  multiline,
  tableInput,
  helperText,
  placeholder,
  noHelperText,
  endAdornment,
  startAdornment,
}) {
  const classes = Styles();
  return (
    <div className='d-flex flex-column control-width'>
      {label && (
        <Typography htmlFor={name} variant='labelSmall' color='disabled.light'>
          {label}
        </Typography>
      )}
      <TextField
        name={name}
        type={type}
        hiddenLabel
        size='small'
        value={value}
        disabled={disabled}
        margin={margin}
        variant={variant}
        rows={maxRows}
        multiline={multiline}
        placeholder={placeholder}
        error={helperText?.length > 0}
        helperText={helperText ? helperText : noHelperText ? null : ' '}
        InputProps={{
          // disableUnderline: true,
          endAdornment: endAdornment,
          startAdornment: startAdornment,
        }}
        sx={{
          border: 'none',
          '& fieldset': { border: helperText ? '1px solid #ff3636' : 'none' },
        }}
        className={clsx(
          classes.style__main,
          height && classes.custom__height,
          tableInput && classes.table__input,
          multiline && classes.multiline__input,
        )}
        onChange={onChange}
      />
    </div>
  );
}
