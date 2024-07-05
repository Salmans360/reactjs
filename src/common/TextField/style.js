const Style = () => ({
  style__main: {
    '& .MuiInputBase-root': {
      background: '#F2F7FA',
      borderRadius: '36px',
      height: '48px',
      border: '0 !important',
      '& input': {
        fontSize: '14px',
        lineHeight: '19px',
        fontWeight: '500',
        color: 'var(--color-disabled-hot)',
      },
      '&:before': {
        border: 0,
      },
      '&:after': {
        border: '0.25px solid #6921c4',
      },
    },
  },
  custom__height: {
    '& .MuiInputBase-root': {
      height: '40px',
    },
  },

  table__input: {
    '& .MuiInputBase-root': {
      background: '#F4F7FB',
      borderRadius: '5px',
      height: '32px',
    },
  },
  multiline__input: {
    '& .MuiInputBase-root': {
      borderRadius: '10px',
      height: 'max-content',
    },
  },
});
export default Style;
