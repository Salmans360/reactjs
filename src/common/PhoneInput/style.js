const Style = () => ({
  phone__input: {
    '& .react-tel-input': {
      width: '100%',
      height: '48px',
      marginTop: '8px',
      '& input': {
        border: '0',
        width: '100%',
        height: '100%',
        borderRadius: '36px',
        fontSize: '13.5px',
        lineHeight: '19px',
        fontWeight: '600',
        background: '#F2F7FA',
        letterSpacing: 'inherit',
        color: 'var(--color-disabled-hot)',
      },
      '& .flag-dropdown': {
        background: '#F2F7FA',
        borderRadius: '36px 0 0 36px',
        border: '0',
        '& .selected-flag': {
          background: '#F2F7FA',
          borderRadius: '36px 0 0 36px',
        },
      },
    },
  },
  error__boundry: {
    '& .react-tel-input': {
      '& input': {
        border: '1px solid #ff3636',
      },
      '& .flag-dropdown': {
        border: '1px solid #ff3636',
        borderRight: '0',
      },
    },
  },
});
export default Style;
