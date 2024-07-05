import { IconButton } from '@mui/material';
import React from 'react';

export default function index({
  ariaLabel,
  color = 'var(--color-primary)',
  Icon,
  variant,
  background,
  disabled,
  height,
  width,
  padding,
  onClick,
}) {
  return (
    <IconButton
      aria-label={ariaLabel}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      sx={{
        color,
        backgroundColor: background,
        height: height ? height : '40px',
        width: width ? width : '40px',
        padding: padding && padding,
      }}
    >
      {Icon}
    </IconButton>
  );
}
