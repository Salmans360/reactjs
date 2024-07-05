import React from 'react';
import { Button } from '@mui/material';
import CircularProgress from '../CircularProgress/index';

export default function index({
  title,
  color,
  width,
  height,
  variant,
  onClick,
  loading,
  disabled,
  startIcon,
  borderRadius,
  loadingColor,
  disableLabelPadding,
  className,
  children,
}) {
  return (
    <Button
      className={className}
      color={color}
      disableElevation
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      startIcon={startIcon}
      sx={{
        width: width,
        borderRadius: borderRadius ? borderRadius : '42px',
        textTransform: 'capitalize',
        height: height,
      }}
    >
      <span
        style={{
          paddingTop: disableLabelPadding ? '0' : startIcon ? '.2rem' : '0',
        }}
      >
        {title}{' '}
        {loading && (
          <CircularProgress color={loadingColor || 'primary'} size={15} />
        )}
      </span>
      {children}
    </Button>
  );
}
