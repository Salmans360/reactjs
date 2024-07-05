const Style = (theme) => ({
  add__logo: {
    paddingBottom: '2.5rem',
    '& .upload__icon': {
      height: '76px',
      width: '76px',
      backgroundColor: '#f0e9f9',
      padding: '0 !important',
    },
    '& .pl__1': {
      paddingLeft: '1.5rem',
    },
  },
  fields__space: {
    '& .control-width': {
      width: '24%',
      '& .react-tel-input': {
        // marginTop: ' !important',
        marginBottom: '3px !important',
      },
    },
  },
});
export default Style;
