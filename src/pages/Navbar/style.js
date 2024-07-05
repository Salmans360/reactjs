const Style = (theme) => ({
  dashboard__container: {
    background: '#F4F8FF',
    height: 'calc(100vh - 72px)',
  },
  cursor__pointer: {
    cursor: 'pointer',
    marginLeft: '10px',
    width: '50%',
  },
  root__dropdown__main: {
    width: '14rem',
    position: 'absolute',
    zIndex: '999',
    top: '90px',
    right: '2%',
    boxShadow: '0 8px 30px rgba(161, 191, 218, 0.16)',
    padding: '8px 25px ',
    borderRadius: '15px',
    background: '#fff',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  dropdown__menu__text: {
    fontWeight: '600',
    fontSize: '13px',
    lineHeight: '16px',
    color: '#6D7D8B',
    padding: '1rem 0',
    cursor: 'pointer',
  },
  ownerInfo: {
    display: 'flex',
    alignItems: 'center',
    '& .ownerName': {
      paddingLeft: '0.5rem',
      alignSelf: 'center',
      '& h5': {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '19px',
        color: '#333333',
      },
      '& p': {
        paddingTop: '0.3rem',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '10px',
        lineHeightt: '12px',
        color: '#828282',
      },
    },
  },
});
export default Style;
